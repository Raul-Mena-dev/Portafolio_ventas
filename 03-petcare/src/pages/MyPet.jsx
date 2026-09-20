import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  PawPrint,
  CalendarDays,
  Weight,
  ShieldCheck,
  ArrowUpRight,
  FileText,
  RotateCcw,
  Heart,
  Clock,
} from "lucide-react";
import { pets, histories, services, vets } from "../data/clinic";
import { upcoming, dateLabel } from "../utils/appointments";
import { useClinic } from "../hooks/useClinic";
import Picture from "../components/Picture";
import ConfirmDialog from "../components/ConfirmDialog";
export default function MyPet() {
  const [params, setParams] = useSearchParams();
  const pet = pets.find((p) => p.id === params.get("pet")) || pets[0];
  const history = histories[pet.id];
  const { appointments, cancel, reset, storageError } = useClinic();
  const [dialog, setDialog] = useState(null);
  const [message, setMessage] = useState("");
  const visits = upcoming(appointments).filter((a) => a.petId === pet.id);
  const past = appointments.filter(
    (a) =>
      a.petId === pet.id && (a.status === "cancelled" || !upcoming([a]).length),
  );
  return (
    <>
      <section className="wrap profile-heading">
        <div>
          <span className="eyebrow">SU PEQUEÑO ESPACIO, TODO SU CUIDADO</span>
          <h1>
            Hola, Sofía <span className="wave">☀</span>
          </h1>
          <p>Lo importante de tu compañero, siempre cerca.</p>
        </div>
        <Link className="button" to={`/appointments?pet=${pet.id}`}>
          <CalendarDays size={17} />
          Agendar cita
        </Link>
      </section>
      <div className="wrap pet-switcher" aria-label="Seleccionar mascota">
        {pets.map((p) => (
          <button
            key={p.id}
            aria-pressed={pet.id === p.id}
            className={pet.id === p.id ? "selected" : ""}
            onClick={() => {
              setParams({ pet: p.id }, { preventScrollReset: true });
              setMessage("");
            }}
          >
            <Picture name={p.image} alt="" eager />
            {p.name}
            {pet.id === p.id && <PawPrint size={15} />}
          </button>
        ))}
      </div>
      <div className="wrap profile-layout">
        <aside className="pet-profile">
          <div className="pet-profile-photo">
            <Picture name={pet.image} alt={pet.name} eager />
            <span>
              <Heart size={14} />
              Miembro de la familia
            </span>
          </div>
          <div className="pet-profile-copy">
            <h2>
              {pet.name}
              <PawPrint size={23} />
            </h2>
            <p>{pet.breed}</p>
            <div className="pet-chips">
              <span>{pet.sex}</span>
              <span>{pet.age}</span>
            </div>
            <dl>
              <div>
                <dt>Cumpleaños</dt>
                <dd>{pet.birthday}</dd>
              </div>
              <div>
                <dt>Color</dt>
                <dd>{pet.color}</dd>
              </div>
              <div>
                <dt>Su humana</dt>
                <dd>{pet.owner}</dd>
              </div>
            </dl>
            <p className="pet-personality">{pet.personality}</p>
          </div>
        </aside>
        <div className="profile-content">
          <div className="profile-stats">
            <article>
              <span className="stat-icon mint">
                <Weight />
              </span>
              <small>Peso registrado</small>
              <strong>{pet.weight}</strong>
              <span>En su última visita</span>
            </article>
            <article>
              <span className="stat-icon blue">
                <ShieldCheck />
              </span>
              <small>Vacunas registradas</small>
              <strong>{history.vaccines.length} aplicadas</strong>
              <span>Cartilla de demostración</span>
            </article>
            <article>
              <span className="stat-icon peach">
                <CalendarDays />
              </span>
              <small>Última consulta</small>
              <strong>{history.lastVisit.split(" de ")[0]} sep 2026</strong>
              <span>Consulta general</span>
            </article>
          </div>
          <section className="profile-panel appointments-panel">
            <div className="panel-heading">
              <h2>
                <CalendarDays size={20} />
                Próximas citas
              </h2>
              <span className="count-badge">{visits.length}</span>
            </div>
            {visits.length ? (
              visits.map((a) => (
                <article className="visit-row" key={a.id}>
                  <div className="visit-date">
                    <strong>{new Date(`${a.date}T12:00:00`).getDate()}</strong>
                    <span>
                      {new Intl.DateTimeFormat("es-MX", {
                        month: "short",
                      }).format(new Date(`${a.date}T12:00:00`))}
                    </span>
                  </div>
                  <div>
                    <h3>{services.find((s) => s.id === a.serviceId).name}</h3>
                    <p>{vets.find((v) => v.id === a.vetId).name}</p>
                    <small>
                      {dateLabel(a.date)} · {a.time} h
                    </small>
                  </div>
                  <div className="visit-actions">
                    <span className="status-tag">Confirmada · demo</span>
                    <button
                      onClick={() => setDialog({ type: "cancel", id: a.id })}
                    >
                      Cancelar cita
                    </button>
                  </div>
                </article>
              ))
            ) : (
              <div className="empty-appointments">
                <span>
                  <CalendarDays size={28} />
                </span>
                <div>
                  <h3>Su próxima visita empieza aquí.</h3>
                  <p>{pet.name} aún no tiene citas programadas.</p>
                  <Link to={`/appointments?pet=${pet.id}`}>
                    Agendar una cita
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            )}
          </section>
          <div className="profile-two-col">
            <section className="profile-panel vaccine-panel">
              <div className="panel-heading">
                <h2>
                  <ShieldCheck size={20} />
                  Sus vacunas
                </h2>
              </div>
              {history.vaccines.map((v) => (
                <div className="vaccine-row" key={v.name}>
                  <div>
                    <strong>{v.name}</strong>
                    <small>{v.date}</small>
                  </div>
                  <span>{v.status}</span>
                </div>
              ))}
              <p className="small-note">
                Registros ficticios, no una cartilla clínica real.
              </p>
            </section>
            <section className="profile-panel weight-panel">
              <div className="panel-heading">
                <h2>
                  <Weight size={20} />
                  Su peso en el tiempo
                </h2>
              </div>
              <div
                className="weight-chart"
                role="img"
                aria-label={history.weights
                  .map((w) => `${w.label}: ${w.value} kg`)
                  .join(", ")}
              >
                {history.weights.map((w) => (
                  <div key={w.label}>
                    <strong>
                      {w.value}
                      <small> kg</small>
                    </strong>
                    <span
                      style={{
                        height: `${(w.value / Math.max(...history.weights.map((d) => d.value))) * 90}px`,
                      }}
                    />
                    <small>{w.label}</small>
                  </div>
                ))}
              </div>
              <p className="small-note">
                Valores de muestra, sin interpretación clínica.
              </p>
            </section>
          </div>
          <section className="profile-panel notes-panel">
            <div className="panel-heading">
              <h2>
                <FileText size={20} />
                Notas de su última visita
              </h2>
              <span>{history.lastVisit}</span>
            </div>
            <p>{history.notes}</p>
            <div className="note-author">
              <Picture name="ana" alt="" />
              <span>
                Dra. Ana Robles<small>Nota ficticia de consulta general</small>
              </span>
            </div>
          </section>
          {past.length > 0 && (
            <section className="profile-panel">
              <div className="panel-heading">
                <h2>
                  <Clock size={20} />
                  Historial de citas demo
                </h2>
              </div>
              {past.map((a) => (
                <div className="history-row" key={a.id}>
                  <span>
                    {services.find((s) => s.id === a.serviceId).name}
                    <small>
                      {dateLabel(a.date)} · {a.time} h
                    </small>
                  </span>
                  <span>
                    {a.status === "cancelled" ? "Cancelada" : "Fecha pasada"}
                  </span>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
      <section className="wrap profile-bottom">
        <p>
          Perfil de demostración. Las citas se guardan solo en este navegador.
        </p>
        <button onClick={() => setDialog({ type: "reset" })}>
          <RotateCcw size={14} />
          Restablecer datos de demostración
        </button>
        {message && (
          <p className="success-message" role="status">
            {message}
          </p>
        )}
        {storageError && (
          <p className="field-error" role="alert">
            {storageError}
          </p>
        )}
      </section>
      {dialog && (
        <ConfirmDialog
          title={
            dialog.type === "cancel"
              ? "¿Cancelamos esta cita?"
              : "¿Restablecer la demo?"
          }
          confirmLabel={
            dialog.type === "cancel" ? "Sí, cancelar cita" : "Restablecer datos"
          }
          onClose={() => setDialog(null)}
          onConfirm={() => {
            if (dialog.type === "cancel") {
              cancel(dialog.id);
              setMessage("La cita de demostración fue cancelada.");
            } else {
              reset();
              setMessage(
                "Se restablecieron las citas de demostración de todas las mascotas.",
              );
            }
            setDialog(null);
          }}
        >
          {dialog.type === "cancel"
            ? "Se marcará como cancelada en este navegador y el horario volverá a estar disponible."
            : "Se eliminarán las citas creadas para Milo y Luna. Sus perfiles y registros de ejemplo permanecerán disponibles."}
        </ConfirmDialog>
      )}
    </>
  );
}
