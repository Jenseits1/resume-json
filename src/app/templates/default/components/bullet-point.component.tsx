import { FunctionComponent } from "react";
import { Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import { BulletPoint } from "@/app/types/resume.types";

Font.registerHyphenationCallback((word) => [word]);

const styles = StyleSheet.create({
	bulletPointText: {
		display: "flex",
		flexDirection: "row",
		paddingRight: 16,
	},
	bulletPoint: {
		fontWeight: "bold",
		position: "absolute",
		top: -2,
		fontSize: 16,
	},
	text: {
		wordBreak: "break-word",
		hyphens: "none",
		marginLeft: 12,
	},
});

interface BulletPointComponentProps {
	children: string;
}

export const BulletPointComponent: FunctionComponent<
	BulletPointComponentProps
> = ({ children }) => {
	return (
		<View style={styles.bulletPointText}>
			<Text style={styles.bulletPoint}>•</Text>
			<Text style={styles.text}>{children}</Text>
		</View>
	);
};
