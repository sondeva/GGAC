import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="proyectos" className="bg-white border-y border-brand-100">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <p className="section-sub">06 — Investigación financiada</p>
        <h2 className="section-title">Proyectos de investigación</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <article key={i} className="card">
              <div className="flex justify-between items-start gap-3">
                <h3 className="font-serif text-lg text-brand-900">{p.title}</h3>
                <span className="chip shrink-0">{p.period}</span>
              </div>
              <p className="text-sm text-brand-700 mt-1">
                <span className="font-medium">Financiamiento:</span> {p.funder} · <span className="font-medium">Rol:</span> {p.role}
              </p>
              <p className="text-sm text-brand-900/80 mt-3 leading-relaxed">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
