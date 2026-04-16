import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experiencia" className="bg-white border-y border-brand-100">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <p className="section-sub">04 — Trayectoria profesional</p>
        <h2 className="section-title">Experiencia académica y profesional</h2>
        <ol className="mt-10 relative border-l-2 border-brand-200 pl-6 space-y-8">
          {experience.map((x, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-brand-500 ring-4 ring-brand-50" />
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="font-serif text-lg text-brand-800">{x.role}</h3>
                <span className="text-xs text-brand-500 uppercase tracking-wider">{x.years}</span>
              </div>
              <p className="text-sm text-brand-700 mt-0.5">
                {x.inst} — {x.place}
              </p>
              <ul className="mt-2 list-disc list-outside ml-5 text-sm text-brand-900/80 space-y-1">
                {x.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
