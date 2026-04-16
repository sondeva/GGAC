import { profile } from "@/lib/data";

const icons = ["◆", "●", "▲", "■"];

export default function Areas() {
  return (
    <section id="investigacion" className="bg-white border-y border-brand-100">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <p className="section-sub">02 — Líneas de investigación</p>
        <h2 className="section-title">Áreas de investigación</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {profile.areas.map((a, i) => (
            <div key={a.title} className="card">
              <div className="flex items-start gap-3">
                <span className="text-brand-500 text-xl mt-0.5">{icons[i % icons.length]}</span>
                <div>
                  <h3 className="font-serif text-lg text-brand-800">{a.title}</h3>
                  <p className="text-sm text-brand-900/75 mt-1 leading-relaxed">{a.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
