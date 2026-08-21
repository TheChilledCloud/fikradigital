// CDP screenshot driver: real-time waits, localStorage language switching.
// Usage: node cdp-shot.mjs <url> <outfile.png> [lang] [width] [height] [waitMs]
import { spawn } from 'node:child_process';
import fs from 'node:fs';

const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const args = process.argv.slice(2);
const [url, outFile, lang = '', width = '1440', height = '900', waitMs = '4500', scrollY = '0', clickSelector = ''] = args;

const port = 9223 + Math.floor(Math.random() * 200);
const profile = `C:/Users/ahmad/AppData/Local/Temp/edge-cdp-${port}`;

const edge = spawn(EDGE, [
  '--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
  `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, '--window-size=' + width + ',' + height,
  'about:blank',
], { stdio: 'ignore' });

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function getWs() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json`);
      const targets = await res.json();
      const page = targets.find(t => t.type === 'page');
      if (page) return page.webSocketDebuggerUrl;
    } catch { /* not up yet */ }
    await sleep(250);
  }
  throw new Error('CDP not available');
}

(async () => {
  try {
    const wsUrl = await getWs();
    const ws = new WebSocket(wsUrl);
    let id = 0;
    const pending = new Map();
    const send = (method, params = {}) => new Promise((resolve, reject) => {
      const mid = ++id;
      pending.set(mid, { resolve, reject });
      ws.send(JSON.stringify({ id: mid, method, params }));
    });
    ws.onmessage = (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.id && pending.has(msg.id)) {
        const p = pending.get(msg.id);
        pending.delete(msg.id);
        msg.error ? p.reject(new Error(msg.error.message)) : p.resolve(msg.result);
      }
    };
    await new Promise(r => ws.onopen = r);

    await send('Page.enable');
    await send('Runtime.enable');
    await send('Emulation.setDeviceMetricsOverride', {
      width: +width, height: +height, deviceScaleFactor: 1, mobile: false,
    });
    if (lang) {
      // set language preference before navigating
      await send('Page.navigate', { url: 'http://localhost:4178/' });
      await sleep(1500);
      await send('Runtime.evaluate', { expression: `localStorage.setItem('studio-lang','${lang}')` });
    }
    await send('Page.navigate', { url });
    await sleep(+waitMs);
    // force any in-view reveals that need scroll: scroll through page once
    await send('Runtime.evaluate', { expression: `
      (async () => {
        const h = document.body.scrollHeight;
        for (let y = 0; y <= h; y += 400) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 40)); }
        const sel = ${JSON.stringify(scrollY)};
        if (sel.startsWith('S')) {
          const [sIdx, off] = sel.slice(1).split(':');
          const el = document.querySelectorAll('main section')[+sIdx];
          if (el) { el.scrollIntoView({ block: 'start' }); window.scrollBy(0, +off || 0); }
        } else if (sel.startsWith('@')) {
          const el = document.querySelector(sel.slice(1));
          if (el) el.scrollIntoView({ block: 'start' });
        } else {
          window.scrollTo(0, +sel || 0);
        }
        return 'scrolled';
      })()
    ` });
    if (clickSelector) {
      await sleep(400);
      await send('Runtime.evaluate', { expression: `document.querySelector(${JSON.stringify(clickSelector)}).click()` });
      await sleep(900);
    }
    await sleep(1000);
    const shot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
    fs.writeFileSync(outFile, Buffer.from(shot.data, 'base64'));
    console.log('SAVED ' + outFile);

    ws.close();
    edge.kill();
    process.exit(0);
  } catch (e) {
    console.error('ERROR', e.message);
    edge.kill();
    process.exit(1);
  }
})();
