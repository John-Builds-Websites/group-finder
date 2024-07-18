import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
	slug: "users",
	admin: {
		useAsTitle: "email",
		defaultColumns: ["firstName", "lastName", "role"],
	},
	auth: true,
	fields: [
		// 'email' field is added by default
		{
			name: "firstName",
			label: "First Name",
			type: "text",
			required: true,
		},
		{
			name: "lastName",
			label: "Last Name",
			type: "text",
			required: true,
		},
		{
			name: "role",
			required: true,
			type: "select",
			options: [
				{ label: "User", value: "user" },
				{ label: "Moderator", value: "moderator" },
				{ label: "Admin", value: "admin" },
			],
			defaultValue: "user",
		},
		{
			name: "groupsFollowed",
			label: "Groups Followed",
			type: "relationship",
			relationTo: "groups",
			hasMany: true,
		},
		{
			name: "groupsManaged",
			label: "Groups Managed",
			type: "relationship",
			relationTo: "groups",
			hasMany: true,
		},
	],
};
