import { FunctionComponent } from "react";
import { Text, StyleSheet } from "@react-pdf/renderer";

// Define the styles using @react-pdf/renderer's StyleSheet
const styles = StyleSheet.create({
	subtitle: {
		fontWeight: "bold", // Equivalent to Tailwind's font-bold
	},
});

interface SubtitleProps {
	children: string;
}

export const Subtitle: FunctionComponent<SubtitleProps> = ({ children }) => {
	return <Text style={styles.subtitle}>{children}</Text>;
};
