import type { Metadata } from "next";
import Icon from "@/components/Icon";
import { PageHero, SectionTitle } from "@/components/UI";
import { site } from "@/lib/site";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Nexora Movers. Talk to a move coordinator or reach a branch near you.",
};

const offices = [
  { city: "Gurugram (Head Office)", addr: "Nexora House, Sector 44, Gurugram, Haryana 122003", phone: "0124 555 0142" },
  { city: "Mumbai", addr: "Nexora Branch, Andheri East, Mumbai, Maharashtra 400069", phone: "022 5555 0142" },
  { city: "Bengaluru", addr: "Nexora Branch, Koramangala, Bengaluru, Karnataka 560034", phone: "080 5555 0142" },
  { city: "Pune", addr: "Nexora Branch, Kharadi, Pune, Maharashtra 411014", phone: "020 5555 0142" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Tell us about your move and one of our coordinators will be in touch — usually within a few hours."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=2000&q=70"
        trail={[{ label: "Contact Us" }]}
      />

      <section className="py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionTitle eyebrow="Send us a message" title="How can we help?" />
            <div className="mt-8"><ContactForm /></div>
          </div>

          <aside className="lg:col-span-2">
            <div className="rounded-xl bg-navy-800 p-7 text-white">
              <h3 className="font-head text-xl font-600 uppercase">Get in touch</h3>
              <div className="mt-5 space-y-4 text-sm">
                <p className="flex items-start gap-3"><Icon name="pin" size={20} className="mt-0.5 shrink-0 text-accent-500" /> {site.hq}</p>
                <p className="flex items-center gap-3"><Icon name="phone" size={20} className="shrink-0 text-accent-500" /> {site.phone}</p>
                <p className="flex items-center gap-3"><Icon name="mail" size={20} className="shrink-0 text-accent-500" /> {site.email}</p>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {offices.map((o) => (
                <div key={o.city} className="rounded-lg border border-line bg-white p-5">
                  <h4 className="font-head text-base font-600 uppercase text-navy-800">{o.city}</h4>
                  <p className="mt-1 text-sm text-mute">{o.addr}</p>
                  <p className="mt-1 text-sm text-navy-700">{o.phone}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
