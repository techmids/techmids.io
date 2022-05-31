import axios from "axios";

interface Group {
	name: string;
}

export interface Event {
	title: string;
	startsAt: number;
	length: number;
	group: Group;
	link: string;
}

export async function getMeetupEvents(slug: string): Promise<Event[]> {
	const { data: events } = await axios.get(
		`https://api.meetup.com/${slug}/events`
	);

	return events.map((event: any) => ({
		title: event.name,
		link: event.link,
		group: {
			name: event.group.name,
		},
		startsAt: event.time,
		length: event.duration,
	}));
}
