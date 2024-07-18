import type { AttendeeCategory } from "@/cms/payload-types";
import { AttendeeCategories } from "@/components/AttendeeCategories";
import { Button } from "@/components/ui/button";

type GroupFilterProps = {
	attendeeCategoryOptions: AttendeeCategory[];
};

export function GroupFilter({
	attendeeCategoryOptions,

}: GroupFilterProps) {

		const weekdayOptions = [
		{ label: "Monday", value: "mon" },
		{ label: "Tuesday", value: "tue" },
		{ label: "Wednesday", value: "wed" },
		{ label: "Thursday", value: "thu" },
		{ label: "Friday", value: "fri" },
		{ label: "Saturday", value: "sat" },
		{ label: "Sunday", value: "sun" },
	];


	return (
		<div className="flex flex-col gap-2 bg-white mb-2 p-2 rounded">
			<p>Filter By: </p>
			<div className="flex flex-row">
				<p>Attendee Type: </p>
				<AttendeeCategories attendeeCategories={attendeeCategoryOptions} />
			</div>
			
			<div className="flex flex-row">
				<p>Day: </p>
				{weekdayOptions?.map(({ label, value }) => {
					return (
						<div key={value}>
							<input type="checkbox" id={value} name={value} value={value} />
							<label htmlFor={value}>{label}</label>
						</div>
					);
				})}
			</div>

			<div className="flex flex-row">
				<p>Time: </p>
				<select name="time" id="time">
					<option value="morning">Morning</option>
					<option value="afternoon">Afternoon</option>
					<option value="evening">Evening</option>
				</select>
			</div>

			<Button type="button" className="btn btn-primary">
				Apply Filters
			</Button>
		</div>
	);
}
