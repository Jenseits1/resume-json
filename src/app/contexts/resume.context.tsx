"use client";
import {
	createContext,
	FunctionComponent,
	useContext,
	useEffect,
	useState,
} from "react";
import { IResume } from "../types/resume.types";
import { englishResume } from "@/resume-object";

interface ResumeProviderProps {
	children: React.ReactNode;
}

interface ResumeContextType {
	resume: IResume | {};
	resumes: string[];
	getResume: (resume: string) => string;
}

export const ResumeContext = createContext<ResumeContextType | null>(null);

export const ResumeProvider: FunctionComponent<ResumeProviderProps> = ({
	children,
}) => {
	const [resumes, setResumes] = useState<string[]>([]);

	useEffect(() => {
		const storedResumes = localStorage.getItem("resumes");

		if (storedResumes) {
			setResumes(JSON.parse(storedResumes));
		} else {
			localStorage.setItem("resumes", JSON.stringify(["default"]));
			localStorage.setItem(
				"default",
				JSON.stringify(englishResume, null, 4)
			);
			setResumes(["default"]);
		}
	}, []);

	const getResume = (resume: string) => {
		return localStorage.getItem(resume) || "";
	};

	return (
		<ResumeContext.Provider
			value={{
				resume: {},
				resumes,
				getResume,
			}}
		>
			{children}
		</ResumeContext.Provider>
	);
};

export const useResume = () => {
	const context = useContext(ResumeContext);

	if (!context) {
		throw new Error("useResume must be used within a ResumeProvider");
	}
	return context;
};
