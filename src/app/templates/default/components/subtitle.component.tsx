import { FunctionComponent } from "react";
import { Text, StyleSheet } from "@react-pdf/renderer";
import { Subtitle } from "@/app/types/resume.types";

// Define styles for SubtitleComponent
const styles = StyleSheet.create({
	subtitle: {
		fontStyle: "italic", // Equivalent to italic class
	},
});

interface SubtitleComponentProps {
	subtitle?: Subtitle;
}

export const SubtitleComponent: FunctionComponent<SubtitleComponentProps> = ({
	subtitle,
}) => {
	return <Text style={styles.subtitle}>{subtitle}</Text>;
};
