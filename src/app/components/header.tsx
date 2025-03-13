import { FunctionComponent } from "react";
import { DefaultHeader } from "../templates/default/default-header";

import { IHeader } from "../types/resume.types";

interface HeaderProps {
	header: IHeader;
}

export const Header: FunctionComponent<HeaderProps> = ({ header }) => {
	return header && <DefaultHeader header={header} />;
};
