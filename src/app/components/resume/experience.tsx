import { DefaultExperience } from "@/app/templates/default/default-experience";
import { IExperience, IResumeSection } from "@/app/types/resume.types";
import { FunctionComponent } from "react";

interface ExperienceProps {
	experience: IResumeSection<IExperience>;
}

export const Experience: FunctionComponent<ExperienceProps> = ({
	experience,
}) => {
	return <DefaultExperience experience={experience} />;
};
