import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  MapPin,
  Clock,
  MessageCircle,
  Flame,
} from "lucide-react";
import Picture from "../components/Picture";
import { restaurant } from "../data/restaurant";
export default function Contact() {
  return (
    <>
      <section className="contact-hero">
        <Picture
          name="restaurant"
          alt="Interior cálido del restaurante, con barra y mesas de madera"
          eager
        />
        <div />
        <section className="wrap">
          <span className="eyebrow">SIGUE EL AROMA DE LAS BRASAS</span>
          <h1>
            NOS VEMOS
            <br />
            <span>EN EL NORTE.</span>
          </h1>
          <p>Una mesa, una buena charla y algo rico al centro.</p>
        </section>
      </section>
      <section className="wrap visit-grid section">
        <div className="visit-intro">
          <span className="eyebrow red">LAS PUERTAS ESTÁN ABIERTAS</span>
          <h2>
            UN LUGAR
            <br />
            PARA VOLVER.
          </h2>
          <p>
            Nos gusta recibirte como en casa: sin formalidades, con buena música
            y la parrilla encendida.
          </p>
          <Link className="button button-red" to="/reservations">
            Reserva tu mesa <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="visit-details">
          <section>
            <h3>
              <MapPin size={21} /> DÓNDE ESTAMOS
            </h3>
            <p>
              {restaurant.address}
              <br />
              {restaurant.city}
            </p>
            <span className="field-hint">
              Dirección ficticia. Esta demo no representa un local real.
            </span>
          </section>
          <section>
            <h3>
              <Clock size={21} /> HORARIOS DE LA PARRILLA
            </h3>
            <dl className="hours-list">
              {restaurant.hours.map(([day, hours]) => (
                <div key={day}>
                  <dt>{day}</dt>
                  <dd>{hours}</dd>
                </div>
              ))}
            </dl>
          </section>
          <section>
            <h3>
              <MessageCircle size={21} /> HABLEMOS
            </h3>
            <p>{restaurant.email}</p>
            <span className="field-hint">
              Correo de ejemplo, sin recepción de mensajes.
            </span>
          </section>
        </div>
      </section>
      <section className="wrap location-section">
        <div
          className="location-illustration"
          role="img"
          aria-label="Croquis ilustrativo: Brasa Norte se encuentra en la intersección de Calle del Roble y Paseo del Molino. No representa una ubicación real."
        >
          <div className="map-block block-one" />
          <div className="map-block block-two" />
          <div className="map-block block-three" />
          <div className="map-block block-four" />
          <span className="street-horizontal">CALLE DEL ROBLE</span>
          <span className="street-vertical">PASEO DEL MOLINO</span>
          <div className="map-pin">
            <Flame size={27} />
            <strong>BRASA NORTE</strong>
          </div>
          <span className="map-label">
            CROQUIS ILUSTRATIVO · UBICACIÓN FICTICIA
          </span>
        </div>
        <div className="location-copy">
          <span className="eyebrow red">HAZ ESPACIO EN TU AGENDA</span>
          <h2>
            EL MEJOR PLAN
            <br />
            ES SIN PRISA.
          </h2>
          <p>
            Escoge tu día, invita a los tuyos y deja que la sobremesa haga el
            resto.
          </p>
          <Link className="text-link" to="/menu">
            Ve preparando el antojo <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <section className="wrap faq-section">
        <span className="eyebrow red">POR SI TE LO PREGUNTABAS</span>
        <h2>ANTES DE VENIR.</h2>
        {[
          [
            "¿Necesito reservar?",
            "En esta demo puedes recorrer todo el flujo de reservación y recibir un folio ficticio. No se confirma disponibilidad real ni se envía información fuera de tu navegador.",
          ],
          [
            "¿Hay opciones vegetarianas?",
            "Sí. El menú incluye coliflor a las brasas, esquites, hamburguesa de portobello y verduras de temporada. Busca la etiqueta «Vegetariano» en el menú.",
          ],
          [
            "¿Puedo reservar para un grupo?",
            "El formulario permite simular mesas de hasta 8 personas. Para grupos mayores, un restaurante real coordinaría la experiencia directamente; esta demo no gestiona eventos ni solicitudes externas.",
          ],
          [
            "¿Los precios y las fotografías son reales?",
            "Los precios son ejemplos en pesos mexicanos. Las fotografías son referencias gastronómicas y de ambiente; Brasa Norte es un negocio ficticio creado para portafolio.",
          ],
        ].map(([question, answer]) => (
          <details key={question}>
            <summary>
              {question}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </section>
    </>
  );
}
