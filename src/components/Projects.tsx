export default function Projects() {
  const projects = [
    { title: "JobStream AI", desc: "Semantic job search using vector database." },
    { title: "AI Thesis Evaluation", desc: "AI-powered grading system." },
    { title: "Estatehub Platform", desc: "Cloud-architected scalable startup platform." }
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-primary mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div key={p.title} className="bg-slate-800 p-8 rounded-2xl hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-4">{p.title}</h3>
            <p className="text-gray-400">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
