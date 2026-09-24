"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icon";
import { solutions, industries, site } from "@/lib/site";

const mainNav = [
  {
    label: "Services",
    href: "/solutions",
    children: solutions.map((s) => ({ label: s.title, href: `/solutions/${s.slug}`, desc: s.summary })),
  },
  {
    label: "Who We Serve",
    href: "/industries",
    children: industries.map((i) => ({ label: i.title, href: `/industries/${i.slug}`, desc: i.hook })),
  },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About DPSV", href: "/about", desc: "Movers & packers with our own team" },
      { label: "Why Choose Us", href: "/about#why", desc: "In-house crew, transparent pricing" },
      { label: "Sustainability", href: "/sustainability", desc: "Reusable packing, greener moves" },
      { label: "Careers", href: "/careers", desc: "Build your career with us" },
    ],
  },
  {
    label: "Partner",
    href: "/partner",
    children: [
      { label: "Drive & Move with DPSV", href: "/partner", desc: "Join our fleet & crew" },
      { label: "Corporate Partnerships", href: "/contact", desc: "Employee & bulk moves" },
    ],
  },
  {
    label: "Resources",
    href: "/insights-news",
    children: [
      { label: "News & Moving Tips", href: "/insights-news", desc: "Latest updates & advice" },
      { label: "Sustainability", href: "/sustainability", desc: "Our green initiatives" },
      { label: "Contact & Support", href: "/contact", desc: "We're here to help" },
    ],
  },
];

export default function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_0_rgba(15,23,42,0.08)]">
      {/* Utility bar */}
      <div className="hidden bg-navy-800 text-white/90 md:block">
        <div className="shell flex h-9 items-center justify-between gap-6 text-[13px]">
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 hover:text-white">
            <Icon name="headset" size={15} /> Helpline: {site.phone}
          </a>
          <div className="flex items-center gap-6">
            <Link href="/intra-city-transport" className="inline-flex items-center gap-1.5 hover:text-white">
              <Icon name="bolt" size={15} /> Book a Truck
            </Link>
            <Link href="/track" className="inline-flex items-center gap-1.5 hover:text-white">
              <Icon name="track" size={15} /> Track Move
            </Link>
            <Link href="/partner" className="inline-flex items-center gap-1.5 hover:text-white">
              <Icon name="handshake" size={15} /> Partner with Us
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-1.5 hover:text-white">
              <Icon name="mail" size={15} /> Support
            </Link>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="shell flex h-16 items-center justify-between md:h-[70px]">
        <Logo />

        <nav
          className="hidden items-center gap-1 lg:flex"
          onMouseLeave={() => setOpen(null)}
        >
          {mainNav.map((item) => (
            <div key={item.label} className="relative" onMouseEnter={() => setOpen(item.label)}>
              <Link
                href={item.href}
                className="flex items-center gap-1 whitespace-nowrap px-3.5 py-6 text-[15px] font-600 uppercase tracking-wide text-navy-800 hover:text-accent-600"
              >
                {item.label}
                <Icon name="chevron" size={14} className={`transition-transform ${open === item.label ? "rotate-180" : ""}`} />
              </Link>

              {open === item.label && (
                <div className="absolute left-0 top-full w-[340px] border-t-2 border-accent-500 bg-white p-2 shadow-xl">
                  {item.children.map((c) => (
                    <Link
                      key={c.label}
                      href={c.href}
                      className="block rounded-md px-4 py-3 hover:bg-cloud"
                      onClick={() => setOpen(null)}
                    >
                      <span className="block font-600 text-navy-800">{c.label}</span>
                      <span className="mt-0.5 block text-[13px] text-mute">{c.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/quote"
            className="hidden rounded-sm bg-accent-500 px-5 py-2.5 text-[14px] font-700 uppercase tracking-wide text-white transition hover:bg-accent-600 sm:inline-block"
          >
            Get a Quote
          </Link>
          <button aria-label="Search" className="grid h-10 w-10 place-items-center rounded-full text-navy-800 hover:bg-cloud">
            <Icon name="search" size={20} />
          </button>
          <button
            aria-label="Menu"
            className="grid h-10 w-10 place-items-center rounded-full text-navy-800 hover:bg-cloud lg:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <Icon name="menu" size={22} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-navy-950/50" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm overflow-y-auto bg-white p-5">
            <div className="mb-4 flex items-center justify-between">
              <Logo />
              <button aria-label="Close" onClick={() => setMobileOpen(false)} className="grid h-10 w-10 place-items-center rounded-full hover:bg-cloud">
                <Icon name="close" size={22} />
              </button>
            </div>
            {mainNav.map((item) => (
              <div key={item.label} className="border-b border-line py-2">
                <Link href={item.href} className="block py-2 font-head text-lg font-600 uppercase text-navy-800" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
                <div className="pb-2 pl-3">
                  {item.children.map((c) => (
                    <Link key={c.label} href={c.href} className="block py-1.5 text-[15px] text-mute hover:text-accent-600" onClick={() => setMobileOpen(false)}>
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link href="/quote" className="mt-5 block rounded-sm bg-accent-500 px-5 py-3 text-center font-700 uppercase text-white" onClick={() => setMobileOpen(false)}>
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
