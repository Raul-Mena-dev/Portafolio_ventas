import { Link } from "react-router-dom";
import { ArrowUpRight, Check, Clock, Info } from "lucide-react";
import ServiceIcon from "../components/ServiceIcon";
import { services, money } from "../data/clinic";
import { CTA } from "../components/Layout";
export default function Services() {
  return (
    <>
      <section className="wrap page-heading center">
        <span className="pill">Cuidado para cada etapa</span>
        <h1>
          De su primer paseo
          <br />a toda una <span>vida juntos.</span>
        </h1>
        <p>
          Prevención, bienestar y atención cercana.
          <br />
          Encuentra el cuidado que estás buscando.
        </p>
      </section>
      <section className="wrap services-detail-grid">
        {services.map((service) => (
          <article className="service-detail" id={service.id} key={service.id}>
            <div className="service-detail-top">
              <ServiceIcon service={service} />
              <span className="price">
                {money(service.price)}
                {service.price !== null && <small> / visita demo</small>}
              </span>
            </div>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <ul>
              {service.details.map((item) => (
                <li key={item}>
                  <Check size={15} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="service-detail-bottom">
              {service.bookable === false ? (
                <span className="urgent-note">
                  <Info size={16} />
                  No se agenda en esta demo
                </span>
              ) : (
                <>
                  <span>
                    <Clock size={14} />
                    {service.duration} min
                  </span>
                  <Link
                    className="text-link"
                    to={`/appointments?service=${service.id}`}
                  >
                    Agendar visita
                    <ArrowUpRight size={17} />
                  </Link>
                </>
              )}
            </div>
          </article>
        ))}
      </section>
      <div className="wrap information-note">
        <Info size={20} />
        <p>
          Precios, servicios y profesionales ficticios. PetCare+ es una demo de
          portafolio, no presta atención veterinaria ni recibe urgencias reales.
        </p>
      </div>
      <CTA />
    </>
  );
}
