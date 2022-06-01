import type { NextPage } from "next";
import Head from "next/head";
import { Navigation } from "@/components/Navigation";
import { getMeetupEvents, Event } from "@/helpers/meetup";
import groups from "@/config/meetup-groups.json";

interface Props {
	events: Event[];
}

export async function getServerSideProps(): Promise<{ props: Props }> {
	const groupEvents = await Promise.all(groups.map(getMeetupEvents));

	const events = groupEvents
		.flat()
		.sort((a, z) => a.startsAt - z.startsAt)
		.slice(0, 10);

	return {
		props: {
			events,
		},
	};
}

const Home: NextPage<Props> = ({ events }) => {
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
				<h1 className="text-2xl pb-4">Welcome to Thousand Community</h1>
				<section className="pb-4">
					<h2 id="calendar" className="text-xl">
						Calendar
					</h2>
					<ul>
						{events.map((event, index) => {
							return (
								<li key={index}>
									{event.title} - {event.group.name}
								</li>
							);
						})}
					</ul>
				</section>
				<section className="pb-4">
					<h2 id="about" className="text-xl">
						About us
					</h2>
					<p>
						We&apos;re a group of Birmingham based meetup organisers behind the
						Golang, DevOps Birmingham, Brum.js, Coffee Ops meetups who believe
						we&apos;re stronger working together than alone.
					</p>
				</section>
			</main>
		</>
	);
};

export default Home;
