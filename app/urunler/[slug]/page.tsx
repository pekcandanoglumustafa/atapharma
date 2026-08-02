import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { PRODUCTS, getProduct } from "@/lib/products";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProduct(params.slug);
  if (!p) return { title: "Ürün bulunamadı" };
  return {
    title: p.name,
    description: `${p.name} — ${p.tagline}`,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = getProduct(params.slug);
  if (!p) notFound();

  const others = PRODUCTS.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden bg-forest-deep pb-16 pt-32 text-paper md:pb-24 md:pt-44">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(60% 55% at 80% 0%, rgba(47,107,79,0.5) 0%, rgba(14,42,29,0) 70%)",
          }}
        />
        <div className="wrap relative">
          <nav className="mb-8 flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-widest text-paper/50">
            <Link href="/urunler" className="transition-colors hover:text-gold">
              Ürünler
            </Link>
            <span>/</span>
            <span className="text-paper/80">{p.name}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-5 flex flex-wrap gap-2">
                {p.categories.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-widest text-gold"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <h1 className="font-display text-[clamp(2.1rem,5vw,3.8rem)] font-semibold leading-[1.04] tracking-[-0.02em]">
                {p.name}
              </h1>
              <p className="mt-4 max-w-xl font-display text-xl leading-snug text-gold-soft md:text-2xl">
                {p.tagline}
              </p>
              {p.net && (
                <p className="mt-5 font-mono text-xs uppercase tracking-widest text-paper/55">
                  Net: {p.net}
                </p>
              )}
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/iletisim" className="btn-gold !py-2.5 !text-sm">
                  Bilgi alın
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="/urunler" className="btn-ghost !py-2.5 !text-sm">
                  Tüm ürünler
                </Link>
              </div>
            </div>

            {/* Ürün kartı — gerçek ambalaj görseli gelene kadar tipografik */}
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[2rem] border border-paper/15 bg-gradient-to-br from-forest to-forest-900 p-8">
              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 25%, rgba(207,154,43,0.3) 0%, transparent 60%)",
                }}
              />
              <span className="relative text-center font-display text-3xl font-semibold leading-tight text-paper md:text-4xl">
                {p.name}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- AÇIKLAMA + ÖZELLİKLER ---------- */}
      <section className="wrap grid gap-14 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-28">
        <Reveal>
          <p className="eyebrow mb-5">Ürün Hakkında</p>
          <div className="space-y-4 text-ink/75 leading-relaxed">
            {p.intro.map((t, i) => (
              <p key={i}>{t}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-[2rem] border border-ink/10 bg-bone p-8">
            <p className="eyebrow mb-5">Öne Çıkan Özellikler</p>
            <ul className="space-y-4">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3.5 text-sm leading-relaxed text-ink/75">
                  <svg width="18" height="18" viewBox="0 0 20 20" className="mt-0.5 shrink-0 text-moss">
                    <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.12" />
                    <path d="M6 10.2l2.6 2.6L14 7.4" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* ---------- İÇİNDEKİLER ---------- */}
      <section className="bg-paper-2 py-20 md:py-28">
        <div className="wrap grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow mb-4">İçindekiler</p>
            <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.6rem)] font-semibold leading-[1.1] tracking-tight">
              Formülün tamamı, açıkça.
            </h2>
            <p className="mt-4 text-ink/65 leading-relaxed">
              Her bileşen ve düzeyi aşağıda listelenmiştir. Ayrıntılı bilgi için
              veteriner hekiminize danışın.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-hidden rounded-2xl border border-ink/12 bg-paper">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-ink/12 bg-bone">
                    <th className="px-5 py-3.5 font-mono text-[0.65rem] uppercase tracking-widest text-ink/55">
                      Katkı Adı
                    </th>
                    <th className="px-5 py-3.5 text-right font-mono text-[0.65rem] uppercase tracking-widest text-ink/55">
                      {p.ingredientsLabel}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {p.ingredients.map((ing, i) => (
                    <tr
                      key={ing.name}
                      className={i % 2 ? "bg-bone/50" : ""}
                    >
                      <td className="border-t border-ink/8 px-5 py-3 text-ink/80">{ing.name}</td>
                      <td className="whitespace-nowrap border-t border-ink/8 px-5 py-3 text-right font-mono text-xs text-forest">
                        {ing.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- KULLANIM ---------- */}
      {p.usage && p.usage.length > 0 && (
        <section className="wrap py-20 md:py-28">
          <Reveal className="mb-10 max-w-2xl">
            <p className="eyebrow mb-4">Kullanım Talimatları</p>
            <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.6rem)] font-semibold leading-[1.1] tracking-tight">
              Doğru kullanım, doğru sonuç.
            </h2>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 md:grid-cols-2">
            {p.usage.map((u, i) => (
              <Reveal key={u} delay={i * 70} className="bg-paper">
                <div className="flex h-full gap-5 p-7">
                  <span className="font-mono text-sm text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-ink/75">{u}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-xs leading-relaxed text-ink/50">
            Veteriner hekim tarafından başka şekilde tavsiye edilmediği takdirde
            yukarıdaki şekilde uygulanır. Kullanmadan önce ve beklenmeyen bir
            etki görüldüğünde veteriner hekime danışınız.
          </p>
        </section>
      )}

      {/* ---------- DİĞER ÜRÜNLER ---------- */}
      <section className="wrap pb-24 md:pb-32">
        <Reveal className="mb-10 flex items-end justify-between gap-6">
          <h2 className="font-display text-2xl font-semibold text-forest md:text-3xl">
            Diğer ürünler
          </h2>
          <Link
            href="/urunler"
            className="link-underline shrink-0 font-mono text-xs uppercase tracking-widest text-moss"
          >
            Tümü →
          </Link>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {others.map((o, i) => (
            <Reveal key={o.slug} delay={i * 80}>
              <Link
                href={`/urunler/${o.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/8 bg-bone transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(12,27,19,0.35)]"
              >
                <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-forest to-forest-900 p-5">
                  <span className="text-center font-display text-xl font-semibold text-paper/95">
                    {o.name}
                  </span>
                </div>
                <p className="flex-1 p-6 text-sm leading-relaxed text-ink/65">{o.tagline}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
