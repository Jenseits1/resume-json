import { resumeInfo } from "@/resume-object";
import { FunctionComponent } from "react";
import { DefaultExperience } from "../templates/default/default-experience";

interface ExperienceProps {}

export const Experience: FunctionComponent<ExperienceProps> = () => {
	const experience = resumeInfo.experience;

	return <DefaultExperience experience={experience} />;
};
