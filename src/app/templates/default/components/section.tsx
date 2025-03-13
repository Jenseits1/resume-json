import { FunctionComponent } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

// Define styles for the section
const styles = StyleSheet.create({
	section: {
		marginBottom: 8,
	},

	title: {
		fontWeight: "bold", // Equivalent to font-bold
		textTransform: "uppercase", // Equivalent to uppercase
	},
	divider: {
		display: "flex", // Flex to make the title span full width

		borderBottomWidth: 1, // Adds the border (divider)
		borderColor: "black", // Black color for the divider
	},
	content: {},
});

interface SectionProps {
	sectionTitle?: string;
	children: React.ReactNode;
}

export const Section: FunctionComponent<SectionProps> = ({
	sectionTitle,
	children,
}) => {
	return (
		<View style={styles.section}>
			{sectionTitle && (
				<>
					<Text style={styles.title}>{sectionTitle}</Text>

					<View style={styles.divider} />
				</>
			)}

			<View style={styles.content}>{children}</View>
		</View>
	);
};
