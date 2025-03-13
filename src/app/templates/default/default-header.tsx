import { FunctionComponent } from "react";
import { View, Text, StyleSheet, Link } from "@react-pdf/renderer";
import { Section } from "./components/section";
import { IHeader } from "@/app/types/resume.types";

const styles = StyleSheet.create({
	headerContainer: {
		display: "flex",
		alignItems: "center", // Equivalent to 'items-center'
		flexDirection: "column",
	},
	fullName: {
		fontSize: 24, // Equivalent to 'text-3xl'
		fontWeight: "semibold", // Equivalent to 'font-semibold'
	},
	contactsContainer: {
		display: "flex",
		flexDirection: "row", // Equivalent to 'flex-wrap justify-center'
		flexWrap: "wrap",
		justifyContent: "center",
	},
	contactLink: {
		marginRight: 10, // Space between contacts
		textDecoration: "none", // Remove underline for links
		color: "black",
	},
});

const handleHref = (key: string, val: string) => {
	if (key === "email") {
		return `mailto:${val}`;
	}

	return val;
};

interface DefaultHeaderProps {
	header: IHeader;
}

export const DefaultHeader: FunctionComponent<DefaultHeaderProps> = ({
	header,
}) => {
	return (
		<Section>
			<View style={styles.headerContainer}>
				<Text style={styles.fullName}>{header.fullName}</Text>

				<View style={styles.contactsContainer}>
					{Object.entries(header.contacts).map(
						([key, value], index) => (
							<Link
								key={index}
								style={styles.contactLink}
								src={handleHref(key, value)}
							>
								{value}
							</Link>
						)
					)}
				</View>
			</View>
		</Section>
	);
};
