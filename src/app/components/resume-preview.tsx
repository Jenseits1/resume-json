import { PDFViewer } from "@react-pdf/renderer";
import { FunctionComponent, memo } from "react";
import { ResumeDocument } from "./resume-document";
import { IResumeContent } from "@/app/types/resume.types";

interface ResumePreviewProps {
	resume: IResumeContent;
}

export const ResumePreviewComponent: FunctionComponent<ResumePreviewProps> = ({
	resume,
}) => {
	return (
		<PDFViewer
			key={JSON.stringify(resume)}
			height={500}
			width="100%"
			showToolbar={false}
			style={{
				overflow: "hidden",
				maxWidth: "100%",
			}}
		>
			<ResumeDocument resume={resume} />
		</PDFViewer>
	);
};

export const ResumePreview = memo(ResumePreviewComponent);
