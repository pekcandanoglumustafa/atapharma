"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Güvenlik: IntersectionObserver yoksa içeriği hemen göster.
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("in");
      return;
    }

    const show = () => {
      el.style.transitionDelay = `${delay}ms`;
      el.classList.add("in");
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            show();
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);

    // Güvenlik ağı: 2 sn içinde herhangi bir sebeple tetiklenmezse yine de göster,
    // böylece içerik hiçbir koşulda kalıcı olarak görünmez kalmaz.
    const fallback = window.setTimeout(show, 2000);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, [delay]);

  return (
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
