import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import _config from "../../base.config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const result: MetadataRoute.Sitemap = [];

  for (const lang of _config.i18n.locales) {
    const langConfig = _config.i18n.localeConfigs[lang];
    const homeUrl = `${_config.meta.origin}/${langConfig.path}`;

    result.push({
      url: homeUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1.0,
      alternates: {
        languages: _config.i18n.locales.reduce<{ [key: string]: string }>(
          (acc, l) => {
            const langConfig = _config.i18n.localeConfigs[l];
            acc[
              langConfig.htmlLang
            ] = `${_config.meta.origin}/${langConfig.path}`;
            return acc;
          },
          {}
        ),
      },
    });

    const dirPath = path.join(process.cwd(), `src/app/[lang]`);

    if (fs.existsSync(dirPath)) {
      const items = fs.readdirSync(dirPath, { withFileTypes: true });

      for (const item of items) {
        if (
          item.isDirectory() &&
          !_config.sitemap?.excludedDirs?.includes(item.name)
        ) {
          const pagePath = path.join(dirPath, item.name, "page.tsx");
          if (fs.existsSync(pagePath)) {
            const url = `${_config.meta.origin}/${langConfig.path}/${item.name}`;

            result.push({
              url: url,
              lastModified: new Date().toISOString(),
              changeFrequency: "daily",
              priority: 0.7,
              alternates: {
                languages: _config.i18n.locales.reduce<{
                  [key: string]: string;
                }>((acc, l) => {
                  const langConfig = _config.i18n.localeConfigs[l];
                  acc[
                    langConfig.htmlLang
                  ] = `${_config.meta.origin}/${langConfig.path}/${item.name}`;
                  return acc;
                }, {}),
              },
            });
          }
        }
      }
    }
  }

  return result;
}
