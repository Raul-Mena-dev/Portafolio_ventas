import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Picture from "./Picture";
export default function ProjectCard({ project, index = 0 }) {
  return (
    <Link className="project-card" to={`/projects/${project.id}`}>
      <div className="project-image">
        <Picture
          name={project.image}
          alt={`${project.name}: propuesta de ${project.type.toLowerCase()}`}
        />
        <span className="image-arrow">
          <ArrowUpRight size={22} />
        </span>
      </div>
      <div className="project-caption">
        <div>
          <span className="eyebrow">
            {project.type} · {project.year}
          </span>
          <h3>{project.name}</h3>
          <p>{project.location}</p>
        </div>
        <span className="project-number">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </Link>
  );
}
