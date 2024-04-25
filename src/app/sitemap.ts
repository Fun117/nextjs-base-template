import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import meta from '../../metadata.config';
import i18nConfig from '../../i18n.config';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const result: MetadataRoute.Sitemap = [];

	for (const lang of i18nConfig.locales) {
		const dirPath = path.join(process.cwd(), `src/app/[lang]`);

		if (fs.existsSync(dirPath)) {
			const items = fs.readdirSync(dirPath, { withFileTypes: true });

			for (const item of items) {
				if (item.isDirectory()) {
					const pagePath = path.join(dirPath, item.name, 'page.tsx');
					if (fs.existsSync(pagePath)) {
						const langConfig = i18nConfig.localeConfigs[lang];
						const url = `${meta.origin}/${langConfig.path}/${item.name}`;

						result.push({
							url: url,
							lastModified: new Date().toISOString(),
							changeFrequency: 'daily', // ここで明示的に指定
							priority: 0.7, // ここで明示的に指定
							alternates: {
								languages: i18nConfig.locales.reduce<{ [key: string]: string }>((acc, l) => {
									const langConfig = i18nConfig.localeConfigs[l];
									acc[langConfig.htmlLang] = `${meta.origin}/${langConfig.path}/${item.name}`;
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
