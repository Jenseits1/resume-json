import { FunctionComponent, useState } from "react";
import { useResume } from "../providers/resume.provider";
import { Alert, Box, Button, Grid } from "@chakra-ui/react";
import { LuDelete, LuSave } from "react-icons/lu";
import { IResumeContent } from "../types/resume.types";
import { validateJson } from "../validators/json.validator";
import { toaster } from "@/components/ui/toaster";
import { JsonEditorComponent } from "./json-editor.component";
import { PdfDownloadButtonComponent } from "./pdf-download-button.component";
import { ResumePreviewComponent } from "./resume-preview.component";

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

				<PdfDownloadButtonComponent resume={resume} />

				<Button variant="subtle" onClick={() => deleteResume(id)}>
					<LuDelete />
					Delete
				</Button>
			</Grid>

			<Alert.Root
				status="info"
				w="fit-content"
				borderStartWidth="5px"
				borderStartColor="fg.info"
			>
				<Alert.Indicator />
				<Alert.Content>
					<Alert.Title>Helpful tip</Alert.Title>
					<Alert.Description>
						Edit "sections" inside "metadata" to control which
						sections appear and in which order they will be
						displayed
					</Alert.Description>
				</Alert.Content>
			</Alert.Root>

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

				<ResumePreviewComponent resume={resume} />
			</Box>
		</Box>
	);
};
