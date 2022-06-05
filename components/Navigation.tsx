export function Navigation() {
	return (
		<header className="container mx-auto py-6 flex justify-between">
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img src="/1000.svg" alt="Thousand Events" className="h-12" />
			<ul className="flex items-center gap-6 text-xl">
				<li>
					<a href="#calendar">Events</a>
				</li>
				<li>
					<a href="#about">About us</a>
				</li>
			</ul>
		</header>
	);
}
