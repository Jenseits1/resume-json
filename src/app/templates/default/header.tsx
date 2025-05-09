import { FunctionComponent } from "react";
import { View, Text, StyleSheet, Link } from "@react-pdf/renderer";
import { IHeader } from "@/app/types/resume.types";

const styles = StyleSheet.create({
	headerContainer: {
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
		marginBottom: 8,
	},
	fullName: {
		fontSize: 24,
		fontWeight: "bold",
	},
	contactsContainer: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
	},
	contactLink: {
		marginLeft: 16,
		textDecoration: "none",
		color: "black",
	},
});

interface HeaderProps {
	header: IHeader;
}

export const Header: FunctionComponent<HeaderProps> = ({ header }) => {
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
