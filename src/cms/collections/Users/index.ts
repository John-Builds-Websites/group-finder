import { USER_ROLES } from "@/config";
import type { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
	slug: "users",
	admin: {
		useAsTitle: "email",
	},
	auth: true,
	fields: [
		{
			name: "role",
			defaultValue: "user",
			required: true,
			type: "select",
			options: USER_ROLES.map(({ value, label }) => ({ label, value })),
		},
	],
};
