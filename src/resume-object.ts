export const resumeObject = {
	header: {
		fullName: "Washington Bueno",
		contacts: {
			phone: "+55 11 96311-4982",
			email: "washingtonfbueno@hotmail.com",
			github: "https://github.com/washingtonfbueno",
			linkedin: "https://linkedin.com/in/washingtonfbueno",
		},
	},
	education: [
		{
			institution: "Universidade Presbiteriana Mackenzie",
			degree: "Computer Information Systems",
			date: {
				start: "2023",
				end: "Dec 2025",
			},
			location: {
				state: "São Paulo",
				country: "Brazil",
			},
		},
		{
			institution: "Universidade Nove de Julho",
			degree: "Civil Engineering",
			date: {
				start: "2016",
				end: "Dec 2020",
			},

			location: {
				state: "São Paulo",
				country: "Brazil",
			},
		},
	],
	skills: [
		{
			type: "Technical Skills",
			skills: [
				"Python",
				"JavaScript",
				"C",
				"Java",
				"HTML",
				"CSS",
				"Tailwind CSS",
				"React.js",
				"Express.js",
				"MySQL",
				"Git",
				"Data Structures",
				"Algorithms",
			],
		},
		{ type: "Spoken Languages", skills: ["Portuguese", "English"] },
	],
	projects: [
		{
			title: "Expression Parser",
			technologies: ["Python"],
			bulletPoints: [
				"Developed a mathematical expression parser using Python with recursive descent parsing for correct operator precedence",
				"Handled division by zero and syntax errors to ensure robustness and reliability",
				"Improved knowledge of compiler design and how programming languages process input",
			],
		},
		{
			title: "Portfolio",
			technologies: ["Tailwind CSS", "TypeScript", "React.js"],
			bulletPoints: [
				"Built a personal portfolio using React.js, TypeScript, and Tailwind CSS to showcase projects and skills",
				"Designed the site to be visually appealing and easy to navigate across different screen sizes",
				"Served as a practice project to improve front-end development skills with modern technologies",
			],
		},
		{
			title: "Resume Generator",
			technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
			bulletPoints: [
				"Developed a resume generator using Next.js and TypeScript to streamline resume creation",
				"Implemented dynamic templates and form validation to simplify formatting",
				"Facilitates the generation of structured resumes by allowing users to input their information and receive a well-formatted document",
			],
		},
	],
	experience: [
		{
			role: "Coding Support Assistant",
			company: "Discord Communities",
			date: {
				start: "2020",
				end: "Present",
			},
			location: {
				state: "São Paulo",
				country: "Brazil",
			},
			bulletPoints: [
				"Helped community members debug and improve code in Python and JavaScript",
				"Assisted users with problem-solving and understanding programming concepts",
				"Providing support contributed to reinforcing knowledge and maintaining familiarity with learned topics",
			],
		},
	],
};
