import { FunctionComponent } from "react";
import dynamic from "next/dynamic";
import { ResumeDocument } from "./resume-document";
import { Button } from "@/components/ui/button";
import { useResume } from "@/app/contexts/resume.context";

const PDFDownloadLink = dynamic(
	() => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
	{ ssr: false }
);

interface PdfDownloadButtonProps {}

export const PdfDownloadButton: FunctionComponent<
	PdfDownloadButtonProps
> = () => {
	const { resume } = useResume();

	return (
		<>
			{PDFDownloadLink && (
				<PDFDownloadLink
					document={<ResumeDocument {...resume} />}
					fileName="resume.pdf"
				>
					{({ loading }) =>
						loading ? (
							<Button>Loading PDF...</Button>
						) : (
							<Button>Baixar PDF</Button>
						)
					}
				</PDFDownloadLink>
			)}
		</>
	);
};
