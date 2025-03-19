export const defaultResume = {
	metadata: {
		resumeName: "Senior SWE Example",
		sectionsOrder: ["skills", "experience", "education", "projects"],
		disabledSections: [],
	},
	header: {
		fullName: "John Doe",
		contacts: {
			phone: "+1 650-555-1234",
			email: "johndoe@example.com",
			github: "https://github.com/johndoe",
			linkedin: "https://linkedin.com/in/johndoe",
		},
	},
	education: {
		title: "Education",
		items: [
			{
				institution: "Stanford University",
				degree: "Master of Science in Computer Science",
				startDate: "2019",
				endDate: "2021",
				state: "California",
				country: "USA",
			},
			{
				institution: "Massachusetts Institute of Technology (MIT)",
				degree: "Bachelor of Science in Computer Science",
				startDate: "2015",
				endDate: "2019",
				state: "Massachusetts",
				country: "USA",
			},
		],
	},
	skills: {
		title: "Skills",
		items: [
			{
				category: "Programming Languages",
				skills: [
					"Python",
					"JavaScript",
					"TypeScript",
					"Java",
					"C++",
					"Go",
					"Rust",
				],
			},
			{
				category: "Web Development",
				skills: ["React.js", "Node.js", "GraphQL"],
			},
			{
				category: "Databases",
				skills: ["PostgreSQL", "MongoDB", "Redis"],
			},
			{
				category: "Cloud & DevOps",
				skills: [
					"AWS",
					"Google Cloud Platform (GCP)",
					"Kubernetes",
					"Docker",
					"Terraform",
				],
			},
			{
				category: "Other",
				skills: [
					"CI/CD",
					"Distributed Systems",
					"Microservices Architecture",
					"System Design",
				],
			},
		],
	},
	projects: {
		title: "Projects",
		items: [
			{
				title: "High-Performance Load Balancer",
				description: [
					"Developed a distributed load balancer using Golang that handled millions of requests per second",
					"Implemented consistent hashing and dynamic rebalancing for optimal request distribution",
					"Used Kubernetes and Istio for deployment and observability",
				],
			},
			{
				title: "Real-Time AI Chatbot",
				description: [
					"Built an AI-powered chatbot using Python and TensorFlow for real-time conversations",
					"Integrated OpenAI’s GPT model and optimized inference speed for low-latency responses",
					"Deployed on AWS Lambda with WebSocket support for scalable interactions",
				],
			},
		],
	},
	experience: {
		title: "Experience",
		items: [
			{
				role: "Senior Software Engineer",
				company: "Google",
				startDate: "2022",
				endDate: "Present",
				state: "California",
				country: "USA",
				responsibilities: [
					"Led a team of engineers to build scalable backend services for Google Cloud, focusing on high availability and performance optimization.",
					"Designed and implemented a high-throughput distributed event processing system, reducing latency by 30%.",
					"Contributed to open-source projects improving service discovery and load balancing, which were adopted by multiple teams across the organization.",
				],
			},
			{
				role: "Software Engineer",
				company: "Meta (Facebook)",
				startDate: "2019",
				endDate: "2022",
				state: "California",
				country: "USA",
				responsibilities: [
					"Developed highly efficient GraphQL APIs used across Facebook, Instagram, and WhatsApp, supporting millions of users daily.",
					"Optimized caching layers and implemented a distributed caching system, reducing database load by 40%.",
					"Collaborated with AI research teams to integrate recommendation algorithms, improving user engagement and experience.",
				],
			},
		],
	},
};
