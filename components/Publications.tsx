import { publications } from "@/lib/data";

export default function Publications() {
  const articles = publications.filter((p) => p.type === "Artículo").length;
  const chapters = publications.filter((p) => p.type === "Capítulo de libro").length;

  return (
    <section id="publicaciones" className="max-w-6xl mx-auto px-6 py-16">
      <p className="section-sub">05 — Producción científica</p>
      <h2 className="section-title">Publicaciones destacadas</h2>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="card text-center"><div className="stat">{publications.length}</div><div className="text-xs uppercase tracking-wider text-brand-600 mt-1">Publicaciones</div></div>
        <div className="card text-center"><div className="stat">{articles}</div><div className="text-xs uppercase tracking-wider text-brand-600 mt-1">Artículos</div></div>
        <div className="card text-center"><div className="stat">{chapters}</div><div className="text-xs uppercase tracking-wider text-brand-600 mt-1">Capítulos</div></div>
        <div className="card text-center"><div className="stat">2012–2023</div><div className="text-xs uppercase tracking-wider text-brand-600 mt-1">Rango</div></div>
      </div>

      <ul className="mt-10 space-y-3">
        {publications.map((p, i) => (
          <li key={i} className="card flex gap-4 items-start">
            <div className="font-serif text-brand-500 text-xl w-16 shrink-0">{p.year}</div>
            <div className="flex-1">
              <h3 className="font-serif text-[17px] text-brand-900">{p.title}</h3>
              <p className="text-sm text-brand-700 mt-0.5">{p.venue}</p>
              <div className="mt-2 flex gap-2 flex-wrap">
                <span className="chip">{p.type}</span>
                <span className="chip">{p.tag}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap gap-3 text-sm">
        <a className="chip" href="https://scholar.google.com" target="_blank" rel="noreferrer">Google Scholar</a>
        <a className="chip" href="https://orcid.org" target="_blank" rel="noreferrer">ORCID</a>
        <a className="chip" href="https://www.scopus.com" target="_blank" rel="noreferrer">Scopus</a>
        <a className="chip" href="https://www.webofscience.com" target="_blank" rel="noreferrer">Web of Science</a>
      </div>
    </section>
  );
}
