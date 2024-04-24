import configPromise from "@/cms/payload.config";
import Container from "@/components/layout/Container";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import type { AttendeeCategory } from "@payload-types";
import { AttendeeCategories } from "./AttendeeCategories";


export default async function GroupsPage() {

	const payload = await getPayloadHMR({
		config: configPromise,
		onInit: (payload) => {
			console.log("Payload initialized", payload);
		}
	});

	const groupsCollection = await payload.find({
		collection: "groups",
		depth: 2,
	});

	const groups = groupsCollection.docs

	return (
		<Container>
			{/* <pre>{JSON.stringify(groups, null, 2)}</pre> */}
			<h1>Groups</h1>
			<ul className="grid gap-2">
				{groups.map((group) => (
					<li key={group.name} className="p-2 border-2 border-solid  	">
						<h2>{group.name}</h2>
						<p>{group.description}</p>
						<p>{group.status}</p>
						<ul>{
						group?.schedule?.map((schedule) => {
							if (typeof schedule === "number") return;
							return (
								schedule.weekdays.map((weekday) => {
									return <li key={schedule.id} className="font-bold uppercase">
										{weekday}: {schedule.startTime} - {schedule.endTime}
									</li>
								
								}
								)
							)
						})}
						</ul>

						{
							(typeof group.location !== "number") &&
							(typeof group.location !== undefined) &&
							(
								<p>
									{group.location?.address}, {group.location?.postcode}
								</p>
							)
						}

						{group.moderators?.map((moderator) => {
							if (typeof moderator === "number") return;
							return <p key={moderator.id}>{moderator.email}</p>;
						})}

						<AttendeeCategories attendeeCategories={group.attendeeCategories} />

					</li>
				))}
			</ul>
		</Container>
	);
}
