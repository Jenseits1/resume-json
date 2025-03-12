"use client";
import { resumeInfo } from "@/resume-object";
import {
	createContext,
	FunctionComponent,
	useContext,
	useEffect,
	useState,
} from "react";

interface ResumeProviderProps {
	children: React.ReactNode;
}

interface ResumeContextType {
	setSection: (section: string, data: any) => void;
	getSection: (section: string) => any;
}

export const ResumeContext = createContext<ResumeContextType | null>(null);

export const ResumeProvider: FunctionComponent<ResumeProviderProps> = ({
	children,
}) => {
	const [userResume, setUserResume] = useState<any>(null);

	useEffect(() => {
		// Check if resume is already stored in localStorage
		const storedResume = localStorage.getItem("userResume");
		if (storedResume) {
			setUserResume(JSON.parse(storedResume));
		} else {
			setUserResume(resumeInfo); // Default if no resume in localStorage
		}
	}, []);

	const setSection = (section: string, data: any) => {
		setUserResume((prevResume: any) => {
			const updatedResume = { ...prevResume };
			updatedResume[section] = data;
			localStorage.setItem("userResume", JSON.stringify(updatedResume));
			return updatedResume;
		});
	};

	const getSection = (section: string) => {
		return userResume ? userResume[section] : null;
	};

	return (
		<ResumeContext.Provider value={{ setSection, getSection }}>
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
