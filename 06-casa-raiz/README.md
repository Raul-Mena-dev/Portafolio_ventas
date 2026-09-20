# Casa Raíz

Catálogo inmobiliario demostrativo con una dirección visual editorial y natural. Permite explorar 15 propiedades ficticias, combinar filtros, abrir detalles dinámicos y guardar favoritos localmente.

> Este proyecto es una demostración para portafolio y no representa una empresa real.

## Tecnologías

- React 19 y React Router
- Vite
- CSS responsive propio
- Lucide React
- Fontsource (Cormorant y Manrope)
- Playwright

## Funcionalidades

- Portada editorial con buscador por ubicación y tipo.
- Catálogo de 15 casas, departamentos, terrenos y locales.
- Filtros combinables de ubicación, precio, recámaras, baños y tipo.
- Orden por precio y estados sin resultados.
- Rutas dinámicas en `/properties/:id`.
- Galería, precio, superficie, amenidades, entorno y propiedades relacionadas.
- Favoritos persistentes con `localStorage` y página `/favorites`.
- Solicitud de visita validada y simulada; no envía información.
- Menú y filtros adaptados para móvil.
- Recursos gráficos locales con fondo alternativo integrado.

## Ejecución

```bash
npm install
npm run dev
```

La demo se sirve en `http://127.0.0.1:5178`.

```bash
npm run build
npm test
```

Todos los nombres, ubicaciones precisas, precios, teléfonos y propiedades son ficticios. La aplicación no se conecta con una API, base de datos ni servicio inmobiliario real.
