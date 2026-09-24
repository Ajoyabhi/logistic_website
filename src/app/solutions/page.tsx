import type { Metadata } from "next";
import Icon from "@/components/Icon";
import { PageHero, SectionTitle, CardImage, Button } from "@/components/UI";
import { solutions } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Nexora Movers services: home shifting, office relocation, intercity moves, on-demand intra-city transport, car & bike transport and storage — all by our own crew.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="From a single-room shift to a full office move — every kind of move, handled by our own crew."
        image="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=2000&q=70"
        trail={[{ label: "Services" }]}
      />

      <section className="py-20 md:py-28">
        <div className="shell">
          <SectionTitle
            center
            eyebrow="What we do"
            title="One team for every kind of move"
            intro="Whatever you're moving and wherever it's going, our own trained crew packs, loads, transports and sets it up — with transparent pricing and no middlemen."
          />

          <div className="mt-14 space-y-6">
            {solutions.map((s, i) => (
              <div key={s.slug} className={`grid items-center gap-8 overflow-hidden rounded-xl border border-line bg-white lg:grid-cols-2 ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                <div className="relative min-h-[280px] w-full">
                  <div className="absolute inset-0">
                    <CardImage src={s.image} alt={s.title} />
                  </div>
                </div>
                <div className="p-8 md:p-10">
                  <span className="font-head text-sm font-600 uppercase tracking-[0.2em] text-accent-500">0{i + 1}</span>
                  <h3 className="mt-2 font-head text-2xl font-600 uppercase text-navy-800 md:text-3xl">{s.title}</h3>
                  <p className="mt-1 font-600 text-navy-600">{s.tagline}</p>
                  <p className="mt-4 text-mute">{s.summary}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-navy-700">
                        <Icon name="check" size={16} className="mt-0.5 shrink-0 text-accent-500" /> {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7">
                    <Button href={`/solutions/${s.slug}`}>Explore {s.title} <Icon name="arrow" size={18} /></Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
