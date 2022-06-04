import { getGoogleCalendarEvents } from "./google-calendar";
import { google as imported } from "googleapis";

const google = imported as jest.Mocked<typeof imported>;

jest.mock("googleapis", () => {
	return {
		google: {
			auth: {
				JWT: jest.fn().mockImplementation(() => "real.jwt.here"),
			},
			calendar: jest.fn().mockReturnValueOnce({
				events: {
					list: jest.fn().mockResolvedValueOnce({
						data: {
							items: [
								{
									kind: "calendar#event",
									created: "2022-06-02T14:20:21.000Z",
									updated: "2022-06-02T14:20:21.905Z",
									summary: "Fusion Meetup (An evening with Jake Archibald) ",
									description:
										"Fusion Technology Meetup - Birmingham\n" +
										"Thursday, June 16 at 6:00 PM\n" +
										"\n" +
										"(IF YOU WANT TO ATTEND FUSION IN PERSON THEN YOU WILL NEED TO PURCHASE YOUR TICKET THROUGH THE EVENTBRITE LINK: (https://www.eventbrite.com/e/fusion-m...\n" +
										"\n" +
										"Price: 5.00 GBP\n" +
										"\n" +
										"https://www.meetup.com/fusion-technology-meetup-birmingham/events/285816895/",
									location:
										"Studio Venues - Explore & Atrium Bar & Roof Terrace (7 Cannon Street, Birmingham, B2 5EP, Birmingham, United Kingdom)",
									start: {
										dateTime: "2022-06-16T17:00:00Z",
										timeZone: "Europe/London",
									},
									end: {
										dateTime: "2022-06-16T20:00:00Z",
										timeZone: "Europe/London",
									},
								},
							],
						},
					}),
				},
			}),
		},
	};
});

const env = Object.assign({}, process.env);

describe("google-calendar", () => {
	describe("getGoogleCalendarEvents", () => {
		beforeAll(() => {
			process.env.GOOGLE_CLIENT_EMAIL = "client@google.com";
			process.env.GOOGLE_CLIENT_KEY = "LS0tLUJFR0lOIFBSSVZBVEUgS0VZLi4uCg==";
		});

		afterAll(() => {
			process.env = env;
		});

		it("should auth with service account and fetch calendar", async () => {
			const expected = [
				{
					title: "Fusion Meetup (An evening with Jake Archibald)",
					group: {
						name: "Fusion Technology Meetup",
					},
					startsAt: "2022-06-16T18:00:00.000+01:00",
					endsAt: "2022-06-16T21:00:00.000+01:00",
					link: "https://www.meetup.com/fusion-technology-meetup-birmingham/events/285816895/",
				},
			];

			const actual = await getGoogleCalendarEvents({
				name: "Fusion Technology Meetup",
				calendarId:
					"0an1iuajngaqbtbt38e998dmvtttboiu@import.calendar.google.com",
				url: "https://www.meetup.com/fusion-technology-meetup-birmingham",
			});

			expect(google.auth.JWT).toHaveBeenCalledWith({
				email: process.env.GOOGLE_CLIENT_EMAIL,
				key: "----BEGIN PRIVATE KEY...\n",
				scopes: ["https://www.googleapis.com/auth/calendar"],
				subject: "luke@thousand.events",
			});

			expect(google.calendar).toHaveBeenCalledWith("v3");
			const [{ value: calendar }] = google.calendar.mock.results;

			expect(calendar.events.list).toHaveBeenCalledWith({
				auth: expect.anything(),
				calendarId:
					"0an1iuajngaqbtbt38e998dmvtttboiu@import.calendar.google.com",
			});

			expect(actual).toEqual(expected);
		});
	});
});
