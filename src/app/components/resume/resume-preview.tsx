import { PDFViewer } from "@react-pdf/renderer";
import { FunctionComponent, memo } from "react";
import { ResumeDocument } from "./resume-document";
import { IResumeContent } from "@/app/types/resume.types";

interface ResumePreviewProps {
	resume: IResumeContent;
}

const ResumePreviewComponent: FunctionComponent<ResumePreviewProps> = ({
	resume,
}) => {
	return (
		<PDFViewer height="100%" width="100%" showToolbar={false}>
			<ResumeDocument {...resume} />
		</PDFViewer>
	);
};

export const ResumePreview = memo(ResumePreviewComponent);
