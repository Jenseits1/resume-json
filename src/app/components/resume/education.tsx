import { FunctionComponent } from "react";
import { DefaultEducation } from "../../templates/default/default-education";
import { IEducation, IResumeSection } from "@/app/types/resume.types";

interface EducationProps {
	education: IResumeSection<IEducation>;
}

export const Education: FunctionComponent<EducationProps> = ({ education }) => {
	return <DefaultEducation education={education} />;
};
