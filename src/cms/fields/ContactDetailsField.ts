import { Field } from "payload/types";

export const ContactDetailsField: Field = {
  name: "contactDetails",
  admin: {
    description: "Contact details for the group",
  },
  type: "array",
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "type",
          type: "select",
          admin: {
            width: "20%",
          },
          defaultValue: "url",
          options: [
            { label: "URL", value: "url" },
            { label: "Email", value: "email" },
            { label: "Phone", value: "phone" },
          ],
          required: true,
        },
        {
          name: "value",
          type: "text",
          required: true,
        },
        {
          name: "customLabel",
          type: "text",
          admin: {
            width: "20%",
          },
        },
      ]
    },
  ],
}
