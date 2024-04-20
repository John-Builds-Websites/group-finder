import { CollectionConfig } from "payload/types";

export const Categories: CollectionConfig = {
	slug: "attendee-categories",
	admin: {
		useAsTitle: "name",
	},
	fields: [
		{
			name: "name",
			type: "text",
			required: true,
		},
		{
			name: "description",
			type: "textarea",
			required: true,
		},
	],

};

export default Categories;
