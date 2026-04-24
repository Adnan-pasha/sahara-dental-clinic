import type { MetadataRoute } from "next";

import { routeStructure } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return routeStructure.app.map((path) => ({
    url: path === "/" ? siteConfig.url : `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path.startsWith("/blog") ? "monthly" : "weekly",
    priority: path === "/" ? 1 : path === "/services" ? 0.9 : 0.8
  }));
}
