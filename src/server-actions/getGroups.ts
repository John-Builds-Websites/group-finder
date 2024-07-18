"use server"
import type { Group } from "@/cms/payload-types";

import configPromise from "@/cms/payload.config";
import { getPayloadHMR } from "@payloadcms/next/utilities";

export async function getGroups() {
  const payload = await getPayloadHMR({
    config: configPromise,
    // email: process.env.NEXT_PUBLIC_PAYLOAD_EMAIL,
    onInit: (payload) => {
      // console.log("Payload initialized", payload);
      console.log("Payload initialized");
    }
  });

  const groupsCollection = await payload.find({
    pagination: true,
    collection: "groups",
    depth: 2,
  });

  const attendeeCategories = await payload.find({
    collection: "attendee-categories",
  });

  const attendeeCategoryOptions = attendeeCategories.docs.map((doc) => doc);

  const weekdayOptions = [
    { label: "Monday", value: "mon" },
    { label: "Tuesday", value: "tue" },
    { label: "Wednesday", value: "wed" },
    { label: "Thursday", value: "thu" },
    { label: "Friday", value: "fri" },
    { label: "Saturday", value: "sat" },
    { label: "Sunday", value: "sun" },
  ];



  const isVisibleGroup = (group: Group | undefined): boolean => {
    // hidden group status			
    if (group?.status === "archived") return false;

    // visible group status
    if (group?.status === "active") return true;
    if (group?.status === "inactive") return true;
    if (group?.status === "pending") return true;

    // default
    return false;
  };

  const isSelectedWeekday = (group: Group | undefined, weekdays: typeof weekdayOptions): boolean => {
    // hidden groups
    if (!group?.weeklySchedule) return false;

    // visible groups
    const selectedWeekdays = group.weeklySchedule.map(({ schedule }) => {
      if (!schedule) return;
      if (typeof schedule === "string") return;
      if (!schedule.weekdays) return;
      return schedule.weekdays;
    });

    return false;
  }

  const serverFilteredGroups = groupsCollection.docs
    .map((doc) => doc)
    .filter(isVisibleGroup);

  return serverFilteredGroups;
}