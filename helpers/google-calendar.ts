import { google } from "googleapis";
import { DateTime } from "luxon";

export async function getGoogleCalendarEvents(
	group: GroupConfig
): Promise<Event[]> {
	const auth = new google.auth.JWT({
		email: process.env.GOOGLE_CLIENT_EMAIL,
		key: Buffer.from(
			process.env.GOOGLE_CLIENT_KEY as string,
			"base64"
		).toString("utf8"),
		scopes: ["https://www.googleapis.com/auth/calendar"],
		subject: "luke@thousand.events",
	});

	const calendar = google.calendar("v3");

	const { data: list } = await calendar.events.list({
		auth,
		calendarId: group.calendarId,
	});

	const items = list.items || [];

	return items.map((event) => {
		const urlResult = /(https:\/\/www.meetup.com\/.*\/events\/\d+\/)$/.exec(
			event.description || ""
		);

		const url = urlResult instanceof Array ? urlResult[1] : group.url;

		return {
			title: event.summary?.trim() || group.name,
			link: url,
			group: {
				name: group.name,
			},
			startsAt: DateTime.fromISO(event.start?.dateTime as string)
				.setZone("Europe/London")
				.toISO(),
			endsAt: DateTime.fromISO(event.end?.dateTime as string)
				.setZone("Europe/London")
				.toISO(),
		};
	});
}

interface GroupConfig {
	name: string;
	url: string;
	calendarId: string;
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
