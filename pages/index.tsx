import type { NextPage } from "next";
import Head from "next/head";
import { Navigation } from "@/components/Navigation";

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
			<Navigation />
			<main className="container mx-auto">
				<h1 className="text-2xl">Hello, World.</h1>
			</main>
		</>
	);
};

export default Home;
