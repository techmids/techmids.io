import { DarkModeToggle } from "./DarkModeToggle";

export function Navigation() {
	return (
		<header className="container mx-auto py-6 flex justify-between">
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img src="/tech-mids.svg" alt="Tech Mids" className="h-12" />
			<ul className="flex items-center gap-6 text-xl">
				<li>
					<DarkModeToggle />
				</li>
			</ul>
		</header>
	);
}
