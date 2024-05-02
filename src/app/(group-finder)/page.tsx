"use server";

import Container from "@/components/layout/Container";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";
import { Filter, Heart, Map as MapIcon } from "lucide-react";
import { BackgroundBlobs } from "@/components/backgrounds/Blobs";


// TODO - move this to CMS
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
				<div className="container items-center bg-white rounded-t-lg mx-auto">
					<div className="py-20 text-center flex flex-col items-center  max-w-4xl mx-auto">
						<h1 className="text-balance text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter font-sans text-gray-800">
							Find parent and <HighlightWord>playgroups</HighlightWord> in your{" "}
							<HighlightWord>local area</HighlightWord> 🥳.
						</h1>
						<p className="mt-6 text-balance text-lg md:text-xl text-muted-foreground max-w-prose">
							Your guide to finding local parent and play groups. Search for
							groups, see what&apos;s happening, and connect with other parents and
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
				</div>
			


			<section className="container py-20 bg-violet-50 rounded-b-lg mx-auto  ">

					<div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
						{services.map(({ name, Icon, description }) => (
							<div key={name} className="flex flex-col items-center space-y-4">
								<div className="p-4  text-white text-lg md:text-xl bg-gradient-to-br to-indigo-500 via-violet-500 from-purple-500 rounded-full">
									<Icon size={36} />
								</div>
								<h3 className="text-2xl font-bold text-gray-800">{name}</h3>
								<p className="text-lg text-balance text-center max-w-30 text-gray-700">{description}</p>
							</div>
						))}
					</div>


			</section>

		</>
	);
}

const HighlightWord = ({ children }: { children: ReactNode }) => {
	return <span className="text-violet-500">{children}</span>;
};
