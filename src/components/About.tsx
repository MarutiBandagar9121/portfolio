import { motion } from "framer-motion";

const stats = [
  { value: "1.8+", label: "Years Exp.", color: "#6366f1" },
  { value: "5+",   label: "Projects",   color: "#06b6d4" },
  { value: "15+",  label: "Tech Stack", color: "#10b981" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-slate-950 text-white relative overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-primary text-sm font-semibold tracking-widest uppercase mb-3"
        >
          Who I Am
        </motion.p>

        <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Photo side ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative">
              {/* Outer ring — slowly spinning dashed circle */}
              <div
                className="absolute -inset-5 rounded-full border border-dashed border-indigo-500/20"
                style={{ animation: "spin 28s linear infinite" }}
              />
              {/* Inner glow blob */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/30 to-cyan-500/20 blur-2xl scale-110 opacity-60" />

              {/* Photo */}
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden border-2 border-slate-700/60 shadow-2xl shadow-indigo-900/40">
                <img
                  src="/portfolio/images/marutiPhoto.jpeg"
                  alt="Maruti Bandagar"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
              </div>

              {/* Availability badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -right-4 bg-slate-900 border border-slate-700/70 rounded-full px-4 py-2 flex items-center gap-2 shadow-xl"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-gray-300 font-medium">Available</span>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Text side ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-7">
              About <span className="gradient-text">Me</span>
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed text-[0.97rem]">
              <p>
                I'm a startup-driven{" "}
                <span className="text-gray-200 font-medium">Full Stack Developer</span>{" "}
                with 1.8+ years of experience building scalable, cloud-native
                applications and AI-integrated systems. I specialize in Java,
                TypeScript, and modern frontend frameworks, delivering
                production-grade solutions that are clean, maintainable, and
                performance-focused.
              </p>
              <p>
                At{" "}
                <span className="text-gray-200 font-medium">Estatehub</span>, I've
                led legacy system modernization, architected containerized
                deployments with Docker, built semantic search systems using Vector
                Databases, and optimized cloud infrastructure across AWS and GCP.
              </p>
              <p>
                Beyond development, I'm passionate about system design, DevOps
                automation, and AI-powered workflow optimization. My focus is
                always on building software that creates measurable business impact.
              </p>
            </div>

            {/* Stats row */}
            <div className="mt-9 grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="py-4 px-3 rounded-xl bg-slate-900/70 border border-slate-800/60 text-center"
                  style={{ borderTopWidth: 2, borderTopColor: s.color }}
                >
                  <div className="text-2xl font-bold" style={{ color: s.color }}>
                    {s.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
