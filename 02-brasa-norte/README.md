# Brasa Norte

Segunda demo independiente del portafolio: restaurante de parrilla contemporánea con identidad cálida, fotografía gastronómica y tipografía de carácter. Paleta rojo `#A63D2F`, crema `#F7E8CE` y carbón `#24211F`.

**Este proyecto es una demostración para portafolio y no representa una empresa real.**

## Ejecutar

Requisitos: Node.js 20.19+ o 22.12+ y npm.

```bash
cd 02-brasa-norte
npm install
npm run dev
```

Vista previa local: http://127.0.0.1:5174. El puerto 5174 permite ejecutar esta demo junto a Lúmina Studio. Si ya está ocupado, detén el proceso anterior o cambia el puerto en `scripts/dev.mjs` y `playwright.config.js`.

```bash
npm run build
npm run preview
```

La compilación queda en `dist/`. Para alojarla en un servidor estático, configura las rutas no encontradas para servir `index.html` (React Router). No está conectada a un servicio de producción.

## Tecnologías

- React, Vite, JavaScript y React Router.
- CSS propio con diseños para móvil, tablet y escritorio.
- Iconos Lucide React.
- Fuentes Barlow Condensed y DM Sans, incluidas localmente mediante Fontsource.
- Playwright para las comprobaciones funcionales y capturas.

## Páginas

| Ruta            | Contenido                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `/`             | Portada fotográfica, especialidades, filosofía del chef, valores, ambiente y llamada a reservar. |
| `/menu`         | 25 platillos y bebidas, seis categorías y precios ficticios en MXN.                              |
| `/reservations` | Formulario validado y confirmación de reservación simulada en un modal.                          |
| `/contact`      | Ubicación ficticia, horarios, croquis ilustrativo y preguntas frecuentes desplegables.           |

Las rutas desconocidas muestran una página 404. Las tarjetas de especialidades abren la categoría correcta del menú y llevan al platillo correspondiente. La categoría seleccionada se conserva en la URL.

## Reservaciones demo

- Nombre, teléfono, correo, fecha, horario y número de personas obligatorios.
- Campo opcional de notas y confirmación explícita del carácter demostrativo.
- Fechas entre hoy y los próximos 60 días, según la fecha local del navegador.
- Lunes cerrado. Último horario: 21:30 de martes a jueves, 22:30 viernes y sábado, 19:30 domingo.
- Anticipación mínima de una hora y mesas de 1 a 8 personas.
- Horarios simulados, sin consultar disponibilidad real.
- Folio ficticio con formato `BR-4821`.
- Modal nativo con foco contenido, cierre con Escape y retorno del foco al botón del formulario.
- Los datos permanecen en memoria. No hay envío, correos, llamadas, almacenamiento persistente, backend, pagos ni autenticación.
- Al cerrar la confirmación o recargar se limpia el formulario. No se requiere localStorage ni credenciales demo.

Negocio, chef, dirección, precios y productos son ficticios. El correo utiliza el dominio reservado `.example` y no envía mensajes. El croquis no es un mapa real.

## Estructura

```text
src/
  components/      # Navegación, footer, imágenes, tarjetas y confirmación
  data/            # 25 platillos y datos ficticios del restaurante
  pages/           # Inicio, menú, reservaciones y contacto
  utils/           # Fechas, horarios y validación de reservas
  App.jsx          # Navegación, títulos y rutas
  main.jsx         # Entrada y tipografías
  styles.css       # Identidad propia y responsive
public/
  images/          # Fotografías locales
  favicon.png      # Monograma BN
scripts/dev.mjs    # Arranque compatible con carpetas redirigidas de Windows
tests/            # Pruebas funcionales y visuales
```

## Verificación

```bash
npm test -- --workers=1
```

Las pruebas levantan el servidor automáticamente y usan Microsoft Edge instalado. Para otros entornos, cambia el navegador en `playwright.config.js`; puedes instalar Chromium con `npx playwright install chromium` y quitar `channel: 'msedge'`.

Se comprueban rutas, carga de imágenes, ausencia de solicitudes externas, las seis categorías, los 25 platillos, enlaces de especialidades, validación de reservas, lunes cerrado, folio, cierre del modal, preguntas frecuentes, fallback de fotografías y responsive a 375, 768 y 1440 px. Las capturas se guardan en `qa/`, excluida de Git.

## Recursos

Fotografías de referencia de Unsplash guardadas localmente. No representan platillos ni instalaciones de un negocio real.

| Archivos            | Identificador de origen          |
| ------------------- | -------------------------------- |
| hero.jpg, steak.jpg | photo-1558030006-450675393462    |
| burger.jpg          | photo-1568901346375-23c9450c58cd |
| ribs.jpg            | photo-1544025162-d76694265947    |
| grill.jpg           | photo-1709433420574-7e8b97952eed    |
| restaurant.jpg      | photo-1517248135467-4c7edcad34c4 |
| dessert.jpg         | photo-1606313564200-e75d5e30476c |
| drinks.jpg          | photo-1470337458703-46ad1756a187 |

Origen: `https://images.unsplash.com/<identificador>`. Las licencias de las fuentes están incluidas en sus paquetes Fontsource. No se cargan imágenes, tipografías ni servicios externos durante el uso de la aplicación.
