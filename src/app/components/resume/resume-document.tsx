import React, { FunctionComponent } from "react";
import { Document, Page, StyleSheet } from "@react-pdf/renderer";

import { IResume } from "../../types/resume.types";
import { Header } from "./header";
import { Education } from "./education";
import { Skills } from "./skills";
import { Projects } from "./projects";
import { Experience } from "./experience";

// Define the styles for the PDF
const styles = StyleSheet.create({
	page: {
		fontSize: 14,
		flexDirection: "column",
		padding: 36,
		fontFamily: "Times-Roman",
		wrap: false,
		wordBreak: "break-word",
	},
	text: {
		wrap: false,
		wordBreak: "break-word",
	},
});

interface ResumeDocumentProps extends IResume {}

export const ResumeDocument: FunctionComponent<ResumeDocumentProps> = ({
	header,
	education,
	skills,
	projects,
	experience,
}) => {
	return (
		<Document>
			<Page size="A4" style={styles.page}>
				{header && <Header header={header} />}

				{education && education.length > 0 && (
					<Education education={education} />
				)}

				{skills && skills.length > 0 && <Skills skills={skills} />}

				{projects && projects.length > 0 && (
					<Projects projects={projects} />
				)}

				{experience && experience.length > 0 && (
					<Experience experience={experience} />
				)}
			</Page>
		</Document>
	);
};
