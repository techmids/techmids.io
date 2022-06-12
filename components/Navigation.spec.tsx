import { Navigation } from "./Navigation";
import { axe } from "jest-axe";
import { render, screen, within } from "@testing-library/react";

describe("Navigation", () => {
	it.skip("should render list of links", async () => {
		const { container } = render(<Navigation />);

		const banner = screen.getByRole("banner");

		expect(banner).toBeVisible();

		const inBanner = within(banner);

		expect(inBanner.getByRole("img", { name: "Tech Mids" })).toBeVisible();

		const list = inBanner.getByRole("list");

		const inList = within(list);

		expect(inList.getByRole("link", { name: "Events" })).toBeVisible();
		expect(inList.getByRole("link", { name: "About us" })).toBeVisible();

		expect(await axe(container)).toHaveNoViolations();
	});
});
