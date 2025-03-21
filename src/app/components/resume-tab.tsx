"use client";
import { FunctionComponent, useEffect, useState } from "react";
import { useResume } from "../contexts/resume.context";
import { JsonEditor } from "./json/json-editor";
import { ResumePreview } from "./resume/resume-preview";
import { Box, Button, Grid } from "@chakra-ui/react";
import { PdfDownloadButton } from "./resume/pdf-download-button";
import { LuDelete, LuSave } from "react-icons/lu";
import { IResume } from "../types/resume.types";
import { validateJson } from "../validators/json.validator";
import { Toaster, toaster } from "@/components/ui/toaster";

interface ResumeTabProps extends IResume {}

export const ResumeTab: FunctionComponent<ResumeTabProps> = ({
	id,
	resume,
}) => {
	const { updateResume, deleteResume } = useResume();
	const [json, setJson] = useState<string>("");
	const [buttonDisabled, setButtonDisabled] = useState(false);

	useEffect(() => {
		setJson(JSON.stringify(resume, null, 4));
	}, []);

	const handleUpdateResume = async () => {
		setButtonDisabled(true);

		const validation = validateJson(json);

		if (validation.valid) {
			updateResume(id, JSON.parse(json!));
		} else {
			validation.errors.map((error) => {
				toaster.error({
					description: error,
					duration: 5000,
				});
			});
		}

		await new Promise((resolve) => setTimeout(resolve, 1000));
		setButtonDisabled(false);
	};

	return (
		<Box display="flex" flexDirection="column" spaceY="4">
			<Toaster />

			<Grid
				width={{ base: "sm", md: "xl" }}
				templateColumns="repeat(3, 1fr)"
				gap={4}
			>
				<Button
					variant="subtle"
					disabled={buttonDisabled}
					loading={buttonDisabled}
					onClick={handleUpdateResume}
				>
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
