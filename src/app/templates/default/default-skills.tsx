import { FunctionComponent } from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { Section } from "./components/section";
import { Subtitle } from "./components/subtitle";
import { ISkills } from "@/app/types/resume.types";

const styles = StyleSheet.create({
	sectionContent: {
		display: "flex",
		flexDirection: "column",
		paddingRight: 16,
	},
});

interface DefaultSkillsProps {
	skills: ISkills[];
}

export const DefaultSkills: FunctionComponent<DefaultSkillsProps> = ({
	skills,
}) => {
	return (
		<Section sectionTitle="Skills">
			{skills.map(({ type, skills }, index) => (
				<View key={index} style={styles.sectionContent}>
					<Subtitle>{type}</Subtitle>
					<Text>{skills.join(", ")}</Text>
				</View>
			))}
		</Section>
	);
};
