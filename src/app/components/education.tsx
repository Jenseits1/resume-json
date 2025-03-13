import { FunctionComponent } from "react";
import { DefaultEducation } from "../templates/default/default-education";

import { IEducation } from "../types/resume.types";

interface EducationProps {
	education: IEducation[];
}

export const Education: FunctionComponent<EducationProps> = ({ education }) => {
	return <DefaultEducation education={education} />;
};
