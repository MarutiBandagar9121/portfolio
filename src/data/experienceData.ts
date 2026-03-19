export interface Experience {
  id: string;
  company: string;
  role: string;
  type: "Full-time" | "Internship" | "Freelance" | "Contract";
  location: string;
  startDate: string;
  endDate: string | null; // null = Present
  achievements: string[];
  techStack: string[];
}

export const totalExperience = "~2 Years";

export const experiences: Experience[] = [
  {
    id: "estatehub-fulltime",
    company: "Estatehub",
    role: "Full Stack Developer",
    type: "Full-time",
    location: "Remote",
    startDate: "Sep 2024",
    endDate: null,
    achievements: [
      "Led modernization of a legacy monolith into a containerized microservices architecture using Docker & Docker Compose.",
      "Built a semantic property search engine using Qdrant Vector DB and OpenAI embeddings, replacing keyword-only lookup.",
      "Optimized cloud infrastructure across AWS and GCP — reduced deployment time and improved system reliability.",
      "Delivered full-stack features across the product using Spring Boot, React, and TypeScript end-to-end.",
    ],
    techStack: [
      "Java", "Spring Boot", "React", "TypeScript",
      "Docker", "AWS", "GCP", "Qdrant", "PostgreSQL",
    ],
  },
  {
    id: "estatehub-intern",
    company: "Estatehub",
    role: "Software Developer Intern",
    type: "Internship",
    location: "Remote",
    startDate: "May 2024",
    endDate: "Aug 2024",
    achievements: [
      "Contributed to backend feature development using Spring Boot, gaining hands-on experience with production codebases.",
      "Built and integrated REST APIs consumed by the React frontend, improving data flow across the platform.",
      "Collaborated with the core engineering team on bug fixes and performance improvements across the stack.",
    ],
    techStack: [
      "Java", "Spring Boot", "React", "MySQL", "Git",
    ],
  },
];
