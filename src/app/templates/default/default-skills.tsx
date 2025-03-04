import { FunctionComponent } from "react";
import { Section } from "./components/section";

interface DefaultSkillsProps {
	skills: {
		hardSkills: string[];
		softSkills: string[];
		languages: {
			language: string;
			proficiency: string;
		}[];
	};
}

export const DefaultSkills: FunctionComponent<DefaultSkillsProps> = ({
	skills,
}) => {
	return (
		<Section sectionTitle="Skills">
			<div className="space-y-4">
				{/* Hard Skills */}
				<div>
					<p className="font-semibold">Hard Skills</p>
					<p>{skills.hardSkills.join(", ")}</p>
				</div>

				{/* Soft Skills */}
				<div>
					<p className="font-semibold">Soft Skills</p>
					<p>{skills.softSkills.map((skill) => skill).join(", ")}</p>
				</div>

				{/* Languages */}
				<div>
					<p className="font-semibold">Spoken Languages</p>
					<p>
						{skills.languages
							.map(
								({ language, proficiency }) =>
									`${language} (${proficiency})`
							)
							.join(", ")}
					</p>
				</div>
			</div>
		</Section>
	);
};
