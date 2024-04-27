import { AttendeeCategory } from "@/cms/payload-types";
import { cn } from "@/lib/utils";

type AttendeeTypeBadgeProps = {
	attendeeType: AttendeeCategory;
};
export function AttendeeTypeBadge({ attendeeType }: AttendeeTypeBadgeProps) {
	const bgColorString = `bg-${attendeeType.color}-${attendeeType.shade}`
	// const bgColorString = `bg-blue-500`
	
	const bgHoverColorString = `hover:bg-${attendeeType.color}-${attendeeType.shade}/80`

	return (
		<div className={cn(
			"inline-flex items-center rounded-md border px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent",
			bgColorString,
			// bgHoverColorString,
			"text-xs font-semibold text-white",
		)}>
			{attendeeType.name}
		</div>
	);
}
