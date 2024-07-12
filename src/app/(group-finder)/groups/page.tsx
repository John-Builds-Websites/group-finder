import configPromise from "@/cms/payload.config";
import Container from "@/components/layout/Container";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { GroupList } from "../../../components/GroupList";
import { GroupFilter } from "./GroupFilter";

export default async function GroupsPage() {
	const payload = await getPayloadHMR({
		config: configPromise,
		// email: process.env.NEXT_PUBLIC_PAYLOAD_EMAIL,
		onInit: (payload) => {
			// console.log("Payload initialized", payload);
			console.log("Payload initialized");
		},
	});

	const groupsCollection = await payload.find({
		pagination: true,
		collection: "groups",
		depth: 2,
	});

	const attendeeCategories = await payload.find({
		collection: "attendee-categories",
	});

	const attendeeCategoryOptions = attendeeCategories.docs.map((doc) => doc);

	const weekdayOptions = [
		{ label: "Monday", value: "mon" },
		{ label: "Tuesday", value: "tue" },
		{ label: "Wednesday", value: "wed" },
		{ label: "Thursday", value: "thu" },
		{ label: "Friday", value: "fri" },
		{ label: "Saturday", value: "sat" },
		{ label: "Sunday", value: "sun" },
	];

	const isVisibleGroup = (group) => {
		// hidden group status
		if (group?.status === "archived") return false;

		// visible group status
		if (group?.status === "active") return true;
		if (group?.status === "inactive") return true;
		if (group?.status === "pending") return true;

		// default
		return false;
	};

	const serverFilteredGroups = groupsCollection.docs
		.map((doc) => doc)
		.filter(isVisibleGroup);

	return (
		<Container>
			<GroupFilter
				attendeeCategoryOptions={attendeeCategoryOptions}
				weekdayOptions={weekdayOptions}
			/>
			<GroupList groups={serverFilteredGroups} />
		</Container>
	);
}
