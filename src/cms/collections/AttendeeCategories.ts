import { CollectionConfig } from "payload/types";

export const Categories: CollectionConfig = {
	slug: "attendee-categories",
	labels: {
		singular: "Attendee Category",
		plural: "Attendee Categories",
	},
	access: {
		// read: () => true,
		create: ({req}) => req.user && req.user.role === "admin",
		update: ({req}) => req.user && req.user.role === "admin",
		delete: ({req}) => req.user && req.user.role === "admin",
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
			required: true,
		},
	],

};

export default Categories;
