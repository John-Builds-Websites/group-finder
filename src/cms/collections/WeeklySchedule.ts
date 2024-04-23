import { CollectionConfig } from "payload/types";

export const WeeklySchedule: CollectionConfig = {
  slug: "weekly-schedule",
  admin: {
    // useAsTitle: ,
    // defaultColumns: ["name", "date", "time", "location"],
    // hidden: (user) => {
    //   return !user || user.authed.role !== "admin";
    //   },
    hidden: true,
  },
  fields: [
    {
      name: "weekday",
      label: "Weekday",
      type: "select",
      options: [
        { label: "Monday", value: "mon" },
        { label: "Tuesday", value: "tue" },
        { label: "Wednesday", value: "wed" },
        { label: "Thursday", value: "thu" },
        { label: "Friday", value: "fri" },
        { label: "Saturday", value: "sat" },
        { label: "Sunday", value: "sun" },
      ],
      required: true,
    },
    {
      name: "startTime",
      label: "Start Time",
      type: "date",
      required: true,
      admin: {
         date: {
          displayFormat: "h:mm",
          pickerAppearance: "timeOnly",
          timeIntervals: 5,
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
         date: {
          displayFormat: "h:mm",
          pickerAppearance: "timeOnly",
          timeIntervals: 5,
          timeFormat: "HH:mm",
         }
      },
    },
    {
      name: "additionalInfo",
      label: "Additional Information",
      type: "textarea",
      required: false,
    },
    {
      name: "location",
      label: "Location (if different)",
      type: "relationship",
      relationTo: "locations",
      required: false,
    },
    {
      name: "status",
      label: "Status",
      type: "select",
      options: [
        { label: "Active", value: "active" },
        { label: "Cancelled", value: "cancelled" },
        { label: "Postponed", value: "postponed" },
        { label: "Hiatus", value: "hiatus" },
        { label: "TBC", value: "tbc" },
      ],

    }
  ],

};