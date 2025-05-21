// src/types/new-resume.types.ts

export interface ILocation {
	state: string;
	country: string;
}

export interface IDate {
	start: string;
	end: string;
}

export type Title = string;
export type Subtitle = string;
export type BulletPoint = string;

export type ISectionItem = {
	title?: Title;
	subtitle?: Subtitle;
	date?: IDate;
	location?: ILocation;
	bulletPoints?: BulletPoint[];
	itemList?: string[];
};

export interface IExperience {
	role: Title;
	company: Subtitle;
	date: IDate;
	location: ILocation;
	responsibilities: BulletPoint[];
}

export interface IProject {
	title: Title;
	description: BulletPoint[];
}

export interface ISkills {
	category: Title;
	skills: string[];
}

export interface IEducation {
	institution: Title;
	degree: Subtitle;
	date: IDate;
	location: ILocation;
}

export interface ISection<T> {
	title?: string;
	items?: T[];
}

export interface IResumeContent {
	metadata: IMetaData;
	header: IHeader;
	experience?: ISection<IExperience>;
	projects?: ISection<IProject>;
	skills?: ISection<ISkills>;
	education?: ISection<IEducation>;
	interests?: ISection<string>;
	courses?: ISection<string>;
}

export interface IResume {
	id: string;
	resume: IResumeContent;
}

export interface IMetaData {
	resumeName: string;
	sections: string[];
}

export interface IHeader {
	fullName: string;
	contacts: {
		phone: string;
		email: string;
		github: string;
		linkedin: string;
	};
}
