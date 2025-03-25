import { PDFViewer } from "@react-pdf/renderer";
import { FunctionComponent, memo } from "react";
import { IResumeContent } from "@/app/types/resume.types";
import { ResumeDocumentComponent } from "./resume-document.component";

interface ResumePreviewProps {
	resume: IResumeContent;
}

const ResumePreview: FunctionComponent<ResumePreviewProps> = ({ resume }) => {
	return (
		<PDFViewer
			key={JSON.stringify(resume)}
			width="100%"
			height={500}
			showToolbar={false}
			style={{
				overflow: "hidden",
				maxWidth: "100%",
			}}
		>
			<ResumeDocumentComponent resume={resume} />
		</PDFViewer>
	);
};

export const ResumePreviewComponent = memo(ResumePreview);
