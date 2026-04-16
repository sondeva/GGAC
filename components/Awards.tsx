import { awards, evaluations } from "@/lib/data";

export default function Awards() {
  return (
    <section id="distinciones" className="max-w-6xl mx-auto px-6 py-16">
      <p className="section-sub">07 — Logros</p>
      <h2 className="section-title">Distinciones y reconocimientos</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-serif text-lg text-brand-800 mb-3">Nombramientos y estímulos</h3>
          <ul className="space-y-2">
            {awards.map((a, i) => (
              <li key={i} className="card flex items-start gap-3">
                <span className="text-brand-500 text-lg">★</span>
                <div>
                  <div className="font-serif text-[15px] text-brand-900">{a.title}</div>
                  <div className="text-xs text-brand-600">
                    {a.year} · {a.issuer}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-serif text-lg text-brand-800 mb-3">Participación como evaluador</h3>
          <div className="card">
            <ul className="text-sm text-brand-900/85 space-y-2 leading-relaxed">
              {evaluations.map((e, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-brand-500">›</span>
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
