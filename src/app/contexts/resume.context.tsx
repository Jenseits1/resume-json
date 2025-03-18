"use client";
import {
	createContext,
	FunctionComponent,
	useContext,
	useEffect,
	useState,
} from "react";
import { IResume, IResumeContent } from "../types/resume.types";
import { englishResume } from "@/resume-object";
import { v4 as uuidv4 } from "uuid";

interface ResumeProviderProps {
	children: React.ReactNode;
}

interface ResumeContextType {
	resumes: IResume[];
	createResume: () => void;
	deleteResume: (resumeId: string) => void;
	updateResume: (resumeId: string, newResumeContent: IResumeContent) => void;
}

export const ResumeContext = createContext<ResumeContextType | null>(null);

export const ResumeProvider: FunctionComponent<ResumeProviderProps> = ({
	children,
}) => {
	const [resumes, setResumes] = useState<IResume[]>([]);

	useEffect(() => {
		const storedResumes = getResumes();

		if (!storedResumes) {
			createResume();
		}
		console.log(storedResumes);
		setResumes(getResumes());
	}, []);

	const getResumes = () => {
		return JSON.parse(localStorage.getItem("resumes")!);
	};

	const createResume = () => {
		const newResume = { ...englishResume };
		newResume.id = uuidv4();

		const newResumes = [...resumes, newResume];

		localStorage.setItem("resumes", JSON.stringify(newResumes));

		setResumes(newResumes);
	};

	const deleteResume = (resumeId: string) => {
		const newResumes: IResume[] = resumes.filter(
			({ id }) => id !== resumeId
		);

		localStorage.setItem("resumes", JSON.stringify(newResumes));

		setResumes(newResumes);
	};

	const updateResume = (
		resumeId: string,
		newResumeContent: IResumeContent
	) => {
		const newResumes: IResume[] = resumes.map((resume) => {
			if (resume.id === resumeId) {
				resume.resume = newResumeContent;
			}

			return resume;
		});

		localStorage.setItem("resumes", JSON.stringify(newResumes));

		setResumes(newResumes);
	};

	return (
		<ResumeContext.Provider
			value={{
				resumes,
				createResume,
				deleteResume,
				updateResume,
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
