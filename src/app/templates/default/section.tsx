import { FunctionComponent } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { ISection, ISectionItem } from "@/app/types/resume.types";
import { SectionItem } from "./section-item";

// Define styles for the Section
const styles = StyleSheet.create({
	section: {
		marginBottom: 8,
	},
	title: {
		fontWeight: "bold",
		textTransform: "uppercase",
	},
	divider: {
		display: "flex",
		borderBottomWidth: 1,
		borderColor: "black",
	},
});

interface SectionProps {
	section?: ISection<ISectionItem>;
}

export const Section: FunctionComponent<SectionProps> = ({ section }) => {
	if (!section?.items?.length) return null;

	return (
		<View style={styles.section}>
			<Text style={styles.title}>{section.title}</Text>
			<View style={styles.divider} />

			{typeof section.items[0] === "string" ? (
				<Text>{section.items.join(", ")}</Text>
			) : (
				(section.items as Exclude<ISectionItem, string>[]).map(
					(item, index) => <SectionItem key={index} item={item} />
				)
			)}
		</View>
	);
};
