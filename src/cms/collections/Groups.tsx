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
			admin: {
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
			name: "schedule",
			label: "Schedule",
			type: "array",
			fields: [
				{
					type: "row",
					fields: [
						{
							name: "weekdays",
							label: "Weekdays",
							type: "select",
							options: [
								{ label: "Mon", value: "mon" },
								{ label: "Tue", value: "tue" },
								{ label: "Wed", value: "wed" },
								{ label: "Thu", value: "thu" },
								{ label: "Fri", value: "fri" },
								{ label: "Sat", value: "sat" },
								{ label: "Sun", value: "sun" },
							],
							hasMany: true,
							required: true,
							admin: {
								width: "30%",
								style: {
									minWidth: "120px",
									maxWidth: "400px",
								},
							},
						},
						{
							name: "startTime",
							label: "Start Time",
							type: "date",
							required: true,
							// defaultValue: "10:00", 
							admin: {
								placeholder: "10:00",
								width: "140px",
								style: {
									minWidth: "120px",
									maxWidth: "140px",
								},
								date: {
									pickerAppearance: "timeOnly",
									timeIntervals: 30,
									timeFormat: "HH:mm",
								},

							},
						},
						{
							name: "endTime",
							label: "End Time",
							type: "date",
							required: true,
							// defaultValue: "11:00",
							admin: {
								// placeholder: "11:00",
								width: "140px",
								style: {
									minWidth: "120px",
									maxWidth: "140px",
								},
								date: {
									pickerAppearance: "timeOnly",
									timeIntervals: 30,
									timeFormat: "HH:mm",
								},
							},
						},
						{
							name: "additionalInfo",
							label: "Additional Information",
							type: "text",
							maxLength: 100,
							required: false,
						},
						{
							name: "location",
							label: "Location (if different)",
							type: "relationship",
							relationTo: "locations",
							required: false,
						},
					],
				},
			],
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
