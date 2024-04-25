import configPromise from "@/cms/payload.config";
import Container from "@/components/layout/Container";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import type { AttendeeCategory } from "@payload-types";
import { AttendeeCategories } from "../../../components/AttendeeCategories";
import { formatTime } from "@/lib/time";
import { Badge } from "@/components/ui/badge";
import { Pagination } from "@/components/ui/pagination";
import { BackgroundBlobs } from "@/components/backgrounds/Blobs";
import { group } from "console";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "@/components/Link";
import NextLink from "next/link";
import { Url } from "url";
import { Button } from "@/components/ui/button";



export default async function GroupsPage() {

	const payload = await getPayloadHMR({
		config: configPromise,
		// email: process.env.NEXT_PUBLIC_PAYLOAD_EMAIL,
		onInit: (payload) => {
			console.log("Payload initialized", payload);
		}
	});

	const groupsCollection = await payload.find({
		pagination: true,
		collection: "groups",
		depth: 2,
	});

	const groups = groupsCollection.docs
		.map((doc) => doc)
		.filter((group) => {
			if (group.status === "active") return true
			if (group.status === "inactive") return true
			if (group.status === "pending") return true
			if (group.status === "archived") return false
			return false
		});

	return (
		<Container>

			<h1>Groups</h1>
			<BackgroundBlobs />


			<ul className="grid gap-2">
				{groups.length === 0 && <li>No groups found</li>}

				{groups.map((group) => (
					<li key={group.name} className="p-2  bg-white	rounded-md shadow-sm">

						<h2>{group.name}</h2>
						<p>{group.description}</p>

						{/* STATUS Badge*/}
						{/* {(group.status === "active") && <Badge variant="default">Active</Badge>} */}
						{(group.status === "inactive") && <Badge variant="destructive">Inactive</Badge>}
						{(group.status === "pending") && <Badge variant="outline">Pending Confirmation</Badge>}
						{/* {(group.status === "archived") && <Badge variant="default">Archived</Badge>} */}

						{/* SCHEDULE */}
						{/* <ul>{
							group?.schedule?.map((schedule) => {
								if (typeof schedule === "number") return;
								return (
									schedule.map((weekday) => {
										return <li key={schedule.id}>
											<span className="font-bold capitalize">{weekday}:</span> {formatTime(schedule.startTime)} - {formatTime(schedule.endTime)} <span>
												{schedule.additionalInfo &&
													<Badge variant={"outline"}>
														{schedule.additionalInfo}
													</Badge>
												}
											</span>
										</li>

									}
									)
								)
							})}
						</ul> */}

						{/* CONTACT DETAILS */}
						<ul className="flex flex-col gap-2s">
							{
								group.contactDetails?.map((contactDetail) => {
									const label = contactDetail.customLabel ?? contactDetail.type;
									if (!contactDetail.type) return

									let href: string = "";
									if (contactDetail.type === "email") { href = `mailto:${contactDetail.value}` }
									if (contactDetail.type === "phone") { href = `tel:${contactDetail.value}` }
									if (contactDetail.type === "url") { href = contactDetail.value }

									return (
										<li key={contactDetail.id}>
											<Link href={href}>
												{label}
											</Link>
										</li>
									)

								}
								)
							}
						</ul>

						{/* LOCATION */}
						{
							(typeof group.location !== "number") &&
							(typeof group.location !== "string") &&
							(typeof group.location !== undefined) &&
							(typeof group.location !== null) &&

							<Button asChild variant={"outline"}>
								<NextLink
									href={`https://www.google.com/maps/search/?api=1&query=${group.location?.address}+${group.location?.postcode}`}
									autoCapitalize="true"
									referrerPolicy="no-referrer"
									target="_blank"
								>
									{group.location?.address}, {group.location?.postcode}
								</NextLink>
							</Button>

						}

						{/* MODERATORS */}
						{group.moderators?.map((moderator) => {
							if (typeof moderator === "number") return;
							return <p key={moderator.id}>{moderator.email}</p>;
						})}

						{/* ATTENDEE CATEGORIES */}
						<AttendeeCategories attendeeCategories={group.attendeeCategories} />

					</li>
				))}
			</ul>
			{/* <Pagination {...groupsCollection} /> */}

			<hr />
			<Card>
				<CardHeader>
					<h2>Raw JSON for debugging</h2>
				</CardHeader>
				<CardContent>

					<pre>{JSON.stringify(groupsCollection, null, 2)}</pre>
				</CardContent>
			</Card>
		</Container>
	);
}
