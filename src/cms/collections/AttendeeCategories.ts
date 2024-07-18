import type { CollectionConfig } from "payload";
import { adminOnly } from "../access-rights";

export const AttendeeCategories: CollectionConfig = {
	slug: "attendee-categories",
	labels: {
		singular: "Attendee Category",
		plural: "Attendee Categories",
	},
	access: {
		read: adminOnly,
		create: adminOnly,
		update: adminOnly,
		delete: adminOnly,
	},
	admin: {
		useAsTitle: "name",
	},
	fields: [
		{
			name: "name",
			type: "text",
			required: true,
			unique: true,
		},
		{
			name: "description",
			type: "textarea",
			// required: true,
		},
		{
			type: "row",
			fields: [
				{
					// tailwind colors
					name: "color",
					type: "select",
					options: [
						{ label: "Red", value: "red" },
						{ label: "Orange", value: "orange" },
						{ label: "Yellow", value: "yellow" },
						{ label: "Lime", value: "lime" },
						{ label: "Green", value: "green" },
						{ label: "Emerald", value: "emerald" },
						{ label: "Teal", value: "teal" },
						{ label: "Cyan", value: "cyan" },
						{ label: "Sky", value: "sky" },
						{ label: "Blue", value: "blue" },
						{ label: "Purple", value: "purple" },
						{ label: "Indigo", value: "indigo" },
						{ label: "Violet", value: "violet" },
						{ label: "Fuchsia", value: "fuchsia" },
						{ label: "Pink", value: "pink" },
						{ label: "Rose", value: "rose" }
					],
					defaultValue: "violet",
					required: true,
				}, {
					name: "shade",
					type: "select",
					options: [
						{ label: "100", value: "100" },
						{ label: "200", value: "200" },
						{ label: "300", value: "300" },
						{ label: "400", value: "400" },
						{ label: "500", value: "500" },
						{ label: "600", value: "600" },
						{ label: "700", value: "700" },
						{ label: "800", value: "800" },
						{ label: "900", value: "900" },
						{ label: "950", value: "950" },
					],
					defaultValue: "500",
					required: true,
				}
			],
		},
	],

};

export default AttendeeCategories;
