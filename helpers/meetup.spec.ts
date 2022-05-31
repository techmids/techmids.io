import nock from "nock";
import { getMeetupEvents } from "./meetup";

describe("meetup", () => {
	describe("getMeetupEvents", () => {
		it("should fetch events from the Meetup API", async () => {
			const response = [
				{
					name: "July 2022",
					link: "https://www.meetup.com/brum_js/events/123",
					group: {
						name: "Brum.js",
					},
					time: 1655398800000,
					duration: 10800000,
				},
			];
			const cors = {
				"Access-Control-Allow-Origin": "*",
			};

			const scope = nock("https://api.meetup.com")
				.get("/brum_js/events")
				.reply(200, response, cors);

			const expected = [
				{
					title: "July 2022",
					link: "https://www.meetup.com/brum_js/events/123",
					group: {
						name: "Brum.js",
					},
					startsAt: 1655398800000,
					length: 10800000,
				},
			];

			const actual = await getMeetupEvents("brum_js");
			expect(actual).toEqual(expected);

			expect(scope.isDone()).toBe(true);
		});
	});
});
