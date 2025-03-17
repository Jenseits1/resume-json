import { FunctionComponent } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { Subtitle } from "./subtitle";
import { SecondarySubtitle } from "./secondary-subtitle";
import { IDate, ILocation } from "@/app/types/resume.types";

// Styles for DateLocation component
const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column", // Similar to flex-col in Tailwind
		alignItems: "flex-end", // Align to the end (right side)
	},
});

interface DateLocationProps extends IDate, ILocation {}

export const DateLocation: FunctionComponent<DateLocationProps> = ({
	startDate,
	endDate,
	state,
	country,
}) => {
	return (
		<View style={styles.container}>
			<Subtitle>{`${state}, ${country}`}</Subtitle>
			<SecondarySubtitle>{`${startDate} - ${endDate}`}</SecondarySubtitle>
		</View>
	);
};
