import { FunctionComponent } from "react";
import { Section } from "./components/section";
import { Subtitle } from "./components/subtitle";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { BulletPoint } from "./components/bullet-point";
import { IProject, IResumeSection } from "@/app/types/resume.types";

const styles = StyleSheet.create({
	projectContainer: {},
});

interface DefaultProjectsProps {
	projects: IResumeSection<IProject>;
}

export const DefaultProjects: FunctionComponent<DefaultProjectsProps> = ({
	projects,
}) => {
	return (
		<Section sectionTitle={projects.title}>
			{projects.items.map(({ title, description }, index) => (
				<View key={index}>
					<Subtitle>{title}</Subtitle>

					<BulletPoint bulletPoints={description} />
				</View>
			))}
		</Section>
	);
};
