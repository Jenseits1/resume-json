"use client";

import { ResumeTabs } from "./components/resume-tabs";
import { Box, Button, IconButton, Text } from "@chakra-ui/react";
import { LuMoon, LuPlus, LuSun } from "react-icons/lu";
import { useResume } from "./contexts/resume.context";
import { useColorMode } from "@/components/ui/color-mode";
import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
	const { resumes, createResume } = useResume();
	const { toggleColorMode, colorMode } = useColorMode();
	const [isHydrated, setIsHydrated] = useState(false);

	useEffect(() => {
		setIsHydrated(true);
	}, []);

	if (!isHydrated) {
		return null;
	}

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

			<Box display="flex" justifyContent="space-between">
				<Button
					disabled={resumes.length >= 4}
					variant="subtle"
					onClick={createResume}
				>
					<LuPlus />
					New Resume
				</Button>

				<IconButton onClick={toggleColorMode} variant="ghost">
					{colorMode === "light" ? <LuSun /> : <LuMoon />}
				</IconButton>
			</Box>

			<ResumeTabs />

			<Toaster />
		</Box>
	);
}
