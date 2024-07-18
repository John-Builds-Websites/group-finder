import { nanoid } from "nanoid";
import type { Field } from "payload";

export const CustomIDField: Field = {
	name: "id",
	type: "text",
	admin: {
		disabled: true,
	},
	hooks: {
		beforeValidate: [
			({ value }) => {
				if (!value || value === "") {
					return nanoid();
				}
			},
		],
	},
};
