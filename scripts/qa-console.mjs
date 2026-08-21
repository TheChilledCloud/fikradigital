// QA driver: walks every route, collects console errors, exceptions,
// failed network requests, and missing i18n fallback keys (t() returns the key itself).
import { spawn } from 'node:child_process';

const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const port = 9423 + Math.floor(Math.random() * 200);
const profile = `C:/Users/ahmad/AppData/Local/Temp/edge-qa-${port}`;
const edge = spawn(EDGE, [
  '--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
  `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, '--window-size=1440,900',
  'about:blank',
], { stdio: 'ignore' });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getWs() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json`);
      const targets = await res.json();
      const page = targets.find((t) => t.type === 'page');
      if (page) return page.webSocketDebuggerUrl;
    } catch {}
    await sleep(250);
  }
  throw new Error('CDP not available');
}

const ROUTES = ['/', '/work', '/services', '/about', '/contact', '/impressum', '/datenschutz'];
const LANGS = ['', 'de', 'ar'];

const wsUrl = await getWs();
const ws = new WebSocket(wsUrl);
let id = 0;
const pending = new Map();
const send = (method, params = {}) => new Promise((resolve, reject) => {
  const mid = ++id;
  pending.set(mid, { resolve, reject });
  ws.send(JSON.stringify({ id: mid, method, params }));
});

const errors = [];
const failedReq = [];
ws.onmessage = (ev) => {
  const msg = JSON.parse(ev.data);
  if (msg.id && pending.has(msg.id)) {
    const p = pending.get(msg.id);
    pending.delete(msg.id);
    msg.error ? p.reject(new Error(msg.error.message)) : p.resolve(msg.result);
    return;
  }
  if (msg.method === 'Runtime.exceptionThrown') {
    errors.push('EXCEPTION: ' + JSON.stringify(msg.params.exceptionDetails).slice(0, 300));
  }
  if (msg.method === 'Runtime.consoleAPICalled' && ['error', 'assert'].includes(msg.params.type)) {
    const args = msg.params.args.map((a) => a.value ?? a.description ?? '').join(' ');
    errors.push('CONSOLE: ' + args.slice(0, 300));
  }
  if (msg.method === 'Log.entryAdded' && ['error', 'warning'].includes(msg.params.entry.level)) {
    errors.push('LOG(' + msg.params.entry.level + '): ' + (msg.params.entry.text || '').slice(0, 300));
  }
  if (msg.method === 'Network.loadingFailed' && !msg.params.canceled) {
    failedReq.push(msg.params.errorText + ' → ' + msg.params.type);
  }
};

await new Promise((r) => (ws.onopen = r));
await send('Page.enable');
await send('Runtime.enable');
await send('Log.enable');
await send('Network.enable');

let problems = 0;
for (const lang of LANGS) {
  for (const route of ROUTES) {
    const before = errors.length;
    if (lang) {
      await send('Page.navigate', { url: 'http://localhost:4178/' });
      await sleep(1200);
      await send('Runtime.evaluate', { expression: `localStorage.setItem('studio-lang','${lang}')` });
    }
    await send('Page.navigate', { url: 'http://localhost:4178' + route });
    await sleep(2200);
    // scroll to trigger reveals
    await send('Runtime.evaluate', { expression: `
      (async () => {
        const h = document.body.scrollHeight;
        for (let y = 0; y <= h; y += 500) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 25)); }
        window.scrollTo(0, 0);
      })()
    ` });
    await sleep(600);
    const res = await send('Runtime.evaluate', { expression: `({
      title: document.title,
      dir: document.documentElement.dir,
      langAr: document.documentElement.classList.contains('lang-ar'),
      bodyLen: document.body.innerText.length,
      orphanKeys: (document.body.innerText.match(/^[a-z]+\.[a-zA-Z0-9.]+$/gm) || []).slice(0, 5)
    })`, returnByValue: true });
    const info = res.result.value;
    const newErrs = errors.slice(before);
    if (newErrs.length) {
      problems += newErrs.length;
      console.log(`✗ ${route} [${lang || 'en'}] dir=${info.dir} — ${newErrs.length} error(s):`);
      newErrs.forEach((e) => console.log('   ' + e));
    } else {
      console.log(`✓ ${route} [${lang || 'en'}] dir=${info.dir} title="${info.title.slice(0, 50)}" text=${info.bodyLen}`);
    }
    if (info.orphanKeys.length) {
      problems++;
      console.log('   ⚠ orphan i18n keys rendered as text: ' + JSON.stringify(info.orphanKeys));
    }
  }
}

if (failedReq.length) {
  problems += failedReq.length;
  console.log('FAILED REQUESTS:');
  failedReq.forEach((f) => console.log('   ' + f));
}
console.log(problems === 0 ? '\nALL CLEAN — no console errors, no exceptions, no failed requests' : `\n${problems} problem(s) found`);
ws.close();
edge.kill();
process.exit(problems === 0 ? 0 : 1);
