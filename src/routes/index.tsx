import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import MangleGame from "@/components/MangleGame";
import MangleQuiz from "@/components/MangleQuiz";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manglares de la Ciénaga Grande — Conservación y Educación" },
      {
        name: "description",
        content:
          "Educación ambiental sobre la conservación de manglares en la Ciénaga Grande (Magdalena, Colombia) y la comunidad de pescadores de Criapez.",
      },
    ],
  }),
  component: Index,
});

const REPO = "https://raw.githubusercontent.com/Darkdevir/manglar-vivo/main/Public";

const CARD_STYLE: React.CSSProperties = {
  backgroundImage: "linear-gradient(145deg, #FBF9E4 0%, #f4efd6 100%)",
  borderColor: "#5B88B2",
  color: "#000000",
  borderRadius: 22,
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
};

const cardClass =
  "border overflow-hidden flex flex-col hover:scale-[1.02] hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)]";

const accordions = [
  {
    title: "🌿 1. Importancia de los manglares",
    body: "Los manglares constituyen uno de los ecosistemas más importantes de la Ciénaga Grande, debido a que representan la base ecológica de la cual depende gran parte de la biodiversidad de la región (Elster et al., 1999). Estos ecosistemas desempeñan funciones fundamentales en la protección y equilibrio ambiental de las zonas costeras, ya que sus raíces sirven como refugio, área de reproducción y zonas de desove para diversas especies de peces, crustáceos y otros organismos acuáticos. Por esta razón, los manglares son considerados 'salas cuna' naturales que garantizan la permanencia de numerosas especies de importancia ecológica y económica (Elster et al., 1999). Los manglares también cumplen una función de filtración y descontaminación del agua, contribuyendo a mejorar la calidad hídrica mediante la retención de sedimentos y contaminantes. Actúan como barreras naturales frente a fenómenos marinos y climáticos, disminuyendo el impacto de vientos fuertes, oleaje y erosión costera.",
  },
  {
    title: "🌊 2. Mitigación del cambio climático (carbono azul)",
    body: "Los manglares contribuyen significativamente a la mitigación del cambio climático debido a su capacidad para capturar y almacenar grandes cantidades de carbono atmosférico, conocido como 'carbono azul' (Bernal et al., 2024). Los manglares colombianos almacenan aproximadamente 96,351 kt de carbono, llegando a almacenar hasta 10 veces más carbono que los ecosistemas terrestres (Bernal et al., 2024). Gracias a esta función, ayudan a disminuir la concentración de gases de efecto invernadero y contribuyen a la regulación de la temperatura ambiental. Adicionalmente, estos ecosistemas desempeñan un papel fundamental en la protección de las costas frente a los efectos asociados al cambio climático, especialmente la erosión costera y el aumento del nivel del mar.",
  },
  {
    title: "🔥 3. Desafíos para la conservación",
    body: "La conservación de los manglares en la Ciénaga Grande enfrenta diversos desafíos. Uno de los principales problemas corresponde a la degradación ocasionada por obras de infraestructura mal planificadas, especialmente la construcción de la Vía Parque Isla de Salamanca, la cual alteró los flujos naturales de agua y ocasionó el deterioro de extensas áreas de bosque de manglar, con una pérdida estimada de 30,000 hectáreas de manglar por hipersalinización (Elster et al., 1999). Otro desafío importante es la contaminación por residuos sólidos: plásticos, icopor, zapatos, cartón, y también residuos peligrosos como pañales desechables, jeringas y baterías (Garcés-Ordóñez & Bayona Arenas, 2019). Las actividades humanas como la tala indiscriminada y la falta de conciencia ambiental han contribuido históricamente a la degradación. A ello se suman plagas como la oruga conocida como 'oreja de venado', además de cangrejos e iguanas que consumen los brotes de las plántulas y dificultan los procesos de restauración (Elster et al., 1999).",
  },
  {
    title: "🐟 4. Afectaciones del cambio climático en la biodiversidad",
    body: "El cambio climático ha generado importantes alteraciones en los ecosistemas de la Ciénaga Grande. Entre las principales consecuencias se encuentran el incremento de las temperaturas y las variaciones en los niveles de salinidad del agua, factores que han ocasionado episodios de mortandad masiva de peces y alteraciones en las dinámicas ecológicas del ecosistema (Espinosa Díaz et al., 2023). Las comunidades locales han percibido un aumento en la intensidad de fenómenos naturales como tormentas y huracanes, los cuales afectan la disponibilidad de recursos pesqueros, la estabilidad de los manglares y la supervivencia de múltiples especies.",
  },
  {
    title: "🤝 5. Acciones de adaptación en la región",
    body: "En la región de la Ciénaga Grande se han implementado diversas estrategias de adaptación. La restauración participativa de manglares mediante la siembra de especies nativas como mangle rojo, negro y blanco en zonas degradadas (Ortiz Ruiz, 2002). La educación ambiental a través de la Cátedra de la Ciénaga Grande en instituciones educativas. La articulación entre conocimiento científico y saberes tradicionales de pescadores, mediante estrategias de ciencia ciudadana (INVEMAR & GCFI, 2023). El aprovechamiento de residuos sólidos mediante iniciativas de reciclaje y economía circular. Y el turismo regenerativo y científico como modelo económico sostenible.",
  },
  {
    title: "🌱 6. Importancia de la sostenibilidad para comunidades ribereñas",
    body: "La sostenibilidad es fundamental para garantizar el bienestar económico, social y ambiental de las comunidades ribereñas. Este enfoque permite que las actividades productivas se desarrollen de manera responsable, asegurando la conservación de recursos para futuras generaciones. Además de la pesca artesanal, la sostenibilidad ha favorecido la diversificación económica mediante el turismo comunitario, regenerativo y científico, así como 'negocios verdes' asociados al reciclaje y la restauración ambiental (INVEMAR & GCFI, 2023).",
  },
  {
    title: "🌿 7. Beneficios de los viveros de manglar",
    body: "Los viveros de manglar permiten la restauración de áreas degradadas y favorecen la recuperación de ecosistemas afectados (Ortiz Ruiz, 2002). Ayudan a mitigar el cambio climático por su capacidad de captura de carbono. Las raíces de los manglares sirven como refugio y áreas de reproducción para especies acuáticas. Desde el punto de vista social y económico, los viveros fomentan alternativas productivas sostenibles como el turismo científico, y fortalecen el tejido social mediante jornadas comunitarias y educación ambiental.",
  },
  {
    title: "🛠️ 8. Técnicas de cultivo en vivero",
    body: "El cultivo de plántulas de manglar requiere técnicas específicas: preparación del sustrato con mezcla de lodo, arena y nutrientes naturales. Para el mangle rojo, la semilla debe ubicarse con la raíz hacia abajo y usarse rápidamente antes de 15 días (Ortiz Ruiz, 2002). Las plántulas pasan por un proceso de aclimatación en la 'zona de castigo' (exposición temporal al sol) antes del trasplante definitivo. Se requiere control constante de plagas (orugas, cangrejos, iguanas) y mantenimiento hídrico adecuado.",
  },
  {
    title: "🌳 9. Especies de manglar identificadas",
    body: (
      <>
        En la Ciénaga Grande y Pueblo Viejo se identificaron cuatro especies: El MANGLE ROJO (<em>Rhizophora mangle</em>), base del ecosistema con raíces en forma de zancos; el MANGLE NEGRO (<em>Avicennia germinans</em>), con raíces aéreas llamadas neumatóforos; el MANGLE BLANCO (<em>Laguncularia racemosa</em>), conocido como 'bobo' por su versatilidad; y el MANGLAR ZARAGOZA (<em>Conocarpus erectus</em>), una especie de transición entre el manglar y el bosque seco (Elster et al., 1999; Ortiz Ruiz, 2002).
      </>
    ),
  },
  {
    title: "🎭 10. Cultura y tradición local",
    body: "La comunidad de pescadores de Criapez en Pueblo Viejo conserva tradiciones como la danza del 'Pilón', donde hombres disfrazados realizan versos burlescos. También se conserva el uso medicinal de la corteza del mangle rojo para tratar afecciones cutáneas. La articulación entre el conocimiento científico y el saber tradicional ha permitido desarrollar proyectos de restauración más exitosos a través de estrategias de ciencia ciudadana (INVEMAR & GCFI, 2023).",
  },
];

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#aprende", label: "Aprende" },
  { href: "#galeria", label: "Galería" },
  { href: "#interactiva", label: "Zona Interactiva" },
  { href: "#criapez", label: "Criapez" },
  { href: "#salida", label: "Salida de Campo" },
  { href: "#referencias", label: "Referencias" },
];

const references = [
  "Garcés-Ordóñez, O., & Bayona Arenas, M. R. (2019). Impactos de la contaminación por basura marina en el ecosistema de manglar de la Ciénaga Grande de Santa Marta, Caribe colombiano. Revista Ciencias Marinas y Costeras, 11(2), 134-154.",
  "Elster, C., Perdomo, L., & Schnetter, M. L. (1999). Impact of ecological factors on the regeneration of mangroves in the Ciénaga Grande de Santa Marta, Colombia. Hydrobiologia, 413, 35-46.",
  "Bernal, J., Alfonso, L. P., Burbano, V. I., Vargas-Domínguez, S., González, M. F., Agudelo, J. E., & Campos-Rozo, J. I. (2024). Quantifying Colombian blue carbon sinks from coastal mangroves. Revista de la Academia Colombiana de Ciencias Exactas, Físicas y Naturales, 48(188).",
  "Instituto de Investigaciones Marinas y Costeras José Benito Vives de Andréis - INVEMAR & Gulf and Caribbean Fisheries Institute - GCFI. (2023). Ciencia ciudadana como estrategia de gestión de basura marina en la Reserva de Biósfera Ciénaga Grande de Santa Marta. INVEMAR.",
  "Ortiz Ruiz, J. J. (2002). Reforestación de manglar en la Ciénaga Grande de Santa Marta, Caribe colombiano. En Memorias del XI Seminario Latinoamericano y II Congreso Colombiano de Ciencias del Mar (pp. 1-6). FAO.",
  "Espinosa Díaz, L. F., Rueda Hernández, M., Martínez, A., Correa Viloria, E., Varela Cabello, K., Serrano Ramírez, H., Díaz Serrano, L. A., Velásquez Arrieta, R., Cortes, I. C., Rojas, Y., Sierra, A. M., Dussan, M., & Ojeda Ochoa, K. A. (2023). Monitoreo de las condiciones ambientales y los cambios estructurales y funcionales de las comunidades vegetales y de los recursos pesqueros durante la rehabilitación de la Ciénaga Grande de Santa Marta (Conjunto de datos). OBIS Colombia. https://doi.org/10.15472/2poedl",
];

const species = [
  {
    common: "Mangle Rojo",
    sci: "Rhizophora mangle",
    image: `${REPO}/Mangle-rojo.jpg`,
    credit: "Fuente: Aquarium de Biarritz, 2025",
    text: "Árbol de hasta 25 metros, reconocible por sus raíces en forma de zancos que parecen piernas elevándose sobre el agua. Es la base del ecosistema manglárico, ya que sus raíces atrapan sedimentos, crean nuevo suelo y sirven de refugio para peces y crustáceos (Elster et al., 1999). Su importancia radica en ser la primera línea de defensa contra la erosión costera y la 'sala cuna' de cientos de especies acuáticas.",
  },
  {
    common: "Mangle Negro",
    sci: "Avicennia germinans",
    image: `${REPO}/Mangle-negro.jpg`,
    credit: "Fuente: Flora Fauna y Cultura - Riviera Maya, 2022",
    text: "Árbol de hasta 15 metros con raíces aéreas verticales llamadas neumatóforos (parecen dedos que salen del suelo). Estas raíces permiten el intercambio de gases en suelos anegados. Es una especie altamente tolerante a la salinidad y contribuye a la estabilización del suelo y la captura de carbono azul (Bernal et al., 2024).",
  },
  {
    common: "Mangle Blanco",
    sci: "Laguncularia racemosa",
    image: `${REPO}/Mangle-blanco.JPG`,
    credit: "Fuente: Vademécum de Salud y Ambiente, 2013",
    text: "Árbol de hasta 12 metros, conocido localmente como 'bobo' por su versatilidad y adaptación a diferentes condiciones ambientales. Sus hojas son redondeadas con dos glándulas secretoras de sal en la base. Su función principal es colonizar zonas de transición y contribuir a la diversidad estructural del manglar (Ortiz Ruiz, 2002).",
  },
  {
    common: "Mangle Zaragoza",
    sci: "Conocarpus erectus",
    image: `${REPO}/Mangle-zaragosa.jpeg`,
    credit: "Fuente: Tyler Duby, iNaturalist, 2025 (CC-BY-NC)",
    text: "Árbol o arbusto de hasta 20 metros, común en zonas de transición entre el manglar y el bosque seco. A diferencia de los demás, no tiene raíces aéreas vistosas, pero es clave como especie de conexión ecológica. Su importancia radica en que sirve de hábitat para aves migratorias y estabiliza el suelo en áreas menos inundadas (Elster et al., 1999).",
  },
];

type MediaItem = { type: "image" | "video"; src: string; credit: string; alt: string };

const MDV = "Foto: María de los Ángeles Delgado Villalobos, 2026";
const MDV_V = "Video: María de los Ángeles Delgado Villalobos, 2026";
const MRS = "Foto: María Margarita Rosa Sierra, 2026";
const MJS = "Foto: María José Sánchez, 2026";

const stations: { emoji: string; title: string; description: string; media: MediaItem[] }[] = [
  {
    emoji: "🌊",
    title: "Estación 1 · Restauración y avistamiento de aves",
    description:
      "En lancha observamos aves migratorias (garzas, pelícanos). Cada estudiante sembró un mangle en zona degradada, adoptando simbólicamente su propio árbol.",
    media: [
      { type: "image", src: `${REPO}/Fotogarza.jpg`, credit: MDV, alt: "Garza en la ciénaga" },
      { type: "image", src: `${REPO}/Fotolago.jpg`, credit: MDV, alt: "Vista del lago" },
      { type: "image", src: `${REPO}/Mangleylago.jpg`, credit: MDV, alt: "Mangle y lago" },
      { type: "image", src: `${REPO}/Profe-4.jpg`, credit: MRS, alt: "Salida con la profesora" },
      { type: "video", src: `${REPO}/Bandada.mp4`, credit: MDV_V, alt: "Bandada de aves" },
      { type: "video", src: `${REPO}/Garza.mp4`, credit: MDV_V, alt: "Garza en vuelo" },
      { type: "video", src: `${REPO}/Lago.mp4`, credit: MDV_V, alt: "Lago en la ciénaga" },
      { type: "video", src: `${REPO}/Videomanglerojo.mp4`, credit: MDV_V, alt: "Mangle rojo" },
    ],
  },
  {
    emoji: "🚶",
    title: "Estación 2 · Sendero ecológico y recolección de residuos",
    description:
      "Caminata por sendero educativo: recogimos plásticos, icopor y residuos aprovechables. Aprendimos a separar residuos en la fuente.",
    media: [
      { type: "image", src: `${REPO}/Mary-1.jpg`, credit: MJS, alt: "Sendero ecológico 1" },
      { type: "image", src: `${REPO}/Mary-2.jpg`, credit: MJS, alt: "Sendero ecológico 2" },
      { type: "image", src: `${REPO}/Mary-3.jpg`, credit: MJS, alt: "Sendero ecológico 3" },
      { type: "image", src: `${REPO}/Profeestacion2-1.jpg`, credit: MRS, alt: "Estación 2 - 1" },
      { type: "image", src: `${REPO}/Profeestacion2-2.jpg`, credit: MRS, alt: "Estación 2 - 2" },
      { type: "image", src: `${REPO}/Profeestacion2-3.jpg`, credit: MRS, alt: "Estación 2 - 3" },
    ],
  },
  {
    emoji: "🌿",
    title: "Estación 3 · Vivero de manglar",
    description:
      "Preparamos sustrato (lodo + arena + nutrientes), llenamos bolsas y sembramos plántulas de mangle rojo, negro, blanco y zaragoza.",
    media: [
      { type: "image", src: `${REPO}/Palito-1.jpg`, credit: MDV, alt: "Plántula 1" },
      { type: "image", src: `${REPO}/Palito-3.jpg`, credit: MDV, alt: "Plántula 3" },
      { type: "image", src: `${REPO}/Mangle-3.jpg`, credit: MDV, alt: "Mangle 3" },
      { type: "image", src: `${REPO}/Manglesvarios.jpg`, credit: MDV, alt: "Varios mangles" },
      { type: "image", src: `${REPO}/Profeestacion3-1.jpg`, credit: MRS, alt: "Estación 3 - 1" },
      { type: "image", src: `${REPO}/Profeestacion3-2.jpg`, credit: MRS, alt: "Estación 3 - 2" },
      { type: "image", src: `${REPO}/Profeestacion3-3.jpg`, credit: MRS, alt: "Estación 3 - 3" },
    ],
  },
];

const criapezImages = [1, 2, 3, 4, 5].map((i) => `${REPO}/Cria-${i}.jpg`);

function CriapezFigure({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className={cardClass} style={CARD_STYLE}>
      <div className="overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
          draggable={false}
        />
      </div>
      <figcaption className="text-xs italic p-3" style={{ color: "#5B88B2" }}>
        Fotografía: María de los Ángeles Delgado Villalobos, 2026
      </figcaption>
    </figure>
  );
}

function MediaTile({ item }: { item: MediaItem }) {
  return (
    <figure className={cardClass} style={CARD_STYLE}>
      <div className="overflow-hidden">
        {item.type === "image" ? (
          <img
            src={item.src}
            alt={item.alt}
            className="w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
            draggable={false}
          />
        ) : (
          <video
            src={item.src}
            controls
            preload="metadata"
            className="w-full aspect-[4/3] object-cover bg-black"
          />
        )}
      </div>
      <figcaption className="text-xs italic p-3" style={{ color: "#5B88B2" }}>
        {item.credit}
      </figcaption>
    </figure>
  );
}

function StationCarousel({ media }: { media: MediaItem[] }) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  const updateActive = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const w = el.clientWidth;
    if (w === 0) return;
    setActive(Math.round(el.scrollLeft / w));
  };

  const scrollToIndex = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
    setActive(i);
  };

  const next = () => scrollToIndex(active >= media.length - 1 ? 0 : active + 1);
  const prev = () => scrollToIndex(active <= 0 ? media.length - 1 : active - 1);

  return (
    <div className="relative px-10 sm:px-12">
      <div
        ref={scrollerRef}
        onScroll={updateActive}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2"
        style={{ scrollbarWidth: "thin" }}
      >
        {media.map((m) => (
          <div key={m.src} className="snap-start shrink-0 w-full sm:w-[48%] md:w-[32%]">
            <MediaTile item={m} />
          </div>
        ))}
      </div>
      <button
        onClick={prev}
        aria-label="Anterior"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#122C4F] z-10"
        style={{ backgroundColor: "#5B88B2" }}
      >
        ←
      </button>
      <button
        onClick={next}
        aria-label="Siguiente"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#122C4F] z-10"
        style={{ backgroundColor: "#5B88B2" }}
      >
        →
      </button>
      <div className="flex justify-center gap-2 mt-4">
        {media.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            aria-label={`Ir a item ${i + 1}`}
            className="h-3 rounded-full transition-all"
            style={{
              width: active === i ? 28 : 12,
              backgroundColor: active === i ? "#5B88B2" : "#FBF9E4",
              opacity: active === i ? 1 : 0.5,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function Index() {
  const [open, setOpen] = useState<number | null>(null);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, hash: string) => {
    e.preventDefault();
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundImage: "linear-gradient(180deg, #122C4F 0%, #1a3a5f 100%)" }}
    >
      {/* Fondo decorativo: siluetas de manglares, raíces y olas */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{ opacity: 0.12 }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 1600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="waves" x="0" y="0" width="200" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M0 20 Q 50 0 100 20 T 200 20"
                stroke="#FBF9E4"
                strokeWidth="1.5"
                fill="none"
              />
            </pattern>
            <pattern id="leaves" x="0" y="0" width="180" height="180" patternUnits="userSpaceOnUse">
              <path
                d="M90 30 Q 130 80 90 150 Q 50 80 90 30 Z"
                fill="#5B88B2"
                opacity="0.6"
              />
              <path d="M90 30 L 90 150" stroke="#FBF9E4" strokeWidth="0.8" opacity="0.5" />
            </pattern>
          </defs>
          {/* Bandas de olas */}
          <rect x="0" y="0" width="1200" height="1600" fill="url(#waves)" opacity="0.35" />
          {/* Hojas dispersas */}
          <rect x="0" y="0" width="1200" height="1600" fill="url(#leaves)" opacity="0.25" />
          {/* Siluetas de manglares con raíces */}
          <g fill="#FBF9E4" opacity="0.55">
            {/* Manglar izquierdo */}
            <ellipse cx="150" cy="280" rx="120" ry="80" />
            <ellipse cx="120" cy="220" rx="80" ry="55" />
            <ellipse cx="190" cy="220" rx="70" ry="50" />
            <path
              d="M150 350 L 130 520 M 150 350 L 100 540 M 150 350 L 170 520 M 150 350 L 200 540 M 150 350 L 80 530 M 150 350 L 220 530"
              stroke="#FBF9E4"
              strokeWidth="3"
              fill="none"
            />
            {/* Manglar derecho */}
            <ellipse cx="1050" cy="900" rx="140" ry="90" />
            <ellipse cx="1010" cy="830" rx="90" ry="60" />
            <ellipse cx="1100" cy="830" rx="80" ry="55" />
            <path
              d="M1050 980 L 1020 1180 M 1050 980 L 990 1200 M 1050 980 L 1080 1180 M 1050 980 L 1120 1200 M 1050 980 L 950 1190 M 1050 980 L 1150 1190"
              stroke="#FBF9E4"
              strokeWidth="3"
              fill="none"
            />
            {/* Manglar centro-bajo */}
            <ellipse cx="600" cy="1380" rx="160" ry="100" />
            <ellipse cx="540" cy="1300" rx="100" ry="65" />
            <ellipse cx="660" cy="1300" rx="100" ry="65" />
            <path
              d="M600 1470 L 560 1600 M 600 1470 L 530 1600 M 600 1470 L 640 1600 M 600 1470 L 680 1600 M 600 1470 L 490 1600 M 600 1470 L 710 1600"
              stroke="#FBF9E4"
              strokeWidth="3"
              fill="none"
            />
          </g>
        </svg>
      </div>

      <div className="relative z-10">


      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{ backgroundColor: "#122C4F", borderColor: "#5B88B2" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <span className="font-semibold tracking-tight" style={{ color: "#FBF9E4" }}>
            🌿 Manglares CGSM
          </span>
          <ul className="flex flex-wrap gap-1 sm:gap-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => scrollTo(e, l.href)}
                  className="px-3 py-2 rounded-md text-sm transition-colors hover:bg-[#5B88B2]/30"
                  style={{ color: "#FBF9E4" }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* INICIO */}
      <section
        id="inicio"
        className="pt-32 pb-20 px-4 sm:px-6 flex items-center justify-center min-h-screen"
      >
        <div className="max-w-3xl mx-auto text-center">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider mb-6 border"
            style={{
              color: "#FBF9E4",
              borderColor: "#5B88B2",
              backgroundColor: "rgba(91,136,178,0.15)",
            }}
          >
            ECOSISTEMA RAMSAR · MAGDALENA, COLOMBIA
          </span>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
            style={{ color: "#FBF9E4" }}
          >
            Manglares de la Ciénaga Grande: Guardianes del Agua y la Vida
          </h1>
          <p className="text-lg sm:text-xl mb-6" style={{ color: "#5B88B2" }}>
            Educación ambiental para la conservación de un ecosistema Ramsar en el Magdalena, Colombia
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-10" style={{ color: "#FBF9E4" }}>
            Estudiantes de Ingeniería Agronómica de la Universidad del Magdalena visitaron Pueblo
            Viejo y la Ciénaga Grande para conocer de cerca los procesos de restauración de
            manglares. Allí compartieron con la comunidad de pescadores de Criapez, quienes trabajan
            día a día por recuperar este ecosistema vital para la vida del Caribe colombiano.
          </p>
          <button
            onClick={(e) => scrollTo(e, "#aprende")}
            className="inline-flex items-center gap-2 px-8 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-[#122C4F]"
            style={{ backgroundColor: "#5B88B2", borderRadius: 40 }}
          >
            Explorar →
          </button>
        </div>
      </section>

      {/* APRENDE */}
      <section id="aprende" className="py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-10 text-center"
            style={{ color: "#FBF9E4" }}
          >
            Aprende
          </h2>

          <div className="space-y-4">
            {accordions.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className={`${cardClass} border`} style={CARD_STYLE}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                    style={{ color: "#000000" }}
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-base sm:text-lg">
                      <span className="text-[1.8rem] align-middle mr-2">
                        {item.title.split(" ")[0]}
                      </span>
                      {item.title.substring(item.title.indexOf(" ") + 1)}
                    </span>
                    <span
                      className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-white text-xl font-bold"
                      style={{ backgroundColor: "#5B88B2" }}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      className="px-5 pb-5 pt-1 text-sm sm:text-base leading-relaxed border-t"
                      style={{ color: "#000000", borderColor: "#5B88B2" }}
                    >
                      {item.body}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div
            className="mt-10 p-6 rounded-[22px] text-white text-center text-base sm:text-lg leading-relaxed"
            style={{ backgroundColor: "#5B88B2" }}
          >
            La Ciénaga Grande es un humedal de importancia internacional RAMSAR y un "aeropuerto" de
            aves migratorias. Su conservación depende de la educación ambiental y el trabajo
            conjunto entre comunidades, pescadores, universidades y autoridades.
          </div>
        </div>
      </section>

      {/* GALERÍA DE MANGLARES */}
      <section id="galeria" className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-10 text-center"
            style={{ color: "#FBF9E4" }}
          >
            <span className="text-[1.8rem] align-middle mr-2">🌿</span>
            Galería de Manglares
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {species.map((s) => (
              <div key={s.sci} className={`${cardClass} border`} style={CARD_STYLE}>
                <div className="overflow-hidden">
                  <img
                    src={s.image}
                    alt={`${s.common} (${s.sci})`}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
                <div className="p-5 flex flex-col gap-3">
                  <h3 className="text-xl font-bold">
                    {s.common} (<em>{s.sci}</em>)
                  </h3>
                  <p className="text-xs italic" style={{ color: "#5B88B2" }}>
                    {s.credit}
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZONA INTERACTIVA */}
      <section id="interactiva" className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-10 text-center"
            style={{ color: "#FBF9E4" }}
          >
            Zona Interactiva
          </h2>

          <div className="mb-20">
            <h3
              className="text-2xl sm:text-3xl font-bold mb-3 text-center"
              style={{ color: "#FBF9E4" }}
            >
              🌿 Empareja las Especies de Mangle 🌊
            </h3>
            <p className="text-center mb-8 text-sm sm:text-base" style={{ color: "#5B88B2" }}>
              Arrastra cada especie hacia su característica correcta.
            </p>
            <MangleGame />
          </div>

          <div>
            <h3
              className="text-2xl sm:text-3xl font-bold mb-3 text-center"
              style={{ color: "#FBF9E4" }}
            >
              📝 Pon a prueba tus conocimientos
            </h3>
            <p className="text-center mb-8 text-sm sm:text-base" style={{ color: "#5B88B2" }}>
              10 preguntas de opción múltiple. ¡Mucha suerte!
            </p>
            <MangleQuiz />
          </div>
        </div>
      </section>

      {/* CRIAPEZ */}
      <section id="criapez" className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-10 text-center"
            style={{ color: "#FBF9E4" }}
          >
            <span className="text-[1.8rem] align-middle mr-2">🤝</span>
            Criapez: Guardianes de la Ciénaga
          </h2>

          <div className="space-y-5 mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:max-w-2xl sm:mx-auto">
              <CriapezFigure src={criapezImages[0]} alt="Criapez - imagen 1" />
              <CriapezFigure src={criapezImages[1]} alt="Criapez - imagen 2" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <CriapezFigure src={criapezImages[2]} alt="Criapez - imagen 3" />
              <CriapezFigure src={criapezImages[3]} alt="Criapez - imagen 4" />
              <CriapezFigure src={criapezImages[4]} alt="Criapez - imagen 5" />
            </div>
          </div>

          <div
            className="p-6 sm:p-8 rounded-[22px] space-y-5 text-base sm:text-lg leading-relaxed"
            style={{ backgroundColor: "#FBF9E4", color: "#000000" }}
          >
            <p>
              En la Isla del Rosario, dentro de la Ciénaga Grande, trabaja la Asociación de
              Pescadores Artesanales, Amigos del Puerto, conocidos como Criapez. Lo que comenzó
              como un grupo de pescadores se ha convertido hoy en una Entidad sin Ánimo de Lucro
              que lidera la restauración de manglares y el cuidado del territorio.
            </p>
            <p>
              Actualmente son 23 asociados, incluyendo jóvenes y mujeres, y llevan 28 años de
              trabajo formal —los cumplen en julio de 2026. Hace unos 15 años comenzaron a
              gestionar residuos sólidos, y desde hace ocho o diez años se dedican con fuerza a la
              restauración ecológica.
            </p>
            <p>
              Entre lo que hacen, cultivan peces sábalo en estanques, mantienen un vivero propio
              con plántulas de mangle rojo, negro y blanco, y han logrado recuperar zonas criticas
              de la Vía Parque Isla de Salamanca.
            </p>
            <p>
              También reciben estudiantes y académicos para hacer turismo científico y
              comunitario, y promueven la Cátedra de la Ciénaga Grande en las escuelas locales.
            </p>
            <p>
              Una de sus mayores fortalezas es la alianza con la Universidad del Magdalena, que
              les ha permitido unir el conocimiento tradicional del pescador con el conocimiento
              científico. Así han logrado que sus proyectos de restauración sean más exitosos que
              muchos diseñados solo desde una oficina.
            </p>
            <p>
              Su visión va más allá del beneficio inmediato: buscan retribuirle a la naturaleza lo
              que les ha dado y asegurar que las futuras generaciones puedan seguir viviendo de la
              ciénaga. Han pasado de sentirse víctimas de los problemas ambientales a ser
              protagonistas de las soluciones.
            </p>
            <p>
              Estas actividades no son solo para estudiantes. Criapez abre sus puertas a quien
              quiera conocer de cerca la restauración de manglares, el trabajo comunitario y la
              riqueza de la Ciénaga. La experiencia está ahí, en la Isla del Rosario, esperando
              por quienes quieran aprender, sembrar y transformarse.
            </p>
          </div>
        </div>
      </section>

      {/* SALIDA DE CAMPO */}
      <section id="salida" className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3 text-center"
            style={{ color: "#FBF9E4" }}
          >
            <span className="text-[1.8rem] align-middle mr-2">🌱</span>
            Nuestra Salida de Campo: Vive la Ciénaga
          </h2>
          <p className="text-center mb-10 text-sm sm:text-base" style={{ color: "#5B88B2" }}>
            Tres estaciones para conocer, restaurar y proteger el manglar.
          </p>

          <div className="space-y-12">
            {stations.map((st) => (
              <div key={st.title} className="p-6 sm:p-8 border" style={CARD_STYLE}>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 flex items-center gap-3">
                  <span className="text-[1.8rem]">{st.emoji}</span>
                  {st.title}
                </h3>
                <p className="text-base sm:text-lg leading-relaxed mb-6">{st.description}</p>
                <StationCarousel media={st.media} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REFERENCIAS */}
      <section id="referencias" className="py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-8 text-center"
            style={{ color: "#FBF9E4" }}
          >
            Referencias
          </h2>
          <div
            className="p-6 sm:p-8 rounded-[22px]"
            style={{ backgroundColor: "#FBF9E4", color: "#000000" }}
          >
            <ul className="space-y-3 list-disc list-inside">
              {references.map((r) => (
                <li key={r} className="text-base sm:text-lg">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CRÉDITO FINAL */}
      <section className="px-4 pb-10">
        <p
          className="text-center text-sm italic"
          style={{ color: "#5B88B2", opacity: 0.7 }}
        >
          Realizado por las estudiantes María de los Ángeles Delgado Villalobos y Vanessa Ginet
          Zabalas Ariza
        </p>
      </section>

      <footer
        className="py-8 px-4 text-center text-sm border-t"
        style={{ color: "#FBF9E4", borderColor: "#5B88B2" }}
      >
        © Universidad del Magdalena · Ingeniería Agronómica
      </footer>
    </div>
  );
}
