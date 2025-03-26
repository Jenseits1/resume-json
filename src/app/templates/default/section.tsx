import { FunctionComponent } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { ISection, ISectionItem } from "@/app/types/resume.types";
import { SectionItem } from "./section-item";

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

			{["interests", "courses"].includes(sectionName) ? (
				<Text>{section.items.join(", ")}</Text>
			) : (
				(section.items as Exclude<ISectionItem, string>[]).map(
					(item, index) => (
						<SectionItem
							index={index}
							sectionName={sectionName}
							key={index}
							item={item}
						/>
					)
				)
			)}
		</View>
	);
};
