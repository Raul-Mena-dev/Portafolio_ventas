# NovaDent

Sitio público y sistema administrativo demostrativo para una clínica dental ficticia. Combina una experiencia comercial orientada a pacientes con un panel tipo SaaS para gestionar citas, pacientes, tratamientos y equipo clínico.

> Este proyecto es una demostración para portafolio y no representa una empresa real.

## Tecnologías

- React 19 y React Router
- Vite
- CSS responsive propio
- Lucide React
- Fontsource (DM Sans y Manrope)
- Playwright para pruebas funcionales y visuales

## Funcionalidades

- Sitio público con inicio, seis tratamientos, cuatro especialistas y agenda de citas.
- Formulario de cita en tres pasos con validación y folio simulado.
- Acceso administrativo demostrativo con rutas protegidas localmente.
- Dashboard con métricas, gráfica de ingresos, distribución de tratamientos y agenda.
- Cambio de estado para citas con persistencia en `localStorage`.
- CRUD de 15 pacientes: crear, editar, eliminar, buscar y restablecer datos.
- Directorios de tratamientos y doctores, configuración local y estados vacíos.
- Diseño responsive para escritorio, tablet y móvil.
- Imagen local con fallback; la navegación no depende de recursos remotos.

## Credenciales demo

- Usuario: `admin@novadent.demo`
- Contraseña: `demo123`

La autenticación es únicamente una simulación en el navegador. No protege información real y no se conecta con ningún servidor.

## Ejecución

```bash
npm install
npm run dev
```

La demo se abre en `http://127.0.0.1:5177`.

Para compilar y ejecutar la suite:

```bash
npm run build
npm test
```

Las solicitudes de cita, ajustes, estados y pacientes permanecen en el navegador cuando corresponde. Ningún dato se envía fuera del dispositivo y no se realizan cobros, llamadas ni comunicaciones reales.
