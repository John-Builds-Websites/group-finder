import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TickIcon } from "@/components/svg/TickIcon";

export function DebuggingJSON(props) {
	return (<Card>
		<CardHeader>
			<CardTitle className="flex flex-row justify-between">
				Raw JSON for debugging<TickIcon />
			</CardTitle>
		</CardHeader>
		<CardContent className="overflow-scroll">

			<pre>{JSON.stringify(props.groupsCollection, null, 2)}</pre>
		</CardContent>
	</Card>);
}
