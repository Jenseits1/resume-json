import { PDFViewer } from "@react-pdf/renderer";
import { FunctionComponent } from "react";
import { ResumeDocument } from "./resume-document";
import { useResume } from "../contexts/resume.context";

interface ResumePreviewProps {}

export const ResumePreview: FunctionComponent<ResumePreviewProps> = () => {
	const { resume } = useResume();

	return (
		<PDFViewer
			style={{
				height: "80vh",
				border: "none",
				width: "800px",
			}}
			showToolbar={false}
		>
			<ResumeDocument {...resume} />
		</PDFViewer>
	);
};
