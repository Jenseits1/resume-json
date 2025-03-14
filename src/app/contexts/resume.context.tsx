"use client";
import {
	createContext,
	FunctionComponent,
	useContext,
	useEffect,
	useState,
} from "react";
import { IResume } from "../types/resume.types";
import { portugueseResume } from "@/resume-object";

interface ResumeProviderProps {
	children: React.ReactNode;
}

interface ResumeContextType {
	setSection: (section: string, data: any) => void;
	addResume: (name: string, newResume: any) => void;
	removeResume: (name: string) => void;
	setActiveResume: (name: string) => void;
	resume: IResume | {};
}

export const ResumeContext = createContext<ResumeContextType | null>(null);

export const ResumeProvider: FunctionComponent<ResumeProviderProps> = ({
	children,
}) => {
	const [resumes, setResumes] = useState<any>(null);
	const [currResume, setCurrResume] = useState<string | null>(null);

	useEffect(() => {
		// Check if resumes are already stored in localStorage
		const storedResumes = localStorage.getItem("resumes");

		if (storedResumes) {
			setResumes(JSON.parse(storedResumes));
			setCurrResume("default");
		} else {
			// If no resumes in localStorage, set default resume
			const defaultResumes = { default: portugueseResume };

			setResumes(defaultResumes);
			setCurrResume("default");
			localStorage.setItem("resumes", JSON.stringify(defaultResumes)); // Set the default resume in localStorage
		}
	}, []);

	const setSection = (section: string, data: any) => {
		if (!currResume || !resumes) return;

		// Update the specific section of the active resume
		setResumes((prevResumes: any) => {
			const updatedResumes = { ...prevResumes };
			updatedResumes[currResume][section] = data;
			localStorage.setItem("resumes", JSON.stringify(updatedResumes)); // Save updated resumes to localStorage
			return updatedResumes;
		});
	};

	const addResume = (name: string, newResume: any) => {
		setResumes((prevResumes: any) => {
			const updatedResumes = { ...prevResumes, [name]: newResume };
			localStorage.setItem("resumes", JSON.stringify(updatedResumes));
			return updatedResumes;
		});
	};

	const removeResume = (name: string) => {
		setResumes((prevResumes: any) => {
			const { [name]: removed, ...updatedResumes } = prevResumes;
			localStorage.setItem("resumes", JSON.stringify(updatedResumes));
			return updatedResumes;
		});
	};

	const setActiveResume = (name: string) => {
		if (resumes && resumes[name]) {
			setCurrResume(name);
		}
	};

	return (
		<ResumeContext.Provider
			value={{
				setSection,
				resume: resumes && currResume && resumes[currResume],
				addResume,
				removeResume,
				setActiveResume,
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
