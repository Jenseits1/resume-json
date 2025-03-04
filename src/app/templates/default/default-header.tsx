import { FunctionComponent } from "react";

interface DefaultHeaderProps {
	header: {
		name: string;
		contacts: {
			phone?: string;
			email?: string;
			github?: string;
			linkedin?: string;
			website?: string;
		};
	};
}

const handleHref = (key: string, val: string) => {
	if (key == "email") {
		return `mailto: ${val}`;
	}

	return val;
};

export const DefaultHeader: FunctionComponent<DefaultHeaderProps> = ({
	header,
}) => {
	return (
		<div className="flex flex-col items-center pb-16 space-y-4">
			<h1 className="text-8xl font-[900]">{header.name}</h1>

			<div className="flex flex-wrap justify-center space-x-12 px-24">
				{Object.entries(header.contacts).map(([key, value]) => (
					<a
						key={key}
						href={handleHref(key, value)}
						rel="noopener noreferrer"
					>
						{value}
					</a>
				))}
			</div>
		</div>
	);
};
