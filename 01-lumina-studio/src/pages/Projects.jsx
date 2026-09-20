import { useSearchParams } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { ContactCTA } from "../components/Layout";
import { projects } from "../data/projects";
export default function Projects() {
  const [params, setParams] = useSearchParams();
  const categories = ["Todos", "Arquitectura", "Interiores", "Comercial"];
  const selected = categories.includes(params.get("tipo"))
    ? params.get("tipo")
    : "Todos";
  const filtered = projects.filter(
    (p) => selected === "Todos" || p.type === selected,
  );
  return (
    <>
      <section className="wrap page-heading">
        <span className="eyebrow">PORTAFOLIO — 2023 / 2025</span>
        <h1>
          Distintas formas
          <br />
          de <em>habitar.</em>
        </h1>
        <p>
          Cada lugar tiene una historia. Nuestro trabajo es encontrar
          <br className="desktop-break" /> el espacio para que suceda.
        </p>
      </section>
      <section className="wrap portfolio">
        <div className="filter-bar">
          <div className="filters" aria-label="Filtrar proyectos">
            {categories.map((c) => (
              <button
                aria-pressed={selected === c}
                className={selected === c ? "selected" : ""}
                key={c}
                onClick={() =>
                  setParams(c === "Todos" ? {} : { tipo: c }, {
                    preventScrollReset: true,
                  })
                }
              >
                {c}
                <sup>
                  {c === "Todos"
                    ? projects.length
                    : projects.filter((p) => p.type === c).length}
                </sup>
              </button>
            ))}
          </div>
          <span className="eyebrow" aria-live="polite">
            {filtered.length} PROYECTOS
          </span>
        </div>
        <div className="featured-grid catalog-grid">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} index={projects.indexOf(p)} />
          ))}
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
