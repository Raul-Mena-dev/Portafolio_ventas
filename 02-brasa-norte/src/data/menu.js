export const categories = [
  "Entradas",
  "Parrilla",
  "Hamburguesas",
  "Especialidades",
  "Postres",
  "Bebidas",
];
export const dishes = [
  {
    id: "esquites",
    category: "Entradas",
    name: "Esquites de la casa",
    description:
      "Maíz tatemado, mayonesa de chile morita, queso añejo y un toque de limón.",
    price: 115,
    tag: "Vegetariano",
  },
  {
    id: "tuetanos",
    category: "Entradas",
    name: "Tuétanos al carbón",
    description:
      "Huesos de res asados, sal de grano, salsa macha y tortillas recién hechas.",
    price: 195,
    tag: "Para compartir",
  },
  {
    id: "queso",
    category: "Entradas",
    name: "Queso fundido norteño",
    description: "Mezcla de quesos, chorizo artesanal y tortillas de harina.",
    price: 165,
  },
  {
    id: "coliflor",
    category: "Entradas",
    name: "Coliflor a las brasas",
    description:
      "Coliflor rostizada, adobo suave y crema de pepita con hierbas.",
    price: 145,
    tag: "Vegetariano",
  },
  {
    id: "ribeye",
    category: "Parrilla",
    name: "Rib eye a las brasas",
    description:
      "350 g de corte jugoso, costra de sal, papas rústicas y chimichurri de la casa.",
    price: 485,
    tag: "Favorito de la casa",
    image: "steak",
  },
  {
    id: "arrachera",
    category: "Parrilla",
    name: "Arrachera del norte",
    description:
      "300 g de arrachera marinada, cebollitas cambray, guacamole y tortillas.",
    price: 345,
  },
  {
    id: "picana",
    category: "Parrilla",
    name: "Picaña al carbón",
    description:
      "350 g de picaña con su capa de grasa dorada, verduras y salsa de ajo.",
    price: 425,
  },
  {
    id: "costillas",
    category: "Parrilla",
    name: "Costillas de cocción lenta",
    description:
      "Costillas de cerdo glaseadas con BBQ de piloncillo, elote y ensalada fresca.",
    price: 365,
    image: "ribs",
  },
  {
    id: "pollo",
    category: "Parrilla",
    name: "Pollo de campo",
    description:
      "Medio pollo marinado en cítricos, a fuego lento, con vegetales de temporada.",
    price: 275,
  },
  {
    id: "burger-brasa",
    category: "Hamburguesas",
    name: "La Brasa",
    description:
      "Res a la parrilla, cheddar madurado, tocino, cebolla caramelizada y pan brioche.",
    price: 245,
    tag: "La imperdible",
    image: "burger",
  },
  {
    id: "burger-norte",
    category: "Hamburguesas",
    name: "La Norteña",
    description:
      "Res, queso asadero, chile poblano, guacamole y mayonesa de chipotle.",
    price: 235,
  },
  {
    id: "burger-setas",
    category: "Hamburguesas",
    name: "La de Setas",
    description:
      "Portobello a las brasas, queso de cabra, rúcula y cebolla encurtida.",
    price: 215,
    tag: "Vegetariano",
  },
  {
    id: "burger-doble",
    category: "Hamburguesas",
    name: "La Doble Fuego",
    description:
      "Doble carne, doble cheddar, jalapeños tatemados y salsa de la casa.",
    price: 295,
  },
  {
    id: "tacos",
    category: "Especialidades",
    name: "Tacos de short rib",
    description:
      "Tres tacos de costilla cocinada por 8 horas, cebolla morada y salsa de habanero.",
    price: 265,
    tag: "Del chef",
  },
  {
    id: "salmon",
    category: "Especialidades",
    name: "Salmón a la leña",
    description:
      "Salmón de 220 g, mantequilla de limón, puré de camote y espárragos.",
    price: 355,
  },
  {
    id: "tabla",
    category: "Especialidades",
    name: "Tabla Brasa Norte",
    description:
      "Arrachera, costilla, chorizo, queso asado y guarniciones. Ideal para dos.",
    price: 795,
    tag: "Para compartir",
  },
  {
    id: "huerto",
    category: "Especialidades",
    name: "Del huerto al fuego",
    description:
      "Verduras de temporada al carbón, hummus de garbanzo y vinagreta de hierbas.",
    price: 225,
    tag: "Vegetariano",
  },
  {
    id: "brownie",
    category: "Postres",
    name: "Brownie tibio",
    description: "Chocolate semiamargo, helado de vainilla y sal de mar.",
    price: 135,
    image: "dessert",
  },
  {
    id: "elote",
    category: "Postres",
    name: "Pan de elote",
    description:
      "Horneado en casa, con crema de vainilla y caramelo de piloncillo.",
    price: 115,
  },
  {
    id: "pina",
    category: "Postres",
    name: "Piña a las brasas",
    description: "Piña caramelizada al carbón, canela y sorbete de coco.",
    price: 105,
  },
  {
    id: "limonada",
    category: "Bebidas",
    name: "Limonada tatemada",
    description: "Limón a la parrilla, agua mineral y romero. Sin alcohol.",
    price: 75,
  },
  {
    id: "jamaica",
    category: "Bebidas",
    name: "Jamaica del norte",
    description: "Infusión fría de jamaica, jengibre y naranja. Sin alcohol.",
    price: 65,
  },
  {
    id: "cafe",
    category: "Bebidas",
    name: "Café de olla",
    description: "Café de altura, canela y piloncillo, preparado al momento.",
    price: 55,
  },
  {
    id: "cerveza",
    category: "Bebidas",
    name: "Cerveza artesanal",
    description:
      "Selección ficticia de cervezas locales: lager, ámbar y stout. 355 ml.",
    price: 95,
  },
  {
    id: "mezcal",
    category: "Bebidas",
    name: "Norte ahumado",
    description: "Mezcal, piña asada, limón y un borde de sal de chile.",
    price: 165,
  },
];
export const money = (value) =>
  new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(value);
export const featured = ["ribeye", "burger-brasa", "costillas"].map((id) =>
  dishes.find((d) => d.id === id),
);
