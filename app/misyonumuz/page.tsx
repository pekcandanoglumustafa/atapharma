import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ADVISOR } from "@/lib/site";

export const metadata: Metadata = {
  title: "Misyonumuz",
  description:
    "ATA Pharma'nın misyonu; bilimsel araştırmayla desteklenen, veteriner hekimlerin ve çiftçilerin güvenle kullanabileceği etkili ve sürdürülebilir veteriner ilaçları üretmektir.",
};

const IMG = {
  tubes: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
  green: "https://images.unsplash.com/photo-1556983852-43bf21186b2a?auto=format&fit=crop&w=1200&q=80",
  trust: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
  horse: "https://images.unsplash.com/photo-1598974357515-948c6d2999a3?auto=format&fit=crop&w=1200&q=80",
  mask: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=1400&q=80",
};

const values = [
  { k: "Güvenilirlik", d: "Her ürün, hayvan sağlığı için en yüksek kalite ve güvenlik standartlarında geliştirilir; söz verdiğimizi sahada karşılığıyla veririz.", img: IMG.trust },
  { k: "Bilimsel Yaklaşım", d: "Formüllerimiz sezgiyle değil, akademik araştırma ve saha verisiyle şekillenir. Bilim, işimizin merkezindedir.", img: IMG.tubes },
  { k: "Sürdürülebilirlik", d: "Çevreye duyarlı, hayvan refahını önceliklendiren üretim anlayışıyla bugünün çözümlerini geleceğe taşırız.", img: IMG.green },
];

const goals = [
  ["Küresel Büyüme", "Çözümlerimizi daha fazla ülkeye ulaştırarak uluslararası pazarda güvenilir bir marka olmayı hedefliyoruz."],
  ["Yenilikçi Ürün Geliştirme", "Veteriner hekimlerle ve akademiyle iş birliği yaparak daha etkili, daha sürdürülebilir ilaçlar geliştiriyoruz."],
  ["Çevre Dostu Üretim", "Hayvan sağlığını ön planda tutan, çevreye duyarlı ve izlenebilir üretim süreçleri kuruyoruz."],
];

export default function Misyonumuz() {
  return (
    <>
      {/* ---------- HERO (zengin) ---------- */}
      <section className="relative overflow-hidden bg-forest-deep pb-20 pt-36 text-paper md:pb-28 md:pt-44">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(65% 55% at 82% 0%, rgba(47,107,79,0.55) 0%, rgba(14,42,29,0) 70%)",
          }}
        />
        <Image src={IMG.horse} alt="" fill className="pointer-events-none object-cover opacity-[0.07]" sizes="100vw" />
        <div className="wrap relative grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="eyebrow-gold mb-6 flex items-center gap-3">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
              Misyonumuz
            </p>
            <h1 className="max-w-3xl font-display text-[clamp(2.4rem,5.4vw,4.3rem)] font-semibold leading-[1.02] tracking-[-0.02em]">
              Her damlanın ardında{" "}
              <span className="text-gold">bir bilim insanının imzası</span>,
              her sürünün ardında{" "}
              <span className="italic text-sage">bizim sözümüz</span> var.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-paper/75">
              ATA Pharma olarak amacımız net: veteriner hekimlerin ve çiftçilerin
              gönül rahatlığıyla kullanabileceği, bilimsel olarak kanıtlanmış,
              etkili ve sürdürülebilir veteriner ilaçları üretmek — ve hayvan
              sağlığında kaliteyi Türkiye'nin standardı hâline getirmek.
            </p>
          </div>

          {/* Misyon beyanı + bilimsel imza kartı */}
          <Reveal delay={120} className="lg:pb-2">
            <div className="rounded-[2rem] border border-paper/15 bg-paper/[0.04] p-8 backdrop-blur-sm">
              <p className="eyebrow-gold mb-4">Misyon Beyanımız</p>
              <p className="font-display text-xl leading-snug text-paper">
                &ldquo;Sağlıklı hayvan, bereketli üretim ve güvenli gıda
                zincirinin ilk halkası olmak.&rdquo;
              </p>
              <div className="mt-7 flex items-center gap-4 border-t border-paper/15 pt-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-gold/10 font-display text-sm font-semibold text-gold">
                  {ADVISOR.initials}
                </div>
                <div className="leading-tight">
                  <p className="font-display text-sm font-semibold text-paper">{ADVISOR.name}</p>
                  <p className="font-mono text-[0.7rem] uppercase tracking-wider text-paper/55">
                    {ADVISOR.role}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- MİSYON DETAY (daha fazla metin) ---------- */}
      <section className="wrap grid gap-14 py-24 md:grid-cols-[0.9fr_1.1fr] md:py-32">
        <Reveal>
          <p className="eyebrow mb-5">Neden Buradayız</p>
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight">
            Bir iş alanı değil, bir sorumluluk.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="space-y-5 text-ink/75 leading-relaxed">
            <p>
              Bir hayvanın sağlığı, yalnızca o hayvanı değil; ona emek veren
              çiftçinin geçimini, üreticinin verimini ve sofraya ulaşan gıdanın
              güvenliğini ilgilendirir. Biz bu zincirin ilk halkasında duruyoruz.
            </p>
            <p>
              ATA Pharma, çiftlik hayvanlarının bağışıklığını güçlendiren,
              hastalıkları önlemeye odaklanan ve verimi sürdürülebilir kılan
              ürünler geliştirir. Her formülasyon, bir soruyla başlar:{" "}
              <span className="text-forest font-medium">
                &ldquo;Bu ürün sahada gerçekten fark yaratıyor mu?&rdquo;
              </span>{" "}
              Cevabı laboratuvarda değil, ahırda ararız.
            </p>
            <p>
              Ürünlerimizin arkasındaki bilimsel derinlik, akademiyle kurduğumuz
              iş birliğinden gelir. Formülasyonlarımız, hayvan besleme alanında
              onlarca yıllık araştırma birikimine sahip{" "}
              <Link href="/bilim-danismani" className="text-forest font-medium link-underline">
                {ADVISOR.name}
              </Link>{" "}
              danışmanlığında, bilimsel kanıt temeli üzerine kurulur.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ---------- DEĞERLER ---------- */}
      <section className="wrap pb-8 md:pb-12">
        <Reveal className="mb-14 max-w-2xl">
          <p className="eyebrow mb-4">Değerlerimiz</p>
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight">
            Tüm faaliyetlerimizin temeli.
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            Güvenilirlik, bilimsel yaklaşım ve sürdürülebilirlik; ürettiğimiz her
            üründe bu üç değerin izini görürsünüz.
          </p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.k} delay={i * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/8 bg-bone">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={v.img} alt={v.k} fill className="duotone object-cover transition-transform duration-700 group-hover:scale-105" sizes="33vw" />
                </div>
                <div className="p-7">
                  <span className="font-mono text-xs text-gold">0{i + 1}</span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-forest">{v.k}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">{v.d}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- BİLİMSEL LİDERLİK (Prof. Azman) ---------- */}
      <section className="wrap py-24 md:py-32">
        <Reveal>
          <div className="grid items-center gap-10 overflow-hidden rounded-[2.5rem] border border-ink/10 bg-forest-deep text-paper md:grid-cols-[0.85fr_1.15fr]">
            {/* Monogram / imza yüzü — gerçek fotoğraf gelene kadar */}
            <div className="relative flex min-h-[280px] items-center justify-center bg-gradient-to-br from-forest to-forest-900 p-10 md:min-h-[360px]">
              <div
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 25%, rgba(207,154,43,0.35) 0%, transparent 55%)",
                }}
              />
              <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-gold/40 bg-gold/10 md:h-48 md:w-48">
                <span className="font-display text-5xl font-semibold text-gold md:text-6xl">
                  {ADVISOR.initials}
                </span>
              </div>
            </div>

            <div className="p-9 md:p-12">
              <p className="eyebrow-gold mb-5">Bilimsel Liderlik</p>
              <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.6rem)] font-semibold leading-[1.1] tracking-tight">
                {ADVISOR.name}
              </h2>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-paper/60">
                {ADVISOR.field} · {ADVISOR.university}
              </p>
              <p className="mt-6 max-w-xl leading-relaxed text-paper/75">
                {ADVISOR.lead} Ruminant beslemesi, probiyotik uygulamaları ve
                yem biliminde yürüttüğü akademik çalışmalar, ATA Pharma
                ürünlerinin bilimsel omurgasını oluşturur.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/bilim-danismani" className="btn-gold !py-2.5 !text-sm">
                  Bilimsel özgeçmişi
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
                <a href={ADVISOR.scholar} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-paper/70 link-underline">
                  Google Scholar
                  <svg width="12" height="12" viewBox="0 0 12 12"><path d="M3 9l6-6M4 3h5v5" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------- VİZYON + HEDEFLER ---------- */}
      <section className="relative overflow-hidden bg-forest-deep py-24 text-paper md:py-32">
        <Image src={IMG.horse} alt="" fill className="object-cover opacity-15" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-deep/90 to-forest-deep/60" />
        <div className="wrap relative">
          <Reveal className="mb-14 max-w-2xl">
            <p className="eyebrow-gold mb-4">Vizyonumuz</p>
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight">
              Veteriner hekimler ve çiftçiler için güvenilir bir dünya markası.
            </h2>
            <p className="mt-4 text-paper/70 leading-relaxed">
              Hayvan sağlığında sürdürülebilir çözümler geliştirerek küresel
              ölçekte güven inşa etmeyi hedefliyoruz.
            </p>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-paper/15 md:grid-cols-3">
            {goals.map(([t, d], i) => (
              <Reveal key={t} delay={i * 90} className="bg-paper/5">
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

      {/* ---------- BAĞLILIK ---------- */}
      <section className="wrap grid items-center gap-14 py-24 md:grid-cols-2 md:py-32">
        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
          <Image src={IMG.mask} alt="Sağlık profesyoneli" fill className="duotone object-cover" sizes="(max-width:768px) 100vw, 50vw" />
        </Reveal>
        <Reveal delay={100}>
          <p className="eyebrow mb-5">Hayvan Sağlığına Bağlılığımız</p>
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight">
            Sözümüz sürünün sağlığında saklı.
          </h2>
          <div className="mt-6 space-y-4 text-ink/75 leading-relaxed">
            <p>
              ATA Pharma olarak hayvan sağlığını yalnızca bir iş alanı olarak
              değil, bir sorumluluk olarak görüyoruz. Ürünlerimiz, çiftlik
              hayvanlarının sağlıklı, verimli ve uzun ömürlü olmalarını
              desteklemek için tasarlanır.
            </p>
            <p>
              Veteriner hekimlerle ve akademiyle iş birliği yaparak hayvan
              sağlığını koruyan, hastalıkları önleyen ve üreticinin yükünü
              hafifleten çözümler geliştirmeye devam ediyoruz.
            </p>
          </div>
          <Link href="/urunler" className="mt-8 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-forest link-underline">
            Ürünlerimizi inceleyin
            <svg width="12" height="12" viewBox="0 0 12 12"><path d="M3 9l6-6M4 3h5v5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </Reveal>
      </section>
    </>
  );
}
