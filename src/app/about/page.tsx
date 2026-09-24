import type { Metadata } from "next";
import Image from "next/image";
import Icon from "@/components/Icon";
import StatCounter from "@/components/StatCounter";
import { PageHero, SectionTitle, Button } from "@/components/UI";
import { stats, metros, promises } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "Nexora Movers is a moving, packing and on-demand transport startup with its own trained crew — helping families and businesses shift across India, stress-free.",
};

const values = [
  { icon: "users", title: "Our Own Team", body: "Every move is done by our trained, verified crew — we never hand your things to random contractors." },
  { icon: "rupee", title: "Fair & Transparent", body: "Upfront, itemised quotes with no hidden charges and no last-minute surprises." },
  { icon: "shield", title: "Care & Safety", body: "Quality packing and careful handling, backed by transit protection for peace of mind." },
  { icon: "clock", title: "On Time", body: "We respect your schedule — 98% of our moves are completed right on time." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Nexora"
        subtitle="A moving, packing & on-demand transport startup — with our own crew handling every shift."
        image="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=2000&q=70"
        trail={[{ label: "About Us" }]}
      />

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="shell grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-xl">
            <Image src="https://images.unsplash.com/photo-1594732832278-abd644401426?auto=format&fit=crop&w=1400&q=75" alt="Nexora moving crew" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
          </div>
          <div>
            <SectionTitle eyebrow="Who we are" title="Moving India, the honest way" intro="Nexora Movers is a new-age moving and transport company built on a simple idea: do it yourself, and do it right. We handle home shifting, office relocation, intercity moves, car & bike transport and on-demand mini-trucks — all with our own trained crew and our own vehicles." />
            <p className="mt-4 text-mute">Moving is stressful and the industry is full of middlemen, hidden charges and broken promises. We started Nexora to fix that — with transparent pricing, careful packing, and a team that treats your belongings like their own, from the first survey to the last box unpacked.</p>
            <div className="mt-7"><Button href="/careers">Join our team <Icon name="arrow" size={18} /></Button></div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="why" className="bg-cloud py-16 md:py-24">
        <div className="shell">
          <SectionTitle center eyebrow="Why choose us" title="What makes a Nexora move different" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-line bg-white p-6 text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-navy-800 text-white"><Icon name={v.icon as "users"} size={26} /></span>
                <h3 className="mt-4 font-head text-lg font-600 uppercase text-navy-800">{v.title}</h3>
                <p className="mt-2 text-sm text-mute">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden bg-navy-800 py-20 text-white md:py-24">
        <Image src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2000&q=70" alt="" fill className="object-cover opacity-15" sizes="100vw" />
        <div className="shell relative">
          <SectionTitle light center eyebrow="Our track record" title="Trusted by thousands across India" />
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-head text-5xl font-700 text-accent-500 md:text-6xl"><StatCounter value={s.value} suffix={s.suffix} /></div>
                <p className="mt-2 text-sm uppercase tracking-wide text-white/70">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 border-t border-white/15 pt-10 text-center">
            <p className="text-sm uppercase tracking-widest text-white/60">Cities we serve</p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              {metros.map((c) => (
                <span key={c} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-600 text-white/90">
                  <Icon name="pin" size={15} className="text-accent-500" /> {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Promise band */}
      <section className="py-16 md:py-20">
        <div className="shell grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((p) => (
            <div key={p.title} className="rounded-xl border border-line bg-white p-6">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-navy-100 text-navy-800"><Icon name={p.icon as "users"} size={24} /></span>
              <h3 className="mt-4 font-head text-lg font-600 uppercase text-navy-800">{p.title}</h3>
              <p className="mt-2 text-sm text-mute">{p.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
