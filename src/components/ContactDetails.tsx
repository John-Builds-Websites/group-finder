import Link from "@/components/Link";
import type { Group } from "@/cms/payload-types";

type ContactDetailsProps = {
	contactDetails: Group["contactDetails"];
};
export function ContactDetails({ contactDetails }: ContactDetailsProps) {
	return (<ul className="flex flex-col gap-2s">
		{contactDetails?.map(contactDetail => {
			const label = contactDetail.customLabel ?? contactDetail.type;
			if (!contactDetail.type) return;
			let href: string = "";

			if (contactDetail.type === "email") {
				href = `mailto:${contactDetail.value}`;
			}

			if (contactDetail.type === "phone") {
				href = `tel:${contactDetail.value}`;
			}

			if (contactDetail.type === "url") {
				href = contactDetail.value;
			}

			return <li key={contactDetail.id}>
				<Link href={href}>
					{label}
				</Link>
			</li>;
		})}
	</ul>);
}
