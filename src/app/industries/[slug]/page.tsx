import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Icon from "@/components/Icon";
import { PageHero, SectionTitle, Button } from "@/components/UI";
import { industries, solutions } from "@/lib/site";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const ind = industries.find((x) => x.slug === slug);
  return { title: ind?.title ?? "Industry", description: ind?.summary };
}

export default async function IndustryDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ind = industries.find((x) => x.slug === slug);
  if (!ind) notFound();

  return (
    <>
      <PageHero
        title={ind.title}
        subtitle={ind.hook}
        image={ind.image}
        trail={[{ label: "Industries", href: "/industries" }, { label: ind.title }]}
      />

      <section className="py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionTitle eyebrow={ind.title} title={ind.hook} intro={ind.intro} />
            <h3 className="mt-10 font-head text-xl font-600 uppercase text-navy-800">Our capabilities</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {ind.capabilities.map((c) => (
                <li key={c} className="flex items-start gap-3 rounded-lg border border-line bg-white p-4">
                  <Icon name="check" size={18} className="mt-0.5 shrink-0 text-accent-500" />
                  <span className="text-sm text-navy-700">{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="h-fit rounded-xl bg-navy-800 p-7 text-white">
            <h3 className="font-head text-xl font-600 uppercase">Planning a move?</h3>
            <p className="mt-2 text-sm text-white/75">Get a free, transparent quote for your move — our team will take it from there.</p>
            <div className="mt-5 space-y-3">
              <Button href="/quote" className="w-full justify-center">Get a free quote <Icon name="arrow" size={18} /></Button>
              <Button href="/contact" variant="ghost" className="w-full justify-center">Contact us</Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-cloud py-16 md:py-24">
        <div className="shell">
          <SectionTitle center eyebrow="Explore" title="Services you might need" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((s) => (
              <Link key={s.slug} href={`/solutions/${s.slug}`} className="group rounded-xl border border-line bg-white p-6 transition hover:border-accent-500 hover:shadow-md">
                <h4 className="font-head text-lg font-600 uppercase text-navy-800 group-hover:text-accent-600">{s.title}</h4>
                <p className="mt-2 text-sm text-mute">{s.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
