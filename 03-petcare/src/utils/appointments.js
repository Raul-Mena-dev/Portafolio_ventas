export const localDate = (date = new Date()) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
export function maxDate() {
  const d = new Date();
  d.setDate(d.getDate() + 30);
  return localDate(d);
}
export const dateLabel = (value) =>
  new Intl.DateTimeFormat("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${value}T12:00:00`));
export function slotsFor(date, vet, service, appointments = []) {
  if (!date || date < localDate() || date > maxDate() || !vet || !service)
    return [];
  const day = new Date(`${date}T12:00:00`).getDay();
  if (!vet.days.includes(day)) return [];
  const closing = day === 6 ? 14 * 60 : 18 * 60;
  const output = [];
  for (
    let minute = 9 * 60;
    minute + service.duration <= closing;
    minute += 30
  ) {
    const time = `${String(Math.floor(minute / 60)).padStart(2, "0")}:${String(minute % 60).padStart(2, "0")}`;
    if (new Date(`${date}T${time}`).getTime() < Date.now() + 60 * 60 * 1000)
      continue;
    const blocked = appointments.some((a) => {
      if (a.status === "cancelled" || a.date !== date || a.vetId !== vet.id)
        return false;
      const [h, m] = a.time.split(":").map(Number);
      const start = h * 60 + m;
      return minute < start + a.duration && minute + service.duration > start;
    });
    if (!blocked) output.push(time);
  }
  return output;
}
export const upcoming = (appointments) =>
  appointments
    .filter(
      (a) =>
        a.status !== "cancelled" &&
        new Date(`${a.date}T${a.time}`).getTime() > Date.now(),
    )
    .sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`));
