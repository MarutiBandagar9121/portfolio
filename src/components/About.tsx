import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 blur-2xl opacity-30"></div>
            <img
              src="/images/marutiPhoto.jpeg"
              alt="Maruti Bandagar"
              className="relative w-64 h-64 object-cover rounded-full border-4 border-slate-800 shadow-2xl"
            />
          </div>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-primary mb-6">
            About Me
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            I'm a startup-driven Full Stack Developer with 1.8+ years of
            experience building scalable, cloud-native applications and
            AI-integrated systems. I specialize in Java, TypeScript, and
            modern frontend frameworks, delivering production-grade
            solutions that are clean, maintainable, and performance-focused.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            At Estatehub, I’ve led legacy system modernization, architected
            containerized deployments with Docker, built semantic search
            systems using Vector Databases, and optimized cloud infrastructure
            across AWS and GCP. I enjoy solving complex engineering problems
            and turning ideas into reliable, scalable products.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Beyond development, I’m passionate about system design, DevOps
            automation, and AI-powered workflow optimization. My focus is
            always on building software that creates measurable business impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}