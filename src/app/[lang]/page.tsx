import PageClientLayout_Home from "./_components/home";

export default async function Home({ params }: { params: { lang: string } }) {
  // const lang = params.lang;
  return <PageClientLayout_Home />;
}
