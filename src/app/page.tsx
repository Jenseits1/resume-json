import { Container } from "@chakra-ui/react";
import { Toaster } from "@/components/ui/toaster";
import { NavbarComponent } from "./components/navbar.component";
import { ResumeTabsComponent } from "./components/resume-tabs.component";

export default function Home() {
	return (
		<Container maxW="115rem">
			<NavbarComponent />

			<ResumeTabsComponent />

			<Toaster />
		</Container>
	);
}
