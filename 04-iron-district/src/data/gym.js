export const programs = [
  {
    id: "strength",
    name: "Strength Lab",
    category: "Fuerza",
    level: "Intermedio",
    duration: 60,
    coach: "Nora Vega",
    image: "strength",
    schedule: ["Lun · 07:00", "Mié · 19:00", "Vie · 07:00"],
    description:
      "Técnica, progresión y cargas que construyen una base sólida. Trabajo con barra, accesorios y registro de marcas.",
  },
  {
    id: "hiit",
    name: "District HIIT",
    category: "Condición",
    level: "Todos",
    duration: 45,
    coach: "Leo Cruz",
    image: "hiit",
    schedule: ["Lun · 18:00", "Jue · 07:00", "Sáb · 10:00"],
    description:
      "Intervalos de alta energía que combinan cardio, potencia y movimientos funcionales con opciones para cada nivel.",
  },
  {
    id: "barbell",
    name: "Barbell Club",
    category: "Fuerza",
    level: "Avanzado",
    duration: 75,
    coach: "Iván Torres",
    image: "barbell",
    schedule: ["Mar · 19:00", "Jue · 19:00"],
    description:
      "Levantamientos fundamentales, práctica técnica y ciclos de fuerza para quienes quieren llevar la barra más lejos.",
  },
  {
    id: "engine",
    name: "Engine",
    category: "Resistencia",
    level: "Intermedio",
    duration: 50,
    coach: "Sara León",
    image: "engine",
    schedule: ["Mar · 07:00", "Vie · 18:00"],
    description:
      "Remo, bicicleta y carrera con bloques sostenidos para desarrollar una condición que responde dentro y fuera del gym.",
  },
  {
    id: "mobility",
    name: "Mobility Reset",
    category: "Movilidad",
    level: "Todos",
    duration: 40,
    coach: "Sara León",
    image: "mobility",
    schedule: ["Mié · 08:00", "Sáb · 09:00"],
    description:
      "Movilidad activa, control y recuperación para entrenar mejor. Una sesión que suma rango sin perder estabilidad.",
  },
  {
    id: "build",
    name: "Build",
    category: "Hipertrofia",
    level: "Todos",
    duration: 60,
    coach: "Nora Vega",
    image: "build",
    schedule: ["Lun · 20:00", "Mié · 20:00", "Vie · 20:00"],
    description:
      "Volumen inteligente y ejecución precisa para ganar músculo. Cada bloque se adapta a tu experiencia y progreso.",
  },
];
export const coaches = [
  {
    id: "nora",
    name: "Nora Vega",
    role: "Fuerza e hipertrofia",
    image: "nora",
    quote: "La técnica abre la puerta. La constancia cambia todo.",
    cert: "NSCA-CPT · Personaje ficticio",
  },
  {
    id: "leo",
    name: "Leo Cruz",
    role: "Acondicionamiento",
    image: "leo",
    quote: "No necesitas empezar fuerte. Necesitas seguir apareciendo.",
    cert: "Entrenamiento funcional · Personaje ficticio",
  },
  {
    id: "ivan",
    name: "Iván Torres",
    role: "Barra y potencia",
    image: "ivan",
    quote: "Cada repetición tiene una intención. Entrena con ella.",
    cert: "Halterofilia nivel 2 · Personaje ficticio",
  },
  {
    id: "sara",
    name: "Sara León",
    role: "Resistencia y movilidad",
    image: "sara",
    quote: "Moverte bien también es una forma de ser más fuerte.",
    cert: "Movilidad aplicada · Personaje ficticio",
  },
];
export const plans = [
  {
    id: "basic",
    name: "Basic",
    price: 799,
    tag: "Empieza aquí",
    description: "Para construir el hábito a tu ritmo.",
    features: [
      "Acceso de lunes a viernes",
      "Zona de fuerza y cardio",
      "2 clases grupales por semana",
      "Evaluación inicial demo",
    ],
    cta: "Elegir Basic",
  },
  {
    id: "performance",
    name: "Performance",
    price: 1199,
    tag: "Más elegido",
    description: "Para entrenar con estructura y avanzar.",
    features: [
      "Acceso todos los días",
      "Clases grupales ilimitadas",
      "Programa de entrenamiento",
      "Medición mensual demo",
      "1 sesión de técnica",
    ],
    cta: "Elegir Performance",
    featured: true,
  },
  {
    id: "unlimited",
    name: "Unlimited",
    price: 1699,
    tag: "Todo dentro",
    description: "Acompañamiento completo, sin límites.",
    features: [
      "Todo lo de Performance",
      "4 sesiones semi privadas",
      "Prioridad en reservaciones",
      "Recovery Zone",
      "Seguimiento quincenal demo",
    ],
    cta: "Elegir Unlimited",
  },
];
export const schedule = [
  ["Lunes", "07:00", "Strength Lab", "Nora"],
  ["Lunes", "18:00", "District HIIT", "Leo"],
  ["Lunes", "20:00", "Build", "Nora"],
  ["Martes", "07:00", "Engine", "Sara"],
  ["Martes", "19:00", "Barbell Club", "Iván"],
  ["Miércoles", "08:00", "Mobility Reset", "Sara"],
  ["Miércoles", "19:00", "Strength Lab", "Nora"],
  ["Miércoles", "20:00", "Build", "Nora"],
  ["Jueves", "07:00", "District HIIT", "Leo"],
  ["Jueves", "19:00", "Barbell Club", "Iván"],
  ["Viernes", "07:00", "Strength Lab", "Nora"],
  ["Viernes", "18:00", "Engine", "Sara"],
  ["Viernes", "20:00", "Build", "Nora"],
  ["Sábado", "09:00", "Mobility Reset", "Sara"],
  ["Sábado", "10:00", "District HIIT", "Leo"],
];
export const recommendations = {
  "Perder grasa": {
    planId: "performance",
    programs: ["District HIIT", "Engine"],
    reason:
      "La combinación de clases ilimitadas, acondicionamiento y seguimiento mensual te ayuda a sostener un déficit con entrenamiento progresivo.",
  },
  "Ganar músculo": {
    planId: "unlimited",
    programs: ["Build", "Strength Lab"],
    reason:
      "El trabajo de hipertrofia, las sesiones semi privadas y el seguimiento quincenal aportan el volumen y la progresión que buscas.",
  },
  "Mejorar condición": {
    planId: "performance",
    programs: ["Engine", "District HIIT"],
    reason:
      "Clases ilimitadas y un programa estructurado te permiten mejorar resistencia sin descuidar fuerza y recuperación.",
  },
  Fuerza: {
    planId: "performance",
    programs: ["Strength Lab", "Barbell Club"],
    reason:
      "El plan combina práctica frecuente, una sesión de técnica y acceso total para que construyas fuerza con intención.",
  },
};
export const currency = (value) =>
  new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(value);
