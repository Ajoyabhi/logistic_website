import type { Metadata } from "next";
import Image from "next/image";
import Icon from "@/components/Icon";
import { PageHero, SectionTitle, Button } from "@/components/UI";
import CityDeliveryWidget from "@/components/CityDeliveryWidget";
import { metros } from "@/lib/site";

export const metadata: Metadata = {
  title: "Intra-City Transport",
  description: "Book an on-demand mini-truck, three-wheeler or two-wheeler with a driver from DPSV's own fleet to move goods anywhere in your city. Instant fare, live tracking.",
};

const vehicles = [
  { icon: "bolt", name: "Two-Wheeler", cap: "Up to 20 kg", use: "Documents, parcels & small items" },
  { icon: "truck", name: "Three-Wheeler", cap: "Up to 500 kg", use: "Furniture, appliances & multiple boxes" },
  { icon: "truck", name: "Tata Ace", cap: "Up to 750 kg", use: "Shop runs, small moves & B2B loads" },
  { icon: "truck", name: "Pickup 8ft", cap: "Up to 1.5 T", use: "Bulky furniture & large loads" },
];

const steps = [
  { n: "01", t: "Pick a vehicle & route", d: "Choose your vehicle, add pickup and drop within the city." },
  { n: "02", t: "Get instant fare", d: "See a transparent, distance-based fare and pickup ETA up front." },
  { n: "03", t: "Driver is assigned", d: "A driver from our own fleet reaches your pickup in minutes." },
  { n: "04", t: "Track till done", d: "Follow live on the app and get a delivery confirmation." },
];

const useCases = [
  { icon: "home", t: "Small House Moves", d: "Shift a room or a few items across town without booking a full move." },
  { icon: "sofa", t: "Furniture & Appliances", d: "Move a sofa, fridge or bed safely — add helpers for loading." },
  { icon: "box", t: "Shop & Business Loads", d: "Restock, deliver or move inventory between outlets same-day." },
  { icon: "bolt", t: "Urgent Pickups", d: "Move anything across the city, on demand, within hours." },
];

export default function IntraCityTransportPage() {
  return (
    <>
      <PageHero
        title="Intra-City Transport"
        subtitle="Book a mini-truck, three-wheeler or two-wheeler in minutes — on our own fleet, within hours."
        image="https://images.unsplash.com/photo-1599050751795-6cdaafbc2319?auto=format&fit=crop&w=2000&q=70"
        trail={[{ label: "Intra-City Transport" }]}
      />

      {/* Booking widget */}
      <section className="py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionTitle eyebrow="Book in minutes" title="Move goods across your city, today" intro="Choose a vehicle, add your pickup and drop, and get an instant fare and ETA. On-demand, live-tracked and driven by our own team." />
            <div className="mt-8"><CityDeliveryWidget /></div>
          </div>
          <aside className="lg:col-span-2">
            <div className="space-y-4">
              {[
                { icon: "bolt", t: "Within hours", d: "Most trips picked up in minutes and completed within hours." },
                { icon: "users", t: "Loading help", d: "Add trained helpers to load and unload heavy items." },
                { icon: "track", t: "Live tracking", d: "See exactly where your driver is, pickup to drop." },
                { icon: "shield", t: "Our own fleet", d: "Driven by DPSV's own drivers — never outsourced." },
              ].map((p) => (
                <div key={p.t} className="flex gap-4 rounded-xl border border-line bg-white p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy-100 text-navy-800"><Icon name={p.icon as "bolt"} size={22} /></span>
                  <div>
                    <h3 className="font-head text-base font-600 uppercase text-navy-800">{p.t}</h3>
                    <p className="mt-1 text-sm text-mute">{p.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Vehicles */}
      <section className="bg-cloud py-16 md:py-24">
        <div className="shell">
          <SectionTitle center eyebrow="Right-sized for your load" title="Choose your vehicle" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {vehicles.map((v) => (
              <div key={v.name} className="rounded-xl border border-line bg-white p-6 text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent-500 text-white"><Icon name={v.icon as "truck"} size={26} /></span>
                <h3 className="mt-4 font-head text-lg font-600 uppercase text-navy-800">{v.name}</h3>
                <p className="mt-1 text-sm font-600 text-navy-600">{v.cap}</p>
                <p className="mt-2 text-sm text-mute">{v.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-24">
        <div className="shell">
          <SectionTitle center eyebrow="How it works" title="From booking to done, in four steps" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="rounded-xl border border-line bg-white p-6">
                <span className="font-head text-3xl font-700 text-accent-500">{s.n}</span>
                <h3 className="mt-3 font-head text-lg font-600 uppercase text-navy-800">{s.t}</h3>
                <p className="mt-2 text-sm text-mute">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-cloud py-16 md:py-24">
        <div className="shell">
          <SectionTitle center eyebrow="What people move" title="Perfect for every quick move" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((u) => (
              <div key={u.t} className="rounded-xl border border-line bg-white p-6">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-navy-100 text-navy-800"><Icon name={u.icon as "home"} size={24} /></span>
                <h3 className="mt-4 font-head text-lg font-600 uppercase text-navy-800">{u.t}</h3>
                <p className="mt-2 text-sm text-mute">{u.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="py-16 md:py-20">
        <div className="shell text-center">
          <SectionTitle center eyebrow="Now live in" title="On-demand transport across our cities" />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {metros.map((c) => (
              <span key={c} className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-600 text-navy-700">
                <Icon name="pin" size={15} className="text-accent-500" /> {c}
              </span>
            ))}
          </div>
          <div className="mt-10"><Button href="/contact">Bring on-demand transport to your business <Icon name="arrow" size={18} /></Button></div>
        </div>
      </section>
    </>
  );
}
