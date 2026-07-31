// Merkezi site bilgileri — gerçek değerlerle güncellenmeli.
// Aşağıdaki iletişim bilgileri mevcut siteden alındı; placeholder olanlar işaretli.
export const SITE = {
  name: "ATA Pharma",
  email: "info@atapharma.com.tr", // NOT: eski sitede "info@atafarma.com" yazıyordu (yazım hatası)
  phone: "+90 123 456 7890", // TODO: gerçek numara ile değiştirilecek (placeholder)
  phoneRaw: "+901234567890",
  address: "Türkiye",
  hours: "Pazartesi – Cuma",
  scholar: "https://scholar.google.com/citations?user=yMe9ZQUAAAAJ&hl=tr",
};

// Bilimsel danışman / kurumsal bilimsel lider.
// NOT (Mustafa için): Aşağıdaki akademik bilgiler kamuya açık kaynaklardan doğrulandı
// (Balıkesir Üni. Vet. Fak., Fırat Üni. geçmişi, TVHB Bilim Kurulu, yayınlar).
// "role" alanını gerçek ilişkiye göre değiştir: "Bilimsel Danışman" / "Kurucu" /
// "Bilim Kurulu Başkanı" vb. Fotoğraf için `photo` alanına gerçek görsel yolu ekleyebilirsin.
export const ADVISOR = {
  name: "Prof. Dr. Mehmet Ali Azman",
  initials: "MA",
  role: "Bilimsel Danışman", // TODO: gerçek unvana göre güncelle
  field: "Hayvan Besleme ve Beslenme Hastalıkları",
  university: "Balıkesir Üniversitesi, Veteriner Fakültesi",
  photo: "", // TODO: gerçek fotoğraf yolu (ör. "/img/azman.jpg") — boşsa monogram gösterilir
  scholar: "https://scholar.google.com/citations?user=yMe9ZQUAAAAJ&hl=tr",
  lead: "ATA Pharma'nın formülasyonlarının arkasında, hayvan besleme alanında onlarca yıllık akademik birikim var.",
  bio: [
    "Prof. Dr. Mehmet Ali Azman, veteriner hekimliğinde hayvan besleme ve beslenme hastalıkları alanında uzmanlaşmış bir akademisyendir. Hâlihazırda Balıkesir Üniversitesi Veteriner Fakültesi Zootekni ve Hayvan Besleme Bölümü'nde görev yapmaktadır.",
    "Akademik kariyeri boyunca Fırat Üniversitesi Veteriner Fakültesi'nde Hayvan Besleme ve Beslenme Hastalıkları Anabilim Dalı başkanlığını yürütmüş; ruminant beslemesi, yem hammaddelerinin metabolik enerji değerlerinin belirlenmesi ve probiyotik uygulamaları üzerine çok sayıda araştırmaya imza atmıştır.",
    "Türk Veteriner Hekimleri Birliği (TVHB) Bilim Kurulu'nda hayvan besleme alanında görev almış ve alanın temel başvuru kaynaklarından biri olan \"Hayvan Besleme ve Beslenme Hastalıkları\" ders kitabının ortak yazarları arasında yer almıştır.",
  ],
  focus: [
    ["Ruminant Beslemesi", "Sığır, koyun ve keçilerde bağışıklık, verim ve sağlığı destekleyen bilimsel besleme yaklaşımları."],
    ["Probiyotik & Laktik Asit Bakterileri", "Sindirim sistemi florasını düzenleyen canlı mikroorganizma ve fermentasyon çalışmaları."],
    ["Yem & Metabolik Enerji", "Yem hammaddelerinin enzim ve gaz teknikleriyle enerji değerlerinin belirlenmesi."],
    ["Beslenme Hastalıkları", "Yanlış besleme kaynaklı sindirim sistemi bozukluklarının önlenmesi ve verime etkisi."],
  ],
  stats: [
    ["25+", "Yıllık akademik deneyim"],
    ["100+", "Bilimsel atıf"],
    ["Prof. Dr.", "Akademik unvan"],
  ],
};
