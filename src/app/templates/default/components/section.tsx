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
			<h2
				className="text-[3.5rem] mb-4"
				style={{ fontVariant: "small-caps" }}
			>
				{sectionTitle}
			</h2>

			<hr className="border-1 border-black" />

			<div className="pt-4">{children}</div>
		</div>
	);
};
