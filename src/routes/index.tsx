import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import MangleGame from "@/components/MangleGame";
import MangleQuiz from "@/components/MangleQuiz";
import ImageUpload from "@/components/ImageUpload";

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
    image: "https://raw.githubusercontent.com/Darkdevir/manglar-vivo/main/Public/Mangle%20rojo.jpg",
    credit: "Fuente: Aquarium de Biarritz, 2025",
    text: "Árbol de hasta 25 metros, reconocible por sus raíces en forma de zancos que parecen piernas elevándose sobre el agua. Es la base del ecosistema manglárico, ya que sus raíces atrapan sedimentos, crean nuevo suelo y sirven de refugio para peces y crustáceos (Elster et al., 1999). Su importancia radica en ser la primera línea de defensa contra la erosión costera y la 'sala cuna' de cientos de especies acuáticas.",
  },
  {
    common: "Mangle Negro",
    sci: "Avicennia germinans",
    image: "https://i.imgur.com/qG4NVuY.jpeg",
    credit: "Fuente: Flora Fauna y Cultura - Riviera Maya, 2022",
    text: "Árbol de hasta 15 metros con raíces aéreas verticales llamadas neumatóforos (parecen dedos que salen del suelo). Estas raíces permiten el intercambio de gases en suelos anegados. Es una especie altamente tolerante a la salinidad y contribuye a la estabilización del suelo y la captura de carbono azul (Bernal et al., 2024).",
  },
  {
    common: "Mangle Blanco",
    sci: "Laguncularia racemosa",
    image: "https://i.imgur.com/SGKN378.jpeg",
    credit: "Fuente: Vademécum de Salud y Ambiente, 2013",
    text: "Árbol de hasta 12 metros, conocido localmente como 'bobo' por su versatilidad y adaptación a diferentes condiciones ambientales. Sus hojas son redondeadas con dos glándulas secretoras de sal en la base. Su función principal es colonizar zonas de transición y contribuir a la diversidad estructural del manglar (Ortiz Ruiz, 2002).",
  },
  {
    common: "Mangle Zaragoza",
    sci: "Conocarpus erectus",
    image: "https://i.imgur.com/6b1AmkX.jpeg",
    credit: "Fuente: Tyler Duby, iNaturalist, 2025 (CC-BY-NC)",
    text: "Árbol o arbusto de hasta 20 metros, común en zonas de transición entre el manglar y el bosque seco. A diferencia de los demás, no tiene raíces aéreas vistosas, pero es clave como especie de conexión ecológica. Su importancia radica en que sirve de hábitat para aves migratorias y estabiliza el suelo en áreas menos inundadas (Elster et al., 1999).",
  },
];



function Index() {
  const [open, setOpen] = useState<number | null>(null);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, hash: string) => {
    e.preventDefault();
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#122C4F" }}>
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
            style={{ color: "#FBF9E4", borderColor: "#5B88B2", backgroundColor: "rgba(91,136,178,0.15)" }}
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
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium text-white transition-transform hover:scale-105"
            style={{ backgroundColor: "#5B88B2" }}
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
                <div
                  key={i}
                  className="overflow-hidden border"
                  style={{
                    backgroundColor: "#FBF9E4",
                    borderRadius: 12,
                    borderColor: "#5B88B2",
                  }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                    style={{ color: "#000000" }}
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-base sm:text-lg">{item.title}</span>
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
            className="mt-10 p-6 rounded-xl text-white text-center text-base sm:text-lg leading-relaxed"
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
            🌿 Galería de Manglares
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {species.map((s) => (
              <div
                key={s.sci}
                className="rounded-xl overflow-hidden border flex flex-col"
                style={{ backgroundColor: "#FBF9E4", borderColor: "#5B88B2", color: "#000000" }}
              >
                <ImageUpload alt={`${s.common} (${s.sci})`} initialSrc={s.image || undefined} />
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

          {/* BLOQUE 1 - JUEGO */}
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

          {/* BLOQUE 2 - TEST */}
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
            🤝 Criapez: Guardianes de la Ciénaga
          </h2>
          {/* Imágenes primero */}
          <div className="space-y-5 mb-10">
            {/* Fila 1: 2 imágenes centradas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:max-w-2xl sm:mx-auto">
              <figure
                className="rounded-xl overflow-hidden border flex flex-col"
                style={{ backgroundColor: "#FBF9E4", borderColor: "#5B88B2", color: "#000000" }}
              >
                <ImageUpload alt="Criapez - imagen 1" initialSrc="https://i.imgur.com/vkOuytO.jpeg" />
                <figcaption className="text-xs italic p-3" style={{ color: "#5B88B2" }}>
                  Fotografía: María de los Ángeles Delgado Villalobos, 2026
                </figcaption>
              </figure>
              <figure
                className="rounded-xl overflow-hidden border flex flex-col"
                style={{ backgroundColor: "#FBF9E4", borderColor: "#5B88B2", color: "#000000" }}
              >
                <ImageUpload alt="Criapez - imagen 2" initialSrc="https://i.imgur.com/sPBeq9u.jpeg" />
                <figcaption className="text-xs italic p-3" style={{ color: "#5B88B2" }}>
                  Fotografía: María de los Ángeles Delgado Villalobos, 2026
                </figcaption>
              </figure>
            </div>
            {/* Fila 2: 3 imágenes en cuadrícula */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <figure
                className="rounded-xl overflow-hidden border flex flex-col"
                style={{ backgroundColor: "#FBF9E4", borderColor: "#5B88B2", color: "#000000" }}
              >
                <ImageUpload alt="Criapez - imagen 3" initialSrc="https://i.imgur.com/2RTGZxC.jpeg" />
                <figcaption className="text-xs italic p-3" style={{ color: "#5B88B2" }}>
                  Fotografía: María de los Ángeles Delgado Villalobos, 2026
                </figcaption>
              </figure>
              <figure
                className="rounded-xl overflow-hidden border flex flex-col"
                style={{ backgroundColor: "#FBF9E4", borderColor: "#5B88B2", color: "#000000" }}
              >
                <ImageUpload alt="Criapez - imagen 4" initialSrc="https://i.imgur.com/pWbNg3N.jpeg" />
                <figcaption className="text-xs italic p-3" style={{ color: "#5B88B2" }}>
                  Fotografía: María de los Ángeles Delgado Villalobos, 2026
                </figcaption>
              </figure>
              <figure
                className="rounded-xl overflow-hidden border flex flex-col"
                style={{ backgroundColor: "#FBF9E4", borderColor: "#5B88B2", color: "#000000" }}
              >
                <ImageUpload alt="Criapez - imagen 5" initialSrc="https://i.imgur.com/wOM53TQ.jpeg" />
                <figcaption className="text-xs italic p-3" style={{ color: "#5B88B2" }}>
                  Fotografía: María de los Ángeles Delgado Villalobos, 2026
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Texto narrativo */}
          <div
            className="p-6 sm:p-8 rounded-xl space-y-5 text-base sm:text-lg leading-relaxed"
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
            className="p-6 sm:p-8 rounded-xl"
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
          <p
            className="mt-10 text-center text-sm italic"
            style={{ color: "#5B88B2", opacity: 0.85 }}
          >
            Realizado por las estudiantes María de los Ángeles Delgado Villalobos y Vanessa Ginet
            Zabalas Ariza
          </p>
        </div>
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
