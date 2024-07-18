import type { Field } from "payload";

export const ContactDetailsField: Field = {
	name: "contactDetails",
	admin: {
		description: "Contact details for the group",
	},
	type: "array",
	fields: [
		{
			type: "row",
			fields: [
				{
					name: "type",
					type: "select",
					admin: {
						width: "20%",
					},
					defaultValue: "url",
					options: [
						{ label: "URL", value: "url" },
						{ label: "Email", value: "email" },
						{ label: "Phone", value: "phone" },
					],
					required: true,
				},
				{
					name: "value",
					type: "text",
					required: true,
					hooks: {
						beforeValidate: [
							({ siblingData }) => {
								if (
									siblingData?.type === "email" &&
									!siblingData.value.includes("@")
								) {
									return "Email addresses must contain an @ symbol";
								}

								if (
									siblingData?.type === "phone" &&
									!siblingData.value.match(/^\+?\d+$/)
								) {
									return "Phone numbers must contain only numbers and an optional + at the start";
								}

								if (
									siblingData?.type === "url" &&
									!siblingData.value.match(/^(https?:\/\/)/)
								) {
									return "URLs must start with http:// or https://";
								}

								return;
							},
						],
					},
				},
				{
					name: "customLabel",
					type: "text",
					admin: {
						width: "20%",
					},
				},
			],
		},
	],
};
