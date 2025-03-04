import { FunctionComponent } from "react";
import { Section } from "./components/section";
import { DateLocation } from "./components/date-location";

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
				<div className="space-y-4">
					{education.map(
						(
							{
								institution,
								degree,
								startDate,
								endDate,
								location,
							},
							index
						) => (
							<div className="flex justify-between" key={index}>
								<div>
									<p className="font-semibold">
										{institution}
									</p>
									<p>{degree}</p>
								</div>

								<DateLocation
									{...{ startDate, endDate, location }}
								/>
							</div>
						)
					)}
				</div>
			</Section>
		</div>
	);
};
