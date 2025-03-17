import { FunctionComponent } from "react";
import { Text, View, StyleSheet, Font } from "@react-pdf/renderer";

// Prevents hyphenation in @react-pdf/renderer
Font.registerHyphenationCallback((word) => [word]);

const styles = StyleSheet.create({
	bulletPointText: {
		display: "flex",
		flexDirection: "row",
	},
	bulletPoints: {
		paddingLeft: 12,
		paddingRight: 16,
	},
	text: {
		wordBreak: "break-word", // Moves words to a new line if needed
		hyphens: "none", // Disables hyphenation
	},
});

interface BulletPointProps {
	bulletPoints: string[];
}

export const BulletPoint: FunctionComponent<BulletPointProps> = ({
	bulletPoints,
}) => (
	<View style={styles.bulletPoints}>
		{bulletPoints.map((text, index) => (
			<View key={index} style={styles.bulletPointText}>
				<Text>• </Text>
				<Text style={styles.text}>{text}</Text>
			</View>
		))}
	</View>
);
