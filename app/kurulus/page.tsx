import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Kuruluş",
  description:
    "ATA Pharma'nın hikayesi: hayvan sağlığını destekleyen yenilikçi, bilimsel temelli veteriner ilaçları üretmek için çıktığımız yol.",
};

const IMG = {
  flock: "https://images.unsplash.com/photo-1522103537430-b4cbddab48d1?auto=format&fit=crop&w=1200&q=80",
  vet: "https://images.unsplash.com/photo-1522989360713-af40e6d6a848?auto=format&fit=crop&w=1200&q=80",
  calf: "https://images.unsplash.com/photo-1704138031220-22798f8fafcb?auto=format&fit=crop&w=1400&q=80",
  micro: "https://images.unsplash.com/photo-1639772823907-a716be4bdecc?auto=format&fit=crop&w=1200&q=80",
  plant: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
};

const pillars = [
  {
    k: "Araştırma & Geliştirme",
    d: "Hayvan sağlığı alanında en yeni teknolojileri ve bilimsel araştırmaları kullanarak, ilaçlarımızda etkinlik ve güvenilirlik sağlıyoruz. Yatırımlarımız inovatif formüller ve bilimsel gelişmelere odaklanır.",
    img: IMG.micro,
  },
  {
    k: "Uluslararası Büyüme",
    d: "Türkiye'de kazandığımız güveni uluslararası pazarlara taşımayı hedefliyoruz. Küresel ölçekte daha fazla veteriner ve çiftçi için güvenilir çözümler sunmayı amaçlıyoruz.",
    img: IMG.flock,
  },
  {
    k: "Sürdürülebilir Üretim",
    d: "Çevre dostu üretim süreçleriyle doğayı ve hayvanları koruyarak ilaç üretiyoruz. Sürdürülebilirlik, kalite ve etik değerlerimizle sektörde fark yaratıyoruz.",
    img: IMG.plant,
  },
];

export default function Kurulus() {
  return (
    <>
      <PageHero
        eyebrow="Kuruluş · ATA Pharma'nın Hikayesi"
        title={
          <>
            Hayvan sağlığını destekleyen{" "}
            <span className="text-gold">yenilikçi</span> çözümler için yola
            çıktık.
          </>
        }
        intro="Bilimsel araştırmalarla desteklenen veteriner ilaçları üreterek çiftlik hayvanlarının bağışıklık sistemini güçlendiriyor, sektörde kaliteyi yükseltiyoruz."
      />

      {/* Biz kimiz */}
      <section className="wrap grid items-center gap-14 py-24 md:grid-cols-2 md:py-32">
        <Reveal>
          <p className="eyebrow mb-5">Biz Kimiz?</p>
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight">
            Bilimsel araştırmalarla desteklenen veteriner ilaçları.
          </h2>
          <div className="mt-6 space-y-4 text-ink/75 leading-relaxed">
            <p>
              ATA Pharma, hayvan sağlığını ön planda tutarak bilimsel
              araştırmalarla desteklenen veteriner ilaçları üretir. Amacımız,
              çiftlik hayvanlarının bağışıklık sistemini güçlendiren güvenilir
              çözümler sunmak ve sektörde kaliteyi yükseltmektir.
            </p>
            <p>
              Yenilikçi yaklaşımlarımız sayesinde Türkiye'de ve uluslararası
              pazarlarda güvenilen bir marka olmayı hedefliyoruz.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120} className="grid grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
            <Image src={IMG.flock} alt="Merada koyun sürüsü" fill className="duotone object-cover" sizes="25vw" />
          </div>
          <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-2xl">
            <Image src={IMG.vet} alt="Veteriner hekim hayvan muayenesi" fill className="duotone object-cover" sizes="25vw" />
          </div>
        </Reveal>
      </section>

      {/* Başlangıç */}
      <section className="bg-paper-2 py-24 md:py-32">
        <div className="wrap grid items-center gap-14 md:grid-cols-[1.1fr_1fr]">
          <Reveal className="relative aspect-[5/4] overflow-hidden rounded-[2rem]">
            <Image src={IMG.calf} alt="Buzağı bakımı" fill className="duotone object-cover" sizes="(max-width:768px) 100vw, 50vw" />
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow mb-5">Başlangıç</p>
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight">
              Sahadaki soruna, bilimsel çözümle yanıt.
            </h2>
            <div className="mt-6 space-y-4 text-ink/75 leading-relaxed">
              <p>
                ATA Pharma, hayvan sağlığını en üst düzeye çıkarmak amacıyla
                kuruldu. Çiftçilerin ve veteriner hekimlerin karşılaştığı
                bağışıklık zayıflığı, hastalık riskleri ve beslenme eksiklikleri
                gibi kritik sorunlara çözüm bulmak için yola çıktık.
              </p>
              <p>
                Hayvancılık sektöründeki artan sağlık sorunlarına yönelik,
                bilimsel çalışmalarla desteklenen doğru formüller geliştirmeyi
                hedefledik. Uzman ekibimizle birlikte hayvanların sağlığını ve
                refahını artıran, güvenilir ve etkili ilaçlar üretiyoruz.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Geleceğe yatırım */}
      <section className="wrap py-24 md:py-32">
        <Reveal className="mb-14 max-w-2xl">
          <p className="eyebrow mb-4">Geleceğe Yatırım</p>
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight">
            Yenilikçi çözümlerle büyüyoruz.
          </h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.k} delay={i * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/8 bg-bone">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={p.img} alt={p.k} fill className="duotone object-cover transition-transform duration-700 group-hover:scale-105" sizes="33vw" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <span className="font-mono text-xs text-gold">0{i + 1}</span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-forest">{p.k}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">{p.d}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="wrap pb-24 md:pb-32">
        <Reveal className="flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-ink/10 bg-paper-2 px-8 py-12 text-center md:flex-row md:text-left">
          <div>
            <p className="eyebrow mb-2">Misyonumuzu Keşfedin</p>
            <h2 className="font-display text-2xl font-semibold text-forest md:text-3xl">
              Hayvan sağlığını en üst düzeye çıkarmaya devam ediyoruz.
            </h2>
          </div>
          <Link href="/misyonumuz" className="btn-gold shrink-0">
            Misyonumuz
          </Link>
        </Reveal>
      </section>
    </>
  );
}
