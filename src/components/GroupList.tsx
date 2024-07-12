"use client";

import type { AttendeeCategory, Group, Schedule } from "@/cms/payload-types";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useMutation } from "@tanstack/react-query";
import { BiBadgeCheck } from "react-icons/bi";
import { AttendeeCategories } from "./AttendeeCategories";

import { getGroups } from "@/server-actions/getGroups";
import { useState } from "react";
import { ContactDetails } from "./ContactDetails";
import { GroupVenue } from "./GroupVenue";
import { ScheduleList } from "./ScheduleList";

type GroupListProps = {
	groups: Group[];
};

export function GroupList({ groups }: GroupListProps) {
	const [attendeeCategoryFilter, setAttendeeCategoryFilter] = useState<
		AttendeeCategory[]
	>([]);

	const { mutate: server_getGroups } = useMutation({
		mutationFn: getGroups,
	});

	const userFilteredGroups = groups.filter((group) => group);

	return (
		<>
			<div className="flex flex-row gap-2">
				<button type="button" onClick={() => server_getGroups()}>
					Refresh
				</button>
				<button type="button" onClick={() => setAttendeeCategoryFilter([])}>
					Clear Filters
				</button>
			</div>
			<ul className="gap-2 grid">
				{groups.length === 0 && <li>No groups found</li>}
				{groups.length > 0 && userFilteredGroups.length === 0 && (
					<li>No groups matching filters</li>
				)}

				{userFilteredGroups.map((group) => {
					return (
						<li key={group.name}>
							<Card>
								<CardHeader>
									<CardTitle className="flex flex-row gap-2 whitespace-nowrap">
										<span className="text-xl align-middle">{group.name}</span>
										{group.status === "active" && (
											<BiBadgeCheck className="text-2xl text-primary align-middle" />
										)}
									</CardTitle>
									<AttendeeCategories
										attendeeCategories={group.attendeeCategories}
									/>
									<CardDescription>{group.description}</CardDescription>
								</CardHeader>
								<CardContent className="">
									<p>{group.description}</p>
									<ScheduleList weeklySchedule={group.weeklySchedule} />
									<ContactDetails contactDetails={group.contactDetails} />
									<GroupVenue venue={group.location} />
								</CardContent>
							</Card>
						</li>
					);
				})}
			</ul>
		</>
	);
}
