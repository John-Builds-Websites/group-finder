import configPromise from "@/cms/payload.config";
import Container from "@/components/layout/Container";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import type { AttendeeCategory } from "@payload-types";
import { AttendeeCategories } from "../../../components/AttendeeCategories";
import { formatTime } from "@/lib/time";
import { Badge } from "@/components/ui/badge";
import { Pagination } from "@/components/ui/pagination";
import { BackgroundBlobs } from "@/components/backgrounds/Blobs";


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
			if (group.status === "archived") return true
			return false
		});

	return (
		<Container>

			<h1>Groups</h1>
			<BackgroundBlobs/>
				<ul className="grid gap-2">
					{groups.map((group) => (
						<li key={group.name} className="p-2  bg-white	rounded-md shadow-sm">

							<h2>{group.name}</h2>
							<p>{group.description}</p>
							<Badge variant={group.status === "active" ? "secondary" : "destructive"}>{group.status}</Badge>

							{/* SCHEDULE */}
							<ul>{
								group?.schedule?.map((schedule) => {
									if (typeof schedule === "number") return;
									return (
										schedule.weekdays.map((weekday) => {
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
							</ul>

							{/* LOCATION */}
							{
								(typeof group.location !== "number") &&
								(typeof group.location !== undefined) &&
								(
									<p>
										{group.location?.address}, {group.location?.postcode}
									</p>
								)
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


			<pre>{JSON.stringify(groupsCollection, null, 2)}</pre>
		</Container>
	);
}
