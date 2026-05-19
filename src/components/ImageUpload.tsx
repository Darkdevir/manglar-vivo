import { useRef, useState } from "react";

export default function ImageUpload({ alt }: { alt: string }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [src, setSrc] = useState<string | null>(null);

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setSrc(url);
  };

  return (
    <button
      type="button"
      onClick={() => inputRef.current?.click()}
      className="group w-full aspect-[4/3] flex items-center justify-center text-center text-sm px-4 relative overflow-hidden cursor-pointer"
      style={{ backgroundColor: "rgba(91,136,178,0.15)", color: "#5B88B2" }}
      aria-label={`Subir imagen de ${alt}`}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <span className="flex flex-col items-center gap-2 transition-transform group-hover:scale-105">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
          <span className="font-medium">Click para subir imagen</span>
        </span>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={onFile}
      />
    </button>
  );
}
