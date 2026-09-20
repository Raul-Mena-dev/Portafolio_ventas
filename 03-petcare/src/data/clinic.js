export const services = [
  {
    id: "consulta",
    name: "Consulta general",
    short: "Un chequeo, mucha tranquilidad.",
    description:
      "Una revisión integral para conocer a tu mascota, conversar sobre sus hábitos y acompañar cada etapa de su vida.",
    icon: "Stethoscope",
    color: "mint",
    duration: 30,
    price: 450,
    details: [
      "Revisión física general",
      "Conversación sobre hábitos y alimentación",
      "Resumen de la consulta en su perfil",
    ],
  },
  {
    id: "vacunacion",
    name: "Vacunación",
    short: "Protección para seguir explorando.",
    description:
      "Revisamos la cartilla y organizamos un esquema de prevención de acuerdo con la edad y las necesidades de cada mascota.",
    icon: "Syringe",
    color: "blue",
    duration: 30,
    price: 380,
    details: [
      "Revisión de cartilla",
      "Evaluación previa a la aplicación",
      "Registro de la visita",
    ],
  },
  {
    id: "estetica",
    name: "Estética y cuidado",
    short: "Limpitos, cómodos y consentidos.",
    description:
      "Una experiencia de higiene con paciencia y cariño. Adaptamos cada sesión al tamaño, pelaje y comodidad de tu compañero.",
    icon: "Scissors",
    color: "peach",
    duration: 60,
    price: 420,
    details: [
      "Baño y secado cuidadoso",
      "Cepillado y corte según el pelaje",
      "Revisión de uñas y limpieza externa",
    ],
  },
  {
    id: "urgencias",
    name: "Urgencias",
    short: "Atención cuando más importa.",
    description:
      "Conoce cómo funciona la atención prioritaria del equipo. Este sitio es una demostración y no recibe ni atiende urgencias reales.",
    icon: "HeartPulse",
    color: "pink",
    duration: 30,
    price: null,
    details: [
      "Valoración prioritaria presencial",
      "Coordinación del equipo clínico",
      "Comunicación con la familia",
    ],
    bookable: false,
  },
  {
    id: "laboratorio",
    name: "Laboratorio",
    short: "Respuestas para cuidar mejor.",
    description:
      "Estudios solicitados por el equipo veterinario, con toma de muestras en un ambiente tranquilo y seguimiento cercano.",
    icon: "Microscope",
    color: "lavender",
    duration: 30,
    price: 650,
    details: [
      "Revisión de la solicitud del estudio",
      "Toma de muestras programada",
      "Entrega simulada de resultados",
    ],
  },
  {
    id: "dental",
    name: "Cuidado dental",
    short: "Más razones para sonreír.",
    description:
      "Una valoración de salud oral para conocer el estado de dientes y encías y planear el cuidado adecuado.",
    icon: "Sparkles",
    color: "yellow",
    duration: 30,
    price: 500,
    details: [
      "Revisión de dientes y encías",
      "Valoración de higiene oral",
      "Plan de seguimiento individual",
    ],
  },
];
export const vets = [
  {
    id: "ana",
    name: "Dra. Ana Robles",
    role: "Medicina general y prevención",
    image: "ana",
    years: "8 años de experiencia",
    quote:
      "Cada consulta empieza por escuchar a quien mejor los conoce: su familia.",
    bio: "Ana acompaña a perros y gatos desde su primera visita. Le gusta crear rutinas de prevención claras y hacer que las consultas se sientan tranquilas.",
    services: ["consulta", "vacunacion", "laboratorio"],
    days: [1, 2, 3, 4, 5, 6],
  },
  {
    id: "diego",
    name: "Dr. Diego Salazar",
    role: "Medicina interna y salud dental",
    image: "diego",
    years: "10 años de experiencia",
    quote: "El mejor cuidado combina atención al detalle y un trato paciente.",
    bio: "Diego se enfoca en encontrar respuestas y explicar cada paso de forma sencilla. Su prioridad es construir confianza con las mascotas y sus familias.",
    services: ["consulta", "laboratorio", "dental"],
    days: [1, 2, 4, 5, 6],
  },
  {
    id: "valeria",
    name: "MVZ Valeria Méndez",
    role: "Bienestar y cuidado preventivo",
    image: "valeria",
    years: "6 años de experiencia",
    quote: "Un pequeño gesto de cariño puede cambiar por completo una visita.",
    bio: "Valeria une el cuidado clínico con una experiencia amable de higiene y bienestar. Disfruta especialmente acompañar a los pacientes más tímidos.",
    services: ["consulta", "vacunacion", "estetica"],
    days: [1, 2, 3, 5, 6],
  },
];
export const pets = [
  {
    id: "milo",
    name: "Milo",
    breed: "Golden Retriever",
    age: "4 años",
    weight: "28 kg",
    sex: "Macho",
    image: "milo",
    birthday: "14 de mayo de 2022",
    owner: "Sofía Martínez",
    color: "Dorado",
    personality: "Sociable, curioso y experto en pedir premios.",
  },
  {
    id: "luna",
    name: "Luna",
    breed: "Gata doméstica",
    age: "2 años",
    weight: "4.2 kg",
    sex: "Hembra",
    image: "luna",
    birthday: "8 de febrero de 2024",
    owner: "Sofía Martínez",
    color: "Atigrado",
    personality: "Observadora, tranquila y fan de las siestas al sol.",
  },
];
export const histories = {
  milo: {
    lastVisit: "12 de septiembre de 2026",
    vaccines: [
      { name: "Polivalente canina", date: "12 sep 2026", status: "Aplicada" },
      { name: "Antirrábica", date: "14 may 2026", status: "Aplicada" },
      { name: "Bordetella", date: "14 may 2026", status: "Aplicada" },
    ],
    notes:
      "Milo estuvo tranquilo y colaborador durante su revisión de demostración. Peso registrado: 28 kg. Su familia comenta que disfruta sus paseos y mantiene su rutina habitual.",
    weights: [
      { label: "Mar", value: 29 },
      { label: "May", value: 28.6 },
      { label: "Jul", value: 28.2 },
      { label: "Sep", value: 28 },
    ],
  },
  luna: {
    lastVisit: "5 de septiembre de 2026",
    vaccines: [
      { name: "Triple felina", date: "5 sep 2026", status: "Aplicada" },
      { name: "Antirrábica", date: "8 feb 2026", status: "Aplicada" },
    ],
    notes:
      "Luna se mostró curiosa en su visita de demostración. Peso registrado: 4.2 kg. Se documentaron sus hábitos y las observaciones de su familia.",
    weights: [
      { label: "Mar", value: 4 },
      { label: "May", value: 4.1 },
      { label: "Jul", value: 4.2 },
      { label: "Sep", value: 4.2 },
    ],
  },
};
export const money = (value) =>
  value === null
    ? "Valoración presencial"
    : new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN",
        maximumFractionDigits: 0,
      }).format(value);
