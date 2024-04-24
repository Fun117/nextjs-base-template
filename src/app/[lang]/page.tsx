
import ClientComponent from "./_components";

export default async function Home({ params }: { params: { locale: string } }) {
	const lang = params.locale;

	return (
		<>
			<ClientComponent />
		</>
	);
}