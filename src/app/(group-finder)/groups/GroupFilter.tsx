import { AttendeeCategory } from "@/cms/payload-types";
import { AttendeeCategories } from "@/components/AttendeeCategories";

type GroupFilterProps = {
	attendeeCategoryOptions: AttendeeCategory[]
	weekdayOptions: { label: string, value: string }[]
	// getFiltered: () => any;
};

export function GroupFilter({ attendeeCategoryOptions,weekdayOptions }: GroupFilterProps) {
	return (
		<div className="flex flex-col gap-2 p-2 bg-white rounded mb-2">
			<p>Filter By: </p>
			<div className="flex flex-row">
				<p>Attendee Type: </p>
				<AttendeeCategories attendeeCategories={attendeeCategoryOptions} />
			</div>
			<div className="flex flex-row">
				<p>Day: </p>
				{weekdayOptions?.map((weekday) => {
					return (
						<div key={weekday.value}>
							<input type="checkbox" id={weekday.value} name={weekday.value} value={weekday.value} />
							<label htmlFor={weekday.value}>{weekday.label}</label>
						</div>
					);
				}
				)
				}

			</div>
			<div className="flex flex-row">
				<p>Time: </p>
				<select name="time" id="time">
					<option value="morning">Morning</option>
					<option value="afternoon">Afternoon</option>
					<option value="evening">Evening</option>
				</select>
			</div>
			<button className="btn btn-primary">Apply Filters</button>
		</div>
	);
}
