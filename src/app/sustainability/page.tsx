import type { Metadata } from "next";
import Image from "next/image";
import Icon from "@/components/Icon";
import StatCounter from "@/components/StatCounter";
import { PageHero, SectionTitle, Button } from "@/components/UI";

export const metadata: Metadata = {
  title: "Sustainability",
  description: "Nexora Movers is committed to greener moves — reusable packing, fuel-efficient vehicles and less waste on every shift.",
};

const pillars = [
  { icon: "leaf2", title: "Greener Moves", body: "Fuel-efficient vehicles, optimised routing and electric options in cities to cut emissions on every move." },
  { icon: "box", title: "Reusable Packing", body: "Reusable crates and blankets, recyclable materials and less single-use plastic in how we pack." },
  { icon: "users", title: "People & Communities", body: "Fair work and training for our crew, and giving back to the communities we serve." },
];

const targets = [
  { value: 90, suffix: "%", label: "Reusable packing by 2027" },
  { value: 40, suffix: "%", label: "Less packing waste per move" },
  { value: 2030, suffix: "", label: "Net-zero city fleet target" },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        title="Sustainability"
        subtitle="Moving responsibly — for our customers, our communities and our planet."
        image="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=2000&q=70"
        trail={[{ label: "Sustainability" }]}
      />

      <section className="py-16 md:py-24">
        <div className="shell grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Our commitment" title="Greener moves, less waste" intro="Sustainability is built into how we move. We're cutting the environmental impact of every shift — with reusable packing, fuel-efficient and electric vehicles, and smarter routing that means fewer trips." />
            <div className="mt-7"><Button href="/insights-news">Read our latest updates <Icon name="arrow" size={18} /></Button></div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-xl">
            <Image src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1400&q=75" alt="Sustainable moving" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      <section className="bg-navy-800 py-16 text-white md:py-24">
        <div className="shell">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            {targets.map((t) => (
              <div key={t.label}>
                <div className="font-head text-5xl font-700 text-accent-500 md:text-6xl"><StatCounter value={t.value} suffix={t.suffix} /></div>
                <p className="mt-2 text-sm uppercase tracking-wide text-white/70">{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="shell">
          <SectionTitle center eyebrow="Our approach" title="Three pillars of sustainability" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-xl border border-line bg-white p-7">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-navy-100 text-navy-800"><Icon name={p.icon as "leaf2"} size={26} /></span>
                <h3 className="mt-4 font-head text-xl font-600 uppercase text-navy-800">{p.title}</h3>
                <p className="mt-2 text-sm text-mute">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
