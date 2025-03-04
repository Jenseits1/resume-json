import { resumeInfo } from "@/resume-object";
import { FunctionComponent } from "react";
import { DefaultEducation } from "../templates/default/default-education";

interface EducationProps {}

export const Education: FunctionComponent<EducationProps> = () => {
	const education = resumeInfo.education;

	return <DefaultEducation education={education} />;
};
