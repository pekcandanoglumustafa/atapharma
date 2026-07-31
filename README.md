# ATA Pharma — Kurumsal Web Sitesi

Veteriner ilaç şirketi ATA Pharma için premium kurumsal web sitesi.
Next.js 14 (App Router) + Tailwind CSS.

## Tasarım kimliği
- **Palet:** Orman yeşili + serum altını + kemik kağıt
- **Tipografi:** Fraunces (başlık) · Inter (metin) · JetBrains Mono (etiket/veri)
- **İmza:** Hero'da mikroskop altındaki hücreleri anımsatan canlı "hücre alanı" animasyonu
- Tüm fotoğraflara marka bütünlüğü için yeşil duotone işlemi

## Sayfalar
`/` · `/kurulus` · `/misyonumuz` · `/uretim-politikamiz` · `/urunler` · `/haberler` · `/iletisim`

## Geliştirme
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # üretim derlemesi
```

## Deploy
Vercel'e bağlanınca otomatik derlenir. Ek yapılandırma gerekmez.

## Güncellenecek gerçek veriler (lib/site.ts)
- **Telefon:** şu an placeholder (`+90 123 456 7890`)
- **E-posta:** `info@atapharma.com.tr` (eski sitede `info@atafarma.com` — yazım hatası düzeltildi)
- **Adres / çalışma saatleri:** netleştirilecek
- **Logo:** SVG marka kullanılıyor; gerçek logo `components/Logo.tsx` içinde değiştirilebilir
- **İletişim formu:** şu an `mailto` ile çalışır; istenirse API route veya Formspree'ye bağlanır
- **Görseller:** mevcut sitedeki Unsplash görselleri kullanıldı; kendi fotoğraflarınla değiştirilebilir
