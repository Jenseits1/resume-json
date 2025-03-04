import { FunctionComponent } from "react";
import { Header } from "./components/header";
import { Education } from "./components/education";
import { Skills } from "./components/skills";

interface ResumeProps {}

export const Resume: FunctionComponent<ResumeProps> = () => {
	return (
		<div className="flex justify-center px-16 2xl:px-0 pt-24 pb-48 font-Arial">
			<div className="w-full max-w-[1248px] text-3xl">
				<Header />

				<Education />

				<Skills />
			</div>
		</div>
	);
};
