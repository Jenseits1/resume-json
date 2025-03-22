# Resume.json 🚀 - Dynamic Resume Builder 📝

Resume.json is your go-to web application for crafting stunning resumes with ease! 🌟 Built on the robust foundation of Next.js, TypeScript, and Chakra UI, it delivers a seamless and delightful user experience. Dive into real-time JSON editing with the Monaco Editor, explore dynamic resume templates, preview your masterpiece live, and download it instantly as a PDF. 💼

## ✨ Features ✨

-   **Real-time JSON Editing with Monaco Editor 💻:**
    -   Edit your resume data directly in JSON format! 📝 The powerful Monaco Editor provides syntax highlighting, making the process smooth and error-free. 🌈
-   **Live PDF Preview 👁️:**
    -   See your resume come to life as you edit! 📄 Preview the PDF in real-time to ensure it looks perfect before you download. 💯
-   **Easy PDF Download 📥:**
    -   Download your professionally formatted resume as a PDF with a single click! ⚡️ Get ready to impress employers!
-   **Multi-Resume Management 📂:**
    -   Keep track of multiple resumes for different job applications, all in one place! 🗂️ Stay organized and ready for any opportunity.
-   **JSON Format Flexibility 🔄:**
    -   Utilize the flexibility of JSON for easy resume data management and seamless translation support! 🌐 Break down language barriers and reach a wider audience.
-   **Real-time Validation with AJV ✅:**
    -   Ensure accuracy with real-time validation against a predefined schema! 🛡️ Get instant feedback as you edit, so your data is always on point.
-   **Built with Next.js, TypeScript, and Chakra UI 🛠️:**
    -   Experience the speed and responsiveness of modern web technologies! 🚀 Enjoy an accessible and user-friendly interface.

## 🛠️ Technologies Used 🛠️

-   **Next.js ⚛️:** React framework for server-side rendering and static site generation.
-   **TypeScript 📜:** Static type checker for enhanced code quality and maintainability.
-   **Chakra UI 🎨:** Component library for building accessible and responsive user interfaces.
-   **Monaco Editor ⌨️:** Powerful code editor for JSON editing.
-   **AJV (Another JSON Validator) 🧐:** JSON schema validator for real-time data validation.
-   **React-pdf/renderer 📄:** Used for generating PDF files.

## 🚀 Getting Started 🚀

### 📋 Prerequisites 📋

-   Node.js (>= 16.0.0) 📦
-   npm or yarn 🧶

### ⬇️ Installation ⬇️

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    cd <repository_name>
    ```

2.  Install dependencies:

    ```bash
    npm install # or yarn install
    ```

### 🏃 Running the Application 🏃

1.  Start the development server:

    ```bash
    npm run dev # or yarn dev
    ```

2.  Open your browser and navigate to `http://localhost:3000`. 🌐

### 📦 Building for Production 📦

1.  Build the application:

    ```bash
    npm run build # or yarn build
    ```

2.  Start the production server:

    ```bash
    npm run start # or yarn start
    ```

## 📝 JSON Schema 📝

Here's an example of how json structure for resumes look like:

```json
{
    "metadata": {
        "resumeName": "SWE Example",
        "sections": [
            "skills",
            "experience",
            "education",
            "projects",
            "courses",
            "interests"
        ]
    },
    "header": {
        "fullName": "John Doe",
        "contacts": {
            "phone": "+1 650-555-1234",
            "email": "johndoe@example.com",
            "github": "https://github.com/johndoe",
            "linkedin": "https://linkedin.com/in/johndoe"
        }
    },
    "education": {
        "title": "Education",
        "items": [
            {
                "institution": "Stanford University",
                "degree": "Master of Science in Computer Science",
                "date": {
                    "start": "2019",
                    "end": "2021"
                },
                "location": {
                    "state": "California",
                    "country": "USA"
                }
            },
            {
                "institution": "Massachusetts Institute of Technology (MIT)",
                "degree": "Bachelor of Science in Computer Science",
                "date": {
                    "start": "2015",
                    "end": "2019"
                },
                "location": {
                    "state": "Massachusetts",
                    "country": "USA"
                }
            }
        ]
    },
    "skills": {
        "title": "Skills",
        "items": [
            {
                "category": "Programming Languages",
                "skills": [
                    "Python",
                    "JavaScript",
                    "TypeScript",
                    "Java",
                    "C++",
                    "Go",
                    "Rust"
                ]
            },
            {
                "category": "Web Development",
                "skills": [
                    "React.js",
                    "Node.js",
                    "GraphQL"
                ]
            },
            {
                "category": "Databases",
                "skills": [
                    "PostgreSQL",
                    "MongoDB",
                    "Redis"
                ]
            },
            {
                "category": "Cloud & DevOps",
                "skills": [
                    "AWS",
                    "Google Cloud Platform (GCP)",
                    "Kubernetes",
                    "Docker",
                    "Terraform"
                ]
            },
            {
                "category": "Other",
                "skills": [
                    "CI/CD",
                    "Distributed Systems",
                    "Microservices Architecture",
                    "System Design"
                ]
            }
        ]
    },
    "projects": {
        "title": "Projects",
        "items": [
            {
                "title": "High-Performance Load Balancer",
                "description": [
                    "Developed a distributed load balancer using Golang that handled millions of requests per second",
                    "Implemented consistent hashing and dynamic rebalancing for optimal request distribution",
                    "Used Kubernetes and Istio for deployment and observability"
                ]
            },
            {
                "title": "Real-Time AI Chatbot",
                "description": [
                    "Built an AI-powered chatbot using Python and TensorFlow for real-time conversations",
                    "Integrated OpenAI’s GPT model and optimized inference speed for low-latency responses",
                    "Deployed on AWS Lambda with WebSocket support for scalable interactions"
                ]
            }
        ]
    },
    "experience": {
        "title": "Experience",
        "items": [
            {
                "role": "Software Engineer",
                "company": "Meta (Facebook)",
                "date": {
                    "start": "2019",
                    "end": "Present"
                },
                "location": {
                    "state": "California",
                    "country": "USA"
                },
                "responsibilities": [
                    "Developed high-performance GraphQL APIs used by Facebook, Instagram, and WhatsApp to serve millions of active users",
                    "Optimized caching strategies, reducing database load by 40% and boosting overall service performance",
                    "Collaborated with AI teams to integrate recommendation algorithms, increasing user engagement"
                ]
            },
            {
                "role": "Software Engineering Intern",
                "company": "Amazon",
                "date": {
                    "start": "2017",
                    "end": "2019"
                },
                "location": {
                    "state": "Washington",
                    "country": "USA"
                },
                "responsibilities": [
                    "Assisted in designing cloud-native applications for AWS, ensuring scalability to handle millions of transactions daily",
                    "Developed a real-time analytics pipeline that improved data processing speed by 50%",
                    "Collaborated with senior engineers on enhancing AWS security by integrating automated threat detection and response"
                ]
            }
        ]
    },
    "courses": {
        "title": "Coursework",
        "items": [
            "Advanced Algorithms & Data Structures",
            "Distributed Systems",
            "Machine Learning & Deep Learning",
            "Cloud Computing & Serverless Architectures",
            "Big Data Analytics",
            "Computer Vision",
            "Natural Language Processing",
            "Cybersecurity & Cryptography"
        ]
    },
    "interests": {
        "title": "Interests",
        "items": [
            "Algorithm Design & Optimization",
            "Artificial Intelligence",
            "Machine Learning",
            "Competitive Programming",
            "Hiking"
        ]
    }
}
```

## 🤝 Contributing 🤝

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

Here's how you can contribute:

1.  **Fork the Project**
2.  **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3.  **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4.  **Push to the Branch** (`git push origin feature/AmazingFeature`)
5.  **Open a Pull Request**

We encourage you to create issues for bugs, feature requests, or general questions.

## 📄 License 📄

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.
