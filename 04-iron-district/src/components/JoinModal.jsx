import { useEffect, useRef } from "react";
import { X, Check } from "lucide-react";
import { currency } from "../data/gym";
export default function JoinModal({ plan, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    const d = ref.current;
    const previous = document.activeElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    d.showModal();
    return () => {
      d.close();
      document.body.style.overflow = overflow;
      previous?.focus({ preventScroll: true });
    };
  }, []);
  return (
    <dialog
      ref={ref}
      className="join-modal"
      aria-labelledby="modal-title"
      onCancel={(e) => {
        e.preventDefault();
        onClose();
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
      <span className="modal-mark">
        <Check />
      </span>
      <span className="kicker">SIMULACIÓN COMPLETADA</span>
      <h2 id="modal-title">
        ESTÁS UN PASO
        <br />
        MÁS CERCA.
      </h2>
      <p>
        Elegiste el plan <strong>{plan.name}</strong> por {currency(plan.price)}{" "}
        MXN al mes.
      </p>
      <div className="demo-notice">
        Esta es una demostración. No se creó una membresía, no se guardaron
        datos y no se realizará ningún cobro.
      </div>
      <button className="acid-button" onClick={onClose}>
        Entendido
      </button>
    </dialog>
  );
}
