# Mecha Station Lab — Portal de servicios

Sitio comercial de desarrollo web con diez demos independientes, fichas de proyecto, filtros y contacto simulado.

## Ejecutar

```sh
npm install
# En una copia nueva, instalar también las dependencias de las diez demos:
node scripts/setup.mjs
npm run build
npm run dev
```

Dirección local: http://127.0.0.1:5183. Cada demo conserva sus comandos y puertos originales. El servidor general sirve la compilación; después de editar el portal, ejecutar `npm run build:portal`. Después de editar demos o el adaptador, ejecutar `npm run build`. No hay recarga HMR en el servidor general.

## Arquitectura

- `portal/src/portfolio`: componentes, páginas, estilos y datos del sitio principal.
- `portal/src/portfolio/data/projects.js`: fuente única de las diez fichas.
- `01-*` a `10-*`: aplicaciones existentes, sin cambios en sus fuentes.
- `scripts/build.mjs`: compila cada aplicación en `dist/demo/<slug>`. Un adaptador de compilación establece el basename y las rutas de imágenes, e incorpora la DemoBar.
- `portal/public/demo-bar.js`: barra encapsulada en Shadow DOM. Reserva espacio en overlays de las demos para mantener sus controles accesibles.
- `scripts/serve.mjs`: servidor Node de archivos estáticos con fallback por aplicación, rutas profundas y metadatos por ficha.
- `scripts/capture.mjs`: renueva capturas reales del catálogo con el servidor activo.

Las demos se abren como documentos independientes. Sus estilos y bundles nunca se importan en el portal. Los cambios del adaptador afectan únicamente la salida integrada, no sus archivos originales. Al compartir origen, comparten localStorage: se conservan claves específicas por proyecto. Los datos guardados en los antiguos puertos no se migran automáticamente.

## Rutas

`/`, `/servicios`, `/portafolio`, `/portafolio/:slug`, `/contacto`.

Demos: `/demo/lumina-studio/`, `/demo/brasa-norte/`, `/demo/petcare/`, `/demo/iron-district/`, `/demo/novadent/`, `/demo/casa-raiz/`, `/demo/pixel-forge/`, `/demo/eduflow/`, `/demo/motofix/`, `/demo/flora-market/`.

Se conservan rutas internas, por ejemplo `/demo/novadent/admin/patients`. El CTA de cada ficha dirige a `/contacto?project=<slug>` y prepara un mensaje editable. El formulario no envía ni persiste datos.

## Verificación

```sh
npm test
```

Incluye recursos y enlaces de diez demos, recarga profunda, login ficticio, cambios de órdenes, carrito, formulario, filtros, 404, metadatos y responsive. Capturas en `qa/`.

## Publicación

El resultado está en `dist/`. Para usar un servidor Node, `npm run preview` sirve esta carpeta. En un hosting estático es indispensable configurar primero archivos existentes, después `/demo/<slug>/*` → `/demo/<slug>/index.html`, y finalmente rutas del portal → `/index.html`. No usar un único fallback general para las demos. El servidor Node incluye metadatos de fichas en el HTML; un hosting estático necesita prerenderizado equivalente para previews sociales por ficha.

No hay backend productivo, pagos ni autenticación real. Las empresas y los datos de las demos son ficticios. Las capacidades de APIs y bases de datos se ofrecen como servicios; no se presentan como integraciones implementadas en estas demos.
