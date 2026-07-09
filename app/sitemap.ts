import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tvoicompass.ru";

  const routes = [
    "",
    "/jily-su",
    "/bermamyt",
    "/dombay",
    "/elbrus",
    "/arkhyz",
    "/balkaria",
    "/aktoprak",
    "/osetia",
    "/chechnya",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}