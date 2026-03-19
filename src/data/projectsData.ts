export interface Project {
  id: string;
  title: string;
  tagline: string;
  shortDescription: string;
  highlights: string[];
  techStack: { name: string; color: string }[];
  github: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "jobstream-ai",
    title: "JobStream AI",
    tagline: "Semantic job discovery powered by vector search & distributed crawling.",
    shortDescription:
      "An intelligent job aggregation platform that lets users find opportunities through natural language — not just keywords.",
    highlights: [
      "Built a worker-producer crawling pipeline with BullMQ & Redis to ingest job listings from multiple sources asynchronously at scale.",
      "Integrated Qdrant vector DB with OpenAI embeddings to power semantic search — users query in plain English and get contextually ranked results.",
      "Engineered a scheduled notification engine that alerts subscribers to new openings matching their role and region preferences.",
      "Designed a fault-tolerant queue system that keeps data collection reliable even under peak crawling load.",
    ],
    techStack: [
      { name: "Express.js", color: "bg-slate-700" },
      { name: "BullMQ", color: "bg-red-400" },
      { name: "Redis", color: "bg-red-500" },
      { name: "Qdrant", color: "bg-purple-600" },
      { name: "OpenAI", color: "bg-indigo-600" },
      { name: "Node.js", color: "bg-green-500" },
      { name: "MongoDB", color: "bg-green-600" },
      { name: "React", color: "bg-blue-500" },
      { name: "TypeScript", color: "bg-blue-700" },
    ],
    github: "https://github.com/MarutiBandagar9121/find-me-my-dream-job",
    image: "/portfolio/images/projects/jobStreamAi.png",
  },

  {
    id: "lead-management-api",
    title: "Lead Management API",
    tagline: "Production-ready REST API with containerized multi-service deployment.",
    shortDescription:
      "A secure, scalable lead management backend with role-based access control, Redis caching, and a fully Dockerized infrastructure.",
    highlights: [
      "Orchestrated a multi-container environment with Docker Compose — API, MongoDB, and Redis running as isolated, reproducible services.",
      "Implemented JWT auth with refresh token rotation and role-based access control for admin, manager, and sales rep personas.",
      "Added a Redis caching layer that cut lead retrieval latency by ~40% and reduced database read pressure.",
      "Enforced strict data integrity at every API boundary using Zod schema validation with standardized error responses.",
    ],
    techStack: [
      { name: "Express", color: "bg-slate-700" },
      { name: "MongoDB", color: "bg-green-600" },
      { name: "Redis", color: "bg-red-500" },
      { name: "Docker", color: "bg-blue-500" },
      { name: "Docker Compose", color: "bg-blue-800" },
      { name: "Zod", color: "bg-gray-700" },
      { name: "JWT", color: "bg-amber-300 text-black" },
    ],
    github: "https://github.com/MarutiBandagar9121/LeadManagementSystem-ExpressJS",
    image: "/portfolio/images/projects/leadManagementApi.png",
  },

  {
    id: "indian-id-validator",
    title: "Indian ID Validator",
    tagline: "Zero-dependency npm package for validating Indian government IDs.",
    shortDescription:
      "A TypeScript-first open-source library that validates Aadhaar, PAN, Voter ID, GST numbers — published to npm with dual CJS/ESM support.",
    highlights: [
      "Implemented the Verhoeff checksum algorithm for Aadhaar and format-based validation for PAN, Voter ID, and GST numbers.",
      "Shipped with zero runtime dependencies — keeping the package lightweight and safe for any production environment.",
      "Configured Vite to produce both CommonJS and ES Module builds, ensuring compatibility across Node.js and bundler ecosystems.",
      "Published to npm registry with TypeScript type declarations for a first-class developer experience.",
    ],
    techStack: [
      { name: "TypeScript", color: "bg-blue-700" },
      { name: "Node.js", color: "bg-green-600" },
      { name: "Vite", color: "bg-purple-500" },
      { name: "npm", color: "bg-red-600" },
    ],
    github: "https://github.com/MarutiBandagar9121/indian-id-validator",
    image: "/portfolio/images/projects/indianIdValidator.png",
  },

  {
    id: "animeflix",
    title: "AnimeFlix",
    tagline: "Full-stack streaming platform with OTP auth and personalized watchlists.",
    shortDescription:
      "A feature-rich anime streaming app built with React, PHP, and PostgreSQL — complete with secure authentication and responsive UI.",
    highlights: [
      "Built end-to-end authentication with OTP-based email verification, protecting accounts without third-party auth services.",
      "Designed RESTful PHP APIs handling user management, anime listings, and watchlist CRUD operations.",
      "Optimized PostgreSQL with proper indexing for fast search and category-based filtering across large anime datasets.",
      "Delivered a fully responsive UI with Tailwind CSS — anime cards, search, and filtering work seamlessly across devices.",
    ],
    techStack: [
      { name: "React", color: "bg-blue-400" },
      { name: "Tailwind CSS", color: "bg-cyan-500" },
      { name: "PHP", color: "bg-indigo-600" },
      { name: "PostgreSQL", color: "bg-blue-800" },
      { name: "Apache", color: "bg-red-600" },
    ],
    github: "https://github.com/MarutiBandagar9121/AnimeFlix",
    image: "/portfolio/images/projects/animeflix.png",
  },

  {
    id: "milk-mart",
    title: "Milk Mart",
    tagline: "Dairy business management — inventory, orders, and reporting in one place.",
    shortDescription:
      "A centralized dairy operations platform built with PHP and MySQL, with an admin dashboard, real-time stock alerts, and sales analytics.",
    highlights: [
      "Built an admin dashboard covering inventory management, order processing, and product catalog in a single interface.",
      "Implemented real-time low-stock alerts to proactively prevent inventory shortfalls.",
      "Created a customer-facing portal for browsing products and placing recurring milk delivery orders.",
      "Developed sales reporting features giving business owners actionable insight into revenue and stock trends.",
    ],
    techStack: [
      { name: "PHP", color: "bg-indigo-600" },
      { name: "MySQL", color: "bg-orange-500" },
      { name: "JavaScript", color: "bg-yellow-500" },
      { name: "Bootstrap", color: "bg-purple-600" },
    ],
    github: "https://github.com/MarutiBandagar9121/MilkMart",
    image: "/portfolio/images/projects/milkmart.png",
  },
];
