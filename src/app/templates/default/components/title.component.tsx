import { FunctionComponent } from "react";
import { Text, StyleSheet } from "@react-pdf/renderer";
import { Title } from "@/app/types/resume.types";

const styles = StyleSheet.create({
	title: {
		fontWeight: "bold",
	},
});

interface TitleComponentProps {
	title?: Title;
}

export const TitleComponent: FunctionComponent<TitleComponentProps> = ({
	title,
}) => {
	return <Text style={styles.title}>{title}</Text>;
};
