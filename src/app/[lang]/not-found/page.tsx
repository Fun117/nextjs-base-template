"use client";

import { useLanguage, useTranslation } from "@/app/i18n/client";
import PageClientLayout from "@/components/client/PageClient_layout";

// Render the default Next.js 404 page when a route
// is requested that doesn't match the middleware and
// therefore doesn't have a locale associated with it.

export default function Home({ params }: { params: { lang: string } }) {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <PageClientLayout
      title={t("site:page-not-found")}
      description={t("site:page-not-found-description")}
    />
  );
}
