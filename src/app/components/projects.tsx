import { resumeInfo } from "@/resume-object";
import { FunctionComponent } from "react";
import { DefaultProjects } from "../templates/default/default-projects";

interface ProjectsProps {}

export const Projects: FunctionComponent<ProjectsProps> = () => {
	const projects = resumeInfo.projects;

	return <DefaultProjects projects={projects} />;
};
