# Pixel Forge

Sitio demostrativo para un estudio independiente de videojuegos. Presenta cuatro universos originales mediante una interfaz experimental inspirada en HUD, señales digitales y arte conceptual.

> Este proyecto es una demostración para portafolio y no representa una empresa real.

## Tecnologías

- React 19 y React Router
- Vite
- CSS responsive y animaciones propias
- Lucide React
- Fontsource (Space Grotesk y Space Mono)
- Playwright

## Funcionalidades

- Portada animada con selector interactivo de juegos.
- Archivo `/games` con cuatro títulos ficticios.
- Detalles dinámicos en `/games/:slug`.
- Género, plataformas, lanzamiento, descripción, sistemas, arte conceptual y equipo por juego.
- Página `/studio` con historia, valores, equipo y vacantes simuladas.
- Preferencia local para sonidos de interfaz; no reproduce audio real.
- Formulario de novedades validado y completamente local.
- Estados 404 y juego inexistente con navegación de regreso.
- Diseño adaptado para escritorio, tablet y móvil.
- Recursos visuales almacenados localmente con fondos alternativos.

## Juegos

- **NEON VOID:** Cyberpunk Metroidvania.
- **ASTRAL TACTICS:** Tactical RPG.
- **TINY KINGDOM:** Idle Strategy.
- **EMBER RUN:** Action Roguelike.

## Ejecución

```bash
npm install
npm run dev
```

La demo se abre en `http://127.0.0.1:5179`.

```bash
npm run build
npm test
```

Todos los juegos, perfiles, lanzamientos, vacantes y direcciones de contacto son ficticios. Ningún formulario transmite información fuera del navegador.
