import { useState, useRef } from "react";
import { ArrowUpRight, Check } from "lucide-react";
const initial = {
  name: "",
  email: "",
  type: "",
  location: "",
  message: "",
  consent: false,
};
export default function Contact() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const form = useRef(null);
  function change(e) {
    const { name, value, checked, type } = e.target;
    setValues((v) => ({ ...v, [name]: type === "checkbox" ? checked : value }));
    setErrors((v) => ({ ...v, [name]: undefined }));
  }
  function submit(e) {
    e.preventDefault();
    const next = {};
    if (values.name.trim().length < 2)
      next.name = "Escribe tu nombre (al menos 2 caracteres).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = "Escribe un correo electrónico válido.";
    if (!values.type) next.type = "Selecciona el tipo de proyecto.";
    if (values.message.trim().length < 20)
      next.message = "Cuéntanos un poco más (al menos 20 caracteres).";
    if (!values.consent)
      next.consent =
        "Confirma que entiendes el carácter demostrativo del formulario.";
    setErrors(next);
    if (Object.keys(next).length) {
      form.current.elements.namedItem(Object.keys(next)[0])?.focus();
      return;
    }
    setSent(true);
  }
  const props = (name) => ({
    name,
    id: name,
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
    <section className="wrap contact-page">
      <div className="contact-intro">
        <span className="eyebrow">HABLEMOS DE TU PROYECTO</span>
        <h1>
          Todo comienza
          <br />
          con una <em>idea.</em>
        </h1>
        <p>
          Una casa, un espacio de trabajo, una nueva manera de habitar. Nos
          encantará conocer lo que tienes en mente.
        </p>
        <div className="contact-information">
          <span className="eyebrow">NUESTRO ESTUDIO</span>
          <p>
            Pasaje del Fresno 128, Estudio 4<br />
            Colonia Jardines del Alba
            <br />
            Ciudad de México · Dirección ficticia
          </p>
          <p>
            hola@lumina.example
            <br />
            Lunes a viernes · 9:00 a 18:00
          </p>
        </div>
        <span className="contact-note">Cada espacio empieza por escuchar.</span>
      </div>
      <div className="contact-form-area">
        {sent ? (
          <div className="success-panel" role="status">
            <span className="success-icon">
              <Check />
            </span>
            <span className="eyebrow">SIMULACIÓN COMPLETADA</span>
            <h2>
              Gracias por compartir
              <br />
              tu <em>idea.</em>
            </h2>
            <p>
              Tu solicitud de demostración se ha completado correctamente. No se
              han enviado ni guardado tus datos y no recibirás un correo.
            </p>
            <button
              className="button"
              onClick={() => {
                setValues(initial);
                setSent(false);
              }}
            >
              Crear otra solicitud <ArrowUpRight size={18} />
            </button>
          </div>
        ) : (
          <form ref={form} onSubmit={submit} noValidate>
            <h2>Cuéntanos un poco.</h2>
            <p className="form-description">
              Los campos marcados con * son obligatorios.
            </p>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Tu nombre *</label>
                <input
                  {...props("name")}
                  autoComplete="name"
                  placeholder="¿Cómo te llamas?"
                  maxLength={100}
                  required
                />
                {error("name")}
              </div>
              <div className="field">
                <label htmlFor="email">Correo electrónico *</label>
                <input
                  {...props("email")}
                  type="email"
                  autoComplete="email"
                  placeholder="nombre@correo.com"
                  maxLength={150}
                  required
                />
                {error("email")}
              </div>
              <div className="field">
                <label htmlFor="type">Tipo de proyecto *</label>
                <select {...props("type")} required>
                  <option value="">Selecciona una opción</option>
                  <option>Arquitectura residencial</option>
                  <option>Diseño de interiores</option>
                  <option>Espacio comercial</option>
                  <option>Dirección de proyecto</option>
                  <option>Aún lo estoy definiendo</option>
                </select>
                {error("type")}
              </div>
              <div className="field">
                <label htmlFor="location">Ubicación del proyecto</label>
                <input
                  {...props("location")}
                  placeholder="Ciudad, estado"
                  maxLength={120}
                />
              </div>
              <div className="field full">
                <label htmlFor="message">Tu idea *</label>
                <textarea
                  {...props("message")}
                  rows={5}
                  placeholder="¿Qué te gustaría crear? Cuéntanos sobre el espacio, tus necesidades y lo que imaginas."
                  maxLength={3000}
                  required
                />
                {error("message")}
              </div>
            </div>
            <div className="consent">
              <label>
                <input
                  name="consent"
                  type="checkbox"
                  checked={values.consent}
                  onChange={change}
                  aria-invalid={!!errors.consent}
                  aria-describedby={
                    errors.consent ? "consent-error" : undefined
                  }
                />
                Entiendo que este formulario es demostrativo y no envía datos.
              </label>
              {error("consent")}
            </div>
            <button className="button submit" type="submit">
              Enviar solicitud demo <ArrowUpRight size={19} />
            </button>
            <p className="form-footnote">
              Tu información permanece únicamente en esta página.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
