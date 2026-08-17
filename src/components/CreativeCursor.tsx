import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

/**
 * Creative cursor: a small dot with a trailing ring that expands over
 * interactive elements. Themed via CSS variables (--cursor-color etc.).
 * Desktop (fine pointer) only; rendered through a portal so fixed
 * positioning is never affected by transformed ancestors.
 */
export function CreativeCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let raf = 0;
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let dx = mx, dy = my;
    let rx = mx, ry = my;
    let visible = false;

    const show = () => {
      if (!visible) {
        visible = true;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
      }
    };

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      show();
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      const hovering = !!t?.closest('a, button, input, textarea, select, label, [role="button"]');
      ring.classList.toggle('is-hover', hovering);
    };

    const onDown = () => ring.classList.add('is-down');
    const onUp = () => ring.classList.remove('is-down');

    const tick = () => {
      dx += (mx - dx) * 0.55;
      dy += (my - dy) * 0.55;
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      dot.style.transform = `translate(${dx - 4}px, ${dy - 4}px)`;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = 0;
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return createPortal(
    <>
      <div ref={dotRef} className="fx-cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="fx-cursor-ring" aria-hidden="true">
        <div className="fx-cursor-ring-inner" />
      </div>
    </>,
    document.body,
  );
}
