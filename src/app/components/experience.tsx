import { FunctionComponent } from "react";
import { DefaultExperience } from "../templates/default/default-experience";
import { IExperience } from "../types/resume.types";

interface ExperienceProps {
	experience: IExperience[];
}

export const Experience: FunctionComponent<ExperienceProps> = ({
	experience,
}) => {
	return <DefaultExperience experience={experience} />;
};
