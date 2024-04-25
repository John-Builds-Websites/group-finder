import { CollectionConfig } from "payload/types";

export const WeeklySchedule: CollectionConfig = {
  slug: "weekly-schedule",
  admin: {
    useAsTitle: "weekday",
    // defaultColumns: ["name", "date", "time", "location"],
    // hidden: (user) => {
    //   return !user || user.authed.role !== "admin";
    //   },

  }, fields: [
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
          admin: {
            placeholder: "10:00",
            width: "140px",
            style: {
              minWidth: "120px",
              maxWidth: "140px",
            },
            date: {
              displayFormat: "h:mm",
              pickerAppearance: "timeOnly",
              timeIntervals: 15,
              timeFormat: "HH:mm",
            }
          },
        },
        {
          name: "endTime",
          label: "End Time",
          type: "date",
          required: true,
          admin: {
            width: "140px",
            style: {
              minWidth: "120px",
              maxWidth: "140px",
            },
            date: {
              displayFormat: "h:mm",
              pickerAppearance: "timeOnly",
              timeIntervals: 15,
              timeFormat: "HH:mm",
            }
          },
        },
        {
          name: "additionalInfo",
          label: "Additional Information",
          type: "textarea",
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
  timestamps: true,



};