import { FunctionComponent, useEffect, useState } from "react";
import { useResume } from "../contexts/resume.context";
import { JsonEditor } from "./json/json-editor";
import { IResume } from "../types/resume.types";
import { ResumePreview } from "./resume/resume-preview";

interface ResumeTabProps {
	resumeName: string;
}

export const ResumeTab: FunctionComponent<ResumeTabProps> = ({
	resumeName,
}) => {
	const { getResume } = useResume();
	const [json, setJson] = useState<string | undefined>("");
	const [resume, setResume] = useState<IResume>({});

	useEffect(() => {
		const resumeJson = getResume(resumeName);

		setJson(resumeJson);
		setResume(JSON.parse(resumeJson));
	}, []);

	return (
		<div className="flex w-full h-full space-x-6 pb-24">
			<JsonEditor
				json={json}
				onChange={(updatedJson) => setJson(updatedJson)}
			/>

			<ResumePreview resume={resume} />
		</div>
	);
};
