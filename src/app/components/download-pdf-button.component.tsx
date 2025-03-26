import { FunctionComponent, memo } from "react";
import { Button } from "@chakra-ui/react";
import { LuDownload } from "react-icons/lu";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { IResumeContent } from "@/app/types/resume.types";
import { ResumeDocumentComponent } from "./resume-document.component";
import { Tooltip } from "@/components/ui/tooltip";

interface DownloadPDFButtonProps {
	resume: IResumeContent;
}

const DownloadPDFButton: FunctionComponent<DownloadPDFButtonProps> = ({
	resume,
}) => {
	return (
		<Tooltip
			showArrow={true}
			openDelay={500}
			content="Your resume will be downloaded safely as a PDF file"
		>
			<PDFDownloadLink
				style={{ display: "flex" }}
				key={JSON.stringify(resume)}
				document={<ResumeDocumentComponent resume={resume} />}
				fileName={`${resume.metadata?.resumeName}.pdf`}
			>
				{({ loading }) => (
					<Button
						flex="1"
						variant="surface"
						colorPalette="blue"
						loading={loading}
					>
						<LuDownload />
						Download PDF
					</Button>
				)}
			</PDFDownloadLink>
		</Tooltip>
	);
};

export const DownloadPDFButtonComponent = memo(DownloadPDFButton);
