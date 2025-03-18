"use client";
import { FunctionComponent } from "react";
import { ResumeTabs } from "./components/resume-tabs";
import { Box, Button, Theme } from "@chakra-ui/react";
import { LuPlus, LuSave } from "react-icons/lu";
import { useResume } from "./contexts/resume.context";

interface MainProps {}

export const Main: FunctionComponent<MainProps> = () => {
	const { createResume } = useResume();

	return (
		<Theme appearance="dark">
			<Box paddingX="16" paddingY={4}>
				<Button variant="subtle" flex="1" onClick={createResume}>
					<LuPlus />
					Create New Resume
				</Button>
				<ResumeTabs />
			</Box>
		</Theme>
	);
};
