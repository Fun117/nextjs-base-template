
import { Metadata, ResolvingMetadata } from "next";
import { LayoutProps } from "../layout";

import { getTranslation } from "@/app/i18n/server";

import ClientComponent from "./_components";

const meta = {
	title: `About`
}
export async function generateMetadata(
	{ params }: LayoutProps,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const lang = params.lang
	const { t } = await getTranslation(lang);

	return {
		title: t(meta.title),
	}
}

export default async function Home({ params }: { params: { locale: string } }) {
	const lang = params.locale;

	return (
		<>
			<ClientComponent />
		</>
	);
}