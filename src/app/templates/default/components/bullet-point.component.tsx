import { FunctionComponent } from "react";
import { Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import { BulletPoint } from "@/app/types/resume.types";

Font.registerHyphenationCallback((word) => [word]);

const styles = StyleSheet.create({
	bulletPointText: {
		display: "flex",
		flexDirection: "row",
	},
	bulletPoints: {
		paddingLeft: 12,
		paddingRight: 8,
	},
	text: {
		wordBreak: "break-word",
		hyphens: "none",
	},
});

interface BulletPointProps {
	bulletPoints?: BulletPoint[];
}

export const BulletPointComponent: FunctionComponent<BulletPointProps> = ({
	bulletPoints,
}) => (
	<View style={styles.bulletPoints}>
		{bulletPoints?.map((text, index) => (
			<View key={index} style={styles.bulletPointText}>
				<Text>• </Text>
				<Text style={styles.text}>{text}</Text>
			</View>
		))}
	</View>
);
