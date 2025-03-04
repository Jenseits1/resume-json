import { FunctionComponent } from "react";
import { DefaultHeader } from "../templates/default/default-header";
import { resumeInfo } from "@/resume-object";

interface HeaderProps {}

export const Header: FunctionComponent<HeaderProps> = () => {
	const header = resumeInfo.header;

	return <DefaultHeader header={header} />;
};
