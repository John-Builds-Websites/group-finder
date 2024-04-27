import { AttendeeCategory } from "@/cms/payload-types";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { AttendeeTypeBadge } from "./AttendeeTypeBadge";


type AttendeeCategoriesProps = {
	attendeeCategories: (string | AttendeeCategory)[] | null | undefined;
}

export function AttendeeCategories({ attendeeCategories }: AttendeeCategoriesProps) {

	if (!attendeeCategories) return null;

	return (
		<div className="flex flex-row gap-2">
			<TooltipProvider>

				{attendeeCategories?.map(attendeeType => {
					if (typeof attendeeType === "string") return;

					if (attendeeType.description) {
						return (
							<Tooltip key={attendeeType.id}>
								<TooltipTrigger>
									<AttendeeTypeBadge key={attendeeType.id} attendeeType={attendeeType} />
								</TooltipTrigger>

								<TooltipContent>
									{attendeeType.description}
								</TooltipContent>

							</Tooltip>
						);
					}

					return <AttendeeTypeBadge key={attendeeType.id} attendeeType={attendeeType} />;

				})}

			</TooltipProvider>
		</div>
	);
}
