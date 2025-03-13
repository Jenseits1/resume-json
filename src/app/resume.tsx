"use client";
import { FunctionComponent } from "react";
import dynamic from "next/dynamic";
import { ResumePreview } from "./components/resume-preview";

// Dynamically import PDFDownloadLink (Client-side only)
const PDFDownloadLink = dynamic(
	() => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
	{ ssr: false }
);

interface ResumeProps {}

export const Resume: FunctionComponent<ResumeProps> = () => {
	return (
		<div className="flex flex-col items-center bg-gray-200 h-screen px-16">
			{/* {PDFDownloadLink && (
				<PDFDownloadLink document={<ResumePDF />} fileName="resume.pdf">
					{({ loading }) =>
						loading ? (
							<Button>Loading PDF...</Button>
						) : (
							<Button>Baixar PDF</Button>
						)
					}
				</PDFDownloadLink>
			)} */}

			<div className="flex w-full h-full">
				<div className="flex flex-1 bg-red-300"></div>
				<ResumePreview />
			</div>
		</div>
	);
};
