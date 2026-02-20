import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", color: "bg-orange-600" },
      { name: "JavaScript", color: "bg-yellow-400 text-black" },
      { name: "TypeScript", color: "bg-blue-600" },
      { name: "Python", color: "bg-green-500" },
      { name: "PHP", color: "bg-purple-500" },
    ],
  },
  {
    title: "Frontend Technologies",
    skills: [
      { name: "React", color: "bg-cyan-500" },
      { name: "NextJs", color: "bg-gray-800" },
      { name: "Angular", color: "bg-red-600" },
      { name: "Tailwind CSS", color: "bg-teal-500" },
    ],
  },
  {
    title: "Backend Technologies",
    skills: [
      { name: "Spring Boot", color: "bg-green-500" },
      { name: "Express", color: "bg-gray-700" },
      { name: "Laravel", color: "bg-red-500" },
      { name: "Node.js", color: "bg-green-600" },
      { name: "Fastify", color: "bg-zinc-800" },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Git & GitHub", color: "bg-orange-500" },
      { name: "Docker", color: "bg-blue-500" },
      { name: "AWS", color: "bg-yellow-500 text-black" },
      { name: "GCP", color: "bg-red-500" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", color: "bg-blue-700" },
      { name: "PostgreSQL", color: "bg-blue-800" },
      { name: "MongoDB", color: "bg-green-700" },
      { name: "Redis", color: "bg-red-500" },
      { name: "Qdrant", color: "bg-pink-600" },
      { name: "Elastic Search", color: "bg-olive-700" },
    ],
  },
  {
    title: "Other Tools & Technologies",
    skills: [
      {name: "Postman", color: "bg-orange-500"},
      {name: "VS Code", color: "bg-gray-700"},
      {name: "IntelliJ IDEA", color: "bg-green-500"},
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-primary mb-12"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className=" p-8 rounded-3xl shadow-xl border border-slate-700"
            >
              <h3 className="text-xl font-semibold mb-6 text-white">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${skill.color} px-4 py-2 rounded-full text-sm font-medium shadow-md cursor-default transition-all duration-300`}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
