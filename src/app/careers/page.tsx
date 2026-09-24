import type { Metadata } from "next";
import Image from "next/image";
import Icon from "@/components/Icon";
import { PageHero, SectionTitle, Button } from "@/components/UI";

export const metadata: Metadata = {
  title: "Careers",
  description: "Build your career at Nexora Movers. Explore open roles across our city teams and operations.",
};

const perks = [
  { icon: "users", title: "Be part of the team", body: "Join an in-house crew that takes pride in every move." },
  { icon: "bolt", title: "Learning & development", body: "Continuous training and clear pathways to advance." },
  { icon: "shield", title: "Inclusive culture", body: "A safe, diverse and supportive place to do your best work." },
  { icon: "handshake", title: "Purposeful work", body: "Help thousands of families and businesses move with less stress." },
];

const jobs = [
  { title: "City Operations Manager", location: "Gurugram, HR", type: "Full-time" },
  { title: "Move Coordinator", location: "Bengaluru, KA", type: "Full-time" },
  { title: "Packing Crew Lead", location: "Mumbai, MH", type: "Full-time" },
  { title: "Driver — Mini-Truck & Tempo", location: "Pune, MH", type: "Full-time" },
  { title: "Customer Support Executive", location: "Gurugram / Remote", type: "Full-time" },
  { title: "Field Sales Executive", location: "Hyderabad, TS", type: "Full-time" },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Careers at Nexora"
        subtitle="Join the team helping thousands of families and businesses move, stress-free."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=70"
        trail={[{ label: "Careers" }]}
      />

      <section className="py-16 md:py-24">
        <div className="shell">
          <SectionTitle center eyebrow="Why Nexora" title="Grow with a team that cares" intro="We invest in our people because they're the reason every move goes smoothly. Here's what you can expect." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p) => (
              <div key={p.title} className="rounded-xl border border-line bg-white p-6 text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent-500 text-white"><Icon name={p.icon as "globe"} size={26} /></span>
                <h3 className="mt-4 font-head text-lg font-600 uppercase text-navy-800">{p.title}</h3>
                <p className="mt-2 text-sm text-mute">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cloud py-16 md:py-24">
        <div className="shell">
          <SectionTitle eyebrow="Open roles" title="Current opportunities" />
          <div className="mt-10 divide-y divide-line overflow-hidden rounded-xl border border-line bg-white">
            {jobs.map((j) => (
              <div key={j.title} className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-head text-lg font-600 uppercase text-navy-800">{j.title}</h3>
                  <p className="mt-1 flex flex-wrap gap-4 text-sm text-mute">
                    <span className="inline-flex items-center gap-1.5"><Icon name="pin" size={15} /> {j.location}</span>
                    <span className="inline-flex items-center gap-1.5"><Icon name="clock" size={15} /> {j.type}</span>
                  </p>
                </div>
                <Button href="/contact">Apply now <Icon name="arrow" size={18} /></Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
