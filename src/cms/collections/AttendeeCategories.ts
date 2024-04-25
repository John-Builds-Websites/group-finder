import { CollectionConfig } from "payload/types";
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
	],

};

export default AttendeeCategories;
