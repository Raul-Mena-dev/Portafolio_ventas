import { useState, useRef } from "react";
import { ArrowUpRight, Flame, Clock, Users, CalendarDays } from "lucide-react";
import Picture from "../components/Picture";
import ConfirmationModal from "../components/ConfirmationModal";
import {
  localDate,
  lastDate,
  availableTimes,
  validateReservation,
} from "../utils/reservations";
const initial = {
  name: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  people: "2",
  notes: "",
  consent: false,
};
export default function Reservations() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [reservation, setReservation] = useState(null);
  const form = useRef(null);
  const times = availableTimes(values.date);
  function change(e) {
    const { name, value, type, checked } = e.target;
    setValues((v) => ({
      ...v,
      [name]: type === "checkbox" ? checked : value,
      ...(name === "date" ? { time: "" } : {}),
    }));
    setErrors((v) => ({
      ...v,
      [name]: undefined,
      ...(name === "date" ? { time: undefined } : {}),
    }));
  }
  function submit(e) {
    e.preventDefault();
    const next = validateReservation(values);
    setErrors(next);
    if (Object.keys(next).length) {
      form.current.elements.namedItem(Object.keys(next)[0])?.focus();
      return;
    }
    setReservation({
      ...values,
      reference: `BR-${String(crypto.getRandomValues(new Uint32Array(1))[0] % 10000).padStart(4, "0")}`,
    });
  }
  const inputProps = (name) => ({
    id: name,
    name,
    value: values[name],
    onChange: change,
    "aria-invalid": !!errors[name],
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });
  const error = (name) =>
    errors[name] && (
      <span className="field-error" id={`${name}-error`}>
        {errors[name]}
      </span>
    );
  return (
    <>
      <section className="reservation-heading wrap">
        <span className="eyebrow red">UN BUEN PLAN EMPIEZA AQUÍ</span>
        <h1>
          TE GUARDAMOS
          <br />
          <span>UN LUGAR.</span>
        </h1>
        <p>
          Ven con hambre. La mesa, el fuego y el buen rato van por nuestra
          cuenta.
        </p>
      </section>
      <section className="reservation-layout wrap">
        <div className="reservation-form">
          <div className="form-intro">
            <h2>RESERVA TU MESA</h2>
            <span>01 / HAGAMOS EL PLAN</span>
          </div>
          <p className="form-helper">
            Completa los campos con * para simular tu reservación.
          </p>
          <form ref={form} onSubmit={submit} noValidate>
            <div className="form-grid">
              <div className="field full">
                <label htmlFor="name">Nombre completo *</label>
                <input
                  {...inputProps("name")}
                  autoComplete="name"
                  maxLength={100}
                  placeholder="¿A nombre de quién reservamos?"
                  required
                />
                {error("name")}
              </div>
              <div className="field">
                <label htmlFor="phone">Teléfono *</label>
                <input
                  {...inputProps("phone")}
                  type="tel"
                  autoComplete="tel"
                  maxLength={25}
                  placeholder="81 0000 0000"
                  required
                />
                {error("phone")}
              </div>
              <div className="field">
                <label htmlFor="email">Correo electrónico *</label>
                <input
                  {...inputProps("email")}
                  type="email"
                  autoComplete="email"
                  maxLength={150}
                  placeholder="tu@correo.com"
                  required
                />
                {error("email")}
              </div>
              <div className="field">
                <label htmlFor="date">Fecha *</label>
                <input
                  {...inputProps("date")}
                  type="date"
                  min={localDate()}
                  max={lastDate()}
                  required
                />
                {error("date")}
              </div>
              <div className="field">
                <label htmlFor="people">Personas *</label>
                <select {...inputProps("people")} required>
                  {Array.from({ length: 8 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} {i === 0 ? "persona" : "personas"}
                    </option>
                  ))}
                </select>
                {error("people")}
              </div>
              <div className="field full">
                <label htmlFor="time">Horario *</label>
                <select
                  {...inputProps("time")}
                  required
                  disabled={!values.date || !times.length}
                >
                  <option value="">
                    {!values.date
                      ? "Primero elige una fecha"
                      : times.length
                        ? "Selecciona un horario"
                        : "No hay horarios disponibles este día"}
                  </option>
                  {times.map((time) => (
                    <option key={time} value={time}>
                      {time} h
                    </option>
                  ))}
                </select>
                {error("time")}
                <span className="field-hint">
                  Horarios simulados. Anticipación mínima de una hora.
                </span>
              </div>
              <div className="field full">
                <label htmlFor="notes">
                  ¿Algo que debamos saber? <span>(Opcional)</span>
                </label>
                <textarea
                  {...inputProps("notes")}
                  rows={3}
                  maxLength={500}
                  placeholder="Una celebración, alguna preferencia para tu mesa…"
                />
              </div>
            </div>
            <div className="consent">
              <label>
                <input
                  type="checkbox"
                  name="consent"
                  checked={values.consent}
                  onChange={change}
                  aria-invalid={!!errors.consent}
                  aria-describedby={
                    errors.consent ? "consent-error" : undefined
                  }
                />
                Entiendo que esta es una reservación de demostración y no se
                apartará una mesa real.
              </label>
              {error("consent")}
            </div>
            <button className="button button-red submit" type="submit">
              Confirmar reservación demo <ArrowUpRight size={18} />
            </button>
            <p className="form-privacy">
              No enviamos, guardamos ni compartimos tu información.
            </p>
          </form>
        </div>
        <aside className="reservation-aside">
          <div className="reservation-photo">
            <Picture
              name="restaurant"
              alt="Mesas del comedor listas para recibir a los comensales"
              eager
            />
            <span>
              <Flame />
              SIEMPRE HAY UNA
              <br />
              BUENA RAZÓN.
            </span>
          </div>
          <div className="good-to-know">
            <span className="eyebrow red">ANTES DE SENTARNOS A LA MESA</span>
            <div>
              <Clock size={20} />
              <p>
                <strong>El lunes dejamos descansar las brasas.</strong>Nos vemos
                de martes a domingo.
              </p>
            </div>
            <div>
              <Users size={20} />
              <p>
                <strong>Una mesa para compartir.</strong>Reserva de 1 a 8
                personas en esta demo.
              </p>
            </div>
            <div>
              <CalendarDays size={20} />
              <p>
                <strong>Haz el plan con tiempo.</strong>Elige una fecha dentro
                de los próximos 60 días.
              </p>
            </div>
          </div>
        </aside>
      </section>
      {reservation && (
        <ConfirmationModal
          reservation={reservation}
          onClose={() => {
            setReservation(null);
            setValues(initial);
            setErrors({});
          }}
        />
      )}
    </>
  );
}
