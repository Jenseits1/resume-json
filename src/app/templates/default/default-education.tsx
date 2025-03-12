import { FunctionComponent } from "react";
import { Section } from "./components/section";
import { DateLocation } from "./components/date-location";
import { Subtitle } from "./components/subtitle";
import { SecondarySubtitle } from "./components/secondary-subtitle";

interface DefaultEducationProps {
	education: {
		institution: string;
		degree: string;
		startDate: string;
		endDate: string;
		location: {
			state: string;
			country: string;
		};
	}[];
}

export const DefaultEducation: FunctionComponent<DefaultEducationProps> = ({
	education,
}) => {
	return (
		<div>
			<Section sectionTitle="Education">
				{education.map(
					(
						{ institution, degree, startDate, endDate, location },
						index
					) => (
						<div className="flex justify-between" key={index}>
							<div>
								<Subtitle>{institution}</Subtitle>
								<SecondarySubtitle>{degree}</SecondarySubtitle>
							</div>

							<DateLocation
								{...{ startDate, endDate, location }}
							/>
						</div>
					)
				)}
			</Section>
		</div>
	);
};
