import { profile, stats } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="max-w-6xl mx-auto px-6 pt-14 pb-16">
      <div className="grid md:grid-cols-[220px_1fr] gap-10 items-center">
        <div className="flex justify-center md:justify-start">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-brand-200 to-brand-500 border-4 border-white shadow-lg flex items-center justify-center text-white font-serif text-5xl select-none">
            GA
          </div>
        </div>
        <div>
          <p className="section-sub">{profile.title}</p>
          <h1 className="font-serif text-4xl md:text-5xl text-brand-900 leading-tight mt-2">
            Dr. {profile.name}
          </h1>
          <p className="mt-4 text-brand-800/80 max-w-2xl leading-relaxed">
            {profile.institution} — {profile.faculty}. {profile.location}.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="chip">{profile.sni}</span>
            <span className="chip">CVU {profile.cvu}</span>
            <span className="chip">Cuerpo Académico UMSNH-CA-11</span>
          </div>
          <div className="mt-6 flex gap-3">
            <a
              href="#publicaciones"
              className="inline-flex items-center rounded-md bg-brand-700 text-white px-4 py-2 text-sm hover:bg-brand-800 transition"
            >
              Ver publicaciones
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center rounded-md border border-brand-300 text-brand-800 px-4 py-2 text-sm hover:bg-brand-50 transition"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="card text-center">
            <div className="stat">{s.value}</div>
            <div className="text-xs uppercase tracking-wider text-brand-600 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
