"use client";

import { FunctionComponent } from "react";
import { DefaultEducation } from "../templates/default/default-education";
import { useResume } from "../contexts/resume.context";

interface EducationProps {}

export const Education: FunctionComponent<EducationProps> = () => {
	const resume = useResume();
	const education = resume.getSection("education") || [];

	return <DefaultEducation education={education} />;
};
