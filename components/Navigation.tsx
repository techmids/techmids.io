import { DarkModeToggle } from "./DarkModeToggle";
import TechMids from "./tech-mids.svg";

export function Navigation() {
	return (
		<header className="container mx-auto py-6 flex justify-between">
			<TechMids className="h-12" />
			<ul className="flex items-center gap-6 text-xl">
				<li>
					<DarkModeToggle />
				</li>
			</ul>
		</header>
	);
}
