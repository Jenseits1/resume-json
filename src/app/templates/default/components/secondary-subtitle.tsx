import { FunctionComponent } from "react";

interface SecondarySubtitleProps {
	children: string;
}

export const SecondarySubtitle: FunctionComponent<SecondarySubtitleProps> = ({
	children,
}) => {
	return <h3 className="italic">{children}</h3>;
};
