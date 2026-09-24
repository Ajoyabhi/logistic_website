import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import { PageHero, SectionTitle, CardImage } from "@/components/UI";
import { articles } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights & News",
  description: "The latest press releases, insights and success stories from Nexora Logistics.",
};

export default function InsightsPage() {
  const [feature, ...rest] = articles;
  return (
    <>
      <PageHero
        title="Insights & News"
        subtitle="Connect with the latest information, solutions and resources from across our network."
        image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=2000&q=70"
        trail={[{ label: "Insights & News" }]}
      />

      {/* Feature */}
      <section className="py-16 md:py-20">
        <div className="shell">
          <Link href={`/insights-news/${feature.id}`} className="group grid overflow-hidden rounded-xl border border-line bg-white lg:grid-cols-2">
            <div className="relative min-h-[300px]">
              <Image src={feature.image} alt={feature.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width:1024px) 100vw, 50vw" />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="flex items-center gap-3 text-xs uppercase tracking-wide text-mute">
                <span className="rounded-full bg-accent-100 px-2.5 py-0.5 font-600 text-accent-700">{feature.category}</span>
                <span>{feature.date}</span>
              </div>
              <h2 className="mt-4 font-head text-3xl font-600 uppercase leading-tight text-navy-800 group-hover:text-accent-600">{feature.title}</h2>
              <p className="mt-4 text-mute">{feature.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-600 text-accent-600">Read more <Icon name="arrow" size={18} /></span>
            </div>
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-20 md:pb-28">
        <div className="shell">
          <SectionTitle eyebrow="More stories" title="Latest updates" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((a) => (
              <Link key={a.id} href={`/insights-news/${a.id}`} className="group flex flex-col overflow-hidden rounded-xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-xl">
                <CardImage src={a.image} alt={a.title} />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-wide text-mute">
                    <span className="rounded-full bg-navy-100 px-2.5 py-0.5 font-600 text-navy-700">{a.category}</span>
                    <span>{a.date}</span>
                  </div>
                  <h3 className="mt-3 flex-1 font-head text-lg font-600 uppercase leading-snug text-navy-800 group-hover:text-accent-600">{a.title}</h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-600 text-accent-600">Read more <Icon name="arrow" size={16} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
