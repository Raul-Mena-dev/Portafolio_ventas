# Lúmina Studio

Demo editorial de un estudio ficticio de arquitectura e interiores. Este es el primer proyecto del portafolio y funciona de manera independiente.

**Este proyecto es una demostración para portafolio y no representa una empresa real.**

## Ejecutar

Requiere Node.js 20.19+ o 22.12+ y npm.

```bash
cd 01-lumina-studio
npm install
npm run dev
```

Abre la dirección local indicada por Vite. Para generar la versión de producción:

```bash
npm run build
npm run preview
```

## Tecnologías

React, Vite, JavaScript, React Router, CSS y Lucide React. Tipografías Cormorant Garamond y Manrope distribuidas localmente mediante Fontsource. Sin backend, autenticación, pagos ni servicios externos en tiempo de ejecución.

## Páginas y funcionalidades

- `/`: portada, proyectos destacados, filosofía, servicios, proceso y testimonio.
- `/projects`: ocho proyectos y filtros por Arquitectura, Interiores y Comercial. El filtro se conserva en la URL.
- `/projects/:id`: ficha con cliente, ubicación, superficie, año, tipo, descripción, materiales y galería editorial. Navegación al siguiente proyecto y transiciones con respeto a movimiento reducido.
- `/contact`: validación accesible, mensajes por campo y confirmación de solicitud simulada. Los datos no se envían ni persisten. Recargar borra el formulario.
- Rutas desconocidas y proyectos inexistentes muestran una página 404 con salida al catálogo.
- Menú móvil, estados activos y focus, enlace para saltar al contenido, imágenes con fallback y carga diferida.

No se usa localStorage porque este proyecto no requiere persistencia. No hay credenciales demo. Nombres, clientes, ubicaciones específicas y testimonios son ficticios; las fotografías son referencias visuales, no obras del estudio.

## Organización

```text
src/
  components/    # Navegación, pie, imágenes y tarjetas
  data/          # Ocho registros de proyectos
  pages/         # Inicio, catálogo, detalle y contacto
  App.jsx        # Rutas y títulos de página
  main.jsx       # Entrada y fuentes locales
  styles.css     # Identidad visual y responsive
public/images/   # Fotografías locales
tests/           # Pruebas de navegación, formulario y responsive
```

## Revisar

```bash
npm exec playwright -- test --workers=1
```

Las pruebas usan Microsoft Edge instalado y levantan el servidor automáticamente. Si usas otro sistema, cambia `channel` en `playwright.config.js` por tu navegador compatible. Cubren las once rutas de contenido, filtros, formulario, navegación móvil y desbordamiento a 375, 768 y 1440 px. Las capturas se guardan en `qa/` (excluida de Git).

Para alojar la compilación, configura tu servidor estático para redirigir las rutas desconocidas a `index.html`, como requiere BrowserRouter. No se ha conectado ni publicado a ningún servicio de producción.

## Recursos visuales

Fotografías de referencia descargadas de Unsplash y guardadas en `public/images`. Identificadores de origen:

| Archivo       | Fotografía                       |
| ------------- | -------------------------------- |
| horizonte.jpg | photo-1600607687939-ce8a6c25118c |
| nara.jpg      | photo-1600210492486-724fe5c67fb0 |
| loft.jpg      | photo-1600607687920-4e2a09cf159d |
| valle.jpg     | photo-1600047509807-ba8f99d2cdde |
| norte.jpg     | photo-1497366811353-6870744d04b2 |
| arena.jpg     | photo-1600566753190-17f0baa2a6c3 |
| m27.jpg       | photo-1600607688969-a5bfcd646154 |
| olivo.jpg     | photo-1600573472591-ee6b68d14c68 |
| interior.jpg  | photo-1600210491892-03d54c0aaf87 |

URL de origen: `https://images.unsplash.com/<identificador>`. Las licencias de las fuentes se incluyen en sus paquetes Fontsource.
