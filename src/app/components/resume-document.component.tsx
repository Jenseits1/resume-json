import React, { FunctionComponent } from "react";
import { Document, Font } from "@react-pdf/renderer";
import { IResumeContent } from "@/app/types/resume.types";
import { DefaultTemplate } from "../templates/default/default-template";

Font.register({
	family: "Arial",
	fonts: [
		{ src: "fonts/arial.ttf", fontWeight: "normal", fontStyle: "normal" },
		{ src: "fonts/arialbd.ttf", fontWeight: "bold", fontStyle: "normal" },
		{ src: "fonts/ariali.ttf", fontWeight: "normal", fontStyle: "italic" },
		{ src: "fonts/arialbi.ttf", fontWeight: "bold", fontStyle: "italic" },
	],
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
				return [{ itemList: resume.interests?.items }];
			case "courses":
				return [{ itemList: resume.courses?.items }];
		}
	};

	const getSections = () => {
		const sections = [];

		for (const sectionName of resume.metadata?.sections) {
			const sectionData =
				resume[
					sectionName as keyof Omit<
						IResumeContent,
						"metadata" | "header"
					>
				];

			if (!sectionData || sectionData.items?.length == 0) {
				continue;
			}

			const section = {
				sectionName,
				section: {
					title: sectionData?.title,
					items: mapSectionItems(sectionName),
				},
			};

			sections.push(section);
		}

		return sections;
	};

	return (
		<Document>
			<DefaultTemplate header={resume.header} sections={getSections()} />
		</Document>
	);
};
