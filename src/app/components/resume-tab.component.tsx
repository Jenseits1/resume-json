"use client";
import { FunctionComponent, useState } from "react";
import { useResume } from "../providers/resume.provider";
import { ResumePreview } from "./resume-preview.component";
import { Box, Button, Grid } from "@chakra-ui/react";
import { PdfDownloadButton } from "./pdf-download-button.component";
import { LuDelete, LuSave } from "react-icons/lu";
import { IResumeContent } from "../types/resume.types";
import { validateJson } from "../validators/json.validator";
import { toaster } from "@/components/ui/toaster";
import { JsonEditorComponent } from "./json-editor.component";

interface ResumeTabComponentProps {
	id: string;
	resume: IResumeContent;
}

export const ResumeTabComponent: FunctionComponent<ResumeTabComponentProps> = ({
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
				<JsonEditorComponent
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
