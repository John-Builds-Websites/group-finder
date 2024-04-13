"use server";

import Container from "@/components/layout/Container";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";
import { Filter, Heart, Map as MapIcon } from "lucide-react";

const services = [
	{
		name: "Filter",
		Icon: Filter,
		description: "Filter groups by location, time, and suitability.",
	},
	{
		name: "Follow",
		Icon: Heart,
		description: "Follow groups and get updates on new events.",
	},
	{
		name: "Find",
		Icon: MapIcon,
		description: "Find groups on a map and get directions to the venue.",
	},
] as const;

export default async function HomePage() {
	return (
		<>
			<Container>
				<div className="py-20 mx-auto text-center flex flex-col items-center  max-w-4xl">
					<h1 className="text-balance text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-sans text-gray-800">
						Find parent and <HighlightWord>play groups</HighlightWord> in your{" "}
						<HighlightWord>local area</HighlightWord>.
					</h1>
					<p className="mt-6 text-balance text-lg md:text-xl text-muted-foreground max-w-prose">
						Your guide to finding local parent and play groups. Search for
						groups, see what's happening, and connect with other parents and
						carers.
					</p>
					<div className=" mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
						<Button variant="default" asChild>
							<Link href="/groups/">Search Groups</Link>
						</Button>
						<Button variant="outline" asChild>
							<Link href="/groups/">Learn More &rarr;</Link>
						</Button>
					</div>
				</div>
			</Container>

			<section
				className="py-20 bg-violet-50  ">
				<Container>
					<div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
						{services.map(({ name, Icon, description }) => (
							<div key={name} className="flex flex-col items-center space-y-4">
								<div className="p-4 text-white bg-gradient-to-br to-indigo-500 via-violet-500 from-purple-500 rounded-full">
									<Icon size={48} />
								</div>
								<h3 className="text-2xl font-bold text-gray-800">{name}</h3>
								<p className="text-lg text-gray-700">{description}</p>
							</div>
						))}
					</div>

				</Container>
			</section>

			
		</>
	);
}

const HighlightWord = ({ children }: { children: ReactNode }) => {
	return <span className="text-violet-500">{children}</span>;
};
