export default function Nav() {
  const items = [
    { id: "sobre", label: "Sobre mí" },
    { id: "investigacion", label: "Investigación" },
    { id: "educacion", label: "Educación" },
    { id: "experiencia", label: "Experiencia" },
    { id: "publicaciones", label: "Publicaciones" },
    { id: "proyectos", label: "Proyectos" },
    { id: "distinciones", label: "Distinciones" },
    { id: "conocimiento", label: "Acceso Universal al Conocimiento" },
    { id: "contacto", label: "Contacto" },
  ];
  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur border-b border-brand-100">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#top" className="font-serif text-lg text-brand-800 font-semibold">
          Dr. G. G. Alfaro Calderón
        </a>
        <nav className="hidden md:flex gap-5 text-sm text-brand-700">
          {items.map((i) => (
            <a key={i.id} href={`#${i.id}`} className="hover:text-brand-500 transition">
              {i.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
