import { AttendeeCategories } from "../../../components/AttendeeCategories";
import { formatTime } from "@/lib/time";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "@/components/Link";
import NextLink from "next/link";
import { Button } from "@/components/ui/button";
import type { Group, Location as Venue } from "@/cms/payload-types";
import { HiMapPin } from "react-icons/hi2";
import { BiBadgeCheck, BiCalendarWeek } from "react-icons/bi";
import { AddToCalendarButton } from 'add-to-calendar-button-react';

import { GoogleMapsEmbed } from '@next/third-parties/google'

type GroupListProps = {
	groups: Group[]
}

const GoogleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";

type GroupVenueProps = {
	venue?: string | Venue | null | undefined;
}

function GroupVenue({ venue }: GroupVenueProps) {
	if (typeof venue === "string") return;
	if (!venue?.address) return;
	if (!venue?.postcode) return;

	return (
		<div>
			<span className="flex flex-row gap-2 "><h3>Venue</h3></span>

			<Button asChild variant={"outline"} >
				<NextLink 
				href={`https://www.google.com/maps/search/?api=1&query=${venue?.address}+${venue?.postcode}`} 
				autoCapitalize="true" 
				referrerPolicy="no-referrer" 
				target="_blank"
				className="text-pretty h-auto grid grid-cols-[20px_1fr] gap-2"
				>
				<HiMapPin className="h-[18px] w-[18px]"/>	{venue?.address}, {venue?.postcode}
				</NextLink>
			</Button>
		</div>
	);
}


export function GroupList({ groups }: GroupListProps) {
	return (

		<>
			{/* <GoogleMapsEmbed
				apiKey={GoogleMapsApiKey}
				height={200}
				width="100%"
				allowfullscreen={true}
				loading="lazy"
				style="border:0;"
				region="uk"
				mode="directions"
				q="TW18 4BB"
			/> */}
			<ul className="grid gap-2">
				{groups.length === 0 && <li>No groups found</li>}

				{groups.map(group => <li key={group.name}>
					<Card className="bg-white bg-opacity-80 bg-blend-multiply">
						<CardHeader>


							<CardTitle className="flex flex-row gap-2 whitespace-nowrap">
								<span className="text-xl align-middle">{group.name}</span>
								{(group.status === "active") && <BiBadgeCheck className="text-blue-700" />}
							</CardTitle>
							<AttendeeCategories attendeeCategories={group.attendeeCategories} />
							<CardDescription>
								{group.description}
							</CardDescription>


						</CardHeader>
						<CardContent className="">


							{	/* DESCRIPTION */}
							<p>{group.description}</p>


							{	/* SCHEDULE */}
							<div className="bg-slate-100 rounded p-2 ">
								<span>
									<BiCalendarWeek />
									<h3>Schedule</h3>
								</span>

								{group.weeklySchedule?.map(({ schedule }) => {
									if (!schedule) return;
									if (typeof schedule === "string") return;
									if (!schedule.weekdays) return;

									return (
										<ul key={schedule.id}>

											{schedule.weekdays.map(weekday => {
												return (
													<li key={weekday} className="py-1 flex flex-row">
														<div className="capitalize font-bold w-16">{weekday}:</div> {formatTime(schedule.startTime)} - {formatTime(schedule.endTime)}
														<AddToCalendarButton

															providers={['google', 'outlook', 'apple', 'yahoo']}
														/>
													</li>
												)
											})}

										</ul>
									)
								})}
							</div>

							{	/* CONTACT DETAILS */}
							<ul className="flex flex-col gap-2s">
								{group.contactDetails?.map(contactDetail => {
									const label = contactDetail.customLabel ?? contactDetail.type;
									if (!contactDetail.type) return;
									let href: string = "";

									if (contactDetail.type === "email") {
										href = `mailto:${contactDetail.value}`;
									}

									if (contactDetail.type === "phone") {
										href = `tel:${contactDetail.value}`;
									}

									if (contactDetail.type === "url") {
										href = contactDetail.value;
									}

									return (
										<li key={contactDetail.id}>
											<Link href={href}>
												{label}
											</Link>
										</li>
									);
								})}
							</ul>

							{	/* LOCATION */}

							<GroupVenue venue={group.location} />


							{	/* MODERATORS */}
							{group.moderators?.map(moderator => {
								if (typeof moderator === "number") return;
								return <p key={moderator.id}>{moderator.email}</p>;
							})}


						</CardContent>
					</Card>
				</li>)}
			</ul>
		</>);
}
