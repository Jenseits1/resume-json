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
		],
	},
	projects: {
		title: "Projects",
		items: [
			{
				title: "High-Performance Load Balancer",
				description: [
					"Developed a distributed load balancer in Golang that efficiently handled over 50 million requests per second",
					"Implemented consistent hashing and dynamic rebalancing, improving system reliability by 30%",
					"Deployed using Kubernetes and Istio, reducing operational downtime by 40%",
				],
			},
			{
				title: "Real-Time AI Chatbot",
				description: [
					"Built an AI-powered chatbot with Python and TensorFlow, achieving 95% intent recognition accuracy",
					"Integrated OpenAI’s GPT model, reducing response latency by 50% through optimized inference",
					"Deployed using AWS Lambda with WebSocket support, enabling scalability to handle over 500,000 active users",
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
					start: "2021",
					end: "Present",
				},
				location: {
					state: "California",
					country: "USA",
				},
				responsibilities: [
					"Developed high-performance GraphQL APIs serving over 2 billion users across Facebook, Instagram, and WhatsApp",
					"Optimized caching strategies, reducing database load by 40% and improving service response times by 25%",
					"Led a team of five engineers to integrate AI-based recommendation algorithms, increasing user engagement by 18%",
					"Designed and implemented a fault-tolerant system, reducing critical failures by 50% using distributed tracing and logging",
				],
			},
			{
				role: "Software Engineering Intern",
				company: "Amazon",
				date: {
					start: "2019",
					end: "2020",
				},
				location: {
					state: "Washington",
					country: "USA",
				},
				responsibilities: [
					"Developed scalable cloud-native applications on AWS, supporting over 1 million transactions per day",
					"Built a real-time analytics pipeline, improving data processing speed by 50% using Apache Kafka and Spark",
					"Collaborated with security teams to implement automated threat detection, reducing security breaches by 30%",
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
			"Public Speaking",
			"Mentoring & Coaching",
		],
	},
};
