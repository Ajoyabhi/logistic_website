import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Icon from "@/components/Icon";
import { PageHero, SectionTitle, Button } from "@/components/UI";
import { solutions } from "@/lib/site";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = solutions.find((x) => x.slug === slug);
  return { title: s?.title ?? "Solution", description: s?.summary };
}

export default async function SolutionDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = solutions.find((x) => x.slug === slug);
  if (!s) notFound();

  const others = solutions.filter((x) => x.slug !== s.slug);

  return (
    <>
      <PageHero
        title={s.title}
        subtitle={s.tagline}
        image={s.image}
        trail={[{ label: "Solutions", href: "/solutions" }, { label: s.title }]}
      />

      {/* Intro */}
      <section className="py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionTitle eyebrow="Overview" title={`Why choose DPSV for ${s.title.toLowerCase()}`} intro={s.intro} />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 rounded-lg border border-line bg-white p-4">
                  <Icon name="check" size={18} className="mt-0.5 shrink-0 text-accent-500" />
                  <span className="text-sm text-navy-700">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="rounded-xl bg-navy-800 p-7 text-white h-fit">
            {s.slug === "intra-city-transport" ? (
              <>
                <h3 className="font-head text-xl font-600 uppercase">Book a vehicle now</h3>
                <p className="mt-2 text-sm text-white/75">Get an instant fare and ETA, and book an on-demand mini-truck or bike in minutes.</p>
                <div className="mt-5 space-y-3">
                  <Button href="/intra-city-transport" className="w-full justify-center">Book now <Icon name="arrow" size={18} /></Button>
                  <Button href="/contact" variant="ghost" className="w-full justify-center">Talk to us</Button>
                </div>
              </>
            ) : (
              <>
                <h3 className="font-head text-xl font-600 uppercase">Get a free quote</h3>
                <p className="mt-2 text-sm text-white/75">Tell us about your {s.title.toLowerCase()} and we&apos;ll share a transparent estimate.</p>
                <div className="mt-5 space-y-3">
                  <Button href="/quote" className="w-full justify-center">Get a quote <Icon name="arrow" size={18} /></Button>
                  <Button href="/contact" variant="ghost" className="w-full justify-center">Contact us</Button>
                </div>
              </>
            )}
          </aside>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-cloud py-16 md:py-24">
        <div className="shell">
          <SectionTitle center eyebrow="Capabilities" title="What's included" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {s.features.map((f) => (
              <div key={f.title} className="rounded-xl border border-line bg-white p-6">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-navy-100 text-navy-800"><Icon name="route" size={24} /></span>
                <h4 className="mt-4 font-head text-lg font-600 uppercase text-navy-800">{f.title}</h4>
                <p className="mt-2 text-sm text-mute">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other solutions */}
      <section className="py-16 md:py-24">
        <div className="shell">
          <SectionTitle eyebrow="Keep exploring" title="Other solutions" />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {others.slice(0, 3).map((o) => (
              <Link key={o.slug} href={`/solutions/${o.slug}`} className="group flex items-center justify-between rounded-lg border border-line bg-white p-6 transition hover:border-accent-500 hover:shadow-md">
                <span>
                  <span className="block font-head text-lg font-600 uppercase text-navy-800 group-hover:text-accent-600">{o.title}</span>
                  <span className="block text-sm text-mute">{o.tagline}</span>
                </span>
                <Icon name="arrow" size={20} className="text-mute transition group-hover:translate-x-1 group-hover:text-accent-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
