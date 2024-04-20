import { User } from "@payload-types";
import { Access } from "payload/types";

export const adminOnly =
	(): Access =>
	async ({ req }) => {
		const user = req.user as User | undefined;

		if (!user) return false;
		if (user?.role === "admin") return true;

		return false;
	};

export const moderators =
	(): Access =>
	async ({ req }) => {
		const user = req.user as User | undefined;

		if (!user) return false;
		if (user?.role === "moderator") return true;
		if (user?.role === "admin") return true;

		return false;
	};

export const everyone =
	(): Access =>
	async ({ req }) => {
		//# always return true for everyone
		return true;
	};
