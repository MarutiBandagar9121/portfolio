import { motion } from "framer-motion";
import {
  RiCodeBoxLine,
  RiLayoutLine,
  RiServerLine,
  RiCloudLine,
  RiDatabase2Line,
  RiToolsLine,
} from "@remixicon/react";

interface SkillCategory {
  title: string;
  Icon: React.ElementType;
  accent: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    Icon: RiCodeBoxLine,
    accent: "#8b5cf6",
    skills: ["Java", "JavaScript", "TypeScript", "Python", "PHP"],
  },
  {
    title: "Frontend",
    Icon: RiLayoutLine,
    accent: "#06b6d4",
    skills: ["React", "Next.js", "Angular", "Tailwind CSS"],
  },
  {
    title: "Backend",
    Icon: RiServerLine,
    accent: "#10b981",
    skills: ["Spring Boot", "Express", "Laravel", "Node.js", "Fastify"],
  },
  {
    title: "DevOps & Cloud",
    Icon: RiCloudLine,
    accent: "#f97316",
    skills: ["Git & GitHub", "Docker", "AWS", "GCP"],
  },
  {
    title: "Databases",
    Icon: RiDatabase2Line,
    accent: "#3b82f6",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Qdrant", "Elasticsearch"],
  },
  {
    title: "Tools & More",
    Icon: RiToolsLine,
    accent: "#f43f5e",
    skills: ["Postman", "VS Code", "IntelliJ IDEA"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6 bg-slate-950 relative overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[280px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            What I Work With
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-gray-500 max-w-xl text-[0.95rem] leading-relaxed">
            A curated set of technologies I use to build production-grade
            applications across the full stack.
          </p>
          <div className="mt-6 h-px w-20 bg-gradient-to-r from-primary to-transparent" />
        </motion.div>

        {/* ── Cards Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillCategories.map((cat) => (
            <SkillCard key={cat.title} cat={cat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Individual Card ─────────────────────────────────────── */
function SkillCard({ cat }: { cat: SkillCategory }) {
  const { title, Icon, accent, skills } = cat;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5, transition: { duration: 0.18 } }}
      className="group relative rounded-2xl p-6 overflow-hidden cursor-default"
      style={{
        background: "rgba(15, 23, 42, 0.75)",
        border: "1px solid rgba(51, 65, 85, 0.5)",
        backdropFilter: "blur(12px)",
        transition: "border-color 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${accent}40`;
        e.currentTarget.style.boxShadow  = `0 0 40px ${accent}14, 0 0 0 1px ${accent}20`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(51, 65, 85, 0.5)";
        e.currentTarget.style.boxShadow   = "none";
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
        style={{
          background: `linear-gradient(90deg, ${accent}, ${accent}00)`,
        }}
      />

      {/* Ghost icon (decorative) */}
      <div
        className="absolute -right-3 -top-3 opacity-[0.04] group-hover:opacity-[0.09] transition-opacity duration-500"
        style={{ color: accent }}
      >
        <Icon size={110} />
      </div>

      {/* Header row */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="p-2.5 rounded-xl flex-shrink-0"
          style={{
            background: `${accent}18`,
            color: accent,
            boxShadow: `0 0 16px ${accent}20`,
          }}
        >
          <Icon size={20} />
        </div>
        <h3 className="text-[0.9rem] font-semibold" style={{ color: `${accent}e0` }}>
          {title}
        </h3>
      </div>

      {/* Skill pills */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <SkillPill key={skill} skill={skill} accent={accent} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

/* ── Skill Pill ──────────────────────────────────────────── */
function SkillPill({
  skill,
  accent,
  index,
}: {
  skill: string;
  accent: string;
  index: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.04, duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.08, y: -2 }}
      className="px-3 py-1.5 rounded-lg text-xs font-medium cursor-default select-none"
      style={{
        background: `${accent}12`,
        border: `1px solid ${accent}28`,
        color: `${accent}cc`,
        transition: "background 0.2s, border-color 0.2s, color 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background   = `${accent}22`;
        el.style.borderColor  = `${accent}60`;
        el.style.color        = accent;
        el.style.boxShadow    = `0 0 10px ${accent}30`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background   = `${accent}12`;
        el.style.borderColor  = `${accent}28`;
        el.style.color        = `${accent}cc`;
        el.style.boxShadow    = "none";
      }}
    >
      {skill}
    </motion.span>
  );
}
