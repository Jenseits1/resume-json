// src/types/resume.types.ts

// Header interface
export interface IHeader {
	fullName: string;
	contacts: {
		phone: string;
		email: string;
		github: string;
		linkedin: string;
	};
}

// Location interface
export interface ILocation {
	state: string;
	country: string;
}

// Date interface
export interface IDate {
	startDate: string;
	endDate: string;
}

// Education, Skills, Project, Experience interfaces
export interface IEducation extends IDate, ILocation {
	institution: string;
	degree: string;
}

export interface ISkills {
	category: string;
	skills: string[];
}

export interface IProject {
	title: string;
	description: string[];
}

export interface IExperience extends IDate, ILocation {
	role: string;
	responsibilities: string[];
	company: string;
}

// Generic Section Interface
export interface IResumeSection<T> {
	title: string;
	items: T[];
}

// Resume interface (for the entire resume object)
export interface IResume {
	header?: IHeader;
	education?: IResumeSection<IEducation>;
	skills?: IResumeSection<ISkills>;
	projects?: IResumeSection<IProject>;
	experience?: IResumeSection<IExperience>;
}
