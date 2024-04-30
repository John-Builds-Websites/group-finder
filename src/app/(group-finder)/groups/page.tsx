import configPromise from "@/cms/payload.config";
import Container from "@/components/layout/Container";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { GroupList } from "../../../components/GroupList";
import { DebuggingJSON } from "../../../components/DebuggingJSON";


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
			<GroupList groups={groups} />
		</Container>
	);
}
