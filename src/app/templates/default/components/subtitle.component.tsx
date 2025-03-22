import { FunctionComponent } from "react";
import { Text, StyleSheet } from "@react-pdf/renderer";
import { Subtitle } from "@/app/types/resume.types";

const styles = StyleSheet.create({
	subtitle: {
		fontStyle: "italic",
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
