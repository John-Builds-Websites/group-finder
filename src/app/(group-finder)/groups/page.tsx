import configPromise from "@/cms/payload.config";
import Container from "@/components/layout/Container";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { GroupList } from "../../../components/GroupList";
import { GroupFilter } from "./GroupFilter";

import type { Group } from "@/cms/payload-types";
import { Card } from "@/components/ui/card";

export default async function GroupsPage() {
	const payload = await getPayloadHMR({
		config: configPromise,
		// email: process.env.NEXT_PUBLIC_PAYLOAD_EMAIL,
		onInit: (payload) => {
			// console.log("Payload initialized", payload);
			console.log("Payload initialized");
		},
	});

	const {docs: groupsCollection} = await payload.find({
		pagination: true,
		collection: "groups",
		where: {
			status: {
				not_equals: "archived",
			},
		},
	}
	);

	const attendeeCategories = await payload.find({
		collection: "attendee-categories",
	});

	// FILTER OPTIONS

	const attendeeCategoryOptions = attendeeCategories.docs;


	return (
		<Container>
			<GroupFilter
				attendeeCategoryOptions={attendeeCategoryOptions}
			/>
			<div className="flex flex-col gap-2">
				{/* <Card>
					<pre>
						{JSON.stringify(attendeeCategoryOptions, null, 2)}
					</pre>
				</Card> */}
				<Card>
					<pre>
						{JSON.stringify(groupsCollection, null, 2)}
					</pre>

				</Card>
			</div>
			<GroupList groups={groupsCollection} />
		</Container>
	);
}
