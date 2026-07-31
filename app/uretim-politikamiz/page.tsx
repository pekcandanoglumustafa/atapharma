import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Üretim Politikamız",
  description:
    "Kalite, güvenlik ve sürdürülebilirlik ilkeleriyle; GMP standartlarında, izlenebilir ve etik veteriner ilaç üretimi.",
};

const IMG = {
  field: "https://images.unsplash.com/photo-1588144214291-01f2808940fc?auto=format&fit=crop&w=1400&q=80",
  lab: "https://images.unsplash.com/photo-1583912268183-a34d41fe464a?auto=format&fit=crop&w=1200&q=80",
  rice: "https://images.unsplash.com/photo-1475138881994-9c5ac3f793e4?auto=format&fit=crop&w=800&q=80",
  wheat: "https://images.unsplash.com/photo-1626671502253-c50bad9325b1?auto=format&fit=crop&w=800&q=80",
  flowers: "https://images.unsplash.com/photo-1615149596875-fd86ebf18b54?auto=format&fit=crop&w=800&q=80",
};

const principles = [
  ["Kalite Standartları", "Tarımsal ve veteriner ürünlerinde en yüksek kalite standartlarına bağlı kalarak güvenilir üretim sağlıyoruz."],
  ["Sorumlu Tedarik Zinciri", "Tedarik zincirimizi titizlikle yöneterek yalnızca etik ve sürdürülebilir kaynaklardan ham madde temin ediyoruz."],
  ["Etik Üretim", "Üretim süreçlerimizde çalışanlarımızın ve hayvanların refahına saygı duyan etik yöntemleri benimsiyoruz."],
];

const supply = [
  ["Etik ve Sürdürülebilir Kaynaklar", "Hammaddeleri yalnızca güvenilir ve sürdürülebilir kaynaklardan temin ediyoruz."],
  ["İzlenebilirlik ve Şeffaflık", "Tedarik zincirinin her aşamasında tam izlenebilirlik sağlıyor, her ürünün kaynağını şeffaf biçimde takip ediyoruz."],
  ["Kalite Güvencesi", "Tedarik edilen hammaddeler uluslararası sağlık ve güvenlik standartlarına uygunluk açısından test edilip analiz edilir."],
  ["Yerel ve Küresel İş Ortaklıkları", "Sektördeki güvenilir iş ortaklarıyla uzun vadeli ilişkiler kurarak istikrarlı üretim sağlıyoruz."],
];

export default function UretimPolitikamiz() {
  return (
    <>
      <PageHero
        eyebrow="Üretim Politikamız"
        title={
          <>
            Kalite, güvenlik ve{" "}
            <span className="text-gold">sürdürülebilirlik</span> ilkeleriyle.
          </>
        }
        intro="Hayvan sağlığına yönelik en etkili çözümleri, uluslararası kalite ve güvenlik standartlarına bağlı kalarak üretiyoruz."
      />

      {/* İlkeler */}
      <section className="wrap py-24 md:py-32">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 md:grid-cols-3">
          {principles.map(([t, d], i) => (
            <Reveal key={t} delay={i * 90} className="bg-paper">
              <div className="h-full p-9">
                <span className="font-mono text-sm text-gold">0{i + 1}</span>
                <h3 className="mt-5 font-display text-xl font-semibold text-forest">{t}</h3>
                <p className="mt-3 text-ink/65 leading-relaxed">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* GMP / Kalite */}
      <section className="bg-paper-2 py-24 md:py-32">
        <div className="wrap grid items-center gap-14 md:grid-cols-2">
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image src={IMG.lab} alt="Kalite kontrol laboratuvarı" fill className="duotone object-cover" sizes="(max-width:768px) 100vw, 50vw" />
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow mb-5">Kalite ve Güvenlik Standartlarımız</p>
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight">
              GMP sertifikalı, her partide test edilen üretim.
            </h2>
            <ul className="mt-8 space-y-6">
              <li className="border-l-2 border-gold pl-5">
                <p className="font-display text-lg text-forest">GMP Standartlarına Uygunluk</p>
                <p className="mt-1 text-ink/65 leading-relaxed">
                  Tüm üretim tesislerimiz GMP (Good Manufacturing Practices)
                  sertifikalıdır; ilaçlarımız en yüksek hijyen koşullarında
                  üretilir.
                </p>
              </li>
              <li className="border-l-2 border-gold pl-5">
                <p className="font-display text-lg text-forest">Kalite Kontrol Süreçlerimiz</p>
                <p className="mt-1 text-ink/65 leading-relaxed">
                  Her ürün, piyasaya sürülmeden önce titizlikle test edilir ve
                  analiz edilir. Uzman ekiplerimiz her aşamada güvenilirlik ve
                  etkinliği sağlar.
                </p>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Sürdürülebilir üretim */}
      <section className="wrap py-24 md:py-32">
        <Reveal className="mb-14 max-w-2xl">
          <p className="eyebrow mb-4">Sürdürülebilir ve Etik Üretim</p>
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight">
            Çevreye ve hayvan refahına duyarlı süreçler.
          </h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Çevre Dostu Üretim", "Karbon ayak izimizi azaltmak için yenilenebilir enerji ve geri dönüştürülebilir ambalajlar kullanıyoruz."],
            ["Hayvan Dostu Araştırmalar", "Ürün geliştirme süreçlerimizde hayvan refahını önceliklendiriyor, etik test prosedürlerine bağlı kalıyoruz."],
            ["Minimum Atık Politikası", "Atık yönetimini optimize ederek üretim süreçlerimizin çevresel etkisini en aza indiriyoruz."],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 90}>
              <div className="h-full rounded-3xl border border-ink/8 bg-bone p-8">
                <span className="font-mono text-xs text-gold">0{i + 1}</span>
                <h3 className="mt-4 font-display text-xl font-semibold text-forest">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Sorumlu tedarik zinciri */}
      <section className="bg-paper-2 py-24 md:py-32">
        <div className="wrap grid gap-14 md:grid-cols-[1fr_1.15fr] md:items-center">
          <Reveal className="grid grid-cols-2 gap-3">
            {[IMG.rice, IMG.wheat, IMG.flowers, IMG.field].map((src, i) => (
              <div key={i} className={`relative aspect-square overflow-hidden rounded-2xl ${i % 2 ? "mt-6" : ""}`}>
                <Image src={src} alt="Sürdürülebilir tarımsal kaynak" fill className="duotone object-cover" sizes="25vw" />
              </div>
            ))}
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow mb-5">Sorumlu Tedarik Zinciri</p>
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight">
              En kaliteli hammadde, etik kaynaktan.
            </h2>
            <div className="mt-8 space-y-5">
              {supply.map(([t, d], i) => (
                <div key={t} className="flex gap-4">
                  <span className="mt-1 font-mono text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-display text-lg text-forest">{t}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink/65">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
