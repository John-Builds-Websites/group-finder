import NextLink from "next/link";
import { Button } from "@/components/ui/button";
import { HiMapPin } from "react-icons/hi2";

export type GroupVenueProps = {
	venue?: string | Venue | null | undefined;
}

export function GroupVenue({ venue }: GroupVenueProps) {
	if (typeof venue === "string") return;
	if (!venue?.address) return;
	if (!venue?.postcode) return;

	return (
		<div>
			<span className="flex flex-row gap-2 "><h3>Venue</h3></span>

			<Button asChild variant={"outline"}>
				<NextLink
					href={`https://www.google.com/maps/search/?api=1&query=${venue?.address}+${venue?.postcode}`}
					autoCapitalize="true"
					referrerPolicy="no-referrer"
					target="_blank"
					className="text-pretty h-auto grid grid-cols-[20px_1fr] gap-2"
				>
					<HiMapPin className="h-[18px] w-[18px]" />	{venue?.address}, {venue?.postcode}
				</NextLink>
			</Button>
		</div>
	);
}
