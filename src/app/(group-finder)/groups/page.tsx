import configPromise from "@/cms/payload.config";
import Container from "@/components/layout/Container";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import type { AttendeeCategory } from "@payload-types";
import { Pagination } from "@/components/ui/pagination";
import { BackgroundBlobs } from "@/components/backgrounds/Blobs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GroupList } from "./GroupList";
import { TickIcon } from "@/components/svg/TickIcon";


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
			{/* <BackgroundBlobs /> */}


			<GroupList groups={groups}></GroupList>
			{/* <Pagination {...groupsCollection} /> */}

			<hr />
			<Card>
				<CardHeader>
					<CardTitle className="flex flex-row justify-between">
					Raw JSON for debugging<TickIcon/>
					</CardTitle>
				</CardHeader>
				<CardContent className="overflow-scroll">

					<pre>{JSON.stringify(groupsCollection, null, 2)}</pre>
				</CardContent>
			</Card>
		</Container>
	);
}
// Compare this snippet from src/app/%28group-finder%29/groups/GroupList.tsx: