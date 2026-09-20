import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import Picture from "../components/Picture";
import ProjectCard from "../components/ProjectCard";
import { ContactCTA } from "../components/Layout";
import { projects } from "../data/projects";
const services = [
  [
    "Arquitectura",
    "Del primer trazo al último detalle. Diseñamos espacios que dialogan con su entorno y con quienes los habitan.",
  ],
  [
    "Diseño de interiores",
    "Materiales, luz y proporciones en equilibrio. Transformamos espacios en experiencias que se sienten propias.",
  ],
  [
    "Dirección de proyecto",
    "Una visión coherente de principio a fin. Acompañamos cada decisión para cuidar la esencia del proyecto.",
  ],
];
export default function Home() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero-heading">
          <div>
            <span className="eyebrow">
              <span className="little-line" /> ARQUITECTURA & DISEÑO DE
              INTERIORES
            </span>
            <h1>
              Espacios diseñados
              <br />
              para <em>permanecer.</em>
            </h1>
          </div>
          <div className="hero-aside">
            <p>
              Creemos en la belleza de lo esencial.
              <br />
              En la luz, los materiales honestos
              <br />y los espacios que se viven.
            </p>
            <Link className="text-link" to="/projects">
              Explorar proyectos <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
        <Link to="/projects/casa-horizonte" className="hero-picture">
          <Picture
            name="horizonte"
            alt="Sala contemporánea con sofá claro, paneles de madera y ventanales abiertos al jardín"
            eager
          />
          <div className="hero-picture-caption">
            <span>01 / CASA HORIZONTE</span>
            <span>
              Valle de Bravo, México · 2025 <ArrowUpRight size={19} />
            </span>
          </div>
        </Link>
        <div className="hero-footnote">
          <span>DISEÑAMOS PARA LA VIDA, NO PARA EL MOMENTO.</span>
          <a href="#seleccion" aria-label="Descubrir proyectos seleccionados">
            DESCUBRE <ArrowDown size={14} />
          </a>
        </div>
      </section>
      <section className="wrap section" id="seleccion">
        <div className="section-heading">
          <div>
            <span className="eyebrow">01 — PORTAFOLIO</span>
            <h2>
              Una selección de
              <br />
              nuestro <em>trabajo.</em>
            </h2>
          </div>
          <Link className="text-link" to="/projects">
            Ver todos los proyectos <ArrowUpRight size={19} />
          </Link>
        </div>
        <div className="featured-grid">
          {projects.slice(0, 4).map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </section>
      <section className="philosophy" id="estudio">
        <div className="wrap philosophy-grid">
          <div className="philosophy-image">
            <Picture
              name="interior"
              alt="Interior sereno con materiales naturales y luz cálida"
            />
          </div>
          <div className="philosophy-copy">
            <span className="eyebrow">02 — NUESTRA FILOSOFÍA</span>
            <h2>
              Menos ruido.
              <br />
              Más <em>esencia.</em>
            </h2>
            <p>
              Somos un estudio de arquitectura e interiores que entiende el
              diseño como una forma de mejorar la vida cotidiana.
            </p>
            <p>
              Nos inspiran la luz natural, los materiales honestos y la belleza
              de lo sencillo. Escuchamos antes de dibujar, observamos antes de
              construir. Porque un espacio bien pensado no solo se ve: se
              siente.
            </p>
            <span className="signature">Elena Rivas & Mateo Beltrán</span>
            <span className="eyebrow">SOCIOS FUNDADORES</span>
          </div>
        </div>
      </section>
      <section className="wrap section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">03 — LO QUE HACEMOS</span>
            <h2>
              Una visión.
              <br />
              <em>Cada detalle.</em>
            </h2>
          </div>
          <p className="section-intro">
            De la arquitectura al objeto, pensamos
            <br />
            cada proyecto como un todo.
          </p>
        </div>
        <div className="services">
          {services.map(([title, desc], i) => (
            <div className="service" key={title}>
              <span className="eyebrow">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
              <ArrowUpRight size={25} strokeWidth={1} />
            </div>
          ))}
        </div>
      </section>
      <section className="process wrap">
        <span className="eyebrow">04 — CÓMO TRABAJAMOS</span>
        <div className="process-heading">
          <h2>
            Del diálogo
            <br />
            al <em>espacio.</em>
          </h2>
          <p>
            Un proceso cercano, claro y colaborativo.
            <br />
            Contigo, en cada etapa.
          </p>
        </div>
        <div className="process-grid">
          {[
            [
              "Escuchamos",
              "Conocemos tu manera de vivir, tus ideas y las posibilidades del lugar.",
            ],
            [
              "Imaginamos",
              "Damos forma al concepto con planos, materiales y una visión compartida.",
            ],
            [
              "Desarrollamos",
              "Resolvemos los detalles técnicos, el presupuesto y la coordinación.",
            ],
            [
              "Materializamos",
              "Acompañamos la obra hasta que el espacio está listo para ser habitado.",
            ],
          ].map(([title, body], i) => (
            <div key={title}>
              <span className="process-number">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="testimonial wrap">
        <span className="eyebrow">ESPACIOS VIVIDOS, HISTORIAS COMPARTIDAS</span>
        <blockquote>
          “Entendieron lo que imaginábamos incluso antes de que supiéramos cómo
          explicarlo. Nuestra casa se siente, de verdad, nuestra.”
        </blockquote>
        <p>
          Lucía Alcázar <span>— Casa Horizonte, 2025</span>
        </p>
      </section>
      <ContactCTA />
    </>
  );
}
