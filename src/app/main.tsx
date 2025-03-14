"use client";
import { FunctionComponent } from "react";

import { ResumePreview } from "./components/resume/resume-preview";
import { Navbar } from "./components/navbar";
import { PdfDownloadButton } from "./components/resume/pdf-download-button";

interface MainProps {}

export const Main: FunctionComponent<MainProps> = () => {
	return (
		<div className="flex flex-col items-center bg-gray-200 px-16">
			<Navbar />
			<PdfDownloadButton />

			<div className="flex w-full h-full">
				<div className="flex flex-1"></div>
				<ResumePreview />
			</div>
		</div>
	);
};
