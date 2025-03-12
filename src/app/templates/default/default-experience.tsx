import { FunctionComponent } from "react";
import { Section } from "./components/section";
import { Subtitle } from "./components/subtitle";
import { DateLocation } from "./components/date-location";
import { SecondarySubtitle } from "./components/secondary-subtitle";

interface DefaultExperienceProps {
	experience: {
		role: string;
		company: string;
		startDate: string;
		endDate: string;
		location: {
			state: string;
			country: string;
		};
		bulletPoints: string[];
	}[];
}

export const DefaultExperience: FunctionComponent<DefaultExperienceProps> = ({
	experience,
}) => {
	return (
		<Section sectionTitle="Experience">
			{experience.map(
				(
					{
						role,
						company,
						startDate,
						endDate,
						location,
						bulletPoints,
					},
					index
				) => (
					<div key={index}>
						<div className="flex justify-between">
							<div>
								<Subtitle>{company}</Subtitle>
								<SecondarySubtitle>{role}</SecondarySubtitle>
							</div>

							<DateLocation
								{...{
									startDate,
									endDate,
									location,
								}}
							/>
						</div>
						<ul className="list-disc pl-8">
							{bulletPoints.map((text, index) => (
								<li key={index}>{text}</li>
							))}
						</ul>
					</div>
				)
			)}
		</Section>
	);
};
