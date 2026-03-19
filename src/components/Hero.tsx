import { motion } from "framer-motion";
import {
  RiArrowRightLine,
  RiGithubFill,
  RiLinkedinFill,
  RiWhatsappFill,
  RiMailFill,
  RiDownloadLine,
} from "@remixicon/react";

const stats = [
  { value: "1.8+", label: "Years Experience" },
  { value: "5+",   label: "Projects Built" },
  { value: "15+",  label: "Technologies" },
];

const socials = [
  {
    href: "https://github.com/MarutiBandagar9121",
    icon: RiGithubFill,
    hover: "hover:text-white hover:bg-white/10 hover:border-white/20",
  },
  {
    href: "https://www.linkedin.com/in/marutibandagar",
    icon: RiLinkedinFill,
    hover: "hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/30",
  },
  {
    href: "https://wa.me/917755919112",
    icon: RiWhatsappFill,
    hover: "hover:text-green-400 hover:bg-green-500/10 hover:border-green-500/30",
  },
  {
    href: "mailto:maruti.bandagar@yahoo.com",
    icon: RiMailFill,
    hover: "hover:text-rose-400 hover:bg-rose-500/10 hover:border-rose-500/30",
  },
];

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-slate-950 text-white relative overflow-hidden">

      {/* Dot grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none" />

      {/* Ambient blobs */}
      <div className="absolute top-1/4 -left-16 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 -right-16 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[100px] animate-float-alt pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-900/8 rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85 }}
        className="relative z-10 max-w-5xl w-full text-center"
      >
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-medium mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to Opportunities
        </motion.div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[1.04] tracking-tight">
          Engineering{" "}
          <span className="gradient-text">Scalable</span>
          <br className="hidden sm:block" />
          {" "}Systems with{" "}
          <span className="gradient-text">AI & Cloud</span>
        </h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-8 text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Full-Stack Developer specializing in{" "}
          <span className="text-gray-200 font-medium">Java, TypeScript & Cloud Infrastructure</span>.{" "}
          I build high-performance web apps, AI-powered systems, and containerized architectures designed for scale.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#projects"
            className="group bg-primary hover:bg-indigo-500 px-8 py-3.5 rounded-xl flex items-center gap-2 font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200"
          >
            View My Work
            <RiArrowRightLine
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </a>
          <a
            href="/portfolio/resumes/MarutiBandagar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-slate-700 hover:border-slate-500 bg-slate-800/40 hover:bg-slate-800 px-8 py-3.5 rounded-xl font-medium text-gray-300 hover:text-white transition-all duration-200"
          >
            <RiDownloadLine size={18} />
            Resume
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-10 flex justify-center gap-3"
        >
          {socials.map(({ href, icon: Icon, hover }) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.12, y: -2 }}
              whileTap={{ scale: 0.94 }}
              className={`p-3 rounded-xl text-gray-500 bg-slate-800/50 border border-slate-700/50 transition-all duration-200 ${hover}`}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.55 }}
          className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-16"
        >
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold gradient-text">{s.value}</div>
              <div className="text-gray-500 text-sm mt-1 tracking-wide">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 pointer-events-none"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-indigo-500/50 to-transparent animate-bounce-down" />
      </motion.div>
    </section>
  );
}
