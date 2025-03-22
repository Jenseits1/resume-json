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
	},
	contactLink: {
		marginRight: 10,
		textDecoration: "none",
		color: "black",
	},
});

const handleHref = (key: string, val: string) => {
	if (key === "email") {
		return `mailto:${val}`;
	}

	if (key === "phone") {
		return "";
	}

	return val;
};

interface DefaultHeaderProps {
	header: IHeader;
}

export const Header: FunctionComponent<DefaultHeaderProps> = ({ header }) => {
	return (
		<View style={styles.headerContainer}>
			<Text style={styles.fullName}>{header.fullName}</Text>

			<View style={styles.contactsContainer}>
				{Object.entries(header.contacts).map(([key, value], index) => (
					<Link
						key={index}
						style={styles.contactLink}
						src={handleHref(key, value)}
					>
						{value}
					</Link>
				))}
			</View>
		</View>
	);
};
