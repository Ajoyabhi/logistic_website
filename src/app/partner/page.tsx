import type { Metadata } from "next";
import Icon from "@/components/Icon";
import { PageHero, SectionTitle, Button } from "@/components/UI";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Partner with Us",
  description: "Grow with DPSV Logistic — join our crew as a driver or mover, or set up a corporate partnership for employee and bulk moves.",
};

const models = [
  {
    icon: "users",
    title: "Drive & Move with DPSV",
    body: "Join our in-house team as a driver, or as a mover on our packing and loading crews. Get steady work, fair on-time pay and full training.",
    points: ["Steady daily assignments", "Transparent, on-time payments", "App-based job management", "Training, gear & support provided"],
  },
  {
    icon: "building",
    title: "Corporate Partnerships",
    body: "Companies, brokers and real-estate platforms: partner with us for employee relocations, bulk moves and referral tie-ups.",
    points: ["Employee & bulk relocations", "Preferred corporate rates", "Dedicated account manager", "Simple referral programme"],
  },
];

const steps = [
  { n: "01", t: "Tell us about you", d: "Share your city and whether you want to join our crew or partner with us." },
  { n: "02", t: "Get onboarded", d: "Our team verifies details and sets you up with training and tools." },
  { n: "03", t: "Go live", d: "Start taking assignments or sending us moves with full support." },
  { n: "04", t: "Grow together", d: "Grow your work and earnings as the partnership matures." },
];

export default function PartnerPage() {
  return (
    <>
      <PageHero
        title="Partner with DPSV"
        subtitle="Grow with DPSV — join our crew as a driver or mover, or set up a corporate partnership."
        image="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=2000&q=70"
        trail={[{ label: "Partner with Us" }]}
      />

      {/* Partner models */}
      <section className="py-16 md:py-24">
        <div className="shell">
          <SectionTitle center eyebrow="Ways to partner" title="Choose how you want to grow" />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {models.map((m) => (
              <div key={m.title} className="flex flex-col rounded-xl border border-line bg-white p-7">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-accent-500 text-white"><Icon name={m.icon as "handshake"} size={26} /></span>
                <h3 className="mt-4 font-head text-xl font-600 uppercase text-navy-800">{m.title}</h3>
                <p className="mt-2 text-sm text-mute">{m.body}</p>
                <ul className="mt-4 flex-1 space-y-2">
                  {m.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-navy-700">
                      <Icon name="check" size={16} className="mt-0.5 shrink-0 text-accent-500" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-navy-800 py-14 text-white">
        <div className="shell grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {[
            { v: "1,200+", l: "Crew & drivers" },
            { v: "25+", l: "Cities" },
            { v: "₹ Weekly", l: "On-time payouts" },
            { v: "24×7", l: "Partner support" },
          ].map((x) => (
            <div key={x.l}>
              <div className="font-head text-4xl font-700 text-accent-500">{x.v}</div>
              <p className="mt-1 text-sm uppercase tracking-wide text-white/70">{x.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-24">
        <div className="shell">
          <SectionTitle center eyebrow="Simple onboarding" title="How partnering works" />
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

      {/* Apply */}
      <section className="bg-cloud py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionTitle eyebrow="Get started" title="Apply to partner" intro="Fill in your details and our partnerships team will reach out to guide you through the next steps." />
            <div className="mt-6 space-y-3 text-sm text-navy-700">
              <p className="flex items-center gap-2"><Icon name="check" size={18} className="text-accent-500" /> No prior experience required to join our crew</p>
              <p className="flex items-center gap-2"><Icon name="check" size={18} className="text-accent-500" /> Guided onboarding &amp; training</p>
              <p className="flex items-center gap-2"><Icon name="check" size={18} className="text-accent-500" /> Technology &amp; branding provided</p>
            </div>
            <div className="mt-7"><Button href="/contact">Talk to our team <Icon name="arrow" size={18} /></Button></div>
          </div>
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
