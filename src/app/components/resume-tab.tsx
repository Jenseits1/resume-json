import { FunctionComponent, useEffect, useMemo, useState } from "react";
import { useResume } from "../contexts/resume.context";
import { JsonEditor } from "./json/json-editor";
import { IResume, IResumeContent } from "../types/resume.types";
import { ResumePreview } from "./resume/resume-preview";

import { Box, Button } from "@chakra-ui/react";
import { PdfDownloadButton } from "./resume/pdf-download-button";
import { LuDelete, LuSave } from "react-icons/lu";

interface ResumeTabProps {
	id: string;
	resume: IResumeContent;
}

export const ResumeTab: FunctionComponent<ResumeTabProps> = ({
	id,
	resume,
}) => {
	const { updateResume, deleteResume } = useResume();
	const [json, setJson] = useState<string | undefined>("");
	const [errors, setErrors] = useState<any[]>();

	useEffect(() => {
		setJson(JSON.stringify(resume, null, 4));
	}, []);

	const saveResume = () => {
		if (!errors || errors?.length == 0) {
			return updateResume(id, JSON.parse(json!));
		}
		console.log(errors);
		console.log("can't save it");
	};

	return (
		<Box display="flex" height={800} flexDirection="column" spaceY="4">
			<Box display="flex" spaceX="2" width="3xl">
				<Button variant="subtle" flex="1" onClick={saveResume}>
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
					onValidate={(markers) => setErrors(markers)}
					onChange={(updatedJson) => setJson(updatedJson)}
				/>

				<ResumePreview resume={resume} />
			</Box>
		</Box>
	);
};
