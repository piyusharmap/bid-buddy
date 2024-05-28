import type { Metadata } from "next";
import { Josefin_Sans, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";

export const metadata: Metadata = {
	title: "BidBuddy",
	description: "BidBuddy | Your Bidding Buddy",
};

const jost = Jost({
	subsets: ["latin"],
	variable: "--font-jost",
	display: "swap",
});

const josefin_Sans = Josefin_Sans({
	subsets: ["latin"],
	variable: "--font-josefin_Sans",
	display: "swap",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${jost.variable} ${josefin_Sans.variable} bg-primary-monkeyWhite dark:bg-primary-monkeyBlack mx-auto max-w-7xl`}
			>
				<Header />
				{children}
			</body>
		</html>
	);
}
