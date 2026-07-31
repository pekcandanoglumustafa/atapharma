import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Misyonumuz",
  description:
    "ATA Pharma olarak misyonumuz; veteriner hekimlerin ve çiftçilerin güvenle kullanabileceği, etkili ve sürdürülebilir veteriner ilaçları üretmektir.",
};

const IMG = {
  trust: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
  tubes: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
  green: "https://images.unsplash.com/photo-1556983852-43bf21186b2a?auto=format&fit=crop&w=1200&q=80",
  horse: "https://images.unsplash.com/photo-1598974357515-948c6d2999a3?auto=format&fit=crop&w=1200&q=80",
  mask: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=1400&q=80",
};

const values = [
  { k: "Güvenilirlik", d: "Hayvan sağlığı için en yüksek kalite ve güvenlik standartlarını sağlıyoruz.", img: IMG.trust },
  { k: "Bilimsel Yaklaşım", d: "Tüm ürünlerimiz bilimsel araştırmalar ve Ar-Ge çalışmalarıyla desteklenmektedir.", img: IMG.tubes },
  { k: "Sürdürülebilirlik", d: "Çevreye duyarlı, hayvan refahını önceliklendiren sürdürülebilir üretim anlayışıyla çalışıyoruz.", img: IMG.green },
];

const goals = [
  ["Küresel Büyüme", "Çözümlerimizi daha fazla ülkeye ulaştırarak uluslararası pazarda lider olmayı hedefliyoruz."],
  ["Yenilikçi Ürün Geliştirme", "Veteriner hekimlerle iş birliği yaparak daha etkili ve sürdürülebilir ilaçlar geliştiriyoruz."],
  ["Çevre Dostu Üretim", "Sürdürülebilir üretim anlayışıyla çevreye duyarlı, hayvan sağlığını ön planda tutan formüller geliştiriyoruz."],
];

export default function Misyonumuz() {
  return (
    <>
      <PageHero
        eyebrow="Misyonumuz"
        title={
          <>
            Hayvan sağlığı için{" "}
            <span className="text-gold">yenilikçi ve güvenilir</span> çözümler.
          </>
        }
        intro="Veteriner hekimlerin ve çiftçilerin güvenle kullanabileceği, etkili ve sürdürülebilir veteriner ilaçları üretmek; sektörde kaliteyi en üst seviyeye çıkarmak."
      />

      {/* Değerler */}
      <section className="wrap py-24 md:py-32">
        <Reveal className="mb-14 max-w-2xl">
          <p className="eyebrow mb-4">Değerlerimiz</p>
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight">
            Tüm faaliyetlerimizin temeli.
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            Güvenilirlik, bilimsel yaklaşım ve sürdürülebilirlik; en yüksek
            kaliteyi sağlamak için bu değerlerle hareket ediyoruz.
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

      {/* Vizyon + hedefler */}
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

      {/* Bağlılık */}
      <section className="wrap grid items-center gap-14 py-24 md:grid-cols-2 md:py-32">
        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
          <Image src={IMG.mask} alt="Sağlık profesyoneli" fill className="duotone object-cover" sizes="(max-width:768px) 100vw, 50vw" />
        </Reveal>
        <Reveal delay={100}>
          <p className="eyebrow mb-5">Hayvan Sağlığına Bağlılığımız</p>
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight">
            Bir iş alanı değil, bir sorumluluk.
          </h2>
          <div className="mt-6 space-y-4 text-ink/75 leading-relaxed">
            <p>
              ATA Pharma olarak hayvan sağlığını yalnızca bir iş alanı olarak
              değil, bir sorumluluk olarak görüyoruz. Ürünlerimiz, çiftlik
              hayvanlarının sağlıklı, verimli ve uzun ömürlü olmalarını
              desteklemek için tasarlanır.
            </p>
            <p>
              Veteriner hekimlerle iş birliği yaparak hayvan sağlığını koruyan ve
              hastalıkları önleyen çözümler geliştirmeye devam ediyoruz.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
