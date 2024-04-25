import type { CollectionConfig } from "payload/types";

// Locations of Groups, with full address and google maps integration
export const Locations: CollectionConfig = {
	slug: "locations",
	admin: {
		useAsTitle: "name",
		defaultColumns: ["name", "address", "postcode"],
		
	},
	fields: [
		{
			name: "name",
			label: "Name",
			type: "text",
			required: true,
			unique: true,
		},
    {
      name: "address",
      label: "Address",
      type: "textarea",
      required: true,
    },
		{
			name: "postcode",
			label: "Postcode",
			type: "text",
			required: true,
		},
	],
	disableDuplicate: true,
	// versions: true,
};
