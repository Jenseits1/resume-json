import { FunctionComponent } from "react";
import { Section } from "./components/section";
import { Subtitle } from "./components/subtitle";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { BulletPoint } from "./components/bullet-point";
import { IProject } from "@/app/types/resume.types";

const styles = StyleSheet.create({
	projectContainer: {},
});

interface DefaultProjectsProps {
	projects: IProject[];
}

export const DefaultProjects: FunctionComponent<DefaultProjectsProps> = ({
	projects,
}) => {
	return (
		<Section sectionTitle="projetos">
			{projects.map(({ title, technologies, bulletPoints }, index) => (
				<View key={index}>
					<Subtitle>{title}</Subtitle>

					<BulletPoint bulletPoints={bulletPoints} />
				</View>
			))}
		</Section>
	);
};
