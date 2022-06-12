import type { NextPage } from "next";
import Head from "next/head";
import { Navigation } from "@/components/Navigation";
import groups from "@/config/meetup-groups.json";
import { DateTime } from "luxon";
import { getGoogleCalendarEvents, Event } from "@/helpers/google-calendar";

interface Props {
	events: Event[];
}

export async function getServerSideProps(): Promise<{ props: Props }> {
	const groupEvents = await Promise.all(groups.map(getGoogleCalendarEvents));

	const events = groupEvents
		.flat()
		.sort(
			(a, z) => new Date(a.startsAt).getTime() - new Date(z.startsAt).getTime()
		)
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
				<title>Tech Mids</title>
				<meta
					name="description"
					content="Tech Mids is a group of meetup organisers helping each other out"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navigation />
			<main className="container mx-auto">
				<h1 className="text-2xl pb-4">
					Tech Mids is a group of meetup organisers helping each other out.
				</h1>
				<p className="pb-4">
					We believe Birmingham can be the best place to work in tech and are
					working together to make the community the best it can be.
				</p>
				<section className="pb-4">
					<h2 id="calendar" className="text-xl pb-2">
						Events
					</h2>
					<p className="pb-2">
						We&apos;ve created a list of all the events running in Birmingham,
						if we&apos;ve missed something{" "}
						<a
							href="https://twitter.com/messages/compose?recipient_id=1534443614297804801&text=Hey%20%F0%9F%91%8B%20I%20think%20you%27ve%20missed%20an%20event%20from%20the%20techmids.io%20website"
							target="_blank"
							rel="noreferrer"
							className="underline"
						>
							please tell us.
						</a>
					</p>
					<ul>
						{events.map((event, index) => {
							return (
								<li key={index}>
									{DateTime.fromISO(event.startsAt)
										.setZone("Europe/London")
										.setLocale("en-GB")
										.toLocaleString()}{" "}
									{event.title}
									{event.title.includes(event.group.name) ||
										` - ${event.group.name}`}
								</li>
							);
						})}
					</ul>
				</section>
				<section className="pb-4">
					<h2 id="about" className="text-xl pb-2">
						Who are we?
					</h2>
					<p className="pb-2">
						We are organisers who believe Birmingham should be the best place to
						work in tech, and believe we&apos;re stronger working together.
					</p>
					<p className="pb-1">Together, we organise:</p>
					<ul>
						<li>Brum.js</li>
						<li>DevOps Birmingham</li>
						<li>Golang Birmingham</li>
						<li>Fusion Technology Meetup Birmingham</li>
						<li>CoffeeOps Birmingham</li>
						<li>Lab Chat</li>
						<li>You Equal Tech Midlands</li>
						<li>BrumPHP</li>
					</ul>
				</section>
			</main>
		</>
	);
};

export default Home;
