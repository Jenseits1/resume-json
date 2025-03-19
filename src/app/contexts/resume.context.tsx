"use client";
import {
	createContext,
	FunctionComponent,
	useContext,
	useEffect,
	useState,
} from "react";
import { IResume, IResumeContent } from "../types/resume.types";
import { v4 as uuidv4 } from "uuid";
import { defaultResume } from "@/resume-object";

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
		const storedResumes = JSON.parse(localStorage.getItem("resumes")!);

		console.log(storedResumes);

		if (storedResumes) {
			setResumes(storedResumes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("resumes", JSON.stringify(resumes));
	}, [resumes]);

	const createResume = () => {
		const newResumes = [
			...resumes,
			{ id: uuidv4(), resume: defaultResume },
		];

		setResumes(newResumes);
	};

	const deleteResume = (resumeId: string) => {
		const newResumes: IResume[] = resumes.filter(
			({ id }) => id !== resumeId
		);

		setResumes(newResumes);
	};

	const updateResume = (
		resumeId: string,
		newResumeContent: IResumeContent
	) => {
		let newResumes: IResume[] = resumes.map((resume) => {
			if (resume.id === resumeId) {
				resume.resume = newResumeContent;
			}

			return resume;
		});

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
