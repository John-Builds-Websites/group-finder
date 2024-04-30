import { formatTime } from "@/lib/time";
import type { Group } from "@/cms/payload-types";
import { BiCalendarWeek } from "react-icons/bi";

type ScheduleProps = {
	weeklySchedule: Group["weeklySchedule"];
};
export function Schedule({ weeklySchedule }: ScheduleProps) {
	return (<div className="bg-slate-100 rounded p-2 ">
		<span>
			<BiCalendarWeek />
			<h3>Schedule</h3>
		</span>

		{weeklySchedule?.map(({
			schedule
		}) => {
			if (!schedule) return;
			if (typeof schedule === "string") return;
			if (!schedule.weekdays) return;
			return <ul key={schedule.id}>

				{schedule.weekdays.map(weekday => {
					return (
						<li key={weekday} className="py-1 flex flex-row">
							<div className="capitalize font-bold w-16">{weekday}:</div> {formatTime(schedule.startTime)} - {formatTime(schedule.endTime)}
						</li>
					);
				})}

			</ul>;
		})}
	</div>);
}
