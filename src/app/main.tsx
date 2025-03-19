"use client";
import { FunctionComponent } from "react";
import { ResumeTabs } from "./components/resume-tabs";
import { Box, Button, IconButton, Theme } from "@chakra-ui/react";
import { LuMoon, LuPlus, LuSave, LuSun } from "react-icons/lu";
import { useResume } from "./contexts/resume.context";
import { useColorMode } from "@/components/ui/color-mode";

interface MainProps {}

export const Main: FunctionComponent<MainProps> = () => {
	const { createResume } = useResume();
	const { toggleColorMode, colorMode } = useColorMode();

	return (
		<Theme>
			<Box paddingX="16" paddingY={4}>
				<Box display="flex" justifyContent="space-between">
					<Button variant="subtle" onClick={createResume}>
						<LuPlus />
						Create New Resume
					</Button>

					<IconButton onClick={toggleColorMode} variant="ghost">
						{colorMode === "light" ? <LuSun /> : <LuMoon />}
					</IconButton>
				</Box>

				<ResumeTabs />
			</Box>
		</Theme>
	);
};
