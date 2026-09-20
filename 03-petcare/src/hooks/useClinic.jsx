import { createContext, useContext, useState } from "react";
import { pets, services, vets } from "../data/clinic";
import { slotsFor } from "../utils/appointments";
const KEY = "petcare-demo-appointments-v1";
const ClinicContext = createContext(null);
function readAppointments() {
  try {
    const value = JSON.parse(localStorage.getItem(KEY) || "[]");
    return Array.isArray(value)
      ? value.filter(
          (a) =>
            a &&
            typeof a.id === "string" &&
            pets.some((p) => p.id === a.petId) &&
            vets.some((v) => v.id === a.vetId) &&
            services.some(
              (s) => s.id === a.serviceId && s.duration === a.duration,
            ) &&
            /^\d{4}-\d{2}-\d{2}$/.test(a.date) &&
            /^\d{2}:\d{2}$/.test(a.time) &&
            ["confirmed", "cancelled"].includes(a.status),
        )
      : [];
  } catch {
    return [];
  }
}
export function ClinicProvider({ children }) {
  const [appointments, setAppointments] = useState(readAppointments);
  const [storageError, setStorageError] = useState("");
  function save(next) {
    setAppointments(next);
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
      setStorageError("");
    } catch {
      setStorageError(
        "El navegador no permite guardar cambios. Puedes usar la demo, pero se perderán al recargar.",
      );
    }
  }
  function book(values) {
    const service = services.find((s) => s.id === values.serviceId);
    const vet = vets.find((v) => v.id === values.vetId);
    if (
      !pets.some((p) => p.id === values.petId) ||
      !service ||
      service.bookable === false ||
      !vet?.services.includes(service.id) ||
      !slotsFor(values.date, vet, service, appointments).includes(values.time)
    )
      return {
        error: "Ese horario ya no está disponible. Elige otro para continuar.",
      };
    const start = new Date(`${values.date}T${values.time}`).getTime();
    if (
      appointments.some(
        (a) =>
          a.status !== "cancelled" &&
          a.petId === values.petId &&
          start <
            new Date(`${a.date}T${a.time}`).getTime() + a.duration * 60000 &&
          start + service.duration * 60000 >
            new Date(`${a.date}T${a.time}`).getTime(),
      )
    )
      return {
        error:
          "Tu mascota ya tiene una cita en ese horario. Elige otro para continuar.",
      };
    const record = {
      id: `PC-${crypto.randomUUID().slice(0, 8).toUpperCase()}`,
      ...values,
      duration: service.duration,
      status: "confirmed",
    };
    save([...appointments, record]);
    return { record };
  }
  function cancel(id) {
    save(
      appointments.map((a) =>
        a.id === id ? { ...a, status: "cancelled" } : a,
      ),
    );
  }
  function reset() {
    save([]);
  }
  return (
    <ClinicContext.Provider
      value={{ appointments, book, cancel, reset, storageError }}
    >
      {children}
    </ClinicContext.Provider>
  );
}
export const useClinic = () => useContext(ClinicContext);
