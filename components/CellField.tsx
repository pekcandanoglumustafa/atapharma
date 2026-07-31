"use client";

import { useEffect, useRef } from "react";

type Cell = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  hue: number;
  a: number;
};

/**
 * İmza öğesi: mikroskop altındaki hücreleri/antikorları çağrıştıran,
 * yavaşça süzülen yumuşak organik alan. prefers-reduced-motion'a saygı duyar.
 */
export default function CellField({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const palette = [
      { c: "143,184,158", h: 0 }, // sage-green
      { c: "207,154,43", h: 1 }, // gold
      { c: "47,107,79", h: 2 }, // moss
    ];

    let cells: Cell[] = [];

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(26, Math.max(12, (w * h) / 42000)));
      cells = Array.from({ length: count }, () => {
        const p = palette[Math.floor(Math.random() * palette.length)];
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r: 40 + Math.random() * 130,
          vx: (Math.random() - 0.5) * 0.16,
          vy: (Math.random() - 0.5) * 0.16,
          hue: p.h,
          a: 0.05 + Math.random() * 0.09,
        };
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const cell of cells) {
        cell.x += cell.vx;
        cell.y += cell.vy;
        if (cell.x < -cell.r) cell.x = w + cell.r;
        if (cell.x > w + cell.r) cell.x = -cell.r;
        if (cell.y < -cell.r) cell.y = h + cell.r;
        if (cell.y > h + cell.r) cell.y = -cell.r;

        const p = palette[cell.hue];
        const g = ctx.createRadialGradient(cell.x, cell.y, 0, cell.x, cell.y, cell.r);
        g.addColorStop(0, `rgba(${p.c},${cell.a})`);
        g.addColorStop(0.6, `rgba(${p.c},${cell.a * 0.35})`);
        g.addColorStop(1, `rgba(${p.c},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(cell.x, cell.y, cell.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    build();
    if (reduce) {
      draw();
      cancelAnimationFrame(raf);
    } else {
      draw();
    }

    const onResize = () => {
      cancelAnimationFrame(raf);
      build();
      if (!reduce) draw();
      else draw();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
