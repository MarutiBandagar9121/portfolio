import {RiMailLine} from "@remixicon/react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-primary mb-6">Let's Build Something Great</h2>
      <a href="mailto:your-email@example.com"
         className="bg-primary px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 justify-center hover:scale-105 transition">
        Contact Me <RiMailLine size={18} />
      </a>
    </section>
  );
}
