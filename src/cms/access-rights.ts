import type { User } from "@payload-types";
import type { Access } from "payload";

export const adminOnly: Access = async ({ req }) => {
	const user = req.user as User | undefined;

	if (!user) return false;
	if (user?.role === "admin") return true;

	return false;
};

export const moderators: Access =
	async ({ req }) => {
		const user = req.user as User | undefined;

		if (!user) return false;
		if (user?.role === "moderator") return true;
		if (user?.role === "admin") return true;

		return false;
	};

export const allUsers: Access =
	async ({ req }) => {
		const user = req.user as User | undefined;

		//# always return true for all users
		if (!user) return false;
		return true;
	};
