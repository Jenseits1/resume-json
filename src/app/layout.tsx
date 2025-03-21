import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import { ResumeProvider } from "./contexts/resume.context";

export const metadata: Metadata = {
	title: "Resume.json",
	description: "Resume generator app",
	icons: {
		icon: "/app-icon.svg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<ResumeProvider>
					<Provider>{children}</Provider>
				</ResumeProvider>
			</body>
		</html>
	);
}
