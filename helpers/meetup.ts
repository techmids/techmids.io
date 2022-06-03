import axios from "axios";
import ical from "ical";

export async function getMeetupEvents(group: GroupConfig): Promise<Event[]> {
	const { data: ics } = await axios.get(group.ical);

	const events = ical.parseICS(ics);

	return Object.values(events)
		.filter((event) => event.type === "VEVENT")
		.filter((event) => event.url !== undefined)
		.map((event) => {
			const start = event.start as Date;
			const end = event.end as Date;

			return {
				title: event.summary || group.name,
				link: event.url as string,
				group: {
					name: group.name,
				},
				startsAt: start.toISOString(),
				endsAt: end.toISOString(),
			};
		});
}

interface GroupConfig {
	name: string;
	ical: string;
}

interface Group {
	name: string;
}

export interface Event {
	title: string;
	startsAt: string;
	endsAt: string;
	group: Group;
	link: string;
}
