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

export interface ILocation {
	state: string;
	country: string;
}

export interface IDate {
	start: string;
	end: string;
}

export interface IEducation {
	institution: string;
	degree: string;
	date: IDate;
	location: ILocation;
}

// Skills interface
export interface ISkills {
	type: string;
	skills: string[];
}

// Project interface
export interface IProject {
	title: string;
	technologies: string[];
	bulletPoints: string[];
}

// Experience interface
export interface IExperience {
	role: string;
	company: string;
	date: IDate;
	location: ILocation;
	bulletPoints: string[];
}

// Resume interface (for the entire resume object)
export interface IResume {
	header?: IHeader;
	education?: IEducation[];
	skills?: ISkills[];
	projects?: IProject[];
	experience?: IExperience[];
}
