import { FunctionComponent } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
	bulletPointText: {
		listStyleType: "disc", // Ensures it is a bullet point
		display: "flex",
		flexDirection: "row",
	},
	bulletPoints: {
		paddingLeft: 12,
		paddingRight: 16,
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
				<Text>{text}</Text>
			</View>
		))}
	</View>
);
