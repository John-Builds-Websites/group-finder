export const USER_ROLES = [
	{ label: "User", value: "user" },
	{ label: "Moderator", value: "moderator" },
	{ label: "Admin", value: "admin" },
	{ label: "Super Admin", value: "super_admin" },
] as const;

export const GROUP_STATUSES = [
  { label: "Pending", value: "pending"},
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
  { label: "Archived", value: "archived" },
] as const;

export const ATTENDEE_CATEGORIES = [
	{
		label: "New Born",
		value: "new_born",
		description: "Children under 1 month old",
	},
	{
		label: "Infant",
		value: "infant",
		description: "Children under 2 years old",
	},
	{
		label: "Toddler",
		value: "toddler",
		description: "Children between 2 and 4 years old",
	},
  {
    label: "Preschooler",
    value: "preschooler",
    description: "Children between 4 and 6 years old",
  },
  {
    label: "School Age",
    value: "school_age",
    description: "Children between 6 and 12 years old",
  
  },
	{
		label: "Teen",
		value: "teen",
		description: "Children between 12 and 18 years old",
	},
  {
    label: "Expectant Parent",
    value: "expectant_parent",
    description: "Parents expecting a child",
  },
] as const;
