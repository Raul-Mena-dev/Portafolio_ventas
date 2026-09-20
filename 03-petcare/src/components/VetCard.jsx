import { Link } from "react-router-dom";
import { ArrowUpRight, Heart } from "lucide-react";
import Picture from "./Picture";
export default function VetCard({ vet, full = false }) {
  return (
    <article className="vet-card">
      <div className="vet-photo">
        <Picture
          name={vet.image}
          alt={`${vet.name}, integrante ficticio del equipo veterinario`}
        />
        <span>
          <Heart size={13} />
          {vet.years}
        </span>
      </div>
      <div className="vet-copy">
        <h3>{vet.name}</h3>
        <p className="vet-role">{vet.role}</p>
        {full && (
          <>
            <p className="vet-bio">{vet.bio}</p>
            <blockquote>“{vet.quote}”</blockquote>
          </>
        )}
        <Link to={`/appointments?vet=${vet.id}`}>
          Agendar con {vet.name.split(" ")[1]}
          <ArrowUpRight size={17} />
        </Link>
      </div>
    </article>
  );
}
