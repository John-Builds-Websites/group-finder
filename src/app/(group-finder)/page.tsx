"use server";

import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default async function HomePage() {
	return (
		<main className="container mx-auto">
			<div className="flex flex-col gap-4">
				<h1 className="text-3xl font-bold text-blue-700">Home</h1>
				<Button variant="default" asChild>
					<Link href="/groups/" className={buttonVariants()}>See Groups</Link>
				</Button>
			</div>
		</main>
	);
}
