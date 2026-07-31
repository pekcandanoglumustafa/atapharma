export default function Logo({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const text = variant === "light" ? "#F0F1EB" : "#0C1B13";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* rounded shield */}
        <path
          d="M20 2.5 5.5 8.2v11.1c0 8.9 6.1 14.8 14.5 18.2 8.4-3.4 14.5-9.3 14.5-18.2V8.2L20 2.5Z"
          fill="#14402C"
        />
        {/* molecule / immune node motif */}
        <circle cx="20" cy="15.5" r="3" fill="#CF9A2B" />
        <circle cx="13" cy="24" r="2.3" fill="#E4C173" />
        <circle cx="27" cy="24" r="2.3" fill="#E4C173" />
        <path
          d="M20 18.3 13.8 22.4M20 18.3l6.2 4.1"
          stroke="#8FB89E"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className="font-display text-[1.15rem] font-semibold tracking-tight"
          style={{ color: text }}
        >
          ATA Pharma
        </span>
        <span className="font-mono text-[0.55rem] uppercase tracking-[0.25em] text-moss">
          Veteriner İlaç
        </span>
      </span>
    </span>
  );
}
