import { DefaultSkills } from "../templates/default/default-skills";
import { FunctionComponent } from "react";

import { ISkills } from "../types/resume.types";

interface SkillsProps {
	skills: ISkills[];
}

export const Skills: FunctionComponent<SkillsProps> = ({ skills }) => {
	return <DefaultSkills skills={skills} />;
};
