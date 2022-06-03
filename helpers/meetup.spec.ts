import nock from "nock";
import { getMeetupEvents } from "./meetup";

describe("meetup", () => {
	describe("getMeetupEvents", () => {
		it("should fetch events from the Google Calendar sync", async () => {
			const ics =
				"BEGIN:VCALENDAR\r\n" +
				"PRODID:-//Google Inc//Google Calendar 70.9054//EN\r\n" +
				"VERSION:2.0\r\n" +
				"CALSCALE:GREGORIAN\r\n" +
				"METHOD:PUBLISH\r\n" +
				"X-WR-CALNAME:Events - Fusion Technology Meetup - Birmingham\r\n" +
				"X-WR-TIMEZONE:UTC\r\n" +
				"BEGIN:VEVENT\r\n" +
				"DTSTART:20220616T170000Z\r\n" +
				"DTEND:20220616T200000Z\r\n" +
				"DTSTAMP:20220601T113257Z\r\n" +
				"UID:event_285816895@meetup.com\r\n" +
				"URL:https://www.meetup.com/Fusion-Technology-Meetup-Birmingham/events/28581\r\n" +
				" 6895/\r\n" +
				"CLASS:PUBLIC\r\n" +
				"CREATED:20220601T112553Z\r\n" +
				"DESCRIPTION:Fusion Technology Meetup - Birmingham\\nThursday\\, June 16 at 6:\r\n" +
				" 00 PM\\n\\n(IF YOU WANT TO ATTEND FUSION IN PERSON THEN YOU WILL NEED TO PURC\r\n" +
				" HASE YOUR TICKET THROUGH THE EVENTBRITE LINK: (https://www.eventbrite.com/e\r\n" +
				" /fusion-m...\\n\\nPrice: 5.00 GBP\\n\\nhttps://www.meetup.com/Fusion-Technology\r\n" +
				" -Meetup-Birmingham/events/285816895/\r\n" +
				"LAST-MODIFIED:20220601T112553Z\r\n" +
				"LOCATION:Studio Venues - Explore & Atrium Bar & Roof Terrace (7 Cannon Stre\r\n" +
				" et\\, Birmingham\\, B2 5EP\\, Birmingham\\, United Kingdom)\r\n" +
				"SEQUENCE:0\r\n" +
				"STATUS:CONFIRMED\r\n" +
				"SUMMARY:Fusion Meetup (An evening with Jake Archibald) \r\n" +
				"TRANSP:OPAQUE\r\n" +
				"END:VEVENT\r\n" +
				"END:VCALENDAR\r\n";

			const config = {
				name: "Fusion Technology Meetup",
				ical: "https://calendar.google.com/calendar/ical/fusion.ics",
			};

			const scope = nock("https://calendar.google.com")
				.get("/calendar/ical/fusion.ics")
				.reply(200, ics, { "access-control-allow-origin": "http://localhost" });

			const expected = [
				{
					endsAt: "2022-06-16T20:00:00.000Z",
					group: {
						name: "Fusion Technology Meetup",
					},
					link: "https://www.meetup.com/Fusion-Technology-Meetup-Birmingham/events/285816895/",
					startsAt: "2022-06-16T17:00:00.000Z",
					title: "Fusion Meetup (An evening with Jake Archibald) ",
				},
			];

			const actual = await getMeetupEvents(config);

			expect(actual).toEqual(expected);

			expect(scope.isDone()).toBe(true);
		});
	});
});
