import { FunctionComponent } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { IDate, ILocation } from "@/app/types/resume.types";

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-end",
	},
	location: {},
	date: {},
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
