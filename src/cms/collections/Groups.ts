import { ATTENDEE_CATEGORIES, GROUP_STATUSES } from "@/config";
import type { CollectionConfig } from "payload/types";

export const Groups: CollectionConfig = {
	slug: "groups",
	admin: {
		useAsTitle: "title",
		defaultColumns: ["title", "attendee_categories", "status"],
		pagination: {
			defaultLimit: 20,
			limits: [20, 50, 100],
		},
		listSearchableFields: ["title"],
		description: "A collection of groups",
	},
	fields: [
		{
			name: "title",
			label: "Title",
			type: "text",
			required: true,
		},
		{
			name: "description",
			label: "Description",
			type: "textarea",
		},
		// {
		// 	name: "followers",
		// 	label: "Followers",
		// 	type: "relationship",
		// 	relationTo: "users",
		// 	hasMany: true,
		// 	hidden: true,
		// 	admin: {
		// 		readOnly: true,
		// 	},
		// },
		// {
		// 	name: "moderators",
		// 	label: "Moderators",
		// 	type: "relationship",
		// 	relationTo: "users",
		// 	hasMany: true,
		// 	hidden: false,
		// 	admin: {
		// 		className: "mod",
		// 		isSortable: true,
		// 		readOnly: true,
		// 	},
		// },
		{
			name: "attendee_categories",
			label: "Attendee Categories",
			type: "select",
			options: ATTENDEE_CATEGORIES.map(({ value, label }) => ({
				label,
				value,
			})),
			required: true,
			hasMany: true,
		},
		// {
		// 	name: "contact-details",
		// 	label: "Contact Details",
		// 	type: "relationship",
		// 	relationTo: "contact-details",
		// 	hasMany: true,
		// },
		{
			name: "status",
			label: "Status",
			type: "select",
			options: GROUP_STATUSES.map(({ value, label }) => ({ label, value })),
			defaultValue: "pending",
			required: true,
			access: {
				update: ({ req }) => req.user.role === "admin",
			},
			saveToJWT: true,
		},
		// Email added by default
		// Add more fields as needed
	],
};
