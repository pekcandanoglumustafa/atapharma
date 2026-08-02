import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/products";

const base = "https://atapharma.com.tr";
const routes = [
  "",
  "/kurulus",
  "/misyonumuz",
  "/bilim-danismani",
  "/uretim-politikamiz",
  "/urunler",
  "/haberler",
  "/iletisim",
  ...PRODUCTS.map((p) => `/urunler/${p.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : r.startsWith("/urunler/") ? 0.8 : 0.7,
  }));
}
