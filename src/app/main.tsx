"use client";
import { FunctionComponent } from "react";
import { ResumeTabs } from "./components/resume-tabs";

interface MainProps {}

export const Main: FunctionComponent<MainProps> = () => {
	return (
		<div className="flex flex-col items-center text-foreground px-4 lg:px-24 h-screen bg-background">
			<ResumeTabs />
		</div>
	);
};
