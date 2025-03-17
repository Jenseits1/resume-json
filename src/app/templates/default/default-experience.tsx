import { FunctionComponent } from "react";
import { Section } from "./components/section";
import { Subtitle } from "./components/subtitle";
import { SecondarySubtitle } from "./components/secondary-subtitle";
import { DateLocation } from "./components/date-location";
import { BulletPoint } from "./components/bullet-point";
import { View, StyleSheet, Text } from "@react-pdf/renderer";
import { IExperience, IResumeSection } from "@/app/types/resume.types";

const styles = StyleSheet.create({
	experienceContainer: {},
	header: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
});

interface DefaultExperienceProps {
	experience: IResumeSection<IExperience>;
}

export const DefaultExperience: FunctionComponent<DefaultExperienceProps> = ({
	experience,
}) => {
	return (
		<Section sectionTitle={experience.title}>
			{experience.items.map(
				(
					{
						role,
						company,
						responsibilities,
						startDate,
						endDate,
						state,
						country,
					},
					index
				) => (
					<View key={index} style={styles.experienceContainer}>
						<View style={styles.header}>
							<View
								style={{
									display: "flex",
									flexDirection: "column",
								}}
							>
								<Subtitle>{company}</Subtitle>
								<SecondarySubtitle>{role}</SecondarySubtitle>
							</View>
							<DateLocation
								{...{ startDate, endDate, state, country }}
							/>
						</View>

						<BulletPoint bulletPoints={responsibilities} />
					</View>
				)
			)}
		</Section>
	);
};
