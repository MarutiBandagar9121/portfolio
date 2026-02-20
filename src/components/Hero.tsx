import { motion } from "framer-motion";
import {
  RiArrowRightLine,
  RiGithubFill,
  RiLinkedinFill,
  RiWhatsappFill,
  RiMailFill,
} from "@remixicon/react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 bg-slate-950 text-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Engineering{" "}
          <span className="text-primary">Scalable Systems</span>{" "}
          with AI & Cloud Precision
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Full-Stack Developer specializing in Java, TypeScript & Cloud
          Infrastructure. I build high-performance web applications,
          AI-powered systems, and containerized architectures designed
          for scale.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="bg-primary px-8 py-3 rounded-xl flex items-center gap-2 hover:scale-105 transition font-medium"
          >
            View My Work <RiArrowRightLine size={18} />
          </a>

          <a
            href="mailto:maruti.bandagar@yahoo.com"
            className="border border-slate-700 px-8 py-3 rounded-xl hover:bg-slate-800 transition"
          >
            Hire Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex justify-center gap-6 text-gray-400">
          <a
            href="https://github.com/MarutiBandagar9121"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-110 transition"
          >
            <RiGithubFill size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/marutibandagar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 hover:scale-110 transition"
          >
            <RiLinkedinFill size={24} />
          </a>

          <a
            href="https://wa.me/917755919112"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 hover:scale-110 transition"
          >
            <RiWhatsappFill size={24} />
          </a>

          <a
            href="mailto:maruti.bandagar@yahoo.com"
            className="hover:text-red-500 hover:scale-110 transition"
          >
            <RiMailFill size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}