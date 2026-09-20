import { useEffect, useRef } from "react";
import { X } from "lucide-react";
export default function ConfirmDialog({
  title,
  children,
  onClose,
  onConfirm,
  confirmLabel = "Confirmar",
}) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    const previous = document.activeElement;
    const overflow = document.body.style.overflow;
    const scroll = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo({ top: window.scrollY, behavior: "instant" });
    document.body.style.overflow = "hidden";
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = overflow;
      document.documentElement.style.scrollBehavior = scroll;
      previous?.focus({ preventScroll: true });
    };
  }, []);
  return (
    <dialog
      ref={ref}
      className="confirm-dialog"
      aria-labelledby="dialog-title"
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
    >
      <button
        className="close-dialog"
        aria-label="Cerrar diálogo"
        onClick={onClose}
        autoFocus
      >
        <X />
      </button>
      <h2 id="dialog-title">{title}</h2>
      <p>{children}</p>
      <div className="dialog-actions">
        <button className="button outline" onClick={onClose}>
          Volver
        </button>
        <button className="button danger" onClick={onConfirm}>
          {confirmLabel}
        </button>
      </div>
    </dialog>
  );
}
