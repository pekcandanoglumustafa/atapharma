import Image from "next/image";
import Link from "next/link";
import CellField from "@/components/CellField";
import Reveal from "@/components/Reveal";

const IMG = {
  cattle: "https://images.unsplash.com/photo-1504868501898-007584e184a5?auto=format&fit=crop&w=1400&q=80",
  sheep: "https://images.unsplash.com/photo-1511771426841-8119ef5f32fd?auto=format&fit=crop&w=1400&q=80",
  vaccine: "https://images.unsplash.com/photo-1651760301007-5080dc7fc6a9?auto=format&fit=crop&w=1200&q=80",
  cow: "https://images.unsplash.com/photo-1522621771832-8b4cd9278a2c?auto=format&fit=crop&w=1200&q=80",
  flock: "https://images.unsplash.com/photo-1522103537430-b4cbddab48d1?auto=format&fit=crop&w=1200&q=80",
  calf: "https://images.unsplash.com/photo-1704138031220-22798f8fafcb?auto=format&fit=crop&w=1200&q=80",
  micro: "https://images.unsplash.com/photo-1639772823907-a716be4bdecc?auto=format&fit=crop&w=1400&q=80",
  pasture: "https://images.unsplash.com/photo-1719410742736-18414b1f9d03?auto=format&fit=crop&w=1400&q=80",
};

const species = [
  { tag: "01", name: "İnekler", latin: "Bovine" },
  { tag: "02", name: "Koyunlar", latin: "Ovine" },
  { tag: "03", name: "Buzağılar", latin: "Calf" },
  { tag: "04", name: "Oğlaklar", latin: "Caprine" },
];

const products = [
  {
    title: "İnekler İçin İlaç",
    img: IMG.cow,
    body: "Bağışıklık sistemini güçlendiren özel formüller ile ineklerin sağlıklı kalmasını ve yüksek verim sağlamasını destekliyoruz. Sindirim sağlığını, bağışıklık fonksiyonlarını ve süt üretimini artıran çözümler.",
  },
  {
    title: "Koyunlar İçin İlaç",
    img: IMG.flock,
    body: "Koyunların sağlıklı gelişimi ve hastalıklara karşı direnç kazanması için özel bağışıklık destek ürünleri geliştiriyoruz. Sindirim düzenleyici, vitamin ve mineral takviyeli çözümler.",
  },
  {
    title: "Buzağılar İçin Yenilikçi Çözümler",
    img: IMG.calf,
    body: "Yeni doğan buzağıların bağışıklık sistemini güçlendiren yenilikçi çözümlerle, hayvanların ilk günlerinden itibaren güçlü ve sağlıklı büyümelerini sağlıyoruz. Hastalık riskini azaltan besin destekleri.",
  },
];

const values = [
  {
    k: "Güvenilirlik",
    d: "Hayvan sağlığı için en yüksek kalite ve güvenlik standartlarını sağlıyoruz.",
  },
  {
    k: "Bilimsel Yaklaşım",
    d: "Tüm ürünlerimiz bilimsel araştırmalar ve Ar-Ge çalışmalarıyla desteklenmektedir.",
  },
  {
    k: "Sürdürülebilirlik",
    d: "Çevreye ve hayvan refahına duyarlı, sürdürülebilir üretim anlayışıyla çalışıyoruz.",
  },
];

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-forest-deep text-paper">
        <CellField className="absolute inset-0 h-full w-full opacity-90" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 15% 10%, rgba(20,64,44,0) 0%, rgba(14,42,29,0.6) 60%, rgba(10,27,18,0.95) 100%)",
          }}
        />

        <div className="wrap relative z-10 py-28">
          <div className="max-w-3xl animate-floatIn">
            <p className="eyebrow-gold mb-6 flex items-center gap-3">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
              Veteriner İmmünoloji · GMP Üretim
            </p>
            <h1 className="font-display text-[clamp(2.7rem,6.2vw,5.4rem)] font-semibold leading-[1.02] tracking-[-0.02em]">
              Hayvan sağlığının{" "}
              <span className="text-gold">bilimsel</span> savunması.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-paper/75">
              İnek, koyun, buzağı ve oğlakların bağışıklık sistemini güçlendiren
              özel formülasyonlar. Bilimsel araştırmalarla desteklenen, güvenilir
              veteriner ilaçları üretiyoruz.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/urunler" className="btn-gold">
                Ürünleri İncele
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="/kurulus" className="btn-ghost text-paper">
                Hikayemiz
              </Link>
            </div>
          </div>
        </div>

        {/* species ticker */}
        <div className="absolute inset-x-0 bottom-0 z-10 border-t border-paper/10 bg-forest-900/40 backdrop-blur-sm">
          <div className="wrap grid grid-cols-2 divide-x divide-paper/10 md:grid-cols-4">
            {species.map((s) => (
              <div key={s.tag} className="flex items-center gap-3 py-5 pr-4 first:pl-0 md:pl-6">
                <span className="font-mono text-xs text-gold">{s.tag}</span>
                <div className="leading-tight">
                  <p className="font-display text-lg">{s.name}</p>
                  <p className="font-mono text-[0.6rem] uppercase tracking-widest text-paper/40">{s.latin}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- HAKKIMIZDA ---------- */}
      <section className="wrap grid items-center gap-14 py-24 md:grid-cols-2 md:py-32">
        <Reveal>
          <p className="eyebrow mb-5">Hakkımızda</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.08] tracking-tight">
            Bilimle beslenen,{" "}
            <span className="italic text-moss">merada</span> denenmiş güven.
          </h2>
          <div className="mt-6 space-y-4 text-ink/75 leading-relaxed">
            <p>
              <strong className="text-ink">ATA Pharma</strong>, hayvan sağlığı
              alanında güvenilir ve yenilikçi çözümler sunan bir veteriner ilaç
              şirketidir. İnek, koyun, buzağı ve oğlakların bağışıklık sistemini
              güçlendiren özel formülasyonlar geliştiriyoruz.
            </p>
            <p>
              Misyonumuz; hayvanların sağlıklı bir yaşam sürmesini destekleyen
              etkili ve güvenilir ilaçlar üretmek, çiftçilerin ve veteriner
              hekimlerin ihtiyaçlarına en iyi şekilde cevap vermektir.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6 border-t border-ink/10 pt-8">
            {[
              ["4", "Hedef tür"],
              ["GMP", "Üretim standardı"],
              ["Ar-Ge", "Bilimsel temel"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-display text-3xl text-forest">{n}</p>
                <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-widest text-ink/50">{l}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image src={IMG.vaccine} alt="Laboratuvarda aşı hazırlığı" fill className="duotone object-cover" sizes="(max-width:768px) 100vw, 50vw" />
          </div>
          <div className="absolute -bottom-8 -left-6 hidden w-48 overflow-hidden rounded-2xl border-4 border-paper shadow-xl sm:block">
            <div className="relative aspect-square">
              <Image src={IMG.sheep} alt="Merada koyun sürüsü" fill className="duotone object-cover" sizes="200px" />
            </div>
          </div>
          <div className="absolute -right-4 -top-4 rounded-2xl bg-forest px-5 py-4 text-paper shadow-lg">
            <p className="font-mono text-[0.6rem] uppercase tracking-widest text-gold-soft">Odak</p>
            <p className="font-display text-lg">Bağışıklık</p>
          </div>
        </Reveal>
      </section>

      {/* ---------- ÜRÜN KATEGORİLERİ ---------- */}
      <section className="bg-paper-2 py-24 md:py-32">
        <div className="wrap">
          <Reveal className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-4">Hizmetlerimiz</p>
              <h2 className="max-w-2xl font-display text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.08] tracking-tight">
                Her tür için, o türe özel formülasyon.
              </h2>
            </div>
            <Link href="/urunler" className="link-underline shrink-0 font-mono text-sm uppercase tracking-widest text-moss">
              Tüm ürünler →
            </Link>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/8 bg-bone transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(12,27,19,0.35)]">
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image src={p.img} alt={p.title} fill className="duotone object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 100vw, 33vw" />
                    <span className="absolute left-4 top-4 rounded-full bg-forest-900/70 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-widest text-gold-soft backdrop-blur">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-display text-xl font-semibold text-forest">{p.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">{p.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- DEĞERLER ---------- */}
      <section className="wrap py-24 md:py-32">
        <Reveal className="mb-14 max-w-2xl">
          <p className="eyebrow mb-4">Değerlerimiz</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.08] tracking-tight">
            Güvenilirlik, bilim ve sürdürülebilirlik.
          </h2>
        </Reveal>
        <div className="grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.k} delay={i * 90} className="bg-paper">
              <div className="h-full p-9">
                <span className="font-mono text-sm text-gold">0{i + 1}</span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-forest">{v.k}</h3>
                <p className="mt-3 text-ink/65 leading-relaxed">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- GMP / KALİTE BANDI ---------- */}
      <section className="relative overflow-hidden bg-forest-deep py-24 text-paper md:py-32">
        <Image src={IMG.micro} alt="" fill className="object-cover opacity-15" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900 via-forest-deep/90 to-forest-deep/70" />
        <div className="wrap relative grid gap-14 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="eyebrow-gold mb-5">Üretim Politikamız</p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.08] tracking-tight">
              GMP standartlarında, izlenebilir üretim.
            </h2>
            <p className="mt-6 max-w-lg text-paper/75 leading-relaxed">
              Tüm üretim tesislerimiz GMP (Good Manufacturing Practices)
              standartlarına uygun çalışır. Her ürün, piyasaya sürülmeden önce
              titizlikle test edilir; tedarik zincirinin her aşamasında tam
              izlenebilirlik ve şeffaflık sağlanır.
            </p>
            <Link href="/uretim-politikamiz" className="btn-gold mt-9">
              Üretim politikamız
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <ul className="space-y-px overflow-hidden rounded-2xl border border-paper/15">
              {[
                ["GMP Uygunluğu", "En yüksek hijyen koşullarında üretim"],
                ["Kalite Kontrol", "Her partide test ve analiz"],
                ["Etik Üretim", "Çalışan ve hayvan refahına saygı"],
                ["Sürdürülebilir Tedarik", "Etik ve izlenebilir hammadde"],
              ].map(([t, d], i) => (
                <li key={t} className="flex items-start gap-5 bg-paper/5 p-6">
                  <span className="font-mono text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-display text-lg">{t}</p>
                    <p className="text-sm text-paper/60">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------- BİLİM VURGUSU ---------- */}
      <section className="wrap grid items-center gap-14 py-24 md:grid-cols-[1fr_1.1fr] md:py-32">
        <Reveal className="relative order-2 md:order-1">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem]">
            <Image src={IMG.pasture} alt="Merada inek sürüsü" fill className="duotone object-cover" sizes="(max-width:768px) 100vw, 50vw" />
          </div>
        </Reveal>
        <Reveal delay={100} className="order-1 md:order-2">
          <p className="eyebrow mb-5">Araştırma & Geliştirme</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.08] tracking-tight">
            Formüllerin arkasında{" "}
            <span className="italic text-moss">yayımlanmış bilim</span> var.
          </h2>
          <p className="mt-6 text-ink/75 leading-relaxed">
            Hayvan sağlığı alanında en yeni teknolojileri ve bilimsel
            araştırmaları kullanarak veteriner ilaçlarında etkinlik ve
            güvenilirlik sağlıyoruz. Ar-Ge yaklaşımımız akademik yayınlar ve
            saha verileriyle desteklenir.
          </p>
          <a href="https://scholar.google.com/citations?user=yMe9ZQUAAAAJ&hl=tr" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-forest link-underline">
            Bilimsel yayımlarımız
            <svg width="12" height="12" viewBox="0 0 12 12"><path d="M3 9l6-6M4 3h5v5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </Reveal>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="wrap pb-24 md:pb-32">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-forest px-8 py-16 text-center text-paper md:px-16 md:py-24">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-moss/30 blur-3xl" />
          <p className="eyebrow-gold relative mb-5">İletişim</p>
          <h2 className="relative mx-auto max-w-2xl font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight">
            Sürünüz için doğru çözümü birlikte belirleyelim.
          </h2>
          <p className="relative mx-auto mt-5 max-w-md text-paper/70">
            Ürünlerimiz ve iş birlikleri hakkında bilgi almak için bize ulaşın.
          </p>
          <Link href="/iletisim" className="btn-gold relative mt-9">
            Bize ulaşın
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </Reveal>
      </section>
    </>
  );
}
