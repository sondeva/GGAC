import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="educacion" className="max-w-6xl mx-auto px-6 py-16">
      <p className="section-sub">03 — Trayectoria académica</p>
      <h2 className="section-title">Educación</h2>
      <ol className="mt-8 space-y-4">
        {education.map((e, i) => (
          <li key={i} className="card">
            <div className="flex items-start gap-4">
              <span className="text-2xl">{e.flag}</span>
              <div className="flex-1">
                <h3 className="font-serif text-lg text-brand-800">{e.degree}</h3>
                <p className="text-sm text-brand-700 mt-0.5">
                  {e.inst} — {e.place}
                </p>
                {e.years && <p className="text-xs text-brand-500 mt-1">{e.years}</p>}
                <p className="text-sm text-brand-900/75 mt-2 leading-relaxed">{e.notes}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
