"use client";
import { FunctionComponent } from "react";
import { Box, Button, IconButton } from "@chakra-ui/react";
import { LuGithub, LuMoon, LuPlus, LuSun } from "react-icons/lu";
import { useResume } from "../providers/resume.provider";
import { useColorMode } from "@/components/ui/color-mode";

interface NavbarComponentProps {}

export const NavbarComponent: FunctionComponent<NavbarComponentProps> = () => {
	const { resumes, createResume } = useResume();
	const { toggleColorMode, colorMode } = useColorMode();

	return (
		<Box display="flex" justifyContent="space-between">
			<Button
				disabled={resumes.length >= 4}
				variant="subtle"
				onClick={createResume}
			>
				<LuPlus />
				New Resume
			</Button>

			<Box display="flex" justifyItems="center" alignItems="center">
				<IconButton
					variant="ghost"
					onClick={() =>
						window.open(
							"https://github.com/washingtonfbueno/resume-json",
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
	);
};
