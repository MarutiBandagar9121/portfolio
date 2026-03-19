import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenuLine, RiCloseLine, RiDownloadLine } from "@remixicon/react";

const navLinks = [
  { href: "#about",    label: "About" },
  { href: "#skills",   label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact",  label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/50 shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="/portfolio/">
          <motion.div whileHover={{ scale: 1.04 }} className="text-xl font-bold select-none">
            <span className="gradient-text">Maruti</span>
            <span className="text-slate-500">.</span>
            <span className="text-white">dev</span>
          </motion.div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/portfolio/resumes/MarutiBandagar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 flex items-center gap-1.5 bg-primary/10 border border-primary/30 hover:bg-primary/20 hover:border-primary/50 text-primary px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
          >
            <RiDownloadLine size={14} />
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <RiCloseLine size={22} /> : <RiMenuLine size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-slate-800/50 bg-slate-950/95 backdrop-blur-xl"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 font-medium"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="/portfolio/resumes/MarutiBandagar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-3 flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-4 py-3 rounded-xl font-medium"
              >
                <RiDownloadLine size={16} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
