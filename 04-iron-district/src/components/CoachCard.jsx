import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Picture from "./Picture";
export default function CoachCard({ coach }) {
  return (
    <article className="coach-card">
      <div className="coach-photo">
        <Picture
          name={coach.image}
          alt={`${coach.name}, entrenador ficticio de ${coach.role.toLowerCase()}`}
        />
        <span>{coach.role}</span>
      </div>
      <div>
        <h3>{coach.name}</h3>
        <p>“{coach.quote}”</p>
        <small>{coach.cert}</small>
        <Link to="/membership">
          Entrenar con el equipo
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
