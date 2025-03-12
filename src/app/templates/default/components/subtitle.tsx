import { FunctionComponent } from "react";

interface SubtitleProps {
	children: string;
}

export const Subtitle: FunctionComponent<SubtitleProps> = ({ children }) => {
	return <h3 className="font-bold">{children}</h3>;
};
