export const englishResume = {
	header: {
		fullName: "Washington Bueno",
		contacts: {
			phone: "+55 11 96311-4982",
			email: "washingtonfbueno@hotmail.com",
			github: "https://github.com/washingtonfbueno",
			linkedin: "https://linkedin.com/in/washingtonfbueno",
		},
	},
	education: {
		title: "Education",
		items: [
			{
				institution: "Universidade Presbiteriana Mackenzie",
				degree: "Computer Information Systems",
				startDate: "2023",
				endDate: "Dec 2025",
				state: "São Paulo",
				country: "Brazil",
			},
			{
				institution: "Universidade Nove de Julho",
				degree: "Civil Engineering",
				startDate: "2016",
				endDate: "Dec 2020",
				state: "São Paulo",
				country: "Brazil",
			},
		],
	},
	skills: {
		title: "Skills",
		items: [
			{
				category: "Technical Skills",
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
			{
				category: "Spoken Languages",
				skills: ["Portuguese", "English"],
			},
		],
	},
	projects: {
		title: "Projects",
		items: [
			{
				title: "Expression Parser",
				description: [
					"Developed a mathematical expression parser using Python with recursive descent parsing for correct operator precedence",
					"Handled division by zero and syntax errors to ensure robustness and reliability",
					"Improved knowledge of compiler design and how programming languages process input",
				],
			},
			{
				title: "Portfolio",
				description: [
					"Built a personal portfolio using React.js, TypeScript, and Tailwind CSS to showcase projects and skills",
					"Designed the site to be easy to navigate across different screen sizes",
					"Served as a practice project to improve front-end development skills with modern technologies",
				],
			},
			{
				title: "Resume Generator",
				description: [
					"Developed a resume generator using Next.js and TypeScript to streamline resume creation",
					"Implemented dynamic templates and form validation to simplify formatting",
					"Facilitates the generation of structured resumes by allowing users to input their information and receive a well-formatted document",
				],
			},
		],
	},
	experience: {
		title: "Experience",
		items: [
			{
				role: "Coding Support Assistant",
				responsibilities: [
					"Helped community members debug and improve code in Python and JavaScript",
					"Assisted users with problem-solving and understanding programming concepts",
					"Providing support contributed to reinforcing knowledge and maintaining familiarity with learned topics",
				],
				company: "Discord Communities",
				startDate: "2022",
				endDate: "Present",
				state: "São Paulo",
				country: "Brazil",
			},
		],
	},
};

export const portugueseResume = {
	header: {
		fullName: "Washington Bueno",
		contacts: {
			phone: "+55 11 96311-4982",
			email: "washingtonfbueno@hotmail.com",
			github: "https://github.com/washingtonfbueno",
			linkedin: "https://linkedin.com/in/washingtonfbueno",
		},
	},
	education: {
		title: "Educação",
		sectionItems: [
			{
				institution: "Universidade Presbiteriana Mackenzie",
				degree: "Análise e Desenvolvimento de Sistemas",
				date: { start: "2023", end: "Dez 2025" },
				location: { state: "São Paulo", country: "Brasil" },
			},
			{
				institution: "Universidade Nove de Julho",
				degree: "Engenharia Civil",
				date: { start: "2016", end: "Dez 2020" },
				location: { state: "São Paulo", country: "Brasil" },
			},
		],
	},
	skills: {
		title: "Habilidades",
		sectionItems: [
			{
				type: "Habilidades Técnicas",
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
					"Estruturas de Dados",
					"Algoritmos",
				],
			},
			{ type: "Idiomas", skills: ["Português", "Inglês"] },
		],
	},
	projects: {
		title: "Projetos",
		sectionItems: [
			{
				title: "Expression Parser",
				technologies: ["Python"],
				bulletPoints: [
					"Desenvolveu um interpretador de expressões matemáticas em Python utilizando parsing recursivo para respeitar a precedência dos operadores",
					"Implementou tratamento de erros para divisão por zero e erros de sintaxe, garantindo robustez e confiabilidade",
					"Aprimorou conhecimento sobre design de compiladores e como linguagens de programação processam entradas",
				],
			},
			{
				title: "Portfolio",
				technologies: ["Tailwind CSS", "TypeScript", "React.js"],
				bulletPoints: [
					"Construiu um portfólio pessoal utilizando React.js, TypeScript e Tailwind CSS para exibir projetos e habilidades",
					"Desenvolveu um design responsivo para diferentes tamanhos de tela",
					"Utilizou o projeto como prática para aprimorar habilidades de desenvolvimento front-end com tecnologias modernas",
				],
			},
			{
				title: "Resume Generator",
				technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
				bulletPoints: [
					"Desenvolveu um gerador de currículos usando Next.js e TypeScript para facilitar a criação de currículos",
					"Implementou modelos dinâmicos e validação de formulários para simplificar a formatação",
					"Facilitou a geração de currículos estruturados permitindo que usuários inserissem suas informações e recebessem um documento bem formatado",
				],
			},
		],
	},
	experience: {
		title: "Experiência",
		sectionItems: [
			{
				role: "Suporte em Programação",
				company: "Comunidades do Discord",
				date: { start: "2022", end: "Presente" },
				location: { state: "São Paulo", country: "Brasil" },
				bulletPoints: [
					"Ajudou membros da comunidade a verificar e melhorar códigos em Python e JavaScript",
					"Auxiliou usuários na resolução de problemas e no entendimento de conceitos de programação",
					"O suporte prestado contribuiu para reforçar conhecimento e manter familiaridade com os tópicos aprendidos",
				],
			},
		],
	},
};
