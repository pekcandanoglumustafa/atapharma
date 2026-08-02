import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Ürünler",
  description:
    "AtaColostrum, ImmuLine, RumenAta Metabolic Support, 4 Seasons Cattle & Calf Bolus, Ata Ket Bolus ve Calsemix Bolus — ATA Pharma'nın veteriner ürün ailesi.",
};

export default function Urunler() {
  return (
    <>
      <PageHero
        eyebrow="Ürünler"
        title={
          <>
            Sürünüz için{" "}
            <span className="text-gold">bilimle formüle edilmiş</span> ürünler.
          </>
        }
        intro={`Bağışıklık, sindirim ve metabolizma sağlığını destekleyen ${PRODUCTS.length} ürün. Hedef türe göre filtreleyin.`}
      />
      <ProductGrid products={PRODUCTS} />
    </>
  );
}
