import { DefaultSkills } from "../../templates/default/default-skills";
import { FunctionComponent } from "react";

import { IResumeSection, ISkills } from "../../types/resume.types";

interface SkillsProps {
	skills: IResumeSection<ISkills>;
}

export const Skills: FunctionComponent<SkillsProps> = ({ skills }) => {
	return <DefaultSkills skills={skills} />;
};
