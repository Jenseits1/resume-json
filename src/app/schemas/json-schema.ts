const metadataSchema = {
	type: "object",
	properties: {
		resumeName: { type: "string" },
		sectionsOrder: {
			type: "array",
			items: {
				type: "string",
				enum: ["education", "skills", "projects", "experience"],
			},
			uniqueItems: true,
			minItems: 4,
		},
		disabledSections: {
			type: "array",
			items: {
				type: "string",
				enum: ["education", "skills", "projects", "experience"],
			},
			uniqueItems: true,
		},
	},
	required: ["resumeName", "sectionsOrder", "disabledSections"],
	additionalProperties: false,
};

const headerSchema = {
	type: "object",
	properties: {
		fullName: { type: "string" },
		contacts: {
			type: "object",
			properties: {
				phone: { type: "string" },
				email: { type: "string" },
				github: { type: "string" },
				linkedin: { type: "string" },
			},
			required: ["phone", "email", "github", "linkedin"],
			additionalProperties: false,
		},
	},
	required: ["fullName", "contacts"],
	additionalProperties: false,
};

const educationSchema = {
	type: "object",
	properties: {
		title: { type: "string" },
		items: {
			type: "array",
			items: {
				type: "object",
				properties: {
					institution: { type: "string" },
					degree: { type: "string" },
					startDate: { type: "string" },
					endDate: { type: "string" },
					state: { type: "string" },
					country: { type: "string" },
				},
				required: [
					"institution",
					"degree",
					"startDate",
					"endDate",
					"state",
					"country",
				],
				additionalProperties: false,
			},
		},
	},
	required: ["title", "items"],
	additionalProperties: false,
};

const skillsSchema = {
	type: "object",
	properties: {
		title: { type: "string" },
		items: {
			type: "array",
			items: {
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
			},
		},
	},
	required: ["title", "items"],
	additionalProperties: false,
};

const projectsSchema = {
	type: "object",
	properties: {
		title: { type: "string" },
		items: {
			type: "array",
			items: {
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
			},
		},
	},
	required: ["title", "items"],
	additionalProperties: false,
};

const experienceSchema = {
	type: "object",
	properties: {
		title: { type: "string" },
		items: {
			type: "array",
			items: {
				type: "object",
				properties: {
					role: { type: "string" },
					responsibilities: {
						type: "array",
						items: { type: "string" },
					},
					company: { type: "string" },
					startDate: { type: "string" },
					endDate: { type: "string" },
					state: { type: "string" },
					country: { type: "string" },
				},
				required: [
					"role",
					"responsibilities",
					"company",
					"startDate",
					"endDate",
					"state",
					"country",
				],
				additionalProperties: false,
			},
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
	},
	required: ["metadata", "header"],
	additionalProperties: false,
};
