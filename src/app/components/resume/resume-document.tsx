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
			<Page style={styles.page}>
				{header && <Header header={header} />}

				{education && <Education education={education} />}

				{skills && <Skills skills={skills} />}

				{projects && <Projects projects={projects} />}

				{experience && <Experience experience={experience} />}
			</Page>
		</Document>
	);
};
