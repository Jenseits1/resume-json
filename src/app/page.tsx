import { Box, Text } from "@chakra-ui/react";
import { Toaster } from "@/components/ui/toaster";
import { NavbarComponent } from "./components/navbar.component";
import { ResumeTabsComponent } from "./components/resume-tabs.component";

export default function Home() {
	return (
		<Box
			paddingX={{ base: "4", lg: "24" }}
			paddingBottom={20}
			paddingTop={10}
		>
			<Text
				fontSize="xl"
				fontFamily="cursive"
				marginBottom={4}
				fontWeight="bold"
			>
				Resume.json
			</Text>

			<NavbarComponent />

			<ResumeTabsComponent />

			<Toaster />
		</Box>
	);
}
