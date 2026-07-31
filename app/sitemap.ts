import type { MetadataRoute } from "next";

const base = "https://atapharma.com.tr";
const routes = ["", "/kurulus", "/misyonumuz", "/uretim-politikamiz", "/urunler", "/haberler", "/iletisim"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
