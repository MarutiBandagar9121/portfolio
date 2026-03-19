import { motion } from "framer-motion";
import {
  RiMailLine,
  RiPhoneLine,
  RiLinkedinFill,
  RiArrowRightLine,
} from "@remixicon/react";

const contactLinks = [
  {
    icon: RiMailLine,
    label: "Email",
    value: "maruti.bandagar@yahoo.com",
    href: "mailto:maruti.bandagar@yahoo.com",
    accent: "#f43f5e",
  },
  {
    icon: RiPhoneLine,
    label: "Phone",
    value: "+91 77559 19112",
    href: "tel:+917755919112",
    accent: "#10b981",
  },
  {
    icon: RiLinkedinFill,
    label: "LinkedIn",
    value: "linkedin.com/in/marutibandagar",
    href: "https://linkedin.com/in/marutibandagar",
    accent: "#3b82f6",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6 bg-slate-950 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-600/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* ── Two-column layout ── */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left — CTA text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Let's Build Something{" "}
              <span className="gradient-text">Impactful</span>
            </h2>
            <p className="text-gray-400 text-[1.02rem] leading-relaxed mb-8 max-w-lg">
              Whether it's building scalable systems, AI-powered applications,
              or cloud-native architectures — I'm always open to meaningful
              collaborations and challenging engineering problems.
            </p>
            <motion.a
              href="mailto:maruti.bandagar@yahoo.com"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-3 bg-primary hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200"
            >
              Say Hello
              <RiArrowRightLine
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </motion.a>
          </motion.div>

          {/* Right — contact cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {contactLinks.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ x: 5, transition: { duration: 0.15 } }}
                className="group flex items-center gap-5 p-5 rounded-2xl"
                style={{
                  background: "rgba(15, 23, 42, 0.75)",
                  border: "1px solid rgba(51, 65, 85, 0.5)",
                  backdropFilter: "blur(12px)",
                  transition: "border-color 0.25s, box-shadow 0.25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${item.accent}35`;
                  e.currentTarget.style.boxShadow   = `0 0 24px ${item.accent}12`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(51, 65, 85, 0.5)";
                  e.currentTarget.style.boxShadow   = "none";
                }}
              >
                {/* Icon */}
                <div
                  className="p-3 rounded-xl flex-shrink-0"
                  style={{
                    background: `${item.accent}15`,
                    color: item.accent,
                    boxShadow: `0 0 14px ${item.accent}18`,
                  }}
                >
                  <item.icon size={22} />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-gray-600 mb-0.5">
                    {item.label}
                  </div>
                  <div className="text-gray-200 font-medium text-sm truncate">
                    {item.value}
                  </div>
                </div>

                {/* Arrow */}
                <RiArrowRightLine
                  size={17}
                  className="flex-shrink-0 transition-colors duration-200 text-gray-600"
                  style={{ color: `${item.accent}60` }}
                />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-600 text-sm"
        >
          <span>© 2025 Maruti Bandagar. Built with React & TypeScript.</span>
          <span className="gradient-text font-medium">Designed & Developed by Maruti</span>
        </motion.div>
      </div>
    </section>
  );
}
