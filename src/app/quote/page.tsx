import type { Metadata } from "next";
import Icon from "@/components/Icon";
import { PageHero, SectionTitle } from "@/components/UI";
import QuoteWidget from "@/components/QuoteWidget";

export const metadata: Metadata = {
  title: "Get a Free Quote — Moving Cost Estimator",
  description: "Get an instant estimate for home shifting, office relocation, car & bike transport or an in-city move with Nexora Movers.",
};

const perks = [
  { icon: "bolt", title: "Instant estimate", body: "Get an indicative cost in seconds — no login needed." },
  { icon: "rupee", title: "Transparent pricing", body: "Upfront, itemised quotes with no hidden charges." },
  { icon: "users", title: "Our own crew", body: "Trained, verified movers — your move is never outsourced." },
];

export default function QuotePage() {
  return (
    <>
      <PageHero
        title="Get a Free Quote"
        subtitle="Estimate your moving cost in seconds, then book a free survey to lock the exact price."
        image="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=2000&q=70"
        trail={[{ label: "Get a Quote" }]}
      />

      <section className="py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionTitle eyebrow="Moving cost estimator" title="Estimate your moving cost" />
            <div className="mt-8"><QuoteWidget /></div>
          </div>
          <aside className="lg:col-span-2">
            <div className="space-y-4">
              {perks.map((p) => (
                <div key={p.title} className="flex gap-4 rounded-xl border border-line bg-white p-6">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy-100 text-navy-800"><Icon name={p.icon as "bolt"} size={24} /></span>
                  <div>
                    <h3 className="font-head text-lg font-600 uppercase text-navy-800">{p.title}</h3>
                    <p className="mt-1 text-sm text-mute">{p.body}</p>
                  </div>
                </div>
              ))}
              <div className="rounded-xl bg-navy-800 p-6 text-white">
                <h3 className="font-head text-lg font-600 uppercase">Prefer to talk?</h3>
                <p className="mt-2 text-sm text-white/75">Our move coordinators are here to help plan bigger or complex moves.</p>
                <a href="/contact" className="mt-4 inline-flex items-center gap-2 font-600 text-accent-400 hover:text-accent-500">Contact our team <Icon name="arrow" size={18} /></a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
