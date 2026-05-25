# Plan: Rebuild página Manglares CGSM

## Alcance
Reescribir `src/routes/index.tsx` preservando los textos de Aprende, Galería, Zona Interactiva (juego + quiz) y Referencias, añadiendo una nueva sección de Salida de Campo en formato carrusel, refrescando estilos y actualizando todas las rutas de imágenes a la convención con guiones del repo GitHub.

## Estructura de secciones (en orden)
1. Inicio
2. Aprende (acordeón existente)
3. Galería de Manglares (4 tarjetas)
4. Zona Interactiva (MangleGame + MangleQuiz, sin cambios)
5. Criapez (5 fotos + texto extendido)
6. Salida de Campo (NUEVO carrusel de 3 estaciones)
7. Referencias
8. Crédito final

## Cambios visuales globales
- Tarjetas: `rounded-[22px]`, gradiente suave (`linear-gradient(145deg, #FBF9E4, #f4efd6)`), sombra base + `hover:scale-[1.02]` con sombra más fuerte, transición `0.3s ease`.
- Emojis/iconos de títulos a `text-[1.8rem]`.
- Nav: añadir links a "Criapez", "Salida de Campo".

## Imágenes (base: `https://raw.githubusercontent.com/Darkdevir/manglar-vivo/main/Public/`)
Reemplazar las URLs actuales (que usan espacios `%20`) por las nuevas con guiones:
- `Mangle-rojo.jpg`, `Mangle-negro.jpg`, `Mangle-blanco.JPG`, `Mangle-zaragosa.jpeg`
- `Cria-1.jpg` … `Cria-5.jpg`
- Estación 1: `Fotogarza.jpg`, `Fotolago.jpg`, `Profe-4.jpg` + videos `Bandada.mp4`, `Garza.mp4`, `Lago.mp4`, `Videomanglerojo.mp4`
- Estación 2: `Mary-1.jpg`…`Mary-3.jpg`, `Profestacion2-1.jpg`…`-3.jpg`
- Estación 3: `Palito-1.jpg`, `Palito-3.jpg`, `Mangle-3.jpg`, `Manglesvarios.jpg`, `Profestacion3-1.jpg`, `Profestacion3-2.jpg`

Todas como `<img loading="lazy" draggable={false}>`. Videos con `<video controls preload="metadata">`.

## Sección Criapez
- 5 fotos: 2 arriba centradas + 3 fila inferior, *antes* del texto narrativo.
- Cita debajo: "Fotografía: María de los Ángeles Delgado Villalobos, 2026".
- Añadir párrafo final: "Estas actividades no son solo para estudiantes. Criapez abre sus puertas a quien quiera conocer de cerca la restauración de manglares, el trabajo comunitario y la riqueza de la Ciénaga. La experiencia está ahí, en la Isla del Rosario, esperando por quienes quieran aprender, sembrar y transformarse."

## Sección NUEVA: Salida de Campo (carrusel)
- Usar `src/components/ui/carousel.tsx` (shadcn/embla, ya instalado) con 3 `CarouselItem`, una por estación.
- Cada slide: título con emoji grande, descripción, grid responsive de fotos/videos con su crédito al pie.
- Flechas `CarouselPrevious`/`CarouselNext` + puntos indicadores personalizados (estado `selectedIndex` vía `setApi`).
- Swipe en móvil viene gratis con embla.

### Estación 1 🌊 Restauración y avistamiento de aves
Descripción dada. Medios: `Fotogarza.jpg`, `Fotolago.jpg`, `Profe-4.jpg`, videos `Bandada.mp4`, `Garza.mp4`, `Lago.mp4`, `Videomanglerojo.mp4`. Créditos: fotos/videos María de los Ángeles Delgado Villalobos, 2026; `Profe-4.jpg` María Margarita Rosa Sierra, 2026.

### Estación 2 🚶 Sendero ecológico y recolección de residuos
Descripción dada. `Mary-1/2/3.jpg` (María José Sánchez, 2026); `Profestacion2-1/2/3.jpg` (María Margarita Rosa Sierra, 2026).

### Estación 3 🌿 Vivero de manglar
Descripción dada. `Palito-1/3.jpg`, `Mangle-3.jpg`, `Manglesvarios.jpg` (María de los Ángeles Delgado Villalobos, 2026); `Profestacion3-1/2.jpg` (María Margarita Rosa Sierra, 2026).

## Crédito final
`<p>` centrado al fondo: "Realizado por las estudiantes María de los Ángeles Delgado Villalobos y Vanessa Ginet Zabalas Ariza" con `text-sm`, color `#5B88B2` y `opacity: 0.7`.

## Verificaciones
- Todos los nombres científicos envueltos en `<em>` (incl. *Conocarpus erectus*).
- Videos con `controls` (play/pausa/volumen nativos).
- Carrusel con flechas, dots y soporte táctil.
- Conservar `MangleGame` y `MangleQuiz` tal cual.

## Archivos
- Editar: `src/routes/index.tsx` (rewrite estructural conservando arrays `accordions`, `references`, `species`).
- Sin nuevas dependencias (embla ya viene con el carrusel shadcn).
