import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Thousand Community</title>
				<meta
					name="description"
					content="Thousand Community believe Birmingham can be the best place to work in tech"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<h1 className="text-2xl">Thousand Community</h1>
			</main>
		</>
	);
};

export default Home;
