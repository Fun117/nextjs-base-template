import { Metadata, ResolvingMetadata } from "next";
import { LayoutProps } from "../layout";

// i18n
import { getTranslation } from "@/app/i18n/server";

// Layout
import PageClientLayout_About from "./_components/about";

const meta = {
  title: `About`,
};
export async function generateMetadata(
  { params }: LayoutProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = params.lang;
  const { t } = await getTranslation(lang);

  return {
    title: t(meta.title),
  };
}

export default async function Home({ params }: { params: { lang: string } }) {
  const lang = params.lang;

  return <PageClientLayout_About />;
}
