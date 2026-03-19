import { motion } from "framer-motion";
import { projects } from "../data/projectsData";
import { RiArrowRightLine } from "@remixicon/react";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-28 px-6 bg-slate-950 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-indigo-600/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            What I've Built
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="h-px w-20 bg-gradient-to-r from-primary to-transparent" />
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.18 } }}
              onClick={() => navigate(`/projects/${project.id}`)}
              className="group relative flex flex-col cursor-pointer rounded-2xl overflow-hidden"
              style={{
                background: "rgba(15, 23, 42, 0.8)",
                border: "1px solid rgba(51, 65, 85, 0.5)",
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.35)";
                e.currentTarget.style.boxShadow  = "0 20px 60px rgba(99,102,241,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(51, 65, 85, 0.5)";
                e.currentTarget.style.boxShadow   = "none";
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(90deg, #6366f1, #a78bfa, #22d3ee)",
                }}
              />

              {/* Project image */}
              <div className="relative h-44 overflow-hidden bg-slate-900 flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-65 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-semibold text-white group-hover:text-primary transition-colors duration-200 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {project.shortDescription}
                </p>

                {/* Tech tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech.name}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/50 text-gray-400"
                    >
                      {tech.name}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/50 text-gray-600">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>

                {/* View cue */}
                <div className="mt-4 flex items-center gap-1 text-primary text-xs font-semibold opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200">
                  View Details <RiArrowRightLine size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
