export function localDate(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
export function lastDate() {
  const date = new Date();
  date.setDate(date.getDate() + 60);
  return localDate(date);
}
export function dateLabel(value) {
  return new Intl.DateTimeFormat("es-MX", { dateStyle: "long" }).format(
    new Date(`${value}T12:00:00`),
  );
}
export function availableTimes(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return [];
  const day = new Date(`${value}T12:00:00`).getDay();
  if (day === 1) return [];
  const close = day === 0 ? 19 : day === 5 || day === 6 ? 22 : 21;
  const now = new Date();
  const slots = [];
  for (let hour = 13; hour <= close; hour++)
    for (const minute of [0, 30]) {
      const time = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
      if (
        new Date(`${value}T${time}:00`).getTime() >
        now.getTime() + 60 * 60 * 1000
      )
        slots.push(time);
    }
  return slots;
}
export function validateReservation(values) {
  const errors = {};
  if (values.name.trim().length < 2)
    errors.name = "Escribe tu nombre completo (al menos 2 caracteres).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = "Escribe un correo electrónico válido.";
  if (
    !/^[+\d\s()-]+$/.test(values.phone) ||
    values.phone.replace(/\D/g, "").length < 10 ||
    values.phone.replace(/\D/g, "").length > 15
  )
    errors.phone = "Escribe un teléfono de 10 a 15 dígitos.";
  if (!values.date || values.date < localDate() || values.date > lastDate())
    errors.date = "Elige una fecha entre hoy y los próximos 60 días.";
  else if (new Date(`${values.date}T12:00:00`).getDay() === 1)
    errors.date = "Los lunes descansamos. Elige otro día.";
  if (!availableTimes(values.date).includes(values.time))
    errors.time = "Selecciona un horario disponible.";
  if (
    !Number.isInteger(Number(values.people)) ||
    Number(values.people) < 1 ||
    Number(values.people) > 8
  )
    errors.people = "Selecciona entre 1 y 8 personas.";
  if (!values.consent)
    errors.consent = "Confirma que entiendes que la reservación es ficticia.";
  return errors;
}
