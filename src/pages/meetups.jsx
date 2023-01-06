import Head from "next/head";
import { SimpleLayout } from "@/components/SimpleLayout";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { meetups } from "../../meetups";
import Image from "next/image";
import Link from "next/link";

function openLink(href) {
	window.open(href, "_blank");
}

export default function Meetups() {
	return (
		<>
			<Head>
				<title>Meetups- TechMids</title>
				<meta
					name="description"
					content="Our list of member meetups, come along and get involved"
				/>
			</Head>
			<SimpleLayout
				title="Our Member Meetups and groups"
				intro="TODO"
			>

				return (
				<ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
					{meetups.map((meetup) => (
						<li key={meetup.name} className="relative">
							<div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
								<Link href={meetup.link}>
									<Image src={meetup.logo} alt={meetup.name}/>
									<button type="button" className="absolute inset-0 focus:outline-none">
										<span className="sr-only">View details for {meetup.Name}</span>
									</button>
								</Link>
							</div>
							<p className="pointer-events-none mt-2 block truncate text-sm font-medium text-zinc-600">{meetup.name}</p>
						</li>
						))}
				</ul>
			</SimpleLayout>
		</>
	)
}