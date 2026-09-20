# Iron District

Demo web de un gimnasio de fuerza y acondicionamiento con una identidad visual industrial. El proyecto es independiente y funciona con React, Vite y React Router.

## Páginas

- `/`: presentación del gimnasio, métricas, programas, instalaciones, entrenadores, resultados y planes.
- `/classes`: catálogo de seis clases con filtros y horario semanal.
- `/membership`: comparación de planes y cuestionario para recomendar una membresía.

El cuestionario guarda las respuestas en `localStorage`. La selección de un plan abre una confirmación simulada: no crea cuentas, no envía datos y no procesa pagos. Todos los perfiles, testimonios, precios, horarios y datos de contacto son ficticios.

## Comandos

```bash
npm install
npm run dev
npm run build
npm test
```

El entorno de desarrollo se sirve en `http://127.0.0.1:5176`.

## Recursos

Las fotografías se almacenan localmente en `public/images`; la aplicación no depende de imágenes remotas durante la navegación. Las familias tipográficas Inter y Oswald se distribuyen mediante Fontsource, y los iconos proceden de Lucide.

## Verificación

La suite de Playwright recorre las rutas principales, comprueba imágenes y consola, filtros, horario, métricas, reglas del cuestionario, persistencia local, modal, fallback de imágenes, menú móvil y ausencia de desbordamiento horizontal a 375, 768 y 1440 px.
