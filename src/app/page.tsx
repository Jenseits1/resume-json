import { Container } from "@chakra-ui/react";
import { Toaster } from "@/components/ui/toaster";
import { NavbarComponent } from "./components/navbar.component";
import { ResumeTabsComponent } from "./components/resume-tabs.component";
import { FooterComponent } from "./components/footer.component";

export default function Home() {
	return (
		<Container as="body" maxW="115rem">
			<NavbarComponent />

			<ResumeTabsComponent />

			<FooterComponent />

			<Toaster />
		</Container>
	);
}
