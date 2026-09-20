import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  CalendarDays,
  Heart,
  ShieldCheck,
  PawPrint,
  Star,
  Check,
  Stethoscope,
} from "lucide-react";
import Picture from "../components/Picture";
import ServiceIcon from "../components/ServiceIcon";
import VetCard from "../components/VetCard";
import { CTA } from "../components/Layout";
import { services, vets } from "../data/clinic";
export default function Home() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <span className="pill">
            <span />
            Pequeñas patas. Grandes cuidados.
          </span>
          <h1>
            Porque también
            <br />
            son parte de
            <br />
            la <span>familia.</span>
            <Heart className="title-heart" strokeWidth={1.6} />
          </h1>
          <p>
            Un cuidado cercano, un equipo que escucha y mucho cariño para quien
            siempre te recibe con alegría.
          </p>
          <div className="hero-actions">
            <Link className="button" to="/appointments">
              <CalendarDays size={18} />
              Agendar consulta
              <ArrowUpRight size={17} />
            </Link>
            <Link className="text-link" to="/services">
              Conoce nuestros servicios
              <ArrowRight size={17} />
            </Link>
          </div>
          <div className="hero-proof">
            <div className="mini-avatars">
              <Picture name="ana" alt="" />
              <Picture name="diego" alt="" />
              <Picture name="valeria" alt="" />
            </div>
            <div>
              <span className="stars" aria-label="5 estrellas">
                ★★★★★
              </span>
              <p>Muchas familias. Un mismo cariño.</p>
            </div>
          </div>
        </div>
        <div className="hero-art">
          <div className="hero-orbit" />
          <div className="hero-photo">
            <Picture
              name="milo"
              alt="Milo, un golden retriever de expresión alegre"
              eager
            />
          </div>
          <div className="floating-card care-card">
            <span className="round-icon">
              <Heart fill="currentColor" size={21} />
            </span>
            <div>
              <strong>En las mejores manos</strong>
              <small>Cuidado con paciencia y cariño</small>
            </div>
          </div>
          <div className="floating-card pet-card">
            <span className="round-icon blue">
              <PawPrint size={20} />
            </span>
            <div>
              <strong>
                Hola, soy Milo <span>🐾</span>
              </strong>
              <small>Experto en alegrarte el día</small>
            </div>
            <span className="pet-dot" />
          </div>
          <div className="hero-paw" aria-hidden="true">
            <PawPrint />
          </div>
          <span className="hero-spark sparkle-one" aria-hidden="true">
            ✦
          </span>
          <span className="hero-spark sparkle-two" aria-hidden="true">
            ✦
          </span>
        </div>
      </section>
      <section
        className="trust-strip wrap"
        aria-label="Nuestra forma de cuidar"
      >
        <span>
          <ShieldCheck />
          Atención profesional
        </span>
        <span>
          <Heart />
          Trato con cariño
        </span>
        <span>
          <CalendarDays />
          Citas a tu ritmo
        </span>
        <span>
          <PawPrint />
          Cada mascota es única
        </span>
      </section>
      <section className="wrap section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">SU BIENESTAR, DE LA NARIZ A LA COLA</span>
            <h2>
              Todo lo que necesita,
              <br />
              en un mismo lugar.
            </h2>
          </div>
          <Link className="text-link" to="/services">
            Ver todos los servicios
            <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/services#${service.id}`}
              className="service-card"
            >
              <ServiceIcon service={service} />
              <h3>{service.name}</h3>
              <p>{service.short}</p>
              <span className="card-arrow">
                <ArrowUpRight size={18} />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="why-section">
        <div className="wrap why-grid">
          <div className="why-photo">
            <Picture
              name="care"
              alt="Dos perros corren juntos durante un paseo al aire libre"
            />
            <div className="why-caption">
              <ShieldCheck size={26} />
              <span>
                Más que una consulta.
                <br />
                <strong>Un vínculo de confianza.</strong>
              </span>
            </div>
          </div>
          <div className="why-copy">
            <span className="eyebrow">ASÍ ENTENDEMOS EL CUIDADO</span>
            <h2>
              Medicina con vocación.
              <br />
              Atención con corazón.
            </h2>
            <p>
              Sabemos que no es “solo una mascota”. Es compañía, alegría y
              familia. Por eso, cada visita empieza por conocerla y escucharte.
            </p>
            <ul>
              {[
                "Un equipo que explica cada paso con claridad.",
                "Tiempo y paciencia para que se sienta a gusto.",
                "Su historia y sus citas, siempre a la mano.",
              ].map((text) => (
                <li key={text}>
                  <Check size={16} />
                  {text}
                </li>
              ))}
            </ul>
            <Link className="button outline" to="/team">
              Conoce a quienes la cuidan
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="wrap section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">PERSONAS QUE CUIDAN DE LOS TUYOS</span>
            <h2>
              Buenas manos.
              <br />
              Grandes corazones.
            </h2>
          </div>
          <Link className="text-link" to="/team">
            Conoce al equipo
            <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="vet-grid">
          {vets.map((vet) => (
            <VetCard key={vet.id} vet={vet} />
          ))}
        </div>
      </section>
      <section className="wrap booking-teaser">
        <div className="booking-teaser-copy">
          <span className="eyebrow">MENOS VUELTAS, MÁS PASEOS</span>
          <h2>
            Su próxima cita,
            <br />a unos cuantos clics.
          </h2>
          <p>
            Un proceso sencillo, pensado para ti.
            <br />
            Sin llamadas ni complicaciones.
          </p>
          <Link className="button" to="/appointments">
            Empezar una reservación
            <ArrowRight size={18} />
          </Link>
        </div>
        <ol className="booking-mini-steps">
          <li>
            <span>01</span>
            <div>
              <h3>Cuéntanos a quién cuidamos</h3>
              <p>Elige a tu mascota y el servicio que necesita.</p>
            </div>
            <PawPrint />
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Encuentra su momento</h3>
              <p>Selecciona profesional, fecha y horario.</p>
            </div>
            <CalendarDays />
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Todo listo para su visita</h3>
              <p>Revisa los detalles y confirma su cita demo.</p>
            </div>
            <Check />
          </li>
        </ol>
      </section>
      <section className="wrap section testimonials">
        <span className="eyebrow">HISTORIAS CON FINAL FELIZ</span>
        <h2>
          La confianza también
          <br />
          mueve la cola.
        </h2>
        <div className="testimonial-grid">
          {[
            [
              "“Con Milo siempre tienen paciencia. Me explican todo sin prisas y él ya entra moviendo la cola.”",
              "Sofía M.",
              "Familia de Milo",
              "milo",
            ],
            [
              "“Es la primera vez que Luna se siente tan tranquila en una consulta. Se nota el cariño por lo que hacen.”",
              "Daniela R.",
              "Familia de Luna",
              "luna",
            ],
            [
              "“Tener sus citas y su historia en un mismo lugar me ayuda muchísimo. El trato hace toda la diferencia.”",
              "Andrés V.",
              "Familia de Toby",
              "milo",
            ],
          ].map(([quote, name, label, image]) => (
            <article key={name}>
              <span className="stars" aria-label="5 estrellas">
                ★★★★★
              </span>
              <blockquote>{quote}</blockquote>
              <div>
                <Picture name={image} alt="Mascota de referencia" />
                <span>
                  <strong>{name}</strong>
                  <small>{label}</small>
                </span>
                <Heart size={18} />
              </div>
            </article>
          ))}
        </div>
        <p className="fiction-note">
          Testimonios y perfiles ficticios creados para esta demostración.
        </p>
      </section>
      <CTA />
    </>
  );
}
