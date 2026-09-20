import { Activity, BadgePlus, Braces, Eraser, ScanLine, Sparkles } from "lucide-react";

export const treatments = [
  { id: "cleaning", name: "Limpieza dental", icon: Sparkles, duration: "45 min", price: "$850", summary: "Higiene profesional y prevención para mantener una sonrisa sana.", detail: "Evaluación, eliminación de sarro, pulido y recomendaciones personalizadas de higiene." },
  { id: "orthodontics", name: "Ortodoncia", icon: Braces, duration: "Valoración", price: "Desde $1,200/mes", summary: "Alineación dental con opciones discretas y seguimiento digital.", detail: "Planificación individual con brackets estéticos o alineadores, según tu diagnóstico." },
  { id: "implants", name: "Implantes", icon: BadgePlus, duration: "Plan integral", price: "Desde $18,500", summary: "Recupera función y estética con soluciones de larga duración.", detail: "Diagnóstico tridimensional, cirugía guiada y restauración con materiales de alta calidad." },
  { id: "endodontics", name: "Endodoncia", icon: Activity, duration: "90 min", price: "Desde $4,200", summary: "Tratamiento preciso para conservar dientes afectados.", detail: "Procedimiento con aislamiento y control radiográfico para aliviar dolor y preservar la pieza." },
  { id: "whitening", name: "Blanqueamiento", icon: Eraser, duration: "60 min", price: "$3,600", summary: "Aclara el tono de tus dientes de forma controlada y segura.", detail: "Protocolo en consultorio con protección de encías y guía para mantener el resultado." },
  { id: "surgery", name: "Cirugía oral", icon: ScanLine, duration: "Según diagnóstico", price: "Cotización", summary: "Procedimientos ambulatorios con acompañamiento cercano.", detail: "Extracciones, terceros molares y cirugía menor con indicaciones postoperatorias claras." },
];

export const doctors = [
  { id: 1, name: "Dra. Elena Vargas", role: "Rehabilitación e implantes", license: "CÉD. DEMO 81402", initials: "EV", tone: "sky", bio: "15 años creando planes restaurativos claros, funcionales y sin tratamientos innecesarios.", days: "Lun · Mié · Vie" },
  { id: 2, name: "Dr. Mateo Salas", role: "Ortodoncia", license: "CÉD. DEMO 90631", initials: "MS", tone: "cyan", bio: "Especialista en ortodoncia contemporánea y seguimiento digital para jóvenes y adultos.", days: "Mar · Jue · Sáb" },
  { id: 3, name: "Dra. Sofía Luna", role: "Endodoncia", license: "CÉD. DEMO 77248", initials: "SL", tone: "indigo", bio: "Atención serena y precisa para resolver dolor dental y conservar piezas naturales.", days: "Lun · Mar · Jue" },
  { id: 4, name: "Dr. Tomás Ibarra", role: "Cirugía oral", license: "CÉD. DEMO 65197", initials: "TI", tone: "teal", bio: "Cirugía ambulatoria con diagnóstico por imagen y recuperación cuidadosamente acompañada.", days: "Mié · Vie · Sáb" },
];

export const initialAppointments = [
  { id: "ND-2401", patient: "Mariana Soto", doctor: "Dra. Elena Vargas", treatment: "Implantes", date: "2026-09-19", time: "09:00", status: "Confirmada" },
  { id: "ND-2402", patient: "Diego Ramos", doctor: "Dr. Mateo Salas", treatment: "Ortodoncia", date: "2026-09-19", time: "09:45", status: "Pendiente" },
  { id: "ND-2403", patient: "Ana Lucía Peña", doctor: "Dra. Sofía Luna", treatment: "Endodoncia", date: "2026-09-19", time: "10:30", status: "Confirmada" },
  { id: "ND-2404", patient: "Jorge Leal", doctor: "Dr. Tomás Ibarra", treatment: "Cirugía oral", date: "2026-09-19", time: "11:30", status: "Completada" },
  { id: "ND-2405", patient: "Carolina Méndez", doctor: "Dra. Elena Vargas", treatment: "Limpieza dental", date: "2026-09-19", time: "12:15", status: "Pendiente" },
  { id: "ND-2406", patient: "Luis Gerardo Ortiz", doctor: "Dr. Mateo Salas", treatment: "Ortodoncia", date: "2026-09-19", time: "13:00", status: "Cancelada" },
  { id: "ND-2407", patient: "Fabiola Cruz", doctor: "Dra. Sofía Luna", treatment: "Endodoncia", date: "2026-09-19", time: "15:00", status: "Confirmada" },
  { id: "ND-2408", patient: "Mauricio Neri", doctor: "Dr. Tomás Ibarra", treatment: "Cirugía oral", date: "2026-09-19", time: "16:00", status: "Pendiente" },
  { id: "ND-2409", patient: "Regina Lozano", doctor: "Dra. Elena Vargas", treatment: "Blanqueamiento", date: "2026-09-20", time: "09:30", status: "Confirmada" },
  { id: "ND-2410", patient: "Emilio Castro", doctor: "Dr. Mateo Salas", treatment: "Ortodoncia", date: "2026-09-20", time: "11:00", status: "Pendiente" },
  { id: "ND-2411", patient: "Laura Villarreal", doctor: "Dra. Sofía Luna", treatment: "Endodoncia", date: "2026-09-20", time: "14:00", status: "Confirmada" },
  { id: "ND-2412", patient: "Santiago Garza", doctor: "Dr. Tomás Ibarra", treatment: "Implantes", date: "2026-09-20", time: "17:00", status: "Pendiente" },
];

export const initialPatients = [
  [1,"Mariana Soto","81 1042 3671","mariana.soto@correo.demo",38,"2026-09-12"],
  [2,"Diego Ramos","81 2048 1190","diego.ramos@correo.demo",24,"2026-09-05"],
  [3,"Ana Lucía Peña","81 5521 9304","ana.pena@correo.demo",47,"2026-08-28"],
  [4,"Jorge Leal","81 6630 4482","jorge.leal@correo.demo",52,"2026-09-19"],
  [5,"Carolina Méndez","81 8302 5579","carolina.mendez@correo.demo",31,"2026-08-15"],
  [6,"Luis Gerardo Ortiz","81 9322 1004","luis.ortiz@correo.demo",29,"2026-07-30"],
  [7,"Fabiola Cruz","81 1159 7350","fabiola.cruz@correo.demo",41,"2026-09-01"],
  [8,"Mauricio Neri","81 4607 2228","mauricio.neri@correo.demo",36,"2026-08-22"],
  [9,"Regina Lozano","81 7064 9113","regina.lozano@correo.demo",27,"2026-09-10"],
  [10,"Emilio Castro","81 3381 6720","emilio.castro@correo.demo",33,"2026-08-03"],
  [11,"Laura Villarreal","81 6915 3048","laura.villarreal@correo.demo",45,"2026-09-08"],
  [12,"Santiago Garza","81 2487 8561","santiago.garza@correo.demo",56,"2026-07-19"],
  [13,"Natalia Treviño","81 5041 6290","natalia.trevino@correo.demo",22,"2026-08-31"],
  [14,"Óscar Zamora","81 9180 4436","oscar.zamora@correo.demo",61,"2026-06-26"],
  [15,"Paulina Reyes","81 3775 8012","paulina.reyes@correo.demo",35,"2026-09-14"],
].map(([id,name,phone,email,age,lastVisit])=>({id,name,phone,email,age,lastVisit}));

export const formatDate = (value) => new Intl.DateTimeFormat("es-MX", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${value}T12:00:00Z`));
