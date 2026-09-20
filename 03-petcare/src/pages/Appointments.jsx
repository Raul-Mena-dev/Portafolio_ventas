import { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  PawPrint,
  ArrowLeft,
  ArrowRight,
  Check,
  CalendarDays,
  Clock,
  Heart,
  ShieldCheck,
} from "lucide-react";
import { pets, services, vets, money } from "../data/clinic";
import { localDate, maxDate, dateLabel, slotsFor } from "../utils/appointments";
import { useClinic } from "../hooks/useClinic";
import Picture from "../components/Picture";
import ServiceIcon from "../components/ServiceIcon";
const steps = [
  "Mascota",
  "Servicio",
  "Profesional",
  "Fecha",
  "Horario",
  "Confirmación",
];
const titles = [
  "¿A quién vamos a cuidar?",
  "¿Qué necesita tu compañero?",
  "Elige sus buenas manos.",
  "Busquemos el mejor día.",
  "Un momento para su cuidado.",
  "Revisemos su próxima visita.",
];
export default function Appointments() {
  const [params] = useSearchParams();
  const [step, setStep] = useState(0);
  const [values, setValues] = useState(() => ({
    petId: pets.some((p) => p.id === params.get("pet"))
      ? params.get("pet")
      : "",
    serviceId: services.some(
      (s) => s.id === params.get("service") && s.bookable !== false,
    )
      ? params.get("service")
      : "",
    vetId: vets.some((v) => v.id === params.get("vet"))
      ? params.get("vet")
      : "",
    date: "",
    time: "",
  }));
  const [error, setError] = useState("");
  const [consent, setConsent] = useState(false);
  const [record, setRecord] = useState(null);
  const heading = useRef(null);
  const first = useRef(true);
  const { appointments, book, storageError } = useClinic();
  const pet = pets.find((p) => p.id === values.petId);
  const service = services.find((s) => s.id === values.serviceId);
  const vet = vets.find((v) => v.id === values.vetId);
  const eligible = vets.filter((v) => v.services.includes(values.serviceId));
  const slots = slotsFor(values.date, vet, service, appointments);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    heading.current?.focus({ preventScroll: true });
  }, [step, record]);
  function choose(key, value) {
    setValues((v) => {
      const next = { ...v, [key]: value };
      if (
        key === "serviceId" &&
        !vets.find((p) => p.id === v.vetId)?.services.includes(value)
      )
        next.vetId = "";
      if (key === "serviceId" || key === "vetId") {
        next.date = "";
        next.time = "";
      }
      if (key === "date") next.time = "";
      return next;
    });
    setError("");
  }
  function next() {
    const valid = [
      !!pet,
      !!service && service.bookable !== false,
      !!vet && vet.services.includes(values.serviceId),
      values.date >= localDate() &&
        values.date <= maxDate() &&
        slots.length > 0,
      slots.includes(values.time),
      consent,
    ][step];
    if (!valid) {
      setError(
        [
          "Selecciona una mascota para continuar.",
          "Selecciona el servicio de la visita.",
          "Elige un profesional disponible para este servicio.",
          "Elige una fecha con horarios disponibles.",
          "Selecciona un horario para continuar.",
          "Confirma que entiendes que esta cita es de demostración.",
        ][step],
      );
      return;
    }
    if (step < 5) {
      setStep(step + 1);
      setError("");
    } else {
      const result = book(values);
      if (result.error) {
        setError(result.error);
        setStep(4);
      } else setRecord(result.record);
    }
  }
  if (record)
    return (
      <section className="wrap booking-success">
        <span className="success-check">
          <Check size={32} />
        </span>
        <span className="eyebrow">UN CUIDADO MÁS CERCA</span>
        <h1 ref={heading} tabIndex={-1}>
          ¡La cita de {pet.name}
          <br />
          está <span>confirmada!</span>
        </h1>
        <p>
          Todo listo en esta demostración. No se enviaron mensajes
          <br />
          ni se reservó una consulta real.
        </p>
        <div className="success-ticket">
          <div>
            <Picture name={pet.image} alt={pet.name} />
            <span>
              <strong>{pet.name}</strong>
              <small>{service.name}</small>
            </span>
            <PawPrint />
          </div>
          <dl>
            <div>
              <dt>Profesional</dt>
              <dd>{vet.name}</dd>
            </div>
            <div>
              <dt>Fecha</dt>
              <dd>{dateLabel(record.date)}</dd>
            </div>
            <div>
              <dt>Hora</dt>
              <dd>
                {record.time} h · {service.duration} min
              </dd>
            </div>
            <div>
              <dt>Folio demo</dt>
              <dd>{record.id}</dd>
            </div>
          </dl>
        </div>
        {storageError && (
          <p className="field-error" role="alert">
            {storageError}
          </p>
        )}
        <Link className="button" to={`/my-pet?pet=${pet.id}`}>
          Ver en el perfil de {pet.name}
          <ArrowRight size={18} />
        </Link>
        <button
          className="success-another"
          onClick={() => {
            setRecord(null);
            setStep(0);
            setConsent(false);
            setValues({
              petId: "",
              serviceId: "",
              vetId: "",
              date: "",
              time: "",
            });
          }}
        >
          Agendar otra cita
        </button>
      </section>
    );
  return (
    <>
      <section className="wrap booking-heading">
        <span className="eyebrow">UNA VISITA, PASO A PASO</span>
        <h1>
          Hagamos espacio
          <br />
          para su <span>bienestar.</span>
        </h1>
        <p>Agenda una cita de demostración en seis pasos sencillos.</p>
      </section>
      <section className="wrap booking-layout">
        <div className="booking-main">
          <ol className="stepper" aria-label="Pasos de la reservación">
            {steps.map((label, i) => (
              <li
                key={label}
                className={i === step ? "current" : i < step ? "complete" : ""}
                aria-current={i === step ? "step" : undefined}
              >
                <span>{i < step ? <Check size={15} /> : i + 1}</span>
                <small>{label}</small>
              </li>
            ))}
          </ol>
          <div className="step-content">
            <span className="step-count">PASO {step + 1} DE 6</span>
            <h2 ref={heading} tabIndex={-1}>
              {titles[step]}
            </h2>
            {step === 0 && (
              <>
                <p>
                  Estas son las mascotas de Sofía, nuestra familia de ejemplo.
                </p>
                <div className="pet-options">
                  {pets.map((p) => (
                    <button
                      key={p.id}
                      className={`choice pet-choice ${values.petId === p.id ? "selected" : ""}`}
                      aria-pressed={values.petId === p.id}
                      onClick={() => choose("petId", p.id)}
                    >
                      <Picture name={p.image} alt={p.name} eager />
                      <strong>{p.name}</strong>
                      <span>{p.breed}</span>
                      <small>
                        {p.age} · {p.weight}
                      </small>
                      <span className="choice-check">
                        {values.petId === p.id && <Check size={14} />}
                      </span>
                    </button>
                  ))}
                </div>
              </>
            )}
            {step === 1 && (
              <>
                <p>Todos los servicios y precios son ficticios.</p>
                <div className="service-options">
                  {services
                    .filter((s) => s.bookable !== false)
                    .map((s) => (
                      <button
                        key={s.id}
                        className={`choice service-choice ${values.serviceId === s.id ? "selected" : ""}`}
                        aria-pressed={values.serviceId === s.id}
                        onClick={() => choose("serviceId", s.id)}
                      >
                        <ServiceIcon service={s} />
                        <span>
                          <strong>{s.name}</strong>
                          <small>
                            {s.duration} min · {money(s.price)}
                          </small>
                        </span>
                        <span className="choice-check">
                          {values.serviceId === s.id && <Check size={14} />}
                        </span>
                      </button>
                    ))}
                </div>
              </>
            )}
            {step === 2 && (
              <>
                <p>
                  Estos profesionales pueden acompañarte con{" "}
                  {service.name.toLowerCase()}.
                </p>
                <div className="vet-options">
                  {eligible.map((v) => (
                    <button
                      key={v.id}
                      className={`choice vet-choice ${values.vetId === v.id ? "selected" : ""}`}
                      aria-pressed={values.vetId === v.id}
                      onClick={() => choose("vetId", v.id)}
                    >
                      <Picture name={v.image} alt="" eager />
                      <span>
                        <strong>{v.name}</strong>
                        <small>{v.role}</small>
                      </span>
                      <span className="choice-check">
                        {values.vetId === v.id && <Check size={14} />}
                      </span>
                    </button>
                  ))}
                </div>
              </>
            )}
            {step === 3 && (
              <>
                <p>Disponibilidad simulada durante los próximos 30 días.</p>
                <label className="date-label" htmlFor="appointment-date">
                  Fecha de la visita
                </label>
                <input
                  className="date-input"
                  type="date"
                  id="appointment-date"
                  value={values.date}
                  min={localDate()}
                  max={maxDate()}
                  onChange={(e) => choose("date", e.target.value)}
                  aria-describedby="date-help"
                />
                <div className="date-help" id="date-help">
                  <CalendarDays />
                  <p>
                    {values.date
                      ? slots.length
                        ? `${slots.length} horarios disponibles el ${dateLabel(values.date)}.`
                        : "No hay horarios disponibles ese día. Prueba otra fecha."
                      : "Elige un día para consultar los horarios. Los domingos descansamos."}
                  </p>
                </div>
                <p className="small-note">
                  La agenda cambia según el profesional. Las visitas se
                  programan con al menos una hora de anticipación.
                </p>
              </>
            )}
            {step === 4 && (
              <>
                <p>
                  {dateLabel(values.date)} · {vet.name}
                </p>
                <div className="time-options">
                  {slots.map((time) => (
                    <button
                      key={time}
                      className={`time-button ${values.time === time ? "selected" : ""}`}
                      aria-pressed={values.time === time}
                      onClick={() => choose("time", time)}
                    >
                      {time} h
                    </button>
                  ))}
                </div>
                {!slots.length && (
                  <p>
                    No quedan horarios para esta fecha. Vuelve al paso anterior
                    para elegir otro día.
                  </p>
                )}
                <p className="small-note">
                  <Clock size={14} />
                  Duración aproximada: {service.duration} minutos.
                </p>
              </>
            )}
            {step === 5 && (
              <>
                <p>Un último vistazo antes de confirmar.</p>
                <div className="review-card">
                  <Picture name={pet.image} alt={pet.name} />
                  <div>
                    <h3>{pet.name}</h3>
                    <p>
                      {service.name} con {vet.name}
                    </p>
                    <strong>
                      {dateLabel(values.date)} · {values.time} h
                    </strong>
                  </div>
                </div>
                <div className="price-review">
                  <span>Precio ilustrativo de la visita</span>
                  <strong>{money(service.price)}</strong>
                </div>
                <label className="consent">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => {
                      setConsent(e.target.checked);
                      setError("");
                    }}
                  />
                  Entiendo que esta cita es ficticia y se guardará únicamente en
                  este navegador.
                </label>
              </>
            )}
            {error && (
              <p className="field-error" role="alert">
                {error}
              </p>
            )}
            <div className="step-actions">
              {step > 0 ? (
                <button
                  className="back-button"
                  onClick={() => {
                    setStep(step - 1);
                    setError("");
                  }}
                >
                  <ArrowLeft size={16} />
                  Anterior
                </button>
              ) : (
                <span />
              )}
              <button className="button" onClick={next}>
                {step === 5 ? "Confirmar cita demo" : "Continuar"}
                {step === 5 ? <Check size={17} /> : <ArrowRight size={17} />}
              </button>
            </div>
          </div>
        </div>
        <aside className="booking-summary">
          <div className="summary-heading">
            <Heart size={20} />
            <h2>Su próxima visita</h2>
          </div>
          <dl>
            {[
              ["Mascota", pet?.name],
              ["Servicio", service?.name],
              ["Profesional", vet?.name],
              ["Fecha", values.date ? dateLabel(values.date) : null],
              ["Horario", values.time ? `${values.time} h` : null],
            ].map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd className={!value ? "pending" : ""}>
                  {value || "Por elegir"}
                </dd>
              </div>
            ))}
          </dl>
          <div className="summary-total">
            <span>Total demo</span>
            <strong>{service ? money(service.price) : "—"}</strong>
          </div>
          <p>
            <ShieldCheck size={17} />
            Sin pagos ni envío de información. Solo una demostración de lo fácil
            que puede ser cuidar.
          </p>
        </aside>
      </section>
    </>
  );
}
