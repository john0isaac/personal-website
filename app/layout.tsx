import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		default: "John Aziz",
		template: "%s | johnaziz.com",
	},
	description: "Session Lead at Udacity and Gold Microsoft Learn Student Ambassador",
	openGraph: {
		title: "johnaziz.com",
		description:
			"Session Lead at Udacity and Gold Microsoft Learn Student Ambassador",
		url: "https://johnaziz.com",
		siteName: "johnaziz.com",
		images: [
			{
				url: "https://johnaziz.com/og.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "john00isaac",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.png",
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
			<head>
			</head>
			<body
				className={`bg-black ${
					process.env.NODE_ENV === "production" ? "debug-screens" : undefined
				}`}
			>
				{children}
			</body>
		</html>
	);
}
