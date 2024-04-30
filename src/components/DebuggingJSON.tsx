import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TickIcon } from "@/components/svg/TickIcon";

type DebuggingJSONProps = {
	json: JSON;
};

export function DebuggingJSON({json}: DebuggingJSONProps) {
	return (<Card>
		<CardHeader>
			<CardTitle className="flex flex-row justify-between">
				Raw JSON for debugging<TickIcon />
			</CardTitle>
		</CardHeader>
		<CardContent className="overflow-scroll">

			<pre>{JSON.stringify(json, null, 2)}</pre>
		</CardContent>
	</Card>);
}
