import { ATTENDEE_CATEGORIES, GROUP_STATUSES } from "@/config";
import { nanoid } from "nanoid";
import type { CollectionConfig } from "payload/types";
import slugify from "slugify";
import { ContactDetailsField } from "@/cms/fields/ContactDetailsField";
import { CustomIDField } from "@/cms/fields/CustomIDField";

export const Groups: CollectionConfig = {
	slug: "groups",

	admin: {
		useAsTitle: "name",
		defaultColumns: ["name", "slug", "attendee_categories", "status"],
		pagination: {
			defaultLimit: 20,
			limits: [20, 50, 100],
		},
		listSearchableFields: ["name", "status", "attendee_categories"],
		// description: "A collection of groups",
		hideAPIURL: true,
	},

	fields: [
		{
			name: "name",
			label: "Name",
			type: "text",
			required: true,
		},
		{
			name: "description",
			label: "Description",
			type: "textarea",
		},
		CustomIDField,
		{
			name: "slug",
			type: "text",
			required: true,
			hooks: {
				beforeValidate: [
					({ data, value }) => {
						if (!value || value === "") {
							return slugify(data?.name, {
								lower: true,
								remove: /[*+~\/\\.()'"!?#\.,:@]/g,
							});
						}
					},
				],
			},
			admin: {
				position: "sidebar",
			},
		},
		{
			name: "attendeeCategories",
			label: "Attendee Categories",
			type: "relationship",
			relationTo: "attendee-categories",
			required: true,
			hasMany: true,
			admin:{
				allowCreate: false,
			}
		},
		{
			name: "location",
			label: "Location",
			type: "relationship",
			relationTo: "locations",
			required: true,
		},
		{
			name: "booking-required",
			label: "Booking Required",
			type: "checkbox",
			defaultValue: false,
		},
		ContactDetailsField,
		{
			name: "moderators",
			label: "Moderators",
			type: "relationship",
			relationTo: "users",
			hasMany: true,
			admin: {
				allowCreate: false,
			},

		},
		{
			name: "status",
			label: "Status",
			type: "select",
			options: GROUP_STATUSES.map(({ value, label }) => ({ label, value })),
			defaultValue: "pending",
			required: true,
			admin: {
				position: "sidebar",
				isClearable: false,
				isSortable: true,
			},
		},
		{
			name: "price",
			label: "Price Information",
			type: "array",
			unique: true,
			fields: [
				{
					type: "row",
					fields: [
						{
							name: "price-label",
							label: "Price Label",
							type: "text",
							required: true,
							unique: true,
							admin: {
								width: "50%",
							},
						},
						{
							name: "amount",
							label: "Amount",
							required: true,
							type: "number",
							min: 0,
							admin: {
								autoComplete: "currency",
								step: 0.01,
								width: "20%",
								placeholder: "0.00",
								className: "amount-field",

							},
						},
					]
				},
			],
		},
	],
};
