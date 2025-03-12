import { FunctionComponent } from "react";

interface SectionProps {
	sectionTitle: string;
	children: React.ReactNode;
}

export const Section: FunctionComponent<SectionProps> = ({
	sectionTitle,
	children,
}) => {
	return (
		<div>
			<h2 className="font-bold uppercase">{sectionTitle}</h2>

			<hr className="border-black" />

			<div>{children}</div>
		</div>
	);
};
