import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ADVISOR } from "@/lib/site";

export const metadata: Metadata = {
  title: `${ADVISOR.name} — Bilimsel Danışman`,
  description:
    `${ADVISOR.name}, hayvan besleme ve beslenme hastalıkları alanında uzman akademisyen; ATA Pharma ürünlerinin bilimsel omurgasını oluşturur.`,
};

const IMG = {
  lab: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1400&q=80",
  pasture: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1400&q=80",
};

export default function BilimDanismani() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden bg-forest-deep pb-20 pt-36 text-paper md:pb-28 md:pt-44">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(60% 55% at 20% 0%, rgba(47,107,79,0.5) 0%, rgba(14,42,29,0) 70%)",
          }}
        />
        <div className="wrap relative grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Monogram yüz — gerçek fotoğraf gelene kadar */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative mx-auto flex aspect-square max-w-sm items-center justify-center overflow-hidden rounded-[2.5rem] border border-paper/15 bg-gradient-to-br from-forest to-forest-900">
              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 35% 30%, rgba(207,154,43,0.35) 0%, transparent 55%)",
                }}
              />
              {ADVISOR.photo ? (
                <Image src={ADVISOR.photo} alt={ADVISOR.name} fill className="object-cover" sizes="(max-width:1024px) 100vw, 40vw" />
              ) : (
                <span className="relative font-display text-[6rem] font-semibold text-gold md:text-[7rem]">
                  {ADVISOR.initials}
                </span>
              )}
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <p className="eyebrow-gold mb-6 flex items-center gap-3">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
              {ADVISOR.role}
            </p>
            <h1 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.03] tracking-[-0.02em]">
              {ADVISOR.name}
            </h1>
            <p className="mt-4 font-mono text-sm uppercase tracking-wider text-paper/60">
              {ADVISOR.field}
            </p>
            <p className="font-mono text-sm uppercase tracking-wider text-paper/60">
              {ADVISOR.university}
            </p>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-paper/75">
              {ADVISOR.lead}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={ADVISOR.scholar} target="_blank" rel="noopener noreferrer" className="btn-gold !py-2.5 !text-sm">
                Google Scholar Profili
                <svg width="14" height="14" viewBox="0 0 12 12"><path d="M3 9l6-6M4 3h5v5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <Link href="/iletisim" className="btn-ghost !py-2.5 !text-sm">İletişime geçin</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- İSTATİSTİK ŞERİDİ ---------- */}
      <section className="border-b border-ink/8 bg-bone">
        <div className="wrap grid grid-cols-3 divide-x divide-ink/8">
          {ADVISOR.stats.map(([n, l]) => (
            <div key={l} className="px-4 py-8 text-center md:py-10">
              <p className="font-display text-3xl font-semibold text-forest md:text-4xl">{n}</p>
              <p className="mt-2 text-xs leading-snug text-ink/60 md:text-sm">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- BİYOGRAFİ ---------- */}
      <section className="wrap grid gap-14 py-24 md:grid-cols-[0.8fr_1.2fr] md:py-32">
        <Reveal>
          <p className="eyebrow mb-5">Akademik Profil</p>
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold leading-[1.1] tracking-tight">
            Sahayı tanıyan bir bilim insanı.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="space-y-5 text-ink/75 leading-relaxed">
            {ADVISOR.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ---------- ARAŞTIRMA ODAKLARI ---------- */}
      <section className="relative overflow-hidden bg-forest-deep py-24 text-paper md:py-32">
        <Image src={IMG.lab} alt="" fill className="object-cover opacity-10" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep via-forest-deep/92 to-forest-900" />
        <div className="wrap relative">
          <Reveal className="mb-14 max-w-2xl">
            <p className="eyebrow-gold mb-4">Uzmanlık Alanları</p>
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight">
              Araştırmadan ürüne uzanan bilgi.
            </h2>
            <p className="mt-4 text-paper/70 leading-relaxed">
              Yıllara yayılan akademik çalışmalar, ATA Pharma formülasyonlarının
              her aşamasında bilimsel bir zemin oluşturur.
            </p>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-paper/15 md:grid-cols-2">
            {ADVISOR.focus.map(([t, d], i) => (
              <Reveal key={t} delay={i * 80} className="bg-paper/5">
                <div className="h-full p-8">
                  <span className="font-mono text-sm text-gold">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-xl font-semibold">{t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-paper/65">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- BİLİM → ÜRÜN KÖPRÜSÜ ---------- */}
      <section className="wrap grid items-center gap-14 py-24 md:grid-cols-2 md:py-32">
        <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
          <Image src={IMG.pasture} alt="Merada sürü" fill className="duotone object-cover" sizes="(max-width:768px) 100vw, 50vw" />
        </Reveal>
        <Reveal delay={100}>
          <p className="eyebrow mb-5">Bilimin Sahadaki Karşılığı</p>
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold leading-[1.1] tracking-tight">
            Laboratuvardan ahıra, kanıttan sonuca.
          </h2>
          <div className="mt-6 space-y-4 text-ink/75 leading-relaxed">
            <p>
              Bir formülasyonun değeri, ancak sahada hayvanın sağlığına ve
              üreticinin verimine dönüştüğünde ortaya çıkar. {ADVISOR.name}'ın
              bilimsel yaklaşımı da tam olarak bu köprüyü kurar: akademik bulguyu,
              çiftçinin elinde işe yarayan bir ürüne dönüştürmek.
            </p>
            <p>
              ATA Pharma'nın ürün geliştirme süreçleri bu ilkeyle yürür — her
              iddia bir veriyle, her ürün bir gerekçeyle desteklenir.
            </p>
          </div>
          <Link href="/urunler" className="mt-8 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-forest link-underline">
            Ürünlerimizi keşfedin
            <svg width="12" height="12" viewBox="0 0 12 12"><path d="M3 9l6-6M4 3h5v5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </Reveal>
      </section>
    </>
  );
}
