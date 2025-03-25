import { FunctionComponent } from "react";
import { View, Text, StyleSheet, Link } from "@react-pdf/renderer";
import { IHeader } from "@/app/types/resume.types";

const styles = StyleSheet.create({
	headerContainer: {
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
		marginBottom: 16,
	},
	fullName: {
		fontSize: 24,
		fontWeight: "semibold",
	},
	contactsContainer: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
		Link: {
			marginRight: 10,
			textDecoration: "none",
			color: "black",
		},
	},
	contactLink: {
		marginRight: 10,
		textDecoration: "none",
		color: "black",
	},
});

interface DefaultHeaderProps {
	header: IHeader;
}

export const Header: FunctionComponent<DefaultHeaderProps> = ({ header }) => {
	return (
		<View style={styles.headerContainer}>
			<Text style={styles.fullName}>{header.fullName}</Text>

			<View style={styles.contactsContainer}>
				<Link style={styles.contactLink}>{header.contacts.phone}</Link>

				<Link
					style={styles.contactLink}
					href={`mailto: ${header.contacts.email}`}
				>
					{header.contacts.email}
				</Link>

				<Link style={styles.contactLink} href={header.contacts.github}>
					{header.contacts.github}
				</Link>

				<Link
					style={styles.contactLink}
					href={header.contacts.linkedin}
				>
					{header.contacts.linkedin}
				</Link>
			</View>
		</View>
	);
};
