import { PDFViewer } from "@react-pdf/renderer";
import { FunctionComponent, memo } from "react";
import { ResumeDocument } from "./resume-document";
import { IResume } from "@/app/types/resume.types";

interface ResumePreviewProps {
	resume: IResume;
}

const ResumePreviewComponent: FunctionComponent<ResumePreviewProps> = ({
	resume,
}) => {
	return (
		<PDFViewer className="h-full w-full" showToolbar={false}>
			<ResumeDocument {...resume} />
		</PDFViewer>
	);
};

export const ResumePreview = memo(ResumePreviewComponent);
