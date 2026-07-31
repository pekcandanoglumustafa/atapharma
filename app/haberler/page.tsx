import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Haberler",
  description:
    "ATA Pharma'dan hayvan sağlığı, bağışıklık ve üretim kalitesi üzerine güncel içerikler ve duyurular.",
};

const IMG = {
  micro: "https://images.unsplash.com/photo-1639772823907-a716be4bdecc?auto=format&fit=crop&w=1400&q=80",
  calf: "https://images.unsplash.com/photo-1704138031220-22798f8fafcb?auto=format&fit=crop&w=1200&q=80",
  sheep: "https://images.unsplash.com/photo-1511771426841-8119ef5f32fd?auto=format&fit=crop&w=1200&q=80",
  lab: "https://images.unsplash.com/photo-1583912268183-a34d41fe464a?auto=format&fit=crop&w=1200&q=80",
};

const posts = [
  {
    cat: "Ar-Ge",
    title: "Bağışıklık güçlendirici formülasyonlarda bilimsel yaklaşım",
    excerpt:
      "Ürün geliştirme süreçlerimizde akademik yayınları ve saha verilerini nasıl birleştirdiğimize dair bir bakış.",
    img: IMG.micro,
    read: "4 dk",
  },
  {
    cat: "Buzağı Sağlığı",
    title: "Yenidoğan buzağılarda ilk 30 gün neden kritik?",
    excerpt:
      "Erken dönem bağışıklık desteğinin buzağı gelişimi üzerindeki etkisi ve doğru destek zamanlaması.",
    img: IMG.calf,
    read: "5 dk",
  },
  {
    cat: "Üretim",
    title: "GMP nedir ve veteriner ilaç güvenliği için neden önemli?",
    excerpt:
      "Good Manufacturing Practices standartlarının üretim kalitesi ve izlenebilirlik açısından anlamı.",
    img: IMG.lab,
    read: "3 dk",
  },
  {
    cat: "Sürü Yönetimi",
    title: "Koyunlarda mevsimsel bağışıklık ve besin dengesi",
    excerpt:
      "Sürü sağlığını korumak için vitamin, mineral ve sindirim desteğinin mevsimsel planlaması.",
    img: IMG.sheep,
    read: "4 dk",
  },
];

export default function Haberler() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHero
        eyebrow="Haberler & İçerikler"
        title={
          <>
            Hayvan sağlığı üzerine{" "}
            <span className="text-gold">güncel içerikler</span>.
          </>
        }
        intro="Bağışıklık, üretim kalitesi ve sürü yönetimi üzerine hazırladığımız içerikler ve şirket duyuruları."
      />

      <section className="wrap py-24 md:py-32">
        {/* Featured */}
        <Reveal>
          <article className="group grid overflow-hidden rounded-[2rem] border border-ink/8 bg-bone md:grid-cols-2">
            <div className="relative aspect-[16/11] overflow-hidden md:aspect-auto">
              <Image src={featured.img} alt={featured.title} fill className="duotone object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 100vw, 50vw" />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-forest px-3 py-1 font-mono text-[0.6rem] uppercase tracking-widest text-gold-soft">
                  {featured.cat}
                </span>
                <span className="font-mono text-xs text-ink/45">{featured.read} okuma</span>
              </div>
              <h2 className="mt-5 font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-tight text-forest">
                {featured.title}
              </h2>
              <p className="mt-4 text-ink/65 leading-relaxed">{featured.excerpt}</p>
              <span className="mt-7 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-moss">
                Yakında
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </div>
          </article>
        </Reveal>

        {/* Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/8 bg-bone">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image src={p.img} alt={p.title} fill className="duotone object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 100vw, 33vw" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[0.62rem] uppercase tracking-widest text-gold">{p.cat}</span>
                    <span className="font-mono text-[0.62rem] text-ink/40">{p.read}</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-forest">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">{p.excerpt}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 rounded-2xl border border-dashed border-ink/20 bg-paper-2/50 p-6 text-center">
          <p className="text-sm text-ink/55">
            İçerikler yakında yayımlanacaktır. Yeni duyurular ve makaleler için
            bizi takip edin.
          </p>
        </Reveal>
      </section>
    </>
  );
}
