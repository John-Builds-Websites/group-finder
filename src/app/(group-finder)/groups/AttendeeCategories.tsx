import { AttendeeCategory } from "@/cms/payload-types";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


type AttendeeCategoriesProps = {
	attendeeCategories: (number | AttendeeCategory)[] | null | undefined;
}

export function AttendeeCategories({ attendeeCategories }: AttendeeCategoriesProps) {

	if (!attendeeCategories) return null;

	return (
		<div className="flex flex-row gap-2">
			<TooltipProvider>
				{attendeeCategories?.map(attendeeType => {
					if (typeof attendeeType === "number") return;

					if (attendeeType.description) {
						return <Tooltip key={attendeeType.id}>
							<TooltipTrigger>
								<Badge key={attendeeType.id}>
									{attendeeType.name}
								</Badge>
							</TooltipTrigger>
							<TooltipContent>
								{attendeeType.description}
							</TooltipContent>
						</Tooltip>;
					}

					return <Badge key={attendeeType.id}>
						{attendeeType.name}
					</Badge>;
				})}
			</TooltipProvider>
		</div>
	);
}
