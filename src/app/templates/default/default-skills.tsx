import { FunctionComponent } from "react";
import { Section } from "./components/section";
import { Subtitle } from "./components/subtitle";

interface DefaultSkillsProps {
	skills: {
		technicalSkills: string[];
		languages: string[];
	};
}

export const DefaultSkills: FunctionComponent<DefaultSkillsProps> = ({
	skills,
}) => {
	return (
		<Section sectionTitle="Skills">
			{/* Technical Skills */}
			<div>
				<Subtitle>Technical Skills</Subtitle>
				<p>{skills.technicalSkills.join(", ")}</p>
			</div>

			{/* Languages */}
			<div>
				<Subtitle>Spoken Languages</Subtitle>
				<p>{skills.languages.map((language) => language).join(", ")}</p>
			</div>
		</Section>
	);
};
