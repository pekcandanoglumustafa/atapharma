import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "ATA Pharma ile iletişime geçin. Ürünlerimiz ve iş birlikleri hakkında bilgi almak için formu doldurun.",
};

export default function Iletisim() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title={
          <>
            Bize <span className="text-gold">ulaşın</span>.
          </>
        }
        intro="Ürünlerimiz hakkında daha fazla bilgi almak için aşağıdaki formu doldurun. Size en kısa sürede dönüş yapacağız."
      />

      <section className="wrap grid gap-14 py-24 md:grid-cols-[1fr_1.1fr] md:py-32">
        {/* Info */}
        <Reveal>
          <p className="eyebrow mb-5">İletişim Bilgileri</p>
          <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.6rem)] font-semibold leading-tight tracking-tight">
            Sürünüz için doğru çözümü birlikte belirleyelim.
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            ATA Pharma; inek, koyun, buzağı ve oğlakların bağışıklık sistemini
            güçlendiren ilaçlar üretir. Sorularınız için bizimle iletişime geçin.
          </p>

          <div className="mt-10 space-y-px overflow-hidden rounded-2xl border border-ink/10">
            {[
              ["E-posta", SITE.email, `mailto:${SITE.email}`],
              ["Telefon", SITE.phone, `tel:${SITE.phoneRaw}`],
              ["Adres", SITE.address, null],
              ["Çalışma Saatleri", SITE.hours, null],
            ].map(([label, value, href]) => (
              <div key={label as string} className="flex items-center justify-between gap-4 bg-paper-2/60 px-6 py-5">
                <span className="font-mono text-[0.66rem] uppercase tracking-widest text-ink/50">{label}</span>
                {href ? (
                  <a href={href as string} className="link-underline font-medium text-forest">{value}</a>
                ) : (
                  <span className="font-medium text-forest">{value}</span>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={120}>
          <div className="rounded-[2rem] border border-ink/10 bg-paper-2/40 p-7 md:p-9">
            <h3 className="mb-6 font-display text-xl font-semibold text-forest">
              Mesaj gönderin
            </h3>
            <ContactForm />
          </div>
        </Reveal>
      </section>
    </>
  );
}
