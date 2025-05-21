import { FunctionComponent } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { ISection, ISectionItem } from "@/app/types/resume.types";
import { SectionItem } from "./section-item";

const styles = StyleSheet.create({
	section: {},
	title: {
		fontWeight: "bold",
		textTransform: "uppercase",
	},
	divider: {
		display: "flex",
		borderBottomWidth: 1,
		borderColor: "black",
	},
	items: {
		gap: 4,
	},
});

interface SectionProps {
	section: ISection<ISectionItem>;
	sectionName: string;
}

export const Section: FunctionComponent<SectionProps> = ({
	section,
	sectionName,
}) => {
	if (!section?.items?.length) return null;

	return (
		<View style={styles.section}>
			<Text style={styles.title}>{section.title}</Text>
			<View style={styles.divider} />

			<View style={sectionName == "skills" ? {} : styles.items}>
				{section.items.map((item, index) => (
					<SectionItem
						key={index}
						sectionName={sectionName}
						item={item}
					/>
				))}
			</View>
		</View>
	);
};
