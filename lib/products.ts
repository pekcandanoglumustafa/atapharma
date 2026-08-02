// ATA Pharma ürün verileri — atapharma.com.tr ürün sayfalarından birebir alınmıştır.
// Yeni ürün eklemek için bu diziye yeni bir nesne eklemen yeterli; liste ve
// detay sayfaları otomatik olarak oluşur.

export type Ingredient = { name: string; amount: string };

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  categories: string[]; // "Sığır" | "Buzağı" | "Koyun – Keçi" | "At" | "Kedi – Köpek" | "Tavuk"
  isNew?: boolean;
  intro: string[];
  features: string[];
  ingredientsLabel: string; // tablo ikinci sütun başlığı
  ingredients: Ingredient[];
  usage?: string[];
  net?: string;
  // TODO: gerçek ürün görselleri eklendiğinde public/urunler/<slug>.jpg olarak koy
  image?: string;
};

export const CATEGORIES = [
  "Tüm ürünler",
  "At",
  "Buzağı",
  "Kedi – Köpek",
  "Koyun – Keçi",
  "Sığır",
  "Tavuk",
] as const;

export const PRODUCTS: Product[] = [
  {
    slug: "atacolostrum",
    name: "AtaColostrum",
    tagline: "Buzağı, kuzu ve oğlaklar için bağışıklık destekleyici oral solüsyon",
    categories: ["Buzağı", "Koyun – Keçi"],
    isNew: true,
    net: "Premiks, her kutuda 2 x 30 ml",
    intro: [
      "AtaColostrum, yeni doğan buzağı, kuzu ve oğlakların bağışıklık sistemini güçlendirmek, eser mineral ihtiyacını karşılamak ve sağlıklı bir başlangıç yapmalarını sağlamak için formüle edilmiştir.",
      "Bağışıklık desteği sağlarken, yemden daha iyi faydalanmalarına yardımcı olur ve hayvanların yüksek performans potansiyeliyle büyümesine katkıda bulunur.",
    ],
    features: [
      "Yeni doğan buzağı, kuzu ve oğlakların bağışıklık sistemini destekler.",
      "Eser mineral ve vitamin ihtiyacını karşılar.",
      "Yemden faydalanmayı artırır, sağlıklı büyümeye katkıda bulunur.",
      "Sindirim sağlığını destekleyerek ishal ve diğer enfeksiyonlara karşı direnç kazandırır.",
      "Kolostrum tozu içeriği sayesinde doğal bağışıklık koruması sağlar.",
    ],
    usage: [
      "Yeni doğan buzağılarda, doğumdan sonraki ilk 48 saat içinde dilin arkasına 15 ml enjekte edilir. Daha güçlü bir etki için 15. günde tekrarlamak gerekir.",
      "Yeni doğan kuzularda, yavru develerde ve oğlaklarda, doğumdan sonraki ilk 48 saat içinde dilin arkasına 3 ml enjekte edilir.",
      "Saklama: Serin, kuru ve loş yerlerde ambalajlı olarak saklayın.",
    ],
    ingredientsLabel: "Düzeyi (1 Litrede)",
    ingredients: [
      { name: "A Vitamini (E672)", amount: "1.000.000 IU" },
      { name: "D3 Vitamini (E671)", amount: "100.000 IU" },
      { name: "E Vitamini (3a700)", amount: "20.000 mg" },
      { name: "C Vitamini (E300)", amount: "100.000 mg" },
      { name: "Tiyamin (3a)", amount: "35 mg" },
      { name: "Riboflavin (3a)", amount: "34 mg" },
      { name: "B6 Vitamini (3a832)", amount: "17 mg" },
      { name: "Kobalamin (3a)", amount: "15 mg" },
      { name: "L-Arjinin (2b)", amount: "10.000 mg" },
      { name: "L-Glutamat (2b)", amount: "30.000 mg" },
      { name: "Zn Klorit (3b609)", amount: "1.000 mg" },
      { name: "Fe Klorit (3b)", amount: "800 mg" },
      { name: "Colostrum Powder (2a)", amount: "1.000 mg" },
      { name: "E. Faceum (1l)", amount: "2x10^8 kob/kg" },
      { name: "Bifido Bacterium (1l)", amount: "2x10^8 kob/kg" },
      { name: "B. Subtilus (1l)", amount: "2x10^8 kob/kg" },
      { name: "L. Casei (1l)", amount: "2x10^8 kob/kg" },
      { name: "Rosmarinus Officinalis (2b)", amount: "10.000 mg" },
      { name: "Curcuma Longa (2b)", amount: "10.000 mg" },
      { name: "Mannan Oligosakkarit (MOS)", amount: "5.000 mg" },
      { name: "Beta Glukan", amount: "2.000 mg" },
      { name: "Spirulina Algae", amount: "2.000 mg" },
      { name: "Buğday Nişastası", amount: "q.s.p" },
      { name: "Carboxymethylcellulose 100 (E466)", amount: "10.000 mg" },
      { name: "Microcrystalline Cellulose %100 (E460)", amount: "8.500 mg" },
      { name: "Dextrose Monohydrate (CAS 77938-63-7)", amount: "q.s.p" },
      { name: "Distilled Water", amount: "q.s.p" },
    ],
  },
  {
    slug: "immuline",
    name: "ImmuLine",
    tagline: "Yeni doğan kuzu ve buzağılarda bağışıklık sistemini destekleyen takviye",
    categories: ["Buzağı", "Koyun – Keçi"],
    isNew: true,
    intro: [
      "Kuzu ve buzağılar yeni doğduklarında enfeksiyonlara karşı hassastır. ImmuLine, içeriğindeki etkin maddeler sayesinde özellikle E. Coli ve Salmonella ishallerine karşı etkilidir.",
      "Ayrıca Criptosporidiyosis ve Rota Virüs (Bovinerotavirüs - BRV) enfeksiyonlarına karşı koruyucu etki gösterir. Şiddetli ishal vakalarında diğer tedavilerle birlikte destekleyici olarak kullanılmalıdır.",
    ],
    features: [
      "Bağışıklık sistemini güçlendirir ve hastalıklara karşı direnci artırır.",
      "Yeni doğan hayvanların ishale karşı korunmasını sağlar.",
      "Solunum sorunlarının giderilmesine yardımcı olur.",
      "Yem (süt) tüketimini artırarak canlı ağırlık kazanımını iyileştirir.",
      "Deri lezyonlarını azaltır ve tüylerin parlak görünmesini sağlar.",
    ],
    usage: [
      "Buzağı ishallerinde: Günde 2 defa 25 ml, 1 gün oral (ağız) yoldan.",
      "Kuzu / Oğlak ishallerinde: Günde 2 defa 5 ml, 1 gün oral (ağız) yoldan.",
      "Bağışıklık sisteminin desteklenmesinde: Günde 2 defa 4-10 ml, 10 gün oral (ağız) yoldan.",
      "Veteriner hekim tarafından başka bir şekilde tavsiye edilmediği takdirde uygulanır.",
    ],
    ingredientsLabel: "Miktarı",
    ingredients: [
      { name: "M.O.S.", amount: "200.000 mg/kg" },
      { name: "L-Aspartik Asit (2b)", amount: "7.544 mg/kg" },
      { name: "L-Glutamik Asit (2b)", amount: "8.746,66 mg/kg" },
      { name: "Sistin (3c391)", amount: "1.312 mg/kg" },
      { name: "Lizin (3.2.1)", amount: "482,66 mg/kg" },
      { name: "Treonin (3.3.1)", amount: "2.952 mg/kg" },
      { name: "Arjinin (3c3.6.1)", amount: "1.858 mg/kg" },
      { name: "Valin (3c3.7.1)", amount: "3.717,33 mg/kg" },
      { name: "L-İzolösin (3c3.8.1, 2b)", amount: "2.624 mg/kg" },
      { name: "Histidin (3c3.5.1)", amount: "1.640 mg/kg" },
      { name: "Triptofan (3.4.1)", amount: "874,66 mg/kg" },
      { name: "L-Lösin (2b)", amount: "5.248 mg/kg" },
      { name: "L-Fenilalanin (2b)", amount: "2.952 mg/kg" },
      { name: "Alanin (2b)", amount: "5.029,33 mg/kg" },
      { name: "Glisin (2b)", amount: "2.952 mg/kg" },
      { name: "L-Prolin (2b)", amount: "3.170,66 mg/kg" },
      { name: "Serin (2b)", amount: "2.952 mg/kg" },
      { name: "DL-Methionin (3c301)", amount: "1.312 mg/kg" },
      { name: "Triozin", amount: "2.514,66 mg/kg" },
      { name: "Su (H₂O)", amount: "—" },
    ],
  },
  {
    slug: "rumenata-metabolic-support",
    name: "RumenAta Metabolic Support",
    tagline: "Ruminantlarda sindirim sağlığını destekleyen metabolik takviye",
    categories: ["Sığır", "Koyun – Keçi"],
    isNew: true,
    net: "100 gr",
    intro: [
      "RumenAta Metabolic Support, ruminant hayvanlarda sindirim bozukluklarını hızla iyileştirmeye yardımcı olur.",
      "Özellikle asidozis, yem vurgunu (arpalama), iştah kaybı ve doğum sonrası sindirim problemlerinde etkili bir destek sağlar. İçeriğindeki probiyotikler ve mineraller sayesinde rumen sağlığını koruyarak pH dengesini düzenler ve yem tüketimini teşvik eder.",
    ],
    features: [
      "Sindirim bozukluklarında iyileşme sürecini hızlandırır.",
      "Asidozis olgularında rumen pH dengesini korur.",
      "Yem tüketimini artırarak ketozis riskini azaltır.",
      "Yeni doğum yapmış ineklerde iştahı artırır.",
      "Operasyon geçiren hayvanlarda erken iyileşmeyi destekler.",
      "Antibiyotik içermez, kalıntı bırakmaz, laktasyon ve besi döneminde güvenle kullanılabilir.",
    ],
    usage: [
      "Serin, kuru ve nemsiz ortamda saklanmalıdır.",
      "En uygun depolama ömrü üretim tarihinden itibaren 24 aydır.",
    ],
    ingredientsLabel: "Miktarı",
    ingredients: [
      { name: "Saccharomyces cerevisiae", amount: "300.000 mg/kg" },
      { name: "Magnezyum Oksit", amount: "300.000 mg/kg" },
      { name: "Kalkerleşmiş Deniz Algi", amount: "50.000 mg/kg" },
      { name: "B1 Vitamini (Tiyamin)", amount: "200 mg/kg" },
      { name: "B2 Vitamini (Riboflavin)", amount: "250 mg/kg" },
      { name: "B3 Vitamini (Niyasin)", amount: "1.000 mg/kg" },
      { name: "B6 Vitamini (Pridoksin)", amount: "200 mg/kg" },
      { name: "Aliminosilikat (Klinoptolit)", amount: "—" },
    ],
  },
  {
    slug: "4-seasons-cattle-bolus",
    name: "4 Seasons Cattle Bolus",
    tagline: "Sığırların uzun süreli mineral ve vitamin ihtiyacını karşılayan bolus",
    categories: ["Sığır"],
    isNew: true,
    net: "2 x 70 gr",
    intro: [
      "Merada otlayan veya ahır besi yapılan danalar ile süt ineklerinin iz mineral ihtiyacını uzun süre karşılamak için geliştirilmiş bir bolustur.",
      "Yavaş salınım teknolojisi sayesinde her gün belirli miktarda çözünerek hayvanın ihtiyacını düzenli şekilde karşılar.",
      "Vitamin içeriği nedeniyle hayvan sağlığı ve verimi desteklenir.",
    ],
    features: [
      "180 gün boyunca sürekli mineral ve vitamin desteği sağlar.",
      "Büyüme ve gelişimi destekler.",
      "Yem tüketimini artırır ve canlı ağırlık kazanımını hızlandırır.",
      "Bağışıklık sistemini güçlendirir, hastalıklara karşı direnç kazandırır.",
      "Tırnak ve deri sağlığını iyileştirir.",
    ],
    usage: [
      "Bolus 250 kg canlı ağırlığa bir (1) bolus yutturulması, gerek görülürse 6 ay sonra ilave bir (1) bolus tavsiye edilir.",
      "Besi danalarına, damızlık düveler ve süt ineklerine kullanılır.",
      "Serin ve kuru yerde, oda sıcaklığında muhafaza ediniz.",
    ],
    ingredientsLabel: "Bolustaki Miktarı",
    ingredients: [
      { name: "Kobalt Karbonat %5 (3b802)", amount: "200 mg/kg" },
      { name: "Bakır Karbonat (E4)", amount: "7.500 mg/kg" },
      { name: "Kobalt Sülfat (E3)", amount: "250 mg/kg" },
      { name: "Mangan Sülfat (E5)", amount: "10.000 mg/kg" },
      { name: "Kalsiyum İyodat (E2)", amount: "300 mg/kg" },
      { name: "Çinko Oksit (E6)", amount: "15.000 mg/kg" },
      { name: "Sodyum Selenit (E8)", amount: "1.000 mg/kg" },
      { name: "Magnezyum Stearat (E572)", amount: "500 mg/kg" },
      { name: "Sodyum Benzoat (E211)", amount: "500 mg/kg" },
      { name: "Palmitik Asit (77938-6-7)", amount: "100.000 mg/kg" },
      { name: "Laktoz Monohidrat", amount: "q.s.p" },
      { name: "A Vitamini (E672)", amount: "500.000 IU/kg" },
      { name: "D3 Vitamini (E671)", amount: "100.000 IU/kg" },
      { name: "E Vitamini (3a700)", amount: "500 mg/kg" },
    ],
  },
  {
    slug: "4-seasons-calf-bolus",
    name: "4 Seasons Calf Bolus",
    tagline: "Buzağıların uzun süreli mineral ve vitamin ihtiyacını karşılayan bolus",
    categories: ["Buzağı", "Sığır"],
    isNew: true,
    intro: [
      "Merada otlayan veya ahırda yetiştirilen buzağı ve danaların iz mineral ve vitamin ihtiyacını uzun süre karşılamak için geliştirilmiş bir bolustur.",
      "Yavaş salınım teknolojisi sayesinde, her gün belirli miktarda çözünerek hayvanın ihtiyacını düzenli şekilde karşılar. Büyüme ve gelişimi destekler ve bağışıklık sistemini güçlendirir.",
    ],
    features: [
      "180 gün boyunca sürekli mineral ve vitamin desteği sağlar.",
      "Büyüme ve gelişimi destekler.",
      "Yem tüketimini artırır ve canlı ağırlık kazanımını hızlandırır.",
      "Bağışıklık sistemini güçlendirir, hastalıklara karşı direnç kazandırır.",
      "Tırnak ve deri sağlığını iyileştirir.",
    ],
    usage: [
      "Canlı ağırlığı 150 kg ve üzerindeki buzağılara verilmesi tavsiye edilir.",
      "150 kg canlı ağırlığa bir (1) bolus yutturulması, gerek görülürse 6 ay sonra ilave bir (1) bolus tavsiye edilir.",
      "Maksimum salınım periyodu yaklaşık 180 gündür.",
    ],
    ingredientsLabel: "Bolustaki Miktarı",
    ingredients: [
      { name: "Kobalt Karbonat %5 (3b802)", amount: "200 mg/kg" },
      { name: "Bakır Karbonat (E4)", amount: "7.500 mg/kg" },
      { name: "Kobalt Sülfat (E3)", amount: "250 mg/kg" },
      { name: "Mangan Sülfat (E5)", amount: "10.000 mg/kg" },
      { name: "Kalsiyum İyodat (E2)", amount: "300 mg/kg" },
      { name: "Çinko Oksit (E6)", amount: "15.000 mg/kg" },
      { name: "Sodyum Selenit (E8)", amount: "1.000 mg/kg" },
      { name: "Magnezyum Stearat (E572)", amount: "500 mg/kg" },
      { name: "Sodyum Benzoat (E211)", amount: "500 mg/kg" },
      { name: "Palmitik Asit (77938-6-7)", amount: "100.000 mg/kg" },
      { name: "Laktoz Monohidrat", amount: "q.s.p" },
      { name: "A Vitamini (E672)", amount: "500.000 IU/kg" },
      { name: "D3 Vitamini (E671)", amount: "100.000 IU/kg" },
      { name: "E Vitamini (3a700)", amount: "500 mg/kg" },
    ],
  },
  {
    slug: "ata-ket-bolus",
    name: "Ata Ket Bolus",
    tagline: "Ketozis riskine karşı metabolik destek bolusu",
    categories: ["Sığır"],
    isNew: true,
    net: "2 x 70 gr",
    intro: [
      "AtaKet Bolus, başta ketozis olmak üzere diğer metabolik hastalık risklerini azaltmak için geliştirilmiştir.",
      "İçeriğindeki niyasin, magnezyum ve enerji kaynakları sayesinde karaciğer fonksiyonlarını yerinde tutar ve negatif enerji dengesi durumunda sürdürülebilir bir işletme oluşmasına katkı sağlar.",
    ],
    features: [
      "Ketozis ve metabolik hastalık riskini azaltır.",
      "Karaciğer fonksiyonlarının korunmasına yardımcı olur.",
      "Negatif enerji dengesi döneminde destek sağlar.",
      "AtaCalsemix ile birlikte kullanıldığında etkisi artar.",
    ],
    usage: [
      "Bolus 250 kg canlı ağırlığa bir (1) bolus hesabıyla, doğumdan hemen sonra iki (2) bolus yutturulması, gerek görülürse 6 saat sonra ilave bir (1) bolus daha tavsiye edilir.",
      "Hastalık belirtileri başladığında iki (2) bolus verilebilir.",
      "Serin ve kuru yerde, oda sıcaklığında muhafaza ediniz.",
    ],
    ingredientsLabel: "Premiksteki Miktarı",
    ingredients: [
      { name: "İnaktif maya (rumen koruyucular)", amount: "1.000 mg/kg" },
      { name: "Niyasin (3a314)", amount: "400.000 mg/kg" },
      { name: "Kobalt Karbonat %5 (3b802)", amount: "200 mg/kg" },
      { name: "DL-Methionin (3c301)", amount: "120.000 mg/kg" },
      { name: "Betain", amount: "15.000 mg/kg" },
      { name: "B2 Vitamini (3a)", amount: "500 mg/kg" },
      { name: "B12 Vitamini (3a)", amount: "10 mg/kg" },
      { name: "Kolin Klorid (3a)", amount: "30.000 mg/kg" },
      { name: "Curcuma Longa (2b)", amount: "—" },
      { name: "Diğer bitkisel ekstraktlar", amount: "2.000 mg/kg" },
      { name: "Kalsiyum Propiyonat (E282)", amount: "150.00 mg/kg" },
      { name: "Magnezyum Stearat (E572)", amount: "500 mg/kg" },
      { name: "Sodyum Benzoat (E211)", amount: "500 mg/kg" },
      { name: "Laktoz Monohidrat (77938-6-7)", amount: "q.s.p" },
    ],
  },
  {
    slug: "calsemix-bolus",
    name: "Calsemix Bolus",
    tagline: "Doğum sonrası kalsiyum dengesini destekleyen bolus",
    categories: ["Sığır"],
    isNew: true,
    net: "2 x 72 gr",
    intro: [
      "AtaCalsemix, doğum sırasında kandaki kalsiyum seviyesini düzenlemek için geliştirilmiş bir besin takviyesidir.",
      "Hayvanların kalsiyum ihtiyacını hızlı bir şekilde karşılar; jel tüpleri veya sıvı katkılardaki aspirasyon riskini taşımaz. D3 vitamini organizmada kalsiyumun kullanımını kolaylaştırır, magnezyum ise kalsiyum metabolizması için önemlidir.",
    ],
    features: [
      "Kondisyon düzelir, negatif enerji dengesi pozitife yönelir.",
      "Gebe kalma oranı ve döl verimi iyileşir.",
      "Hayvanlar daha sağlıklı olur.",
      "Hayvanların yem tüketimi ve süt verimi artar.",
      "Bağışıklık sistemi güçlenir.",
      "En iyi sonucu almak için AtaKet Bolus ile birlikte verilmesi tavsiye edilir.",
    ],
    usage: [
      "Bolus 250 kg canlı ağırlığa bir (1) bolus hesabıyla, doğumdan hemen sonra iki (2) bolus yutturulması, gerek görülürse 6 saat sonra bir (1) bolus daha tavsiye edilir.",
      "Doğum belirtileri başladığında veya akut hipokalsemi vakalarında diğer tedavilere ek olarak bir (1) bolus verilebilir.",
      "Serin ve kuru yerde, oda sıcaklığında muhafaza ediniz.",
    ],
    ingredientsLabel: "Premiksteki Miktarı",
    ingredients: [
      { name: "Kalsiyum Format (E238)", amount: "280.000 mg/kg" },
      { name: "Sodyum Benzoat (E211)", amount: "500 mg/kg" },
      { name: "Magnezyum Stearat (E572)", amount: "500 mg/kg" },
      { name: "Lithothamnium Calcareum", amount: "420.000 mg/kg" },
      { name: "Magnezyum esansiyel", amount: "14.700 mg/kg" },
      { name: "D3 Vitamini (E671)", amount: "250.000 IU/kg" },
    ],
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
