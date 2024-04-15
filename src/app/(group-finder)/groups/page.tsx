"use server";

import Container from "@/components/layout/Container";
import configPromise from "@/cms/payload.config";
import { getPayload } from "payload";
import type { User } from "@payload-types";

export default async function GroupsPage() {
	const payload = await getPayload({
		config: configPromise,
	});

	const { docs: groups } = await payload.find({
		collection: "groups",
	});

	return (
		<Container>
			{/* <pre>{JSON.stringify(groups, null, 2)}</pre> */}
			<h1>Groups</h1>
			<ul>
				{groups.map((group) => (
					<li key={group.id}>
						<h2>{group.title}</h2>
						<p>{group.description}</p>

            {group.followers?.map((follower) => {
              if (typeof follower === "number") return;
              return <p key={follower.id}>{follower.email}</p>;
            })}

						{group.moderators?.map((moderator) => {
							if (typeof moderator === "number") return;
							return <p key={moderator.id}>{moderator.email}</p>;
						})}

            {group["attendee-types"]?.map((attendeeType) => {
              if (typeof attendeeType === "number") return;
              return <p key={attendeeType.id}>{attendeeType.name}</p>;
            })}

					</li>
				))}
			</ul>
		</Container>
	);
}
