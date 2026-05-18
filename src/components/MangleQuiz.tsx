import { useState } from "react";

type Q = { q: string; options: string[]; correct: number };

const QUESTIONS: Q[] = [
  {
    q: '¿Por qué los manglares son considerados "salas cuna"?',
    options: [
      "Porque son bonitos",
      "Porque sus raíces sirven como refugio y zona de reproducción para peces y crustáceos",
      "Porque tienen flores grandes",
      "Porque producen mucha madera",
    ],
    correct: 1,
  },
  {
    q: '¿Qué es el "carbono azul"?',
    options: [
      "El color del agua",
      "El carbono capturado por ecosistemas marinos como manglares",
      "Un tipo de pez",
      "Una bacteria",
    ],
    correct: 1,
  },
  {
    q: "¿Cuál es uno de los principales desafíos para la conservación de manglares en la Ciénaga Grande?",
    options: [
      "La Vía Parque Isla de Salamanca que alteró flujos de agua",
      "El turismo masivo",
      "La sobrepoblación de peces",
      "El frío extremo",
    ],
    correct: 0,
  },
  {
    q: "¿Qué residuos peligrosos se encontraron en la salida de campo?",
    options: [
      "Latas y vidrio",
      "Plásticos y cartón",
      "Pañales, jeringas y baterías",
      "Restos de comida",
    ],
    correct: 2,
  },
  {
    q: '¿Qué es la "zona de castigo" en los viveros de manglar?',
    options: [
      "Un lugar para castigar plantas",
      "Un espacio para aclimatar plántulas al sol antes del trasplante",
      "Un tipo de suelo tóxico",
      "Una enfermedad del mangle",
    ],
    correct: 1,
  },
  {
    q: "¿Cuál de estas NO es una especie de mangle en la Ciénaga Grande?",
    options: ["Mangle Rojo", "Mangle Negro", "Mangle Azul", "Mangle Zaragoza"],
    correct: 2,
  },
  {
    q: "¿Qué tradición cultural mencionada conserva la comunidad de Criapez?",
    options: [
      "El Carnaval de Barranquilla",
      'La danza del "Pilón"',
      "La Feria de la Candelaria",
      "El Festival de la Leyenda Vallenata",
    ],
    correct: 1,
  },
  {
    q: "¿Cómo ayuda la sostenibilidad a las comunidades ribereñas?",
    options: [
      "Solo protege el agua",
      "Permite diversificación económica con turismo comunitario y negocios verdes",
      "Prohíbe la pesca",
      "Elimina los manglares",
    ],
    correct: 1,
  },
  {
    q: "¿Qué debe hacerse con la semilla de mangle rojo al sembrar?",
    options: [
      "Colocarla con la raíz hacia arriba",
      "Colocarla con la raíz hacia abajo y sembrarla rápido (antes de 15 días)",
      "Dejarla secar al sol",
      "Guardarla un mes antes de sembrar",
    ],
    correct: 1,
  },
  {
    q: '¿La Ciénaga Grande es considerada un "aeropuerto" de...?',
    options: ["Aviones", "Aves migratorias", "Barcos", "Peces voladores"],
    correct: 1,
  },
];

const LETTERS = ["A", "B", "C", "D"];

export default function MangleQuiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [graded, setGraded] = useState(false);

  const score = QUESTIONS.reduce(
    (acc, q, i) => acc + (answers[i] === q.correct ? 1 : 0),
    0,
  );

  const reset = () => {
    setAnswers({});
    setGraded(false);
    window.scrollTo({ top: document.getElementById("interactiva")?.offsetTop ?? 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-6">
      {QUESTIONS.map((q, i) => {
        const selected = answers[i];
        return (
          <div
            key={i}
            className="rounded-xl p-5 sm:p-6 text-left"
            style={{ backgroundColor: "#FBF9E4", color: "#000000" }}
          >
            <p className="font-semibold mb-4 text-base sm:text-lg">
              {i + 1}. {q.q}
            </p>
            <div className="space-y-2">
              {q.options.map((opt, idx) => {
                const isSelected = selected === idx;
                const isCorrect = idx === q.correct;
                let bg = "transparent";
                let border = "#5B88B2";
                let color = "#000000";
                if (graded) {
                  if (isCorrect) {
                    bg = "#D4ECDC";
                    border = "#2f8a5a";
                  } else if (isSelected && !isCorrect) {
                    bg = "#F8D7D7";
                    border = "#b03a3a";
                  }
                } else if (isSelected) {
                  bg = "rgba(91,136,178,0.2)";
                }
                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={graded}
                    onClick={() => setAnswers((a) => ({ ...a, [i]: idx }))}
                    className="w-full flex items-start gap-3 text-left px-4 py-3 rounded-lg border-2 transition-colors"
                    style={{ backgroundColor: bg, borderColor: border, color }}
                  >
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm text-white"
                      style={{ backgroundColor: "#5B88B2" }}
                    >
                      {LETTERS[idx]}
                    </span>
                    <span className="text-sm sm:text-base">{opt}</span>
                  </button>
                );
              })}
            </div>
            {graded && selected !== q.correct && (
              <p className="mt-3 text-sm font-medium" style={{ color: "#b03a3a" }}>
                Respuesta correcta: {LETTERS[q.correct]}) {q.options[q.correct]}
              </p>
            )}
          </div>
        );
      })}

      {!graded ? (
        <div className="text-center">
          <button
            onClick={() => {
              setGraded(true);
              window.scrollTo({ top: 0, behavior: "auto" });
              setTimeout(() => {
                document
                  .getElementById("quiz-result")
                  ?.scrollIntoView({ behavior: "smooth", block: "center" });
              }, 50);
            }}
            className="px-8 py-3 rounded-lg font-medium text-white text-lg"
            style={{ backgroundColor: "#5B88B2" }}
          >
            ✅ Calificar test
          </button>
        </div>
      ) : (
        <div
          id="quiz-result"
          className="rounded-xl p-6 text-center"
          style={{ backgroundColor: "#FBF9E4", color: "#000000" }}
        >
          <p className="text-2xl sm:text-3xl font-bold mb-4">
            Obtuviste {score}/{QUESTIONS.length}
          </p>
          <p className="mb-6 text-base">
            {score === 10
              ? "¡Perfecto! Eres un guardián de los manglares 🌿"
              : score >= 7
                ? "¡Muy bien! Sigue aprendiendo sobre la Ciénaga Grande."
                : "Repasa la sección Aprende y vuelve a intentarlo."}
          </p>
          <button
            onClick={reset}
            className="px-6 py-3 rounded-lg font-medium text-white"
            style={{ backgroundColor: "#122C4F" }}
          >
            🔄 Reintentar test
          </button>
        </div>
      )}
    </div>
  );
}
