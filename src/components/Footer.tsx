import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icon";
import { solutions, industries, site } from "@/lib/site";

const cols = [
  {
    title: "Services",
    links: solutions.map((s) => ({ label: s.title, href: `/solutions/${s.slug}` })),
  },
  {
    title: "Who We Serve",
    links: industries.map((i) => ({ label: i.title, href: `/industries/${i.slug}` })),
  },
  {
    title: "Company",
    links: [
      { label: "About Nexora", href: "/about" },
      { label: "Why Choose Us", href: "/about#why" },
      { label: "Partner with Us", href: "/partner" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Careers", href: "/careers" },
      { label: "News & Moving Tips", href: "/insights-news" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white/70">
      {/* CTA strip */}
      <div className="bg-navy-800">
        <div className="shell flex flex-col items-center justify-between gap-4 py-8 text-center md:flex-row md:text-left">
          <div>
            <h3 className="font-head text-2xl font-600 uppercase text-white">Ready to plan your move?</h3>
            <p className="mt-1 text-white/70">Get a free, transparent quote in minutes.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/quote" className="rounded-sm bg-accent-500 px-6 py-3 font-700 uppercase tracking-wide text-white hover:bg-accent-600">
              Get a Quote
            </Link>
            <Link href="/contact" className="rounded-sm border border-white/30 px-6 py-3 font-700 uppercase tracking-wide text-white hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="shell grid grid-cols-2 gap-8 py-14 md:grid-cols-5">
        <div className="col-span-2">
          <Logo variant="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            {site.tagline} Nexora is a movers &amp; packers and on-demand transport startup — home shifting, office moves, car &amp; bike transport and mini-trucks, handled by our own trained crew.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <p className="flex items-center gap-2"><Icon name="pin" size={16} /> {site.hq}</p>
            <p className="flex items-center gap-2"><Icon name="phone" size={16} /> {site.phone}</p>
            <p className="flex items-center gap-2"><Icon name="mail" size={16} /> {site.email}</p>
          </div>
          <div className="mt-5 flex gap-3">
            {(["linkedin", "x", "youtube"] as const).map((s) => (
              <a key={s} href="#" aria-label={s} className="grid h-9 w-9 place-items-center rounded-full border border-white/20 hover:border-accent-500 hover:text-accent-500">
                <Icon name={s} size={18} />
              </a>
            ))}
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="font-head text-sm font-600 uppercase tracking-widest text-white">{c.title}</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {c.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-accent-400">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="shell flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} Nexora Logistics. All rights reserved. A demonstration website.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Cookie Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
