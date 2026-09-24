import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import { PageHero, SectionTitle } from "@/components/UI";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Who We Serve",
  description: "Nexora Movers serves families, working professionals, offices, students, tenants and long-distance movers with tailored moving services.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Who We Serve"
        subtitle="Families, professionals, businesses and students — we tailor every move to who's moving and what matters most."
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=70"
        trail={[{ label: "Who We Serve" }]}
      />

      <section className="py-20 md:py-28">
        <div className="shell">
          <SectionTitle center eyebrow="Tailored to you" title="The right move for everyone" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className="group flex flex-col overflow-hidden rounded-xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={ind.image} alt={ind.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width:768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
                  <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-accent-500 text-white"><Icon name={ind.icon as "plane"} size={22} /></span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-head text-xl font-600 uppercase text-navy-800 group-hover:text-accent-600">{ind.title}</h3>
                  <p className="mt-1 text-sm font-600 text-navy-600">{ind.hook}</p>
                  <p className="mt-3 flex-1 text-sm text-mute">{ind.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-600 text-accent-600">Learn more <Icon name="arrow" size={16} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
