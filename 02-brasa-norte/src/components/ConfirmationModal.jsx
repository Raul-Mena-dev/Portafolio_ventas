import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Check, X, ArrowUpRight } from "lucide-react";
import { dateLabel } from "../utils/reservations";
export default function ConfirmationModal({ reservation, onClose }) {
  const dialog = useRef(null);
  useEffect(() => {
    const node = dialog.current;
    const previous = document.activeElement;
    const overflow = document.body.style.overflow;
    const scrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo({ top: window.scrollY, behavior: "instant" });
    document.body.style.overflow = "hidden";
    node.showModal();
    return () => {
      node.close();
      document.body.style.overflow = overflow;
      document.documentElement.style.scrollBehavior = scrollBehavior;
      previous?.focus({ preventScroll: true });
    };
  }, []);
  return (
    <dialog
      ref={dialog}
      className="confirmation-modal"
      aria-labelledby="confirmation-title"
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          const rect = e.currentTarget.getBoundingClientRect();
          if (
            e.clientX < rect.left ||
            e.clientX > rect.right ||
            e.clientY < rect.top ||
            e.clientY > rect.bottom
          )
            onClose();
        }
      }}
    >
      <button
        className="modal-close"
        onClick={onClose}
        aria-label="Cerrar confirmación"
        autoFocus
      >
        <X />
      </button>
      <span className="confirmation-check">
        <Check size={30} />
      </span>
      <span className="eyebrow">TU MESA DEMO ESTÁ LISTA</span>
      <h2 id="confirmation-title">
        ¡NOS VEMOS
        <br />
        EN LA MESA!
      </h2>
      <p>Reservación recibida correctamente.</p>
      <div className="reservation-ticket">
        <span>FOLIO DE DEMOSTRACIÓN</span>
        <strong>{reservation.reference}</strong>
        <dl>
          <div>
            <dt>A nombre de</dt>
            <dd>{reservation.name}</dd>
          </div>
          <div>
            <dt>Fecha</dt>
            <dd>{dateLabel(reservation.date)}</dd>
          </div>
          <div>
            <dt>Hora</dt>
            <dd>{reservation.time} h</dd>
          </div>
          <div>
            <dt>Personas</dt>
            <dd>{reservation.people}</dd>
          </div>
        </dl>
      </div>
      <p className="demo-notice">
        Esta reservación es ficticia. No se envió información ni se apartó una
        mesa real. No recibirás correo o llamada.
      </p>
      <Link className="button button-red" to="/menu">
        Ve preparando el antojo <ArrowUpRight size={17} />
      </Link>
      <button className="modal-done" onClick={onClose}>
        Cerrar y volver al formulario
      </button>
    </dialog>
  );
}
