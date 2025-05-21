const metadataSchema = {
	type: "object",
	properties: {
		resumeName: { type: "string" },
		sections: {
			type: "array",
			items: {
				type: "string",
				enum: [
					"experience",
					"education",
					"skills",
					"projects",
					"courses",
					"interests",
				],
			},
		},
	},
	required: ["resumeName", "sections"],
	additionalProperties: false,
};

const contactsSchema = {
	type: "object",
	properties: {
		phone: { type: "string" },
		email: { type: "string" },
		github: { type: "string" },
		linkedin: { type: "string" },
		website: { type: "string" },
	},
	additionalProperties: false,
};

const headerSchema = {
	type: "object",
	properties: {
		fullName: { type: "string" },
		contacts: contactsSchema,
	},
	required: ["fullName", "contacts"],
	additionalProperties: false,
};

const dateSchema = {
	type: "object",
	properties: {
		start: { type: "string" },
		end: { type: "string" },
	},
	required: ["start", "end"],
	additionalProperties: false,
};

const locationSchema = {
	type: "object",
	properties: {
		state: { type: "string" },
		country: { type: "string" },
	},
	required: ["state", "country"],
	additionalProperties: false,
};

const educationItemSchema = {
	type: "object",
	properties: {
		institution: { type: "string" },
		degree: { type: "string" },
		date: dateSchema,
		location: locationSchema,
	},
	required: ["institution", "degree", "date", "location"],
	additionalProperties: false,
};

const educationSchema = {
	type: "object",
	properties: {
		title: { type: "string" },
		items: {
			type: "array",
			items: educationItemSchema,
		},
	},
	required: ["title", "items"],
	additionalProperties: false,
};

const skillsItemSchema = {
	type: "object",
	properties: {
		category: { type: "string" },
		skills: {
			type: "array",
			items: { type: "string" },
		},
	},
	required: ["category", "skills"],
	additionalProperties: false,
};

const skillsSchema = {
	type: "object",
	properties: {
		title: { type: "string" },
		items: {
			type: "array",
			items: skillsItemSchema,
		},
	},
	required: ["title", "items"],
	additionalProperties: false,
};

const projectItemSchema = {
	type: "object",
	properties: {
		title: { type: "string" },
		description: {
			type: "array",
			items: { type: "string" },
		},
	},
	required: ["title", "description"],
	additionalProperties: false,
};

const projectsSchema = {
	type: "object",
	properties: {
		title: { type: "string" },
		items: {
			type: "array",
			items: projectItemSchema,
		},
	},
	required: ["title", "items"],
	additionalProperties: false,
};

const experienceItemSchema = {
	type: "object",
	properties: {
		role: { type: "string" },
		company: { type: "string" },
		date: dateSchema,
		location: locationSchema,
		responsibilities: {
			type: "array",
			items: { type: "string" },
		},
	},
	required: ["role", "company", "date", "location", "responsibilities"],
	additionalProperties: false,
};

const experienceSchema = {
	type: "object",
	properties: {
		title: { type: "string" },
		items: {
			type: "array",
			items: experienceItemSchema,
		},
	},
	required: ["title", "items"],
	additionalProperties: false,
};

const coursesSchema = {
	type: "object",
	properties: {
		title: { type: "string" },
		items: {
			type: "array",
			items: { type: "string" },
		},
	},
	required: ["title", "items"],
	additionalProperties: false,
};

const interestsSchema = {
	type: "object",
	properties: {
		title: { type: "string" },
		items: {
			type: "array",
			items: { type: "string" },
		},
	},
	required: ["title", "items"],
	additionalProperties: false,
};

export const jsonSchema = {
	type: "object",
	properties: {
		metadata: metadataSchema,
		header: headerSchema,
		education: educationSchema,
		skills: skillsSchema,
		projects: projectsSchema,
		experience: experienceSchema,
		courses: coursesSchema,
		interests: interestsSchema,
	},
	required: ["metadata", "header"],
	additionalProperties: false,
};
