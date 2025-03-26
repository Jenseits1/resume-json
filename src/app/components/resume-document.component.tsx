import React, { FunctionComponent } from "react";
import { Document, Font, Page, StyleSheet } from "@react-pdf/renderer";
import { IResumeContent } from "@/app/types/resume.types";
import { Section } from "@/app/templates/default/section";
import { Header } from "@/app/templates/default/header";

Font.register({
	family: "Arial",
	src: "fonts/ARIAL.ttf",
});

Font.register({
	family: "Arial",
	src: "fonts/ARIALBD.ttf",
	fontWeight: "bold",
});

Font.register({
	family: "Arial",
	src: "fonts/ARIALI.ttf",
	fontStyle: "italic",
});

Font.register({
	family: "Arial",
	src: "fonts/ARIALBI.ttf",
	fontWeight: "bold",
	fontStyle: "italic",
});

const styles = StyleSheet.create({
	page: {
		fontSize: 12,
		flexDirection: "column",
		paddingVertical: 24,
		paddingHorizontal: 24,
		fontFamily: "Arial",
	},
});

interface ResumeDocumentComponentProps {
	resume: IResumeContent;
}

export const ResumeDocumentComponent: FunctionComponent<
	ResumeDocumentComponentProps
> = ({ resume }) => {
	const mapSectionItems = (section: string) => {
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
								sectionName={section}
								section={{
									title: sectionData?.title,
									items: mapSectionItems(section),
								}}
							/>
						);
				})}
			</Page>
		</Document>
	);
};
