import { FunctionComponent, memo } from "react";
import dynamic from "next/dynamic";
import { ResumeDocument } from "./resume-document";

import { Button } from "@chakra-ui/react";
import { IResumeContent } from "@/app/types/resume.types";
import { LuDownload } from "react-icons/lu";

const PDFDownloadLink = dynamic(
	() => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
	{ ssr: false }
);

interface PdfDownloadButtonProps {
	resume: IResumeContent;
}

export const PdfDownloadButtonComponent: FunctionComponent<
	PdfDownloadButtonProps
> = ({ resume }) => {
	return (
		<>
			{PDFDownloadLink && (
				<PDFDownloadLink
					className="flex-1"
					document={<ResumeDocument {...resume} />}
					fileName={`${resume.metadata?.resumeName}.pdf`}
				>
					{({ loading }) => (
						<Button
							flex="1"
							w="100%"
							variant="subtle"
							loading={loading}
							loadingText="Loading PDF..."
						>
							<LuDownload />
							Download PDF
						</Button>
					)}
				</PDFDownloadLink>
			)}
		</>
	);
};

export const PdfDownloadButton = memo(PdfDownloadButtonComponent);
