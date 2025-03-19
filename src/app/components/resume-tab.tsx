import { FunctionComponent, useEffect, useState } from "react";
import { useResume } from "../contexts/resume.context";
import { JsonEditor } from "./json/json-editor";
import { IResume, IResumeContent } from "../types/resume.types";
import { ResumePreview } from "./resume/resume-preview";

import { Box, Button } from "@chakra-ui/react";
import { PdfDownloadButton } from "./resume/pdf-download-button";
import { LuDelete, LuSave } from "react-icons/lu";

interface ResumeTabProps extends IResume {}

export const ResumeTab: FunctionComponent<ResumeTabProps> = ({
	id,
	resume,
}) => {
	const { updateResume, deleteResume } = useResume();
	const [json, setJson] = useState<string | undefined>("");
	const [buttonDisabled, setButtonDisabled] = useState(false);
	const [hasErrors, setHasErrors] = useState(false);

	useEffect(() => {
		setJson(JSON.stringify(resume, null, 4));
	}, []);

	return (
		<Box display="flex" height={800} flexDirection="column" spaceY="4">
			<Box display="flex" spaceX="2" width="3xl">
				<Button
					variant="subtle"
					flex="1"
					disabled={buttonDisabled || hasErrors}
					onClick={() => updateResume(id, JSON.parse(json!))}
				>
					<LuSave />
					Save
				</Button>

				<PdfDownloadButton resume={resume} />

				<Button
					variant="subtle"
					flex="1"
					onClick={() => deleteResume(id)}
				>
					<LuDelete />
					Delete
				</Button>
			</Box>
			<Box display="flex" flex="1" spaceX="4">
				<JsonEditor
					json={json}
					onValidate={(markers) => {
						setHasErrors(markers.length > 0);
					}}
					onBeginUpdate={async () => {
						if (!buttonDisabled) {
							setButtonDisabled(true);
							await new Promise((resolve) =>
								setTimeout(resolve, 1000)
							);
							setButtonDisabled(false);
						}
					}}
					onChange={(updatedJson) => {
						setJson(updatedJson);
					}}
				/>

				<ResumePreview resume={resume} />
			</Box>
		</Box>
	);
};
