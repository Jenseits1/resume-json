import { resumeInfo } from "@/resume-object";
import { DefaultSkills } from "../templates/default/default-skills";
import { FunctionComponent } from "react";

interface SkillsProps {}

export const Skills: FunctionComponent<SkillsProps> = () => {
	const skills = resumeInfo.skills;

	return <DefaultSkills skills={skills} />;
};
