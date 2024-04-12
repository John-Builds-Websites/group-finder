// import Header from "@/components/header";
// import { Toaster } from "@/components/ui/sonner";
// import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
	title: "Group Finder",
	description: "Find YOUR local group",
	creator: "John Dennehy",
	keywords: [
		"group",
		"finder",
		"local",
		"community",
		"social",
		"johnbuildswebsites",
	],
};

type RootLayoutProps = {
	children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		// <ClerkProvider>
		<html lang="en">
			<body
				className={cn(
					"relative h-full bg-background font-sans antialiased",
					GeistSans.className,
				)}
			>
				{/* <Header title="Test" /> */}
				<main className="relative flex flex-col min-h-screen">{children}</main>
				{/* <Toaster /> */}
			</body>
		</html>
		// </ClerkProvider>
	);
}
