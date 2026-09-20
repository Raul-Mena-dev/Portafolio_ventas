import{BatteryCharging,Disc3,Droplets,Fan,FileSearch,Gauge}from"lucide-react";
export const statuses=["Vehículo recibido","Diagnóstico","Autorización","Reparación","Pruebas","Listo para entrega"];
export const services=[
 {id:"tune",name:"Afinación",icon:Gauge,pos:"tr",summary:"Rendimiento estable, consumo eficiente y una revisión que previene fallas.",includes:["Bujías y filtros","Escaneo preventivo","Niveles y puntos de seguridad"],from:"Desde $2,450"},
 {id:"brakes",name:"Frenos",icon:Disc3,pos:"tl",summary:"Inspección y servicio del sistema para recuperar una respuesta segura.",includes:["Balatas y discos","Líquido de frenos","Prueba de manejo"],from:"Desde $1,850"},
 {id:"suspension",name:"Suspensión",icon:BatteryCharging,pos:"bl",summary:"Diagnóstico de ruidos, estabilidad, amortiguadores y componentes de dirección.",includes:["Inspección en elevador","Prueba de holguras","Reporte visual"],from:"Desde $950"},
 {id:"diagnostics",name:"Diagnóstico",icon:FileSearch,pos:"tr",summary:"Escaneo y revisión técnica para encontrar la causa antes de cambiar piezas.",includes:["Escáner multimarca","Pruebas eléctricas","Presupuesto explicado"],from:"Desde $750"},
 {id:"ac",name:"Aire acondicionado",icon:Fan,pos:"tr",summary:"Revisión de presión, temperatura y componentes para recuperar el confort.",includes:["Prueba de fugas","Carga de refrigerante","Filtro de cabina"],from:"Desde $1,200"},
 {id:"oil",name:"Cambio de aceite",icon:Droplets,pos:"br",summary:"Aceite y filtro adecuados para proteger el motor y mantener su desempeño.",includes:["Aceite especificado","Filtro nuevo","Revisión de 15 puntos"],from:"Desde $1,150"}
];
export const initialOrders=[
 {order:"MXF-10284",vehicle:"Nissan Versa 2020",plate:"RTA-284-B",client:"Miguel Ortega",phone:"81 2034 8812",service:"Afinación mayor",status:"Reparación",date:"2026-09-18",advisor:"Iván Ruiz",estimate:4850,notes:"Afinación en proceso. Se autorizó cambio de bujías y filtro de aire."},
 {order:"MXF-10285",vehicle:"Mazda CX-5 2021",plate:"SKE-194-A",client:"Laura Méndez",phone:"81 3301 5609",service:"Frenos delanteros",status:"Diagnóstico",date:"2026-09-19",advisor:"Sofía Lara",estimate:3200,notes:"En revisión de discos y balatas."},
 {order:"MXF-10286",vehicle:"Volkswagen Jetta 2019",plate:"PXL-620-C",client:"Arturo Leal",phone:"81 1178 4420",service:"Suspensión",status:"Autorización",date:"2026-09-19",advisor:"Iván Ruiz",estimate:6900,notes:"Presupuesto enviado al cliente."},
 {order:"MXF-10287",vehicle:"Toyota Corolla 2022",plate:"RMB-733-D",client:"Natalia Cruz",phone:"81 8014 2921",service:"Cambio de aceite",status:"Listo para entrega",date:"2026-09-18",advisor:"Sofía Lara",estimate:1450,notes:"Servicio terminado y unidad lavada."},
 {order:"MXF-10288",vehicle:"Kia Forte 2020",plate:"STN-405-B",client:"Daniel Garza",phone:"81 6702 1055",service:"Diagnóstico eléctrico",status:"Pruebas",date:"2026-09-17",advisor:"Mateo Gil",estimate:2800,notes:"Reparación terminada, realizando pruebas de carga."},
 {order:"MXF-10289",vehicle:"Honda CR-V 2018",plate:"RUV-912-A",client:"Fernanda Soto",phone:"81 9460 3287",service:"Aire acondicionado",status:"Reparación",date:"2026-09-19",advisor:"Mateo Gil",estimate:4100,notes:"Sustitución de válvula en proceso."},
 {order:"MXF-10290",vehicle:"Chevrolet Aveo 2021",plate:"SKA-118-C",client:"Óscar Peña",phone:"81 4582 7301",service:"Afinación",status:"Vehículo recibido",date:"2026-09-19",advisor:"Iván Ruiz",estimate:0,notes:"Unidad recibida; pendiente de asignación."},
 {order:"MXF-10291",vehicle:"Hyundai Tucson 2020",plate:"RZM-640-D",client:"Paola Reyes",phone:"81 2907 6148",service:"Frenos",status:"Diagnóstico",date:"2026-09-19",advisor:"Sofía Lara",estimate:0,notes:"Prueba de manejo inicial completada."},
 {order:"MXF-10292",vehicle:"Ford Escape 2017",plate:"SRF-329-B",client:"Eduardo Mora",phone:"81 5174 8902",service:"Suspensión",status:"Autorización",date:"2026-09-18",advisor:"Mateo Gil",estimate:7850,notes:"Esperando autorización de amortiguadores."},
 {order:"MXF-10293",vehicle:"Suzuki Swift 2023",plate:"RKW-881-A",client:"Andrea Luna",phone:"81 8350 4476",service:"Cambio de aceite",status:"Pruebas",date:"2026-09-19",advisor:"Iván Ruiz",estimate:1280,notes:"Verificando niveles y presión de neumáticos."},
 {order:"MXF-10294",vehicle:"Seat Ibiza 2019",plate:"PLM-507-C",client:"Raúl Castro",phone:"81 1846 9350",service:"Diagnóstico",status:"Reparación",date:"2026-09-16",advisor:"Sofía Lara",estimate:3600,notes:"Reparación de sensor de oxígeno."},
 {order:"MXF-10295",vehicle:"Renault Duster 2021",plate:"RHG-246-D",client:"Mónica Villarreal",phone:"81 7043 2289",service:"Aire acondicionado",status:"Listo para entrega",date:"2026-09-18",advisor:"Mateo Gil",estimate:2250,notes:"Sistema funcionando en especificación."}
];
export const money=n=>new Intl.NumberFormat("es-MX",{style:"currency",currency:"MXN",maximumFractionDigits:0}).format(n);
