
import ClientComponent from "./_components/home";

export default async function Home({ params }: { params: { lang: string } }) {
	const lang = params.lang;

	return (
		<>
			<ClientComponent />
		</>
	);
}