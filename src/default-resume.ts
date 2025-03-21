export const defaultResume = {
	metadata: {
		resumeName: "SWE Example",
		sections: [
			"skills",
			"experience",
			"education",
			"projects",
			"courses",
			"interests",
		],
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
				date: {
					start: "2019",
					end: "2021",
				},
				location: {
					state: "California",
					country: "USA",
				},
			},
			{
				institution: "Massachusetts Institute of Technology (MIT)",
				degree: "Bachelor of Science in Computer Science",
				date: {
					start: "2015",
					end: "2019",
				},
				location: {
					state: "Massachusetts",
					country: "USA",
				},
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
				role: "Software Engineer",
				company: "Meta (Facebook)",
				date: {
					start: "2019",
					end: "Present",
				},
				location: {
					state: "California",
					country: "USA",
				},
				responsibilities: [
					"Developed high-performance GraphQL APIs used by Facebook, Instagram, and WhatsApp to serve millions of active users",
					"Optimized caching strategies, reducing database load by 40% and boosting overall service performance",
					"Collaborated with AI teams to integrate recommendation algorithms, increasing user engagement",
				],
			},
			{
				role: "Software Engineering Intern",
				company: "Amazon",
				date: {
					start: "2017",
					end: "2019",
				},
				location: {
					state: "Washington",
					country: "USA",
				},
				responsibilities: [
					"Assisted in designing cloud-native applications for AWS, ensuring scalability to handle millions of transactions daily",
					"Developed a real-time analytics pipeline that improved data processing speed by 50%",
					"Collaborated with senior engineers on enhancing AWS security by integrating automated threat detection and response",
				],
			},
		],
	},
	courses: {
		title: "Coursework",
		items: [
			"Advanced Algorithms & Data Structures",
			"Distributed Systems",
			"Machine Learning & Deep Learning",
			"Cloud Computing & Serverless Architectures",
			"Big Data Analytics",
			"Computer Vision",
			"Natural Language Processing",
			"Cybersecurity & Cryptography",
		],
	},
	interests: {
		title: "Interests",
		items: [
			"Algorithm Design & Optimization",
			"Artificial Intelligence",
			"Machine Learning",
			"Competitive Programming",
			"Hiking",
		],
	},
};
