import { FunctionComponent } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { IDate, ILocation } from "@/app/types/resume.types";

// Styles for DateLocationComponent component
const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column", // Similar to flex-col in Tailwind
		alignItems: "flex-end", // Align to the end (right side)
	},
	date: {
		fontStyle: "italic", // Equivalent to italic class
	},
	location: {
		fontWeight: "bold",
	},
});

interface DateLocationComponentProps {
	date?: IDate;
	location?: ILocation;
}

export const DateLocationComponent: FunctionComponent<
	DateLocationComponentProps
> = ({ date, location }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.location}>
				{location?.state}, {location?.country}
			</Text>
			<Text style={styles.date}>
				{date?.start} - {date?.end}
			</Text>
		</View>
	);
};
