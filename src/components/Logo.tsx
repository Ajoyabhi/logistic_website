import Link from "next/link";

export default function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const text = variant === "light" ? "#ffffff" : "#0b2545";
  return (
    <Link href="/" aria-label="Nexora Movers home" className="inline-flex items-center gap-2.5">
      <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M20 2L36 11v18L20 38 4 29V11z" fill="#0b2545" />
        <path d="M12 27V13l8 6 8-6v14" stroke="#f26a1b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M12 13l8 6 8-6" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.55" />
      </svg>
      <span className="font-head text-[22px] font-600 leading-none tracking-wide" style={{ color: text }}>
        NEXORA
        <span className="ml-1 font-400 text-accent-500">MOVERS</span>
      </span>
    </Link>
  );
}
