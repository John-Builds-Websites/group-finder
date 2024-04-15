import { USER_ROLES } from "@/config";
import type { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
	slug: "users",
	admin: {
		useAsTitle: "email",
		defaultColumns: ["email", "role"],
	},
	auth: true,
	fields: [
		{
			name: "role",
			required: true,
			type: "select",
			options: USER_ROLES.map(({ value, label }) => ({ label, value })),
		},
	],
};
