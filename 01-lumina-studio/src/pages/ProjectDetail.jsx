import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import Picture from "../components/Picture";
import { NotFound } from "../App";
export default function ProjectDetail() {
  const { id } = useParams();
  const index = projects.findIndex((p) => p.id === id);
  const project = projects[index];
  if (!project) return <NotFound />;
  const next = projects[(index + 1) % projects.length];
  return (
    <>
      <section className="wrap detail-heading">
        <Link to="/projects" className="back-link">
          <ArrowLeft size={16} /> Todos los proyectos
        </Link>
        <div className="detail-title">
          <h1>{project.name}</h1>
          <span className="eyebrow">
            {project.type} / {project.year}
          </span>
        </div>
        <p>{project.location}</p>
      </section>
      <div className="wrap detail-hero">
        <Picture
          name={project.image}
          alt={`${project.name}, vista principal del proyecto`}
          eager
        />
      </div>
      <section className="wrap project-story">
        <div>
          <span className="eyebrow">EL PROYECTO</span>
          <h2>{project.idea}</h2>
          <p>{project.description}</p>
          <p className="materials">
            Materialidad
            <br />
            <span>{project.material}</span>
          </p>
        </div>
        <dl>
          {[
            ["Cliente", project.client],
            ["Ubicación", project.location],
            ["Superficie", project.area],
            ["Año", project.year],
            ["Tipo", project.type],
          ].map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section
        className="wrap editorial-gallery"
        aria-label="Galería del proyecto"
      >
        {project.gallery.map((name, i) => (
          <figure key={name}>
            <Picture
              name={name}
              eager
              alt={`${project.name}: ${i === 0 ? "atmósfera y materiales" : "relación entre luz y espacio"}`}
            />
            <figcaption>
              <span>0{i + 2}</span>
              {i === 0
                ? "La calma de los materiales naturales."
                : "Un diálogo constante con la luz."}
            </figcaption>
          </figure>
        ))}
      </section>
      <section className="wrap next-project">
        <span className="eyebrow">SIGUIENTE PROYECTO</span>
        <Link to={`/projects/${next.id}`}>
          {next.name}
          <ArrowUpRight strokeWidth={1} />
        </Link>
        <Link className="text-link" to="/contact">
          Conversemos sobre tu proyecto <ArrowUpRight size={18} />
        </Link>
      </section>
    </>
  );
}
