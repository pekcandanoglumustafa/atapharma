"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CATEGORIES, type Product } from "@/lib/products";

export default function ProductGrid({ products }: { products: Product[] }) {
  const [cat, setCat] = useState<string>("Tüm ürünler");
  const [q, setQ] = useState("");

  const visible = useMemo(() => {
    return products.filter((p) => {
      const okCat = cat === "Tüm ürünler" || p.categories.includes(cat);
      const okQ =
        q.trim() === "" ||
        (p.name + " " + p.tagline).toLowerCase().includes(q.toLowerCase());
      return okCat && okQ;
    });
  }, [products, cat, q]);

  // Kategoriyi yalnızca en az bir ürünü varsa göster
  const cats = CATEGORIES.filter(
    (c) => c === "Tüm ürünler" || products.some((p) => p.categories.includes(c))
  );

  return (
    <section className="wrap grid gap-12 py-20 md:grid-cols-[210px_1fr] md:py-28">
      {/* Filtre */}
      <aside className="md:sticky md:top-28 md:self-start">
        <p className="eyebrow mb-4">İncele</p>
        <div className="flex flex-wrap gap-2 border-t border-ink/10 pt-4 md:flex-col md:gap-0">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-3 py-1.5 text-left text-sm transition-colors md:rounded-none md:px-0 md:py-2 ${
                cat === c
                  ? "bg-forest text-paper md:bg-transparent md:text-forest md:font-medium"
                  : "bg-ink/5 text-ink/70 hover:text-forest md:bg-transparent"
              }`}
            >
              <span className={cat === c ? "md:border-b md:border-gold md:pb-1" : ""}>
                {c}
              </span>
            </button>
          ))}
        </div>
      </aside>

      <div>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <label className="relative w-full sm:max-w-xs">
            <span className="sr-only">Ürünleri ara</span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 16 16"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink/40"
            >
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M11 11l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Ürünleri ara"
              className="w-full rounded-full border border-ink/15 bg-bone py-2.5 pl-11 pr-4 text-sm outline-none transition-colors placeholder:text-ink/40 focus:border-forest"
            />
          </label>
          <p className="font-mono text-xs uppercase tracking-widest text-ink/50">
            {visible.length} ürün
          </p>
        </div>

        {visible.length === 0 ? (
          <p className="rounded-2xl border border-ink/10 bg-bone p-10 text-center text-ink/60">
            Bu seçime uyan ürün bulunamadı.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {visible.map((p) => (
              <Link
                key={p.slug}
                href={`/urunler/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/8 bg-bone transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(12,27,19,0.35)]"
              >
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-forest to-forest-900 p-6">
                  {p.isNew && (
                    <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 font-mono text-[0.6rem] uppercase tracking-widest text-forest-900">
                      Yeni
                    </span>
                  )}
                  <span className="text-center font-display text-2xl font-semibold leading-tight text-paper/95 transition-transform duration-500 group-hover:scale-105">
                    {p.name}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex-1 text-sm leading-relaxed text-ink/65">{p.tagline}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.categories.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-ink/12 px-2.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider text-moss"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-forest">
                    İncele
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
