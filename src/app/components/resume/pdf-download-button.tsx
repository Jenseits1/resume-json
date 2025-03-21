import { FunctionComponent, memo } from "react";
import { Button } from "@chakra-ui/react";
import { LuDownload } from "react-icons/lu";
import { PDFDownloadLink } from "@react-pdf/renderer"; // Direct import
import { ResumeDocument } from "./resume-document";
import { IResumeContent } from "@/app/types/resume.types";

interface PdfDownloadButtonProps {
	resume: IResumeContent;
}

export const PdfDownloadButtonComponent: FunctionComponent<
	PdfDownloadButtonProps
> = ({ resume }) => {
	return (
		<PDFDownloadLink
			style={{ display: "flex" }}
			key={JSON.stringify(resume)}
			document={<ResumeDocument resume={resume} />}
			fileName={`${resume.metadata?.resumeName}.pdf`}
		>
			{({ loading }) => (
				<Button flex="1" variant="subtle" loading={loading}>
					<LuDownload />
					Download
				</Button>
			)}
		</PDFDownloadLink>
	);
};

export const PdfDownloadButton = memo(PdfDownloadButtonComponent);
