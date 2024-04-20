import { nanoid } from "nanoid";
import { Field } from "payload/types";

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
}