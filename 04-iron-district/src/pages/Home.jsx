import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowUpRight,
  Play,
  Dumbbell,
  Timer,
  Activity,
  Zap,
  Quote,
} from "lucide-react";
import Picture from "../components/Picture";
import Metric from "../components/Metric";
import CoachCard from "../components/CoachCard";
import PlanCard from "../components/PlanCard";
import JoinModal from "../components/JoinModal";
import { programs, coaches, plans } from "../data/gym";
import { useState } from "react";
export default function Home() {
  const [plan, setPlan] = useState(null);
  return (
    <>
      <section className="hero">
        <Picture
          name="hero"
          alt="Atleta entrenando fuerza con una barra en un gimnasio industrial"
          className="hero-image"
          eager
        />
        <div className="hero-overlay" />
        <div className="hero-lines" />
        <div className="wrap hero-content">
          <span className="kicker">STRENGTH · CONDITIONING · COMMUNITY</span>
          <h1>
            NO EXCUSES.
            <br />
            <em>JUST PROGRESS.</em>
          </h1>
          <p>
            No venimos a aparentar. Venimos a trabajar.
            <br />
            Entrena con propósito. Sal más fuerte.
          </p>
          <div className="hero-actions">
            <Link className="acid-button" to="/membership">
              ENTRENA CON NOSOTROS
              <ArrowUpRight size={18} />
            </Link>
            <Link className="video-link" to="/classes">
              <span>
                <Play fill="currentColor" size={14} />
              </span>
              VER LAS CLASES
            </Link>
          </div>
        </div>
        <div className="hero-side">SIN ATAJOS · DESDE 2020 · MONTERREY</div>
        <div className="wrap hero-bottom">
          <a href="#manifesto">
            DESCUBRE EL DISTRITO
            <ArrowDown />
          </a>
          <span>01 / CONSTRUYE TU MEJOR VERSIÓN</span>
        </div>
      </section>
      <section className="metrics">
        <div className="wrap metrics-grid">
          <Metric value={850} suffix="+" label="MIEMBROS ACTIVOS" />
          <Metric value={12} suffix="" label="ENTRENADORES" />
          <Metric value={6} suffix="" label="AÑOS CONSTRUYENDO" />
          <Metric value={35} suffix="+" label="CLASES SEMANALES" />
        </div>
      </section>
      <section className="manifesto wrap section" id="manifesto">
        <div className="manifesto-title">
          <span className="section-number">01</span>
          <span className="kicker">NUESTRA REGLA</span>
          <h2>
            EL PROGRESO
            <br />
            NO SE <em>NEGOCIA.</em>
          </h2>
        </div>
        <div className="manifesto-copy">
          <p>
            Iron District es un espacio para quienes deciden aparecer, incluso
            cuando cuesta. Acero, música alta y un equipo que sabe cuándo exigir
            y cuándo ajustar.
          </p>
          <p>
            Aquí cada repetición cuenta. Cada persona empieza desde un lugar
            distinto, pero avanzamos bajo la misma idea:{" "}
            <strong>ser mejores que ayer.</strong>
          </p>
          <Link className="line-link" to="/membership">
            ENCUENTRA TU PLAN
            <ArrowUpRight />
          </Link>
        </div>
      </section>
      <section className="programs-section section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <span className="section-number">02</span>
              <span className="kicker">ENTRENA CON INTENCIÓN</span>
              <h2>
                CLASES QUE
                <br />
                <em>EXIGEN MÁS.</em>
              </h2>
            </div>
            <Link className="line-link" to="/classes">
              VER TODAS LAS CLASES
              <ArrowUpRight />
            </Link>
          </div>
          <div className="program-strip">
            {programs.slice(0, 4).map((program, i) => (
              <Link
                to={`/classes#${program.id}`}
                className="program-card"
                key={program.id}
              >
                <Picture
                  name={program.image}
                  alt={`${program.name}, entrenamiento de ${program.category.toLowerCase()}`}
                />
                <div className="program-shade" />
                <span className="program-index">0{i + 1}</span>
                <div>
                  <small>
                    {program.category} · {program.duration} MIN
                  </small>
                  <h3>{program.name}</h3>
                  <p>{program.description}</p>
                  <span>
                    EXPLORAR
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="facility-section">
        <div className="facility-photo">
          <Picture
            name="facility"
            alt="Zona de pesas de estilo industrial con barras y discos"
          />
          <span className="vertical-label">
            12,000 FT² · EQUIPO PROFESIONAL · SIN EXCUSAS
          </span>
        </div>
        <div className="facility-copy">
          <span className="section-number">03</span>
          <span className="kicker">EL ESPACIO</span>
          <h2>
            TODO LO QUE
            <br />
            NECESITAS.
            <br />
            <em>NADA DE MÁS.</em>
          </h2>
          <p>
            Un piso diseñado para entrenar: racks, plataformas, peso libre,
            cardio y una zona dedicada a recuperar. Sin espejos para posar. Con
            espacio para moverte.
          </p>
          <ul>
            <li>
              <Dumbbell />
              Zona de fuerza y peso libre
            </li>
            <li>
              <Timer />
              Pista, trineos y conditioning
            </li>
            <li>
              <Activity />
              Recovery y movilidad
            </li>
            <li>
              <Zap />
              Acceso amplio, todos los días
            </li>
          </ul>
          <Link className="acid-button" to="/membership">
            CONOCE LOS PLANES
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <section className="wrap section" id="coaches">
        <div className="section-heading">
          <div>
            <span className="section-number">04</span>
            <span className="kicker">NO ENTRENAS SOLO</span>
            <h2>
              EXPERIENCIA QUE
              <br />
              <em>TE EMPUJA.</em>
            </h2>
          </div>
          <p className="heading-copy">
            Entrenadores que corrigen, programan y saben sacar lo mejor de ti.
            Sin discursos vacíos.
          </p>
        </div>
        <div className="coach-grid">
          {coaches.map((coach) => (
            <CoachCard key={coach.id} coach={coach} />
          ))}
        </div>
      </section>
      <section className="results section">
        <div className="wrap results-grid">
          <div className="results-copy">
            <span className="section-number">05</span>
            <span className="kicker">
              RESULTADOS REALES · HISTORIAS FICTICIAS
            </span>
            <h2>
              EL CAMBIO
              <br />
              SE <em>ENTRENA.</em>
            </h2>
            <Quote />
            <blockquote>
              “Llegué buscando bajar de peso. Me quedé porque descubrí lo que mi
              cuerpo podía hacer. Ahora mi meta ya no es ocupar menos espacio,
              sino ser más fuerte.”
            </blockquote>
            <div>
              <strong>MARIANA R.</strong>
              <span>MIEMBRO DEMO · 14 MESES</span>
            </div>
          </div>
          <div className="results-photo">
            <Picture
              name="result"
              alt="Atleta descansando después de una sesión de entrenamiento"
            />
            <div className="result-stats">
              <span>
                <strong>+32%</strong>FUERZA
              </span>
              <span>
                <strong>5 km</strong>NUEVA MARCA
              </span>
              <span>
                <strong>14</strong>MESES
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="wrap section plans-preview">
        <div className="section-heading">
          <div>
            <span className="section-number">06</span>
            <span className="kicker">ELIGE TU NIVEL DE COMPROMISO</span>
            <h2>
              PLANES SIMPLES.
              <br />
              <em>TRABAJO SERIO.</em>
            </h2>
          </div>
          <Link className="line-link" to="/membership">
            COMPARAR Y ELEGIR
            <ArrowUpRight />
          </Link>
        </div>
        <div className="plans-grid">
          {plans.map((p) => (
            <PlanCard key={p.id} plan={p} onChoose={setPlan} />
          ))}
        </div>
      </section>
      <section className="final-cta">
        <Picture
          name="cta"
          alt="Grupo de atletas entrenando en un gimnasio oscuro"
          className="final-cta-image"
        />
        <div />
        <div className="wrap">
          <span className="kicker">TU PRIMERA REPETICIÓN EMPIEZA AQUÍ</span>
          <h2>
            DEJA DE ESPERAR.
            <br />
            <em>EMPIEZA A CONSTRUIR.</em>
          </h2>
          <Link className="acid-button" to="/membership">
            ENCUENTRA TU PLAN
            <ArrowUpRight />
          </Link>
        </div>
      </section>
      {plan && <JoinModal plan={plan} onClose={() => setPlan(null)} />}
    </>
  );
}
