import { FunctionComponent } from "react";
import { Text, StyleSheet } from "@react-pdf/renderer";

// Define styles for SecondarySubtitle
const styles = StyleSheet.create({
	subtitle: {
		fontStyle: "italic", // Equivalent to italic class
	},
});

interface SecondarySubtitleProps {
	children: string;
}

export const SecondarySubtitle: FunctionComponent<SecondarySubtitleProps> = ({
	children,
}) => {
	return <Text style={styles.subtitle}>{children}</Text>;
};
