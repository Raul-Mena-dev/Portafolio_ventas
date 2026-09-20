import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Clock,
  UserRound,
  CalendarDays,
  Filter,
} from "lucide-react";
import Picture from "../components/Picture";
import { programs, schedule } from "../data/gym";
export default function Classes() {
  const [categories, setCategories] = useState("Todas");
  const [day, setDay] = useState("Todos");
  const types = ["Todas", ...new Set(programs.map((p) => p.category))];
  const days = [
    "Todos",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const filtered = programs.filter(
    (p) => categories === "Todas" || p.category === categories,
  );
  const rows = schedule.filter((r) => day === "Todos" || r[0] === day);
  return (
    <>
      <section className="page-hero classes-hero">
        <Picture
          name="classes"
          alt="Grupo realizando entrenamiento funcional con pesas"
          eager
        />
        <div />
        <div className="wrap">
          <span className="kicker">35+ SESIONES CADA SEMANA</span>
          <h1>
            ELIGE EL RETO.
            <br />
            <em>HAZ EL TRABAJO.</em>
          </h1>
          <p>
            Fuerza, condición, movilidad y resistencia.
            <br />
            Encuentra la clase que te hace volver.
          </p>
        </div>
      </section>
      <section className="wrap section class-catalog">
        <div className="catalog-heading">
          <div>
            <span className="section-number">01</span>
            <h2>NUESTRAS CLASES</h2>
          </div>
          <div className="filters" aria-label="Filtrar por tipo">
            <Filter size={17} />
            {types.map((type) => (
              <button
                key={type}
                className={categories === type ? "selected" : ""}
                aria-pressed={categories === type}
                onClick={() => setCategories(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        <div className="class-grid">
          {filtered.map((program) => (
            <article id={program.id} key={program.id} className="class-card">
              <div className="class-photo">
                <Picture
                  name={program.image}
                  alt={`Sesión de ${program.name}`}
                />
                <span>{program.level}</span>
              </div>
              <div className="class-copy">
                <div>
                  <small>{program.category}</small>
                  <h3>{program.name}</h3>
                </div>
                <p>{program.description}</p>
                <div className="class-meta">
                  <span>
                    <Clock />
                    {program.duration} min
                  </span>
                  <span>
                    <UserRound />
                    {program.coach}
                  </span>
                </div>
                <ul>
                  {program.schedule.map((slot) => (
                    <li key={slot}>
                      <CalendarDays />
                      {slot}
                    </li>
                  ))}
                </ul>
                <Link to={`/membership?class=${program.id}`}>
                  ENCUENTRA TU PLAN
                  <ArrowUpRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="schedule-section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <span className="section-number">02</span>
              <span className="kicker">AGENDA SEMANAL DEMO</span>
              <h2>
                APARECE.
                <br />
                <em>REPITE.</em>
              </h2>
            </div>
            <p className="heading-copy">
              Horarios ilustrativos. Las clases no se reservan y no representan
              disponibilidad real.
            </p>
          </div>
          <div className="day-tabs" aria-label="Filtrar horario por día">
            {days.map((d) => (
              <button
                key={d}
                className={day === d ? "selected" : ""}
                aria-pressed={day === d}
                onClick={() => setDay(d)}
              >
                {d}
              </button>
            ))}
          </div>
          <div className="schedule-list" aria-live="polite">
            {rows.map(([d, time, name, coach], i) => (
              <div key={`${d}-${time}-${name}`}>
                <span className="schedule-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{d}</span>
                <strong>{time}</strong>
                <h3>{name}</h3>
                <span>CON {coach.toUpperCase()}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="class-cta wrap">
        <span className="kicker">¿NO SABES POR DÓNDE EMPEZAR?</span>
        <h2>
          DÉJANOS RECOMENDARTE
          <br />
          UN <em>PLAN.</em>
        </h2>
        <p>
          Cuatro preguntas. Una recomendación local.
          <br />
          Cero compromisos y cero datos enviados.
        </p>
        <Link className="acid-button" to="/membership#quiz">
          HACER EL CUESTIONARIO
          <ArrowUpRight />
        </Link>
      </section>
    </>
  );
}
