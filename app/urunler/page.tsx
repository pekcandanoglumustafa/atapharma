import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Ürünler",
  description:
    "İnek, koyun, buzağı ve oğlaklar için bağışıklık güçlendirici, sindirim düzenleyici ve besin destekleyici veteriner ürün aileleri.",
};

const IMG = {
  cow: "https://images.unsplash.com/photo-1522621771832-8b4cd9278a2c?auto=format&fit=crop&w=1200&q=80",
  sheep: "https://images.unsplash.com/photo-1522103537430-b4cbddab48d1?auto=format&fit=crop&w=1200&q=80",
  calf: "https://images.unsplash.com/photo-1704138031220-22798f8fafcb?auto=format&fit=crop&w=1200&q=80",
  goat: "https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=1200&q=80",
};

const families = [
  {
    name: "İnekler İçin İlaç",
    latin: "Bovine",
    img: IMG.cow,
    body: "Bağışıklık sistemini güçlendiren özel formüller ile ineklerin sağlıklı kalmasını ve yüksek verim sağlamasını destekliyoruz.",
    tags: ["Bağışıklık desteği", "Sindirim sağlığı", "Süt verimi"],
  },
  {
    name: "Koyunlar İçin İlaç",
    latin: "Ovine",
    img: IMG.sheep,
    body: "Koyunların sağlıklı gelişimi ve hastalıklara karşı direnç kazanması için özel bağışıklık destek ürünleri geliştiriyoruz.",
    tags: ["Sindirim düzenleyici", "Vitamin & mineral", "Direnç"],
  },
  {
    name: "Buzağılar İçin İlaç",
    latin: "Calf",
    img: IMG.calf,
    body: "Yeni doğan buzağıların bağışıklık sistemini güçlendiren yenilikçi çözümlerle ilk günlerinden itibaren güçlü büyümelerini sağlıyoruz.",
    tags: ["Yenidoğan desteği", "Bağışıklık", "Hastalık riski ↓"],
  },
  {
    name: "Oğlaklar İçin İlaç",
    latin: "Caprine",
    img: IMG.goat,
    body: "Oğlakların erken dönem bağışıklığını ve besin dengesini destekleyerek sağlıklı gelişimlerine katkı sunuyoruz.",
    tags: ["Erken bağışıklık", "Besin desteği", "Gelişim"],
  },
];

export default function Urunler() {
  return (
    <>
      <PageHero
        eyebrow="Ürünler"
        title={
          <>
            Her tür için{" "}
            <span className="text-gold">bağışıklık odaklı</span> ürün aileleri.
          </>
        }
        intro="Bağışıklık sistemini güçlendiren ilaçlarla sağlıklı hayvanlar için çözümler sunuyoruz. Ürün aileleri hedef türe göre özelleştirilmiştir."
      />

      <section className="wrap py-24 md:py-32">
        <div className="grid gap-8 md:grid-cols-2">
          {families.map((f, i) => (
            <Reveal key={f.name} delay={(i % 2) * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-ink/8 bg-bone transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(12,27,19,0.35)]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={f.img} alt={f.name} fill className="duotone object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 100vw, 50vw" />
                  <span className="absolute left-5 top-5 rounded-full bg-forest-900/70 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-widest text-gold-soft backdrop-blur">
                    {f.latin}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h2 className="font-display text-2xl font-semibold text-forest">{f.name}</h2>
                  <p className="mt-3 flex-1 text-ink/65 leading-relaxed">{f.body}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {f.tags.map((t) => (
                      <span key={t} className="rounded-full border border-ink/12 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-moss">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-forest px-8 py-12 text-center text-paper md:flex-row md:text-left">
          <div>
            <p className="eyebrow-gold mb-2">Ürün detayları</p>
            <h2 className="max-w-xl font-display text-2xl font-semibold md:text-3xl">
              Belirli bir ürün, doz veya endikasyon için bize ulaşın.
            </h2>
          </div>
          <Link href="/iletisim" className="btn-gold shrink-0">
            Bilgi alın
          </Link>
        </Reveal>
      </section>
    </>
  );
}
