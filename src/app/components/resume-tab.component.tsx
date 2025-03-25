import { FunctionComponent, useState } from "react";
import { Box, Grid } from "@chakra-ui/react";
import { IResumeContent } from "../types/resume.types";
import { JsonEditorComponent } from "./json-editor.component";
import { ResumePreviewComponent } from "./resume-preview.component";
import { HelpfulTipComponent } from "./helpful-tip.component";
import { DownloadPDFButtonComponent } from "./download-pdf-button.component";
import { UpdateResumeButtonComponent } from "./update-resume-button.component";
import { DeleteResumeButtonComponent } from "./delete-resume-button.component";

interface ResumeTabComponentProps {
	id: string;
	resume: IResumeContent;
}

export const ResumeTabComponent: FunctionComponent<ResumeTabComponentProps> = ({
	id,
	resume,
}) => {
	const [json, setJson] = useState<string>(JSON.stringify(resume, null, 4));

	return (
		<Box display="flex" flexDirection="column" spaceY="4">
			<Grid
				width={{ base: "sm", md: "xl" }}
				templateColumns="repeat(3, 1fr)"
				gap={4}
			>
				<UpdateResumeButtonComponent json={json} id={id} />
				<DownloadPDFButtonComponent resume={resume} />
				<DeleteResumeButtonComponent id={id} />
			</Grid>

			<HelpfulTipComponent />

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
