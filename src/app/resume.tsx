"use client";

import { FunctionComponent, useRef } from "react";
import { Header } from "./components/header";
import { Education } from "./components/education";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";
import { Experience } from "./components/experience";

interface ResumeProps {}

export const Resume: FunctionComponent<ResumeProps> = () => {
	const resumeRef = useRef<HTMLDivElement>(null);

	const handlePrint = () => {
		// Hide all content except the .a4 component
		const originalBodyVisibility = document.body.style.visibility;
		document.body.style.visibility = "hidden";
		if (resumeRef.current) {
			resumeRef.current.style.visibility = "visible"; // Show only the .a4 component
		}

		// Trigger the print dialog
		window.print();

		// Restore visibility after print
		document.body.style.visibility = originalBodyVisibility;
	};

	return (
		<div className="flex flex-col items-center bg-gray-200 p-4">
			<div
				ref={resumeRef}
				className="a4 bg-white max-w-[1024px] p-8 text-base"
			>
				<Header />
				<Education />
				<Skills />
				<Projects />
				<Experience />
			</div>
		</div>
	);
};
