import { FunctionComponent } from "react";
import { View, Text, StyleSheet, Link } from "@react-pdf/renderer";
import { IHeader } from "@/app/types/resume.types";
import { Show } from "@chakra-ui/react";

const styles = StyleSheet.create({
	headerContainer: {
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
		marginBottom: 16,
	},
	fullName: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 4,
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
				<Show when={header.contacts.phone}>
					<Link style={styles.contactLink}>
						{header.contacts.phone}
					</Link>
				</Show>

				<Show when={header.contacts.email}>
					<Link
						style={styles.contactLink}
						href={`mailto: ${header.contacts.email}`}
					>
						{header.contacts.email}
					</Link>
				</Show>

				<Show when={header.contacts.github}>
					<Link
						style={styles.contactLink}
						href={header.contacts.github}
					>
						{header.contacts.github}
					</Link>
				</Show>

				<Show when={header.contacts.linkedin}>
					<Link
						style={styles.contactLink}
						href={header.contacts.linkedin}
					>
						{header.contacts.linkedin}
					</Link>
				</Show>

				<Show when={header.contacts.website}>
					<Link
						style={styles.contactLink}
						href={header.contacts.website}
					>
						{header.contacts.website}
					</Link>
				</Show>
			</View>
		</View>
	);
};
