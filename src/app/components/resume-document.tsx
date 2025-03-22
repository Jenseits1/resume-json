import React, { FunctionComponent } from "react";
import { Document, Page, StyleSheet } from "@react-pdf/renderer";
import { IResumeContent } from "@/app/types/resume.types";
import { Section } from "@/app/templates/default/section";
import { Header } from "@/app/templates/default/header";

const styles = StyleSheet.create({
	page: {
		fontSize: 12,
		flexDirection: "column",
		paddingVertical: 24,
		paddingHorizontal: 24,
		fontFamily: "Times-Roman",
	},
});

interface ResumeDocumentProps {
	resume: IResumeContent;
}

export const ResumeDocument: FunctionComponent<ResumeDocumentProps> = ({
	resume,
}) => {
	const sectionItemsMap = (section: string) => {
		switch (section) {
			case "education":
				return resume.education?.items?.map(
					({ institution, degree, date, location }) => {
						return {
							title: institution,
							subtitle: degree,
							date,
							location,
						};
					}
				);
			case "skills":
				return resume.skills?.items?.map(({ category, skills }) => {
					return { title: category, itemList: skills };
				});
			case "projects":
				return resume.projects?.items?.map(({ title, description }) => {
					return { title, bulletPoints: description };
				});
			case "experience":
				return resume.experience?.items?.map(
					({ role, company, date, location, responsibilities }) => {
						return {
							title: company,
							subtitle: role,
							date,
							location,
							bulletPoints: responsibilities,
						};
					}
				);
			case "interests":
				return resume.interests?.items;
			case "courses":
				return resume.courses?.items;
		}
	};

	return (
		<Document>
			<Page style={styles.page}>
				{resume.header && <Header header={resume.header} />}

				{resume.metadata?.sections.map((section, index) => {
					const sectionData =
						resume[
							section as keyof Omit<
								IResumeContent,
								"metadata" | "header"
							>
						];

					if (sectionData)
						return (
							<Section
								key={index}
								section={{
									title: sectionData?.title,
									items: sectionItemsMap(section),
								}}
							/>
						);
				})}
			</Page>
		</Document>
	);
};
