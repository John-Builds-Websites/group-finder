"use client";

import type { Group } from "@/cms/payload-types";
import { formatTime } from "@/lib/time";
import { BiCalendarWeek } from "react-icons/bi";
import Time from "./Time";

type ScheduleProps = {
	weeklySchedule: Group["weeklySchedule"];
};
export function ScheduleList({ weeklySchedule }: ScheduleProps) {
	return (
		<div className="bg-slate-100 p-2 rounded">
			<span className="flex flex-row gap-2">
				<BiCalendarWeek className="text-xl" />

				<h3>Schedule</h3>
			</span>

			{weeklySchedule?.map(({ schedule }) => {
				if (!schedule) return;
				if (typeof schedule === "string") return;
				if (!schedule.weekdays) return;
				return (
					<ul key={schedule.id}>
						{schedule.weekdays.map((weekday) => {
							return (
								<li
									key={weekday}
									suppressHydrationWarning={false}
									className="flex flex-row py-1"
								>
									<span className="w-16 font-bold capitalize">{weekday}:</span>
									<Time isoDate={schedule.startTime} />
									<span className="px-2">-</span>
									<Time isoDate={schedule.endTime} />
								</li>
							);
						})}
					</ul>
				);
			})}
		</div>
	);
}
