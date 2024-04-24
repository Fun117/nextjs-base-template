
import { Metadata } from "next";

import ClientComponent from "./_components";

export const metadata: Metadata = {
	title: `About`
}

export default async function Home({ params }: { params: { locale: string } }) {
	const lang = params.locale;

	return (
		<>
			<ClientComponent />
		</>
	);
}