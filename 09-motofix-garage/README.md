# MotoFix Garage

Demo web independiente para un taller automotriz: sitio comercial, solicitud de cotización, seguimiento de órdenes y portal operativo.

## Ejecutar

```bash
npm install
npm run dev
```

Abre `http://127.0.0.1:5181`. El panel está en `/admin` y la orden pública de ejemplo es `MXF-10284`.

## Funciones

- Cinco rutas públicas: inicio, servicios, cotización, seguimiento y contacto.
- Cotización validada con confirmación local.
- Seguimiento visual de seis etapas.
- Panel con dashboard, 12 órdenes editables, clientes, vehículos y servicios.
- Los cambios de estado se guardan en `localStorage` y aparecen en `/track`.
- Diseño responsive con navegación móvil y tablas desplazables.

## Verificación

```bash
npm run build
npm test
```

El proyecto usa datos ficticios y no envía información a servidores externos.
