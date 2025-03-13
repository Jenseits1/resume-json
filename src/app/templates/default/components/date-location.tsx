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

interface DateLocationProps {
	date: IDate;
	location: ILocation;
}

export const DateLocation: FunctionComponent<DateLocationProps> = ({
	date,
	location,
}) => {
	return (
		<View style={styles.container}>
			<Subtitle>{`${location.state}, ${location.country}`}</Subtitle>
			<SecondarySubtitle>{`${date.start} - ${date.end}`}</SecondarySubtitle>
		</View>
	);
};
