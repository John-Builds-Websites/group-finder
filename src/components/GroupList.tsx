import { AttendeeCategories } from "./AttendeeCategories";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Group } from "@/cms/payload-types";
import { BiBadgeCheck } from "react-icons/bi";

import { GroupVenue } from "./GroupVenue";
import { Schedule } from "./Schedule";
import { ContactDetails } from "./ContactDetails";

type GroupListProps = {
	groups: Group[]
}

export function GroupList({ groups }: GroupListProps) {
	return (

		<>
			<ul className="grid gap-2">
				{groups.length === 0 && <li>No groups found</li>}

				{groups.map(group => <li key={group.name}>
					<Card >
						<CardHeader>
							<CardTitle className="flex flex-row gap-2 whitespace-nowrap">
								<span className="text-xl align-middle">{group.name}</span>
								{(group.status === "active") && <BiBadgeCheck className="text-primary align-middle text-2xl" />}
							</CardTitle>
							<AttendeeCategories attendeeCategories={group.attendeeCategories} />
							<CardDescription>
								{group.description}
							</CardDescription>
						</CardHeader>
						<CardContent className="">
							<p>{group.description}</p>
							<Schedule weeklySchedule={group.weeklySchedule} />
							<ContactDetails contactDetails={group.contactDetails}></ContactDetails>
							<GroupVenue venue={group.location} />
						</CardContent>
					</Card>
				</li>)}
			</ul>
		</>
	);
}
