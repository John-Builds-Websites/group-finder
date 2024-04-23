import configPromise from "@/cms/payload.config";
import Container from "@/components/layout/Container";
import { getPayloadHMR } from "@payloadcms/next/utilities";

export default async function GroupsPage() {
	
	const payload = await getPayloadHMR({
		config: configPromise,
		onInit: (payload) => {
			console.log("Payload initialized", payload);
		}
	});

	const groupsCollection = await payload.find({
		collection: "groups",
		depth: 3,
	});

	const groups = groupsCollection.docs
	
	return (
		<Container>
			<pre>{JSON.stringify(groups, null, 2)}</pre>
			<h1>Groups</h1>
			<ul className="grid gap-2">
				{groups.map((group) => (
					<li key={group.id} className="border-2 border-solid  	">
						<h2>{group.name}</h2>
						<p>{group.description}</p>
						<p>{group.status}</p>

						{(typeof group.location !== "number") && (
							<p>
								{group.location.address}, {group.location.postcode}
							</p>
						)}

						{group.moderators?.map((moderator) => {
							if (typeof moderator === "number") return;
							return <p key={moderator.id}>{moderator.email}</p>;
						})}

            {group.attendeeCategories.map((attendeeType) => {
							if (typeof attendeeType === "number") return;
              return <p key={attendeeType.name}>{attendeeType.name}</p>;
            })}

					</li>
				))}
			</ul>
		</Container>
	);
}
