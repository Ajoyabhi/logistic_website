import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-head text-sm font-600 uppercase tracking-[0.2em] text-accent-500">
      {children}
    </span>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  intro,
  center,
  light,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className={`mt-3 font-head text-3xl font-600 uppercase leading-tight md:text-[40px] ${light ? "text-white" : "text-navy-800"}`}>
        {title}
      </h2>
      {intro && <p className={`mt-4 text-[17px] leading-relaxed ${light ? "text-white/75" : "text-mute"}`}>{intro}</p>}
    </div>
  );
}

export function Breadcrumb({ trail }: { trail: { label: string; href?: string }[] }) {
  return (
    <nav className="text-sm text-white/70">
      <ol className="flex flex-wrap items-center gap-2">
        <li><Link href="/" className="hover:text-white">Home</Link></li>
        {trail.map((t) => (
          <li key={t.label} className="flex items-center gap-2">
            <span className="opacity-50">/</span>
            {t.href ? <Link href={t.href} className="hover:text-white">{t.label}</Link> : <span className="text-white">{t.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  title,
  subtitle,
  image,
  trail,
}: {
  title: string;
  subtitle?: string;
  image: string;
  trail: { label: string; href?: string }[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900">
      <Image src={image} alt="" fill priority className="object-cover opacity-35" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/80 to-navy-800/40" />
      <div className="shell relative py-20 md:py-28">
        <Breadcrumb trail={trail} />
        <h1 className="mt-5 max-w-4xl font-head text-4xl font-600 uppercase leading-[1.05] text-white md:text-6xl">
          {title}
        </h1>
        {subtitle && <p className="mt-5 max-w-2xl text-lg text-white/80">{subtitle}</p>}
      </div>
      <div className="absolute bottom-0 left-0 h-1.5 w-full bg-accent-500" />
    </section>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
}) {
  const styles = {
    primary: "bg-accent-500 text-white hover:bg-accent-600",
    outline: "border border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white",
    ghost: "border border-white/40 text-white hover:bg-white/10",
  }[variant];
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-sm px-6 py-3 font-700 uppercase tracking-wide transition ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}

export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="link-arrow">
      {children} <Icon name="arrow" size={18} />
    </Link>
  );
}

export function CardImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </div>
  );
}
