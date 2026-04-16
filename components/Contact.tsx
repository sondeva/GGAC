import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contacto" className="bg-brand-800 text-brand-50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-xs uppercase tracking-[0.2em] text-brand-300">08 — Contacto</p>
        <h2 className="font-serif text-3xl md:text-4xl mt-2">¿Colaboramos?</h2>
        <p className="mt-4 text-brand-100 max-w-2xl leading-relaxed">
          Para colaboración académica, dirección de tesis, evaluaciones o conferencias, puede
          contactarme a través de los siguientes medios institucionales.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <div className="bg-brand-900/40 border border-brand-700 rounded-lg p-5">
            <div className="text-xs uppercase tracking-wider text-brand-300">Correo</div>
            <a
              href={`mailto:${profile.email}`}
              className="font-serif text-lg text-white hover:underline"
            >
              {profile.email}
            </a>
          </div>
          <div className="bg-brand-900/40 border border-brand-700 rounded-lg p-5">
            <div className="text-xs uppercase tracking-wider text-brand-300">Institución</div>
            <div className="font-serif text-lg text-white">UMSNH — FCCA</div>
            <div className="text-sm text-brand-200 mt-1">{profile.location}</div>
          </div>
          <div className="bg-brand-900/40 border border-brand-700 rounded-lg p-5">
            <div className="text-xs uppercase tracking-wider text-brand-300">Identificadores</div>
            <div className="text-sm text-brand-100">CVU {profile.cvu}</div>
            <div className="text-sm text-brand-100">{profile.sni}</div>
          </div>
        </div>

        <footer className="mt-12 pt-6 border-t border-brand-700 text-xs text-brand-300 flex flex-wrap justify-between gap-3">
          <span>© {new Date().getFullYear()} Dr. Gerardo Gabriel Alfaro Calderón.</span>
          <span>Sitio académico — UMSNH · FCCA · Morelia, México</span>
        </footer>
      </div>
    </section>
  );
}
