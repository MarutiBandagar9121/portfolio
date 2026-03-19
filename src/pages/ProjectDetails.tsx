import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projectsData";
import Navbar from "../components/Navbar";
import {
  RiArrowLeftLine,
  RiGithubFill,
  RiArrowRightUpLine,
  RiCheckboxCircleLine,
} from "@remixicon/react";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-gray-400">
        Project not found.
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.id === id);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white pt-28 pb-24 px-6 relative overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-indigo-600/6 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto">

          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => navigate(-1)}
            className="group flex items-center gap-2 text-gray-500 hover:text-white text-sm font-medium mb-12 transition-colors duration-200"
          >
            <RiArrowLeftLine
              size={16}
              className="group-hover:-translate-x-0.5 transition-transform duration-200"
            />
            Back to Projects
          </motion.button>

          {/* ── Hero ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
              Case Study
            </p>

            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
              {project.title}
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed mb-3 max-w-2xl">
              {project.tagline}
            </p>

            <p className="text-gray-500 text-[0.95rem] leading-relaxed max-w-2xl mb-8">
              {project.shortDescription}
            </p>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-500 text-gray-200 hover:text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
            >
              <RiGithubFill size={17} />
              View on GitHub
              <RiArrowRightUpLine
                size={15}
                className="text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
              />
            </a>
          </motion.div>

          {/* Divider */}
          <div className="my-14 h-px bg-gradient-to-r from-slate-800 via-slate-700/50 to-transparent" />

          {/* ── Two-column: Highlights + Tech ─────────────────── */}
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">

            {/* Highlights (wider) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="lg:col-span-3"
            >
              <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-6">
                Key Highlights
              </h2>

              <div className="flex flex-col gap-4">
                {project.highlights.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                    className="flex gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 group hover:border-indigo-500/25 hover:bg-slate-900/90 transition-all duration-200"
                  >
                    <RiCheckboxCircleLine
                      size={18}
                      className="text-primary flex-shrink-0 mt-0.5"
                    />
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-200">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tech Stack (narrower) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="lg:col-span-2"
            >
              <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-6">
                Tech Stack
              </h2>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.05, duration: 0.3 }}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/80 border border-slate-700/50 text-gray-300 hover:border-indigo-500/40 hover:text-white transition-all duration-200"
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Next Project ──────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-20 pt-10 border-t border-slate-800/50"
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-600 mb-4">
              Next Project
            </p>
            <button
              onClick={() => navigate(`/projects/${next.id}`)}
              className="group flex items-center justify-between w-full p-5 rounded-2xl bg-slate-900/60 border border-slate-800/60 hover:border-indigo-500/30 hover:bg-slate-900 transition-all duration-200"
            >
              <div className="text-left">
                <div className="text-white font-semibold group-hover:text-primary transition-colors duration-200">
                  {next.title}
                </div>
                <div className="text-gray-500 text-sm mt-0.5">{next.tagline}</div>
              </div>
              <RiArrowRightUpLine
                size={20}
                className="text-gray-600 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0 ml-4"
              />
            </button>
          </motion.div>

        </div>
      </main>
    </>
  );
}
