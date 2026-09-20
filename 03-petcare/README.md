# PetCare+

Tercera demo independiente del portafolio: una clínica veterinaria ficticia con una experiencia amable, perfiles de mascotas y un flujo completo de reservación. La identidad usa verde menta, azul cielo, formas redondeadas y una composición distinta de Lúmina Studio y Brasa Norte.

**Este proyecto es una demostración para portafolio y no representa una empresa real. No presta atención veterinaria ni recibe urgencias reales.**

## Ejecutar

Requiere Node.js 20.19+ o 22.12+ y npm.

```bash
cd 03-petcare
npm install
npm run dev
```

La vista previa se abre en `http://127.0.0.1:5175`. El puerto permite ejecutar esta demo junto a los dos proyectos anteriores.

```bash
npm run build
npm run preview
```

La compilación queda en `dist/`. Para publicarla en un servidor estático, las rutas desconocidas deben servir `index.html`, como requiere React Router.

## Tecnologías

- React, Vite, JavaScript y React Router.
- CSS propio para móvil, tablet y escritorio.
- Lucide React para iconos.
- Nunito Sans y DM Sans incluidas localmente mediante Fontsource.
- `localStorage` para conservar citas ficticias en el dispositivo.
- Playwright para las comprobaciones funcionales y visuales.

No existe backend, autenticación, pago, correo, mensajería ni conexión a un sistema veterinario.

## Páginas

| Ruta            | Contenido                                                                                     |
| --------------- | --------------------------------------------------------------------------------------------- |
| `/`             | Portada, seis servicios, filosofía, equipo, proceso y testimonios ficticios.                  |
| `/services`     | Consulta general, vacunación, estética, urgencias informativas, laboratorio y cuidado dental. |
| `/appointments` | Reservación simulada en seis pasos.                                                           |
| `/my-pet`       | Perfiles de Milo y Luna, vacunas, peso, notas y citas almacenadas localmente.                 |
| `/team`         | Tres perfiles ficticios del equipo veterinario.                                               |

Las rutas desconocidas muestran una página 404. Los enlaces desde servicios, perfiles y profesionales precargan las opciones correspondientes en el flujo de citas.

## Flujo de citas

1. Seleccionar a Milo o Luna.
2. Elegir uno de los cinco servicios reservables.
3. Mostrar solamente profesionales compatibles con ese servicio.
4. Elegir una fecha dentro de los próximos 30 días.
5. Seleccionar un horario disponible.
6. Revisar los datos y confirmar que se trata de una demostración.

La agenda considera la duración de cada servicio, los días de trabajo del profesional, una anticipación mínima de una hora y los horarios ya ocupados. También evita citas superpuestas para la misma mascota. Los domingos no hay consultas.

Al confirmar se genera un folio ficticio `PC-XXXXXXXX`. La cita aparece en el perfil de la mascota y se conserva al recargar. Cancelarla libera el horario y mantiene una entrada en el historial. “Restablecer datos de demostración” elimina todas las citas creadas en este navegador.

Los perfiles, vacunas, pesos, notas, horarios, importes, testimonios y expedientes son ficticios y no constituyen información ni orientación clínica.

## Datos de demostración

- **Familia:** Sofía Martínez.
- **Milo:** Golden Retriever, 4 años, 28 kg.
- **Luna:** gata doméstica, 2 años, 4.2 kg.
- **Profesionales ficticios:** Dra. Ana Robles, Dr. Diego Salazar y MVZ Valeria Méndez.
- **Credenciales:** no se requieren.

## Organización

```text
src/
  components/    # Navegación, tarjetas, imágenes y diálogos
  data/          # Servicios, profesionales, mascotas e historiales
  hooks/         # Estado y persistencia local de citas
  pages/         # Inicio, servicios, equipo, citas y perfiles
  utils/         # Fechas, horarios y detección de solapamientos
  App.jsx        # Rutas y títulos de página
  main.jsx       # Entrada y fuentes locales
  styles.css     # Identidad visual y responsive
public/images/   # Fotografías locales
tests/           # Pruebas funcionales y visuales
```

## Verificación

```bash
npm test -- --workers=1
```

Las pruebas usan Microsoft Edge instalado. En otros sistemas puede cambiarse `channel` en `playwright.config.js` o instalar Chromium con `npx playwright install chromium` y quitar ese campo.

Se comprueban las cinco rutas, recursos locales, consola, flujo de seis pasos, validaciones, compatibilidad entre servicios y profesionales, fechas cerradas, duración y solapamientos, persistencia, horarios ocupados, cancelación, restablecimiento, almacenamiento dañado, ambos perfiles, navegación móvil y ausencia de desbordamiento a 375, 768 y 1440 px. Las capturas se guardan en `qa/`, excluida de Git.

## Recursos visuales

Fotografías de referencia descargadas de Unsplash y guardadas localmente. No representan pacientes, personal ni instalaciones reales de PetCare+.

| Archivo     | Identificador de origen          |
| ----------- | -------------------------------- |
| milo.jpg    | photo-1558788353-f76d92427f16    |
| luna.jpg    | photo-1573865526739-10659fec78a5 |
| ana.jpg     | photo-1559839734-2b71ea197ec2    |
| diego.jpg   | photo-1622253692010-333f2da6031d |
| valeria.jpg | photo-1594824476967-48c8b964273f |
| care.jpg    | photo-1548199973-03cce0bbc87b    |

Origen: `https://images.unsplash.com/<identificador>`. Las licencias de las tipografías se incluyen en sus paquetes Fontsource. La aplicación no solicita recursos externos durante su uso.
