import "@/styles/globals.css";

import NavBar from "@/components/layout/NavBar";
import QueryProvider from "@/components/providers/QueryProvider";
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Comfortaa, Roboto_Mono } from "next/font/google";

import type { Metadata } from "next";
import type { ReactNode } from "react";

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

const robotoMono = Roboto_Mono({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-roboto-mono",
});

const comfortaa = Comfortaa({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-comfortaa",
});

type RootLayoutProps = {
	children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body
				className={cn(
					"relative h-full bg-indigo-500 font-sans antialiased",
					robotoMono.variable,
					comfortaa.variable,
				)}
			>
				<QueryProvider>
					<SpeedInsights />
					{/* <Header title="Test" /> */}
					<main className="relative flex flex-col min-h-screen">
						<NavBar />
						<div className="flex-grow flex-1 p-2">{children}</div>
					</main>
					{/* <Toaster /> */}
				</QueryProvider>
			</body>
		</html>
	);
}
