import { FunctionComponent } from "react";
import { DefaultProjects } from "../templates/default/default-projects";
import { IProject } from "../types/resume.types";

interface ProjectsProps {
	projects: IProject[];
}

export const Projects: FunctionComponent<ProjectsProps> = ({ projects }) => {
	return <DefaultProjects projects={projects} />;
};
