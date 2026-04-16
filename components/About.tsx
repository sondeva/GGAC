import { profile } from "@/lib/data";

export default function About() {
  return (
    <section id="sobre" className="max-w-6xl mx-auto px-6 py-16">
      <p className="section-sub">01 — Sobre mí</p>
      <h2 className="section-title">Biografía académica</h2>
      <div className="mt-8 grid md:grid-cols-[1fr_320px] gap-10">
        <p className="text-brand-900/85 leading-relaxed text-[17px]">{profile.summary}</p>
        <aside className="card bg-brand-50/60">
          <h3 className="font-serif text-lg text-brand-800">Datos clave</h3>
          <dl className="mt-3 text-sm text-brand-800 space-y-2">
            <div>
              <dt className="text-brand-500 uppercase text-[11px] tracking-wider">Institución</dt>
              <dd>{profile.institution}</dd>
            </div>
            <div>
              <dt className="text-brand-500 uppercase text-[11px] tracking-wider">Facultad</dt>
              <dd>{profile.faculty}</dd>
            </div>
            <div>
              <dt className="text-brand-500 uppercase text-[11px] tracking-wider">Ubicación</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt className="text-brand-500 uppercase text-[11px] tracking-wider">Nivel SNI</dt>
              <dd>{profile.sni}</dd>
            </div>
            <div>
              <dt className="text-brand-500 uppercase text-[11px] tracking-wider">CVU</dt>
              <dd>{profile.cvu}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
