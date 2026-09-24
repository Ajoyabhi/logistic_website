import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import { Breadcrumb, CardImage } from "@/components/UI";
import { articles } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ id: a.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const a = articles.find((x) => x.id === id);
  return { title: a?.title ?? "Article", description: a?.excerpt };
}

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const a = articles.find((x) => x.id === id);
  if (!a) notFound();

  const more = articles.filter((x) => x.id !== a.id).slice(0, 3);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-900">
        <Image src={a.image} alt="" fill priority className="object-cover opacity-30" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 to-navy-800/50" />
        <div className="shell relative py-16 md:py-20">
          <Breadcrumb trail={[{ label: "Insights & News", href: "/insights-news" }, { label: a.category }]} />
          <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-wide text-white/70">
            <span className="rounded-full bg-accent-500 px-2.5 py-0.5 font-600 text-white">{a.category}</span>
            <span>{a.date}</span>
          </div>
          <h1 className="mt-4 max-w-4xl font-head text-3xl font-600 uppercase leading-tight text-white md:text-5xl">{a.title}</h1>
        </div>
        <div className="absolute bottom-0 left-0 h-1.5 w-full bg-accent-500" />
      </section>

      <article className="py-16 md:py-20">
        <div className="shell max-w-3xl">
          <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-xl">
            <Image src={a.image} alt={a.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 768px" />
          </div>
          <p className="text-xl font-500 leading-relaxed text-navy-700">{a.excerpt}</p>
          <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-ink">
            {a.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-10 flex items-center gap-4 border-t border-line pt-8">
            <span className="text-sm font-600 uppercase tracking-wide text-mute">Share</span>
            {(["linkedin", "x"] as const).map((s) => (
              <a key={s} href="#" aria-label={s} className="grid h-9 w-9 place-items-center rounded-full border border-line text-navy-700 hover:border-accent-500 hover:text-accent-500">
                <Icon name={s} size={17} />
              </a>
            ))}
          </div>
        </div>
      </article>

      <section className="bg-cloud py-16 md:py-20">
        <div className="shell">
          <h2 className="font-head text-2xl font-600 uppercase text-navy-800">More news</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {more.map((m) => (
              <Link key={m.id} href={`/insights-news/${m.id}`} className="group flex flex-col overflow-hidden rounded-xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-xl">
                <CardImage src={m.image} alt={m.title} />
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs uppercase tracking-wide text-mute">{m.date}</span>
                  <h3 className="mt-2 flex-1 font-head text-base font-600 uppercase leading-snug text-navy-800 group-hover:text-accent-600">{m.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
