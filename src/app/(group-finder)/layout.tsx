// import Header from "@/components/header";
// import { Toaster } from "@/components/ui/sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Roboto_Mono, Comfortaa } from "next/font/google";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/layout/NavBar";

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
					"relative h-full bg-background font-sans antialiased",
					robotoMono.variable,
					comfortaa.variable
				)}
			>
				<SpeedInsights />
				{/* <Header title="Test" /> */}
				<main className="relative flex flex-col min-h-screen">
					<NavBar />
					<div className="flex-grow flex-1">{children}</div>
				</main>
				{/* <Toaster /> */}
			</body>
		</html>
	);
}
