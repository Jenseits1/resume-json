"use client";
import { FunctionComponent, useState } from "react";
import { useResume } from "../contexts/resume.context";
import { JsonEditor } from "./json-editor";
import { ResumePreview } from "./resume-preview";
import { Box, Button, Grid } from "@chakra-ui/react";
import { PdfDownloadButton } from "./pdf-download-button";
import { LuDelete, LuSave } from "react-icons/lu";
import { IResumeContent } from "../types/resume.types";
import { validateJson } from "../validators/json.validator";
import { toaster } from "@/components/ui/toaster";

interface ResumeTabProps {
	id: string;
	resume: IResumeContent;
}

export const ResumeTab: FunctionComponent<ResumeTabProps> = ({
	id,
	resume,
}) => {
	const { updateResume, deleteResume } = useResume();
	const [json, setJson] = useState<string>(JSON.stringify(resume, null, 4));

	const handleUpdateResume = () => {
		const validation = validateJson(json);

		if (validation.valid) {
			updateResume(id, JSON.parse(json!));

			toaster.success({
				title: "Resume updated!",
			});
		} else {
			validation.errors.map((error) => {
				toaster.error({
					title: "Unable to update resume",
					description: error,
				});
			});
		}
	};

	return (
		<Box display="flex" flexDirection="column" spaceY="4">
			<Grid
				width={{ base: "sm", md: "xl" }}
				templateColumns="repeat(3, 1fr)"
				gap={4}
			>
				<Button variant="subtle" onClick={handleUpdateResume}>
					<LuSave />
					Update
				</Button>

				<PdfDownloadButton resume={resume} />

				<Button variant="subtle" onClick={() => deleteResume(id)}>
					<LuDelete />
					Delete
				</Button>
			</Grid>

			<Box
				display="flex"
				flexDirection={{ base: "column", xl: "row" }}
				spaceX={{ xl: "4" }}
				spaceY={{ base: "4", xl: "0" }}
			>
				<JsonEditor
					value={json}
					onChange={(updatedJson) => {
						setJson(updatedJson || "");
					}}
				/>

				<ResumePreview resume={resume} />
			</Box>
		</Box>
	);
};
