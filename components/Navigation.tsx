export function Navigation() {
	return (
		<header className="container mx-auto py-6 flex justify-between">
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				src="/thousand-community.svg"
				alt="Thousand Community"
				className="h-12"
			/>
			<ul className="flex items-center gap-6 text-xl">
				<li>
					<a href="#">Calendar</a>
				</li>
				<li>
					<a href="#">About us</a>
				</li>
			</ul>
		</header>
	);
}
