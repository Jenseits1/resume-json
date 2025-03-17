export const jsonSchema = {
	type: "object",
	properties: {
		header: {
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
				},
			},
			required: ["fullName", "contacts"],
		},
		education: {
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
					},
				},
			},
			required: ["title", "items"],
		},
		skills: {
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
					},
				},
			},
			required: ["title", "items"],
		},
		projects: {
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
					},
				},
			},
			required: ["title", "items"],
		},
		experience: {
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
					},
				},
			},
			required: ["title", "items"],
		},
	},
	required: ["header", "education", "skills", "projects", "experience"],
};
