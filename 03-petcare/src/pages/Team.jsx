import { Heart, MessageCircle, ShieldCheck } from "lucide-react";
import VetCard from "../components/VetCard";
import { vets } from "../data/clinic";
import { CTA } from "../components/Layout";
export default function Team() {
  return (
    <>
      <section className="wrap page-heading center">
        <span className="pill">Un equipo que se siente familia</span>
        <h1>
          Detrás de cada cuidado,
          <br />
          hay un <span>gran corazón.</span>
        </h1>
        <p>
          Nos une la vocación por los animales y la idea de que
          <br />
          la confianza se construye, una visita a la vez.
        </p>
      </section>
      <section className="wrap vet-grid full-team">
        {vets.map((vet) => (
          <VetCard key={vet.id} vet={vet} full />
        ))}
      </section>
      <p className="wrap fiction-note">
        Nombres, trayectorias y especialidades de demostración. Fotografías de
        referencia.
      </p>
      <section className="wrap team-values">
        <div>
          <Heart />
          <h2>Primero, la empatía.</h2>
          <p>
            Reconocemos su personalidad y respetamos su ritmo para crear una
            experiencia tranquila.
          </p>
        </div>
        <div>
          <MessageCircle />
          <h2>Siempre, la claridad.</h2>
          <p>
            Queremos que entiendas cada paso y tengas espacio para preguntar
            todo lo que necesites.
          </p>
        </div>
        <div>
          <ShieldCheck />
          <h2>Juntos, el cuidado.</h2>
          <p>
            La familia forma parte del equipo. Escuchar sus observaciones hace
            la diferencia.
          </p>
        </div>
      </section>
      <CTA />
    </>
  );
}
