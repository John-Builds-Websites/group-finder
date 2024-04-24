import { ATTENDEE_CATEGORIES, GROUP_STATUSES } from "@/config";
import type { CollectionConfig } from "payload/types";
import slugify from "slugify";
import { ContactDetailsField } from "@/cms/fields/ContactDetailsField";
import { adminOnly } from "../access-rights";

export const Groups: CollectionConfig = {
	slug: "groups",
	access: {
		read: adminOnly,
		create: adminOnly,
		update: adminOnly,
		delete: adminOnly,
	},
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
		{
			name: "slug",
			type: "text",
			required: true,
			hooks: {
				beforeValidate: [
					({ data, operation }) => {
						if (operation === 'create') {
							const newSlug = slugify(data?.name, {
								lower: true,
								remove: /[*+~\/\\.()'"!?#\.,:@]/g,
							});
							console.log("slug", newSlug);
							return newSlug
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
			required: false,
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
			required: false,
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
		ContactDetailsField,				// beforeValidate: [
		// 	({ data }) => {
		// 		const newSlug = slugify(data!.name);
		// 		console.log("newSlug", newSlug);
		// 		return { ...data, slug: newSlug };
		// 	},
		// ],
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
