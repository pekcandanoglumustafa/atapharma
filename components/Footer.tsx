import Link from "next/link";
import Logo from "./Logo";
import { SITE } from "@/lib/site";

const socials = [
  { href: "https://www.facebook.com/", label: "Facebook" },
  { href: "https://www.instagram.com/", label: "Instagram" },
  { href: "https://tiktok.com/", label: "TikTok" },
  { href: "https://x.com/", label: "X" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-deep text-paper">
      {/* top hairline glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="wrap grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo variant="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/70">
            İnek, koyun, buzağı ve oğlakların bağışıklık sistemini güçlendiren,
            bilimsel temelli veteriner ilaçları üretiyoruz.
          </p>
          <div className="mt-6 flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/20 text-xs transition-colors hover:border-gold hover:text-gold"
              >
                {s.label[0]}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow-gold mb-4">Kurumsal</p>
          <ul className="space-y-2.5 text-sm text-paper/75">
            <li><Link href="/kurulus" className="link-underline">Kuruluş</Link></li>
            <li><Link href="/misyonumuz" className="link-underline">Misyonumuz</Link></li>
            <li><Link href="/uretim-politikamiz" className="link-underline">Üretim Politikamız</Link></li>
            <li>
              <a href="https://scholar.google.com/citations?user=yMe9ZQUAAAAJ&hl=tr" target="_blank" rel="noopener noreferrer" className="link-underline">
                Yayımlarım
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow-gold mb-4">Keşfet</p>
          <ul className="space-y-2.5 text-sm text-paper/75">
            <li><Link href="/urunler" className="link-underline">Ürünler</Link></li>
            <li><Link href="/haberler" className="link-underline">Haberler</Link></li>
            <li><Link href="/iletisim" className="link-underline">İletişim</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow-gold mb-4">İletişim</p>
          <ul className="space-y-3 text-sm text-paper/75">
            <li>
              <span className="block text-paper/45 font-mono text-[0.68rem] uppercase tracking-widest">E-posta</span>
              <a href={`mailto:${SITE.email}`} className="link-underline">{SITE.email}</a>
            </li>
            <li>
              <span className="block text-paper/45 font-mono text-[0.68rem] uppercase tracking-widest">Telefon</span>
              <a href={`tel:${SITE.phoneRaw}`} className="link-underline">{SITE.phone}</a>
            </li>
            <li>
              <span className="block text-paper/45 font-mono text-[0.68rem] uppercase tracking-widest">Adres</span>
              {SITE.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="wrap flex flex-col items-center justify-between gap-3 py-6 text-xs text-paper/50 sm:flex-row">
          <p>© {new Date().getFullYear()} ATA Pharma. Tüm hakları saklıdır.</p>
          <p className="font-mono uppercase tracking-widest">GMP · Veteriner İmmünoloji · Türkiye</p>
        </div>
      </div>
    </footer>
  );
}
