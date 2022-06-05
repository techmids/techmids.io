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
				<title>Thousand Events</title>
				<meta
					name="description"
					content="Thousand Events believe Birmingham can be the best place to work in tech"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navigation />
			<main className="container mx-auto">
				<h1 className="text-2xl pb-4">
					Birmingham can be the best place to work in tech.
					<br />
					We want to make it happen.
				</h1>
				<section className="pb-4">
					<h2 id="calendar" className="text-xl pb-2">
						Events
					</h2>
					<p className="pb-2">
						We&apos;ve created a list of all the events running in Birmingham,
						if we&apos;ve missed something{" "}
						<a
							href="https://twitter.com/messages/compose?recipient_id=2418632972&text=Hey%20%F0%9F%91%8B%20I%20think%20you%27ve%20missed%20an%20event%20from%20the%20thousand.events%20website"
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
						About us
					</h2>
					<p className="pb-2">
						We are engineers who work in Birmingham and run events in Birmingham
						like{" "}
						<a
							href="https://brum.js.org"
							target="_blank"
							rel="noreferrer"
							className="underline"
						>
							Brum.js
						</a>
						. We believe Birmingham should be the best place to work in tech.
					</p>
				</section>
			</main>
		</>
	);
};

export default Home;
