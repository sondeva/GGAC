import { courses, knowledgeAccess } from "@/lib/data";

function YoutubeEmbed({ youtubeId, playlistId }: { youtubeId: string | null; playlistId: string | null }) {
  const src = playlistId
    ? `https://www.youtube.com/embed/videoseries?list=${playlistId}`
    : youtubeId
    ? `https://www.youtube.com/embed/${youtubeId}`
    : null;

  if (!src) {
    return (
      <div className="aspect-video w-full rounded-md bg-gradient-to-br from-brand-100 to-brand-200 border border-brand-200 flex items-center justify-center">
        <div className="text-center px-6">
          <div className="text-4xl">▶</div>
          <div className="mt-2 text-brand-700 font-serif">Próximamente en YouTube</div>
          <div className="text-xs text-brand-600 mt-1">Curso en producción</div>
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-video w-full rounded-md overflow-hidden border border-brand-200">
      <iframe
        src={src}
        title="Curso en YouTube"
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default function Courses() {
  return (
    <section id="conocimiento" className="bg-white border-y border-brand-100">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <p className="section-sub">09 — Formación abierta</p>
        <h2 className="section-title">Acceso Universal al Conocimiento</h2>
        <p className="mt-4 max-w-3xl text-brand-900/80 leading-relaxed">
          {knowledgeAccess.intro}
        </p>
        <p className="mt-2 font-serif italic text-brand-700">“{knowledgeAccess.tagline}”</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {courses.map((c) => (
            <article key={c.slug} className="card p-0 overflow-hidden flex flex-col">
              <div className="p-4 pb-0">
                <YoutubeEmbed youtubeId={c.youtubeId} playlistId={c.playlistId} />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-lg text-brand-900 leading-snug">{c.title}</h3>
                  <span className="chip shrink-0">{c.status}</span>
                </div>
                <p className="text-sm text-brand-700 mt-1">{c.topic}</p>
                <p className="text-sm text-brand-900/80 mt-3 leading-relaxed flex-1">
                  {c.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <span className="chip">{c.level}</span>
                  <span className="chip">{c.lessons} lecciones</span>
                  <span className="chip">{c.duration}</span>
                  <span className="chip">Gratuito</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3 text-sm">
          <a
            href={knowledgeAccess.youtubeChannel}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-md bg-brand-700 text-white px-4 py-2 hover:bg-brand-800 transition"
          >
            Canal de YouTube →
          </a>
          <span className="text-xs text-brand-600">
            Los cursos se liberarán progresivamente. Suscríbete para recibir avisos.
          </span>
        </div>
      </div>
    </section>
  );
}
