import { FunctionComponent } from "react";
import { IHeader } from "@/app/types/resume.types";
import { DefaultHeader } from "@/app/templates/default/default-header";

interface HeaderProps {
	header: IHeader;
}

export const Header: FunctionComponent<HeaderProps> = ({ header }) => {
	return <DefaultHeader header={header} />;
};
