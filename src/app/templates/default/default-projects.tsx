import { FunctionComponent } from "react";
import { Section } from "./components/section";
import { Subtitle } from "./components/subtitle";

interface DefaultProjectsProps {
	projects: {
		title: string;
		technologies: string[];
		bulletPoints: string[];
	}[];
}

export const DefaultProjects: FunctionComponent<DefaultProjectsProps> = ({
	projects,
}) => {
	return (
		<Section sectionTitle="Projects">
			{projects.map(({ title, technologies, bulletPoints }, index) => (
				<div key={index}>
					<Subtitle>{title}</Subtitle>

					<ul className="list-disc pl-8">
						{bulletPoints.map((text, index) => (
							<li key={index}>{text}</li>
						))}
					</ul>
				</div>
			))}
		</Section>
	);
};
