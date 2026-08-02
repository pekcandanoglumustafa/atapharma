"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const about: { href: string; label: string; external?: boolean }[] = [
  { href: "/kurulus", label: "Kuruluş" },
  { href: "/misyonumuz", label: "Misyonumuz" },
  { href: "/bilim-danismani", label: "Bilim Danışmanımız" },
  { href: "/uretim-politikamiz", label: "Üretim Politikamız" },
];

const nav = [
  { href: "/", label: "Anasayfa" },
  { href: "/urunler", label: "Ürünler" },
  { href: "/haberler", label: "Haberler" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-ink/10 bg-paper/85 text-ink backdrop-blur-md"
          : "border-b border-transparent bg-transparent text-paper"
      }`}
    >
      <div className="wrap flex h-[72px] items-center justify-between">
        <Link href="/" aria-label="ATA Pharma ana sayfa">
          <Logo variant={scrolled ? "dark" : "light"} />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/" className="link-underline text-sm">
            Anasayfa
          </Link>

          <div className="group relative">
            <button className="flex items-center gap-1.5 text-sm">
              Hakkımızda
              <svg width="12" height="12" viewBox="0 0 12 12" className="mt-0.5 transition-transform group-hover:rotate-180">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            </button>
            <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="w-60 rounded-2xl border border-ink/10 bg-bone p-2 shadow-[0_20px_50px_-20px_rgba(12,27,19,0.4)]">
                {about.map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    target={a.external ? "_blank" : undefined}
                    rel={a.external ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm text-ink/80 transition-colors hover:bg-sage/40 hover:text-forest"
                  >
                    {a.label}
                    {a.external && (
                      <svg width="12" height="12" viewBox="0 0 12 12" className="opacity-50">
                        <path d="M3 9l6-6M4 3h5v5" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/urunler" className="link-underline text-sm">
            Ürünler
          </Link>
          <Link href="/haberler" className="link-underline text-sm">
            Haberler
          </Link>
          <Link href="/iletisim" className="btn-gold !py-2.5 !text-sm">
            İletişim
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
        >
          <div className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-6 bg-current transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-current transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-current transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-paper/95 text-ink backdrop-blur-md transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-[520px] border-b border-ink/10" : "max-h-0"
        }`}
      >
        <nav className="wrap flex flex-col gap-1 py-4">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="border-b border-ink/5 py-3 text-lg font-display">
              {n.label}
            </Link>
          ))}
          <p className="eyebrow mt-4">Hakkımızda</p>
          {about.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              target={a.external ? "_blank" : undefined}
              rel={a.external ? "noopener noreferrer" : undefined}
              className="py-2.5 text-ink/75"
            >
              {a.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
