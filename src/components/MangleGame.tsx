import { useState } from "react";
import {
  DndContext,
  useDraggable,
  useDroppable,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragOverlay,
  type DragEndEvent,
  type DragStartEvent,
} from "@dnd-kit/core";

type Pair = { id: string; name: string; trait: string };

const PAIRS: Pair[] = [
  {
    id: "rojo",
    name: "Mangle Rojo (Rhizophora mangle)",
    trait: "Raíces en forma de zancos. Base del ecosistema.",
  },
  {
    id: "negro",
    name: "Mangle Negro (Avicennia germinans)",
    trait: "Neumatóforos (raíces aéreas que parecen dedos).",
  },
  {
    id: "blanco",
    name: "Mangle Blanco (Laguncularia racemosa)",
    trait: "Conocido como 'bobo' por su versatilidad.",
  },
  {
    id: "zaragoza",
    name: "Mangle Zaragoza",
    trait: "Especie de transición entre manglar y bosque seco.",
  },
];

function DraggableCard({ pair }: { pair: Pair }) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id: pair.id });
  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="select-none touch-none px-4 py-3 rounded-xl border-2 font-medium shadow-sm flex items-center justify-center text-center h-full"
      style={{
        backgroundColor: "#FBF9E4",
        color: "#000000",
        borderColor: "#5B88B2",
        cursor: "grab",
        opacity: isDragging ? 0.3 : 1,
        minHeight: 96,
      }}
    >
      {pair.name}
    </div>
  );
}

function EmptySlot() {
  return (
    <div
      className="rounded-xl border-2 border-dashed flex items-center justify-center h-full"
      style={{
        backgroundColor: "rgba(91,136,178,0.1)",
        borderColor: "#5B88B2",
        minHeight: 96,
      }}
    >
      <span className="text-sm italic" style={{ color: "#5B88B2" }}>Emparejado ✓</span>
    </div>
  );
}

function DropZone({
  pair,
  matched,
}: {
  pair: Pair;
  matched: Pair | null;
}) {
  const { setNodeRef, isOver } = useDroppable({ id: `drop-${pair.id}` });
  const isCorrect = matched !== null;
  return (
    <div
      ref={setNodeRef}
      className="px-4 py-3 rounded-xl text-sm sm:text-base flex flex-col justify-center transition-colors h-full"
      style={{
        backgroundColor: isCorrect ? "#D4ECDC" : "#FBF9E4",
        color: "#000000",
        border: isCorrect ? "2px solid #2f8a5a" : "2px dashed #122C4F",
        boxShadow: isOver && !isCorrect ? "0 0 0 3px rgba(91,136,178,0.5)" : "none",
        minHeight: 96,
      }}
    >
      <div className="font-medium">{pair.trait}</div>
      {matched && (
        <div className="mt-2 text-xs sm:text-sm font-semibold" style={{ color: "#1c5a3a" }}>
          ✓ {matched.name}
        </div>
      )}
    </div>
  );
}

export default function MangleGame() {
  const [matches, setMatches] = useState<Record<string, string>>({}); // dropId -> dragId
  const [feedback, setFeedback] = useState<{ type: "ok" | "bad"; msg: string } | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 120, tolerance: 8 } }),
  );

  const remaining = PAIRS.filter((p) => !Object.values(matches).includes(p.id));
  const isDone = remaining.length === 0;

  const showFeedback = (type: "ok" | "bad", msg: string) => {
    setFeedback({ type, msg });
    setTimeout(() => setFeedback(null), 2000);
  };

  const onDragStart = (e: DragStartEvent) => setActiveId(String(e.active.id));

  const onDragEnd = (e: DragEndEvent) => {
    setActiveId(null);
    const { active, over } = e;
    if (!over) return;
    const dragId = String(active.id);
    const dropId = String(over.id).replace(/^drop-/, "");
    if (matches[dropId]) return;
    if (dragId === dropId) {
      setMatches((m) => ({ ...m, [dropId]: dragId }));
      showFeedback("ok", "✅ ¡Correcto!");
    } else {
      showFeedback("bad", "❌ Incorrecto, intenta de nuevo");
    }
  };

  const reset = () => {
    setMatches({});
    setFeedback(null);
  };

  const activePair = PAIRS.find((p) => p.id === activeId) ?? null;

  return (
    <div className="relative">
      {feedback && (
        <div
          className="fixed top-24 left-1/2 -translate-x-1/2 z-[60] px-5 py-3 rounded-xl font-semibold shadow-lg text-white"
          style={{ backgroundColor: feedback.type === "ok" ? "#2f8a5a" : "#b03a3a" }}
        >
          {feedback.msg}
        </div>
      )}

      <DndContext sensors={sensors} onDragStart={onDragStart} onDragEnd={onDragEnd}>
        {/* Desktop headers */}
        <div className="hidden md:grid grid-cols-2 gap-x-6 mb-1">
          <h4 className="font-semibold text-center uppercase tracking-wider text-sm" style={{ color: "#FBF9E4" }}>
            Especies
          </h4>
          <h4 className="font-semibold text-center uppercase tracking-wider text-sm" style={{ color: "#FBF9E4" }}>
            Características
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
          {PAIRS.map((p) => {
            const isMatched = Object.values(matches).includes(p.id);
            const matchedId = matches[p.id];
            const matched = matchedId ? PAIRS.find((x) => x.id === matchedId) ?? null : null;
            return (
              <>
                <div className="col-span-1">
                  <div className="md:hidden text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#5B88B2" }}>
                    {p.name}
                  </div>
                  {isMatched ? <EmptySlot /> : <DraggableCard pair={p} />}
                </div>
                <div className="col-span-1">
                  <div className="md:hidden text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#5B88B2" }}>
                    Característica
                  </div>
                  <DropZone pair={p} matched={matched} />
                </div>
              </>
            );
          })}
        </div>

        <DragOverlay>
          {activePair ? (
            <div
              className="px-4 py-3 rounded-xl border-2 font-medium shadow-xl flex items-center justify-center text-center"
              style={{
                backgroundColor: "#FBF9E4",
                color: "#000000",
                borderColor: "#5B88B2",
                cursor: "grabbing",
                minHeight: 96,
                minWidth: 220,
              }}
            >
              {activePair.name}
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>

      {isDone && (
        <div
          className="mt-8 p-6 rounded-xl text-center"
          style={{ backgroundColor: "#D4ECDC", color: "#000000" }}
        >
          <p className="text-lg sm:text-xl font-bold mb-4">
            🎉 ¡Excelente! Conoces los manglares de la Ciénaga Grande 🎉
          </p>
          <button
            onClick={reset}
            className="px-6 py-3 rounded-lg font-medium text-white"
            style={{ backgroundColor: "#5B88B2" }}
          >
            🔄 Reiniciar juego
          </button>
        </div>
      )}
    </div>
  );
}
