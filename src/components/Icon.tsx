import type { SVGProps } from "react";

type IconName =
  | "plane" | "car" | "leaf" | "cross" | "bag" | "chip"
  | "search" | "mail" | "phone" | "globe" | "chevron" | "arrow"
  | "quote" | "book" | "track" | "pin" | "menu" | "close"
  | "ship" | "warehouse" | "cpu" | "route" | "linkedin" | "x" | "youtube"
  | "check" | "leaf2" | "shield" | "clock"
  | "box" | "truck" | "rupee" | "bolt" | "star" | "headset" | "handshake"
  | "home" | "building" | "users" | "sofa" | "calendar";

const paths: Record<IconName, React.ReactNode> = {
  plane: <path d="M2 16l20-6-9 12-2-5-9-1z M13 10l4-6" />,
  car: <path d="M3 13l2-5a2 2 0 012-1h10a2 2 0 012 1l2 5v5h-3v-2H6v2H3v-5z M6 16h.01M18 16h.01" />,
  leaf: <path d="M11 20A7 7 0 014 13c0-5 6-9 16-10 1 8-3 16-9 17z M4 20c4-5 8-7 12-8" />,
  cross: <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z" />,
  bag: <path d="M6 8h12l-1 12H7L6 8z M9 8V6a3 3 0 016 0v2" />,
  chip: <path d="M7 7h10v10H7z M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />,
  cpu: <path d="M7 7h10v10H7z M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />,
  ship: <path d="M3 15l1.5 5h15L21 15 12 12 3 15z M12 12V6M8 8h8M12 3v3" />,
  warehouse: <path d="M3 21V9l9-5 9 5v12 M7 21v-6h10v6 M9 15v6M15 15v6" />,
  route: <path d="M6 19a3 3 0 100-6h9a3 3 0 100-6H6 M6 5v.01M18 19v.01" />,
  search: <path d="M11 4a7 7 0 105 12 7 7 0 00-5-12z M21 21l-4.5-4.5" />,
  mail: <path d="M3 6h18v12H3z M3 7l9 6 9-6" />,
  phone: <path d="M5 4h4l2 5-3 2a12 12 0 005 5l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />,
  globe: <path d="M12 3a9 9 0 100 18 9 9 0 000-18z M3 12h18 M12 3c3 3 3 15 0 18 M12 3c-3 3-3 15 0 18" />,
  pin: <path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z M12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />,
  chevron: <path d="M6 9l6 6 6-6" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  quote: <path d="M4 5h16v10H8l-4 4V5z M8 9h8M8 12h5" />,
  book: <path d="M4 5h9a3 3 0 013 3v11a2 2 0 00-2-2H4V5z M20 5h-4a3 3 0 00-3 3v11a2 2 0 012-2h5V5z" />,
  track: <path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z M9 10l2 2 4-4" />,
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  check: <path d="M4 12l5 5L20 6" />,
  leaf2: <path d="M11 20A7 7 0 014 13c0-5 6-9 16-10 1 8-3 16-9 17z M4 20c4-5 8-7 12-8" />,
  shield: <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z M9 12l2 2 4-4" />,
  clock: <path d="M12 3a9 9 0 100 18 9 9 0 000-18z M12 7v5l3 2" />,
  box: <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z M4 7.5l8 4.5 8-4.5 M12 12v9 M8 5.2l8 4.6" />,
  home: <path d="M3 11l9-7 9 7 M5 10v10h14V10 M10 20v-6h4v6" />,
  building: <path d="M4 21V4h11v17 M15 9h5v12 M7 7h2M7 10h2M7 13h2M7 16h2M17 12h1M17 15h1M17 18h1" />,
  users: <path d="M8 11a3 3 0 100-6 3 3 0 000 6z M2 20a6 6 0 0112 0 M16.5 5.3a3 3 0 010 5.4 M17 20a6 6 0 00-3-5.2" />,
  sofa: <path d="M4 11V8a2 2 0 012-2h12a2 2 0 012 2v3 M3 12a2 2 0 012 2v3h14v-3a2 2 0 012-2 2 2 0 00-2-2 2 2 0 00-2 2v1H7v-1a2 2 0 00-2-2 2 2 0 00-2 2z M6 20v-3M18 20v-3" />,
  calendar: <path d="M4 5h16v16H4z M4 9h16 M8 3v4M16 3v4" />,
  truck: <path d="M3 6h11v9H3z M14 9h4l3 3v3h-7z M7.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z M17.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />,
  rupee: <path d="M7 4h10 M7 8h10 M7 4c5 0 7 1 7 4s-2 4-7 4h-1l7 6" />,
  bolt: <path d="M13 2L4 14h6l-1 8 9-12h-6z" />,
  star: <path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.2l1-5.8L3.5 9.2l5.9-.9z" />,
  headset: <path d="M4 13a8 8 0 0116 0 M4 13v4a2 2 0 002 2h1v-6H6a2 2 0 00-2 0z M20 13v4a2 2 0 01-2 2h-1v-6h1a2 2 0 012 0z M12 19v2h4" />,
  handshake: <path d="M8 11l3-3 3 3 M2 9l4-3 6 3 4-2 6 3-4 6-3-2-3 3-3-3-2 2z" />,
  linkedin: <path d="M4 9h3v11H4z M5.5 4a1.5 1.5 0 100 3 1.5 1.5 0 000-3z M10 9h3v1.5c.6-1 1.7-1.8 3.3-1.8 2.6 0 3.7 1.7 3.7 4.6V20h-3v-5.4c0-1.4-.5-2.3-1.8-2.3-1 0-1.6.7-1.9 1.4-.1.3-.1.6-.1 1V20h-3z" />,
  x: <path d="M4 4l16 16M20 4L4 20" />,
  youtube: <path d="M3 8a3 3 0 013-3h12a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3z M10 9l5 3-5 3z" />,
};

export default function Icon({
  name,
  size = 20,
  ...props
}: { name: IconName; size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

export type { IconName };
