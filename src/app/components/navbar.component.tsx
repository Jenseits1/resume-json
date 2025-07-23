"use client";
import { FunctionComponent } from "react";
import { Box, Button, Container, IconButton } from "@chakra-ui/react";
import { LuGithub, LuMoon, LuPlus, LuSun } from "react-icons/lu";
import { useResume } from "../providers/resume.provider";
import { useColorMode } from "@/components/ui/color-mode";
import { LogoComponent } from "./logo.component";
import { MotivationPhraseComponent } from "./motivation-phrase.component";
interface NavbarComponentProps {}

export const NavbarComponent: FunctionComponent<NavbarComponentProps> = () => {
	const { resumes, createResume } = useResume();
	const { toggleColorMode, colorMode } = useColorMode();

	return (
		<Container as="nav" paddingY={4} spaceY={4} maxW="full">
			<LogoComponent />

			<MotivationPhraseComponent />

			<Box display="flex" justifyContent="space-between">
				<Button disabled={resumes.length >= 4} onClick={createResume}>
					<LuPlus />
					Create new resume
				</Button>

				<Box display="flex" justifyItems="center" alignItems="center">
					<IconButton
						variant="ghost"
						onClick={() =>
							window.open(
								"https://github.com/Jenseits1/resume-json",
								"_blank"
							)
						}
					>
						<LuGithub />
					</IconButton>

					<IconButton onClick={toggleColorMode} variant="ghost">
						{colorMode === "light" ? <LuSun /> : <LuMoon />}
					</IconButton>
				</Box>
			</Box>
		</Container>
	);
};
