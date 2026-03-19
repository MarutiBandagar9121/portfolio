import { motion } from "framer-motion";
import { experiences, totalExperience, type Experience } from "../data/experienceData";
import { RiMapPinLine, RiBriefcaseLine } from "@remixicon/react";

/* ── helpers ────────────────────────────────────────────── */
function getDuration(exp: Experience): string {
  const start = new Date(exp.startDate);
  const end   = exp.endDate ? new Date(exp.endDate) : new Date();
  const months = (end.getFullYear() - start.getFullYear()) * 12 +
                 (end.getMonth() - start.getMonth());
  const y = Math.floor(months / 12);
  const m = months % 12;
  const parts: string[] = [];
  if (y) parts.push(`${y} yr${y > 1 ? "s" : ""}`);
  if (m) parts.push(`${m} mo${m > 1 ? "s" : ""}`);
  return parts.join(" ") || "< 1 mo";
}

/* ── component ──────────────────────────────────────────── */
export default function WorkExperience() {
  const totalExp = totalExperience;

  return (
    <section
      id="experience"
      className="py-28 px-6 bg-slate-950 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dot-grid opacity-35 pointer-events-none" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Where I've Worked
          </p>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Work <span className="gradient-text">Experience</span>
            </h2>

            {/* Total experience badge */}
            <div className="flex items-center gap-3 bg-slate-900/80 border border-slate-700/60 rounded-2xl px-5 py-3 self-start sm:self-auto">
              <div className="p-2 rounded-xl bg-primary/15">
                <RiBriefcaseLine size={18} className="text-primary" />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-medium">Total Experience</div>
                <div className="text-white font-bold text-lg leading-tight gradient-text">
                  {totalExp}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 h-px w-20 bg-gradient-to-r from-primary to-transparent" />
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-indigo-500/20 to-transparent" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, index) => (
              <TimelineCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Timeline Card ──────────────────────────────────────── */
function TimelineCard({ exp, index }: { exp: Experience; index: number }) {
  const duration = getDuration(exp);
  const isPresent = exp.endDate === null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative pl-16 sm:pl-20"
    >
      {/* Timeline dot */}
      <div className="absolute left-[18px] sm:left-[26px] top-6 -translate-x-1/2 flex flex-col items-center">
        <div
          className="w-4 h-4 rounded-full border-2 border-primary bg-slate-950 z-10"
          style={{ boxShadow: "0 0 12px rgba(99,102,241,0.7)" }}
        />
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ y: -3, transition: { duration: 0.18 } }}
        className="group rounded-2xl p-6 sm:p-7"
        style={{
          background: "rgba(15, 23, 42, 0.8)",
          border: "1px solid rgba(51, 65, 85, 0.5)",
          backdropFilter: "blur(12px)",
          transition: "border-color 0.3s, box-shadow 0.3s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(99,102,241,0.35)";
          e.currentTarget.style.boxShadow   = "0 20px 60px rgba(99,102,241,0.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(51, 65, 85, 0.5)";
          e.currentTarget.style.boxShadow   = "none";
        }}
      >
        {/* Top accent */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "linear-gradient(90deg, #6366f1, #a78bfa, #22d3ee)" }}
        />

        {/* Card header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">

          {/* Company + role */}
          <div>
            <div className="flex items-center gap-2.5 flex-wrap mb-1.5">
              <h3 className="text-xl font-bold text-white">{exp.company}</h3>
              {/* Current badge */}
              {isPresent && (
                <span className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Current
                </span>
              )}
            </div>
            <p className="text-primary font-semibold text-[0.95rem]">{exp.role}</p>
          </div>

          {/* Meta badges */}
          <div className="flex flex-wrap items-center gap-2 sm:text-right flex-shrink-0">
            {/* Date range */}
            <span className="text-xs text-gray-400 bg-slate-800/70 border border-slate-700/50 px-3 py-1.5 rounded-lg font-medium whitespace-nowrap">
              {exp.startDate} — {exp.endDate ?? "Present"}
            </span>
            {/* Duration */}
            <span className="text-xs text-indigo-300 bg-indigo-500/10 border border-indigo-500/25 px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap">
              {duration}
            </span>
          </div>
        </div>

        {/* Location + type */}
        <div className="flex items-center gap-4 mb-6 text-gray-500 text-xs">
          <span className="flex items-center gap-1">
            <RiMapPinLine size={12} />
            {exp.location}
          </span>
          <span className="flex items-center gap-1">
            <RiBriefcaseLine size={12} />
            {exp.type}
          </span>
        </div>

        {/* Achievements */}
        <div className="flex flex-col gap-3 mb-6">
          {exp.achievements.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.35 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <div
                className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: "#6366f1", boxShadow: "0 0 6px rgba(99,102,241,0.6)" }}
              />
              <p className="text-gray-400 text-sm leading-relaxed">{point}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-2">
          {exp.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/50 text-gray-400 hover:border-indigo-500/40 hover:text-gray-200 transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
