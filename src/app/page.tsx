import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import StatCounter from "@/components/StatCounter";
import HeroQuoteCard from "@/components/HeroQuoteCard";
import { SectionTitle, Eyebrow, ArrowLink, Button, CardImage } from "@/components/UI";
import { solutions, industries, articles, stats, metros, promises } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative isolate overflow-hidden bg-navy-900">
        <Image
          src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=2000&q=75"
          alt="Nexora movers packing and loading a home"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/90 to-navy-900/40" />
        <div className="shell relative grid min-h-[600px] items-center gap-10 py-20 lg:grid-cols-2">
          <div className="max-w-2xl reveal">
            <Eyebrow>Packers, Movers &amp; On-Demand Transport</Eyebrow>
            <h1 className="mt-4 font-head text-4xl font-700 uppercase leading-[1.03] text-white md:text-6xl">
              Your move, handled by our <span className="text-accent-500">own team</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              Home shifting, office relocation, car &amp; bike transport and on-demand mini-trucks —
              packed, loaded and moved by Nexora&apos;s own trained crew. No middlemen.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-white/85">
              {["Home Shifting", "Office Moves", "Intercity", "Book a Truck"].map((t) => (
                <li key={t} className="flex items-center gap-2 font-600">
                  <span className="h-2 w-2 rounded-sm bg-accent-500" /> {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/quote">Get a Free Quote <Icon name="arrow" size={18} /></Button>
              <Button href="/intra-city-transport" variant="ghost">Book a Truck</Button>
            </div>
          </div>

          <div className="justify-self-start lg:justify-self-end">
            <HeroQuoteCard />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-11 bg-accent-500/90 diag-cut" />
      </section>

      {/* ============ TRUST STRIP ============ */}
      <section className="relative z-10 -mt-8">
        <div className="shell">
          <div className="grid grid-cols-2 overflow-hidden rounded-xl bg-white shadow-xl md:grid-cols-4">
            {promises.map((p, i) => (
              <div key={p.title} className={`flex items-center gap-3 p-5 ${i < 3 ? "md:border-r border-line" : ""} ${i < 2 ? "border-b md:border-b-0 border-line" : ""}`}>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy-100 text-navy-800"><Icon name={p.icon as "users"} size={22} /></span>
                <div>
                  <p className="font-head text-sm font-600 uppercase leading-tight text-navy-800">{p.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="py-20 md:py-28">
        <div className="shell">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle
              eyebrow="What we move"
              title="One team for every kind of move"
              intro="From a single-room shift to a full office relocation or a quick mini-truck across town — our own crew handles it all, end to end."
            />
            <ArrowLink href="/solutions">View all services</ArrowLink>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => (
              <Link key={s.slug} href={`/solutions/${s.slug}`} className="group flex flex-col overflow-hidden rounded-lg border border-line bg-white transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative">
                  <CardImage src={s.image} alt={s.title} />
                  <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-accent-500 text-white"><Icon name={s.icon as "home"} size={22} /></span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-head text-xl font-600 uppercase text-navy-800 group-hover:text-accent-600">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-mute">{s.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-600 text-accent-600">
                    Learn more <Icon name="arrow" size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INTRA-CITY PROMO ============ */}
      <section className="bg-cloud py-20 md:py-28">
        <div className="shell grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>On-Demand · Book a Truck</Eyebrow>
            <h2 className="mt-3 font-head text-3xl font-600 uppercase leading-tight text-navy-800 md:text-[40px]">
              Move goods across your city, within hours
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-mute">
              Need to move a few boxes, some furniture or a shop load right now? Book a two-wheeler, three-wheeler or mini-truck on demand — with a driver from our own fleet, optional loading helpers, live tracking and pay-per-trip pricing.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { icon: "bolt", t: "Booked in minutes" },
                { icon: "users", t: "Loading helpers on request" },
                { icon: "track", t: "Live driver tracking" },
                { icon: "rupee", t: "Transparent per-trip fare" },
              ].map((x) => (
                <div key={x.t} className="flex items-center gap-3 rounded-lg border border-line bg-white p-3.5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy-100 text-navy-800"><Icon name={x.icon as "bolt"} size={18} /></span>
                  <span className="text-sm font-600 text-navy-800">{x.t}</span>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/intra-city-transport">Book a vehicle <Icon name="arrow" size={18} /></Button>
              <Button href="/intra-city-transport" variant="outline">See how it works</Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-2xl">
            <Image src="https://images.unsplash.com/photo-1599050751795-6cdaafbc2319?auto=format&fit=crop&w=1400&q=75" alt="Nexora on-demand mini-truck" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
            <span className="absolute left-4 top-4 rounded-full bg-accent-500 px-3 py-1 text-xs font-700 uppercase tracking-wide text-white">Within hours</span>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="relative overflow-hidden bg-navy-800 py-20 text-white md:py-24">
        <Image src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2000&q=70" alt="" fill className="object-cover opacity-15" sizes="100vw" />
        <div className="shell relative">
          <SectionTitle
            light
            center
            eyebrow="Trusted across India"
            title="Thousands of moves, done right"
            intro="Our numbers reflect one simple promise: an in-house team that treats every move like their own."
          />
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-head text-5xl font-700 text-accent-500 md:text-6xl">
                  <StatCounter value={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-sm uppercase tracking-wide text-white/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHO WE SERVE ============ */}
      <section className="py-20 md:py-28">
        <div className="shell">
          <SectionTitle
            center
            eyebrow="Who we serve"
            title="The right move for everyone"
            intro="Families, professionals, businesses and students — we tailor every move to who's moving and what matters most."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className="group relative flex items-end overflow-hidden rounded-lg bg-navy-900 p-6 min-h-[220px]">
                <Image src={ind.image} alt={ind.title} fill className="object-cover opacity-45 transition duration-500 group-hover:scale-105 group-hover:opacity-55" sizes="(max-width:768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                <div className="relative">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-accent-500 text-white">
                    <Icon name={ind.icon as "home"} size={22} />
                  </span>
                  <h3 className="mt-3 font-head text-2xl font-600 uppercase text-white">{ind.title}</h3>
                  <p className="text-sm text-white/80">{ind.hook}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="bg-cloud py-20 md:py-28">
        <div className="shell">
          <SectionTitle center eyebrow="How it works" title="Moving with Nexora is simple" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Get a free quote", d: "Share your move details and get a transparent estimate — online or over a quick survey." },
              { n: "02", t: "We plan & pack", d: "Our own crew arrives with quality materials and packs everything with care." },
              { n: "03", t: "We move it", d: "Loaded and transported on our own vehicles, with live tracking throughout." },
              { n: "04", t: "Unpack & settle", d: "We unload, unpack and arrange your things at your new place." },
            ].map((s) => (
              <div key={s.n} className="rounded-xl border border-line bg-white p-6">
                <span className="font-head text-3xl font-700 text-accent-500">{s.n}</span>
                <h3 className="mt-3 font-head text-lg font-600 uppercase text-navy-800">{s.t}</h3>
                <p className="mt-2 text-sm text-mute">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center"><Button href="/quote">Start your move <Icon name="arrow" size={18} /></Button></div>
        </div>
      </section>

      {/* ============ WHY US ============ */}
      <section className="py-20 md:py-28">
        <div className="shell">
          <SectionTitle center eyebrow="Why Nexora" title="An in-house team you can trust" intro="We don't hand your move to random contractors. Every crew, vehicle and coordinator is ours." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((p) => (
              <div key={p.title} className="rounded-xl border border-line bg-white p-6 text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-navy-800 text-white"><Icon name={p.icon as "users"} size={26} /></span>
                <h3 className="mt-4 font-head text-lg font-600 uppercase text-navy-800">{p.title}</h3>
                <p className="mt-2 text-sm text-mute">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CITIES ============ */}
      <section className="pb-16 md:pb-20">
        <div className="shell text-center">
          <Eyebrow>Now serving</Eyebrow>
          <h2 className="mt-3 font-head text-3xl font-600 uppercase text-navy-800">Moving families &amp; businesses across India</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {metros.map((c) => (
              <span key={c} className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-600 text-navy-700">
                <Icon name="pin" size={15} className="text-accent-500" /> {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ NEWS ============ */}
      <section className="pb-20 md:pb-28">
        <div className="shell">
          <div className="flex items-end justify-between gap-6">
            <SectionTitle eyebrow="Latest updates" title="News &amp; moving tips" />
            <ArrowLink href="/insights-news">View all</ArrowLink>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {articles.slice(0, 3).map((a) => (
              <Link key={a.id} href={`/insights-news/${a.id}`} className="group flex flex-col overflow-hidden rounded-lg border border-line bg-white transition hover:-translate-y-1 hover:shadow-xl">
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

      {/* ============ CONTACT CTA ============ */}
      <ContactStrip />
    </>
  );
}

function ContactStrip() {
  return (
    <section className="bg-navy-900 py-20 text-white md:py-24">
      <div className="shell grid items-center gap-10 lg:grid-cols-2">
        <SectionTitle
          light
          eyebrow="Get a free quote"
          title="Ready to plan your move?"
          intro="Tell us what you're moving and where. Our team will get back with a transparent, no-obligation quote — usually within a few hours."
        />
        <form className="grid gap-4 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:grid-cols-2">
          <input className="rounded-md border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 outline-none focus:border-accent-500" placeholder="Full name" />
          <input className="rounded-md border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 outline-none focus:border-accent-500" placeholder="Mobile number" />
          <select className="rounded-md border border-white/20 bg-white/10 px-4 py-3 text-sm text-white/80 outline-none focus:border-accent-500">
            <option className="text-navy-800">Move type</option>
            <option className="text-navy-800">Home shifting</option>
            <option className="text-navy-800">Office shifting</option>
            <option className="text-navy-800">Intercity relocation</option>
            <option className="text-navy-800">Car / bike transport</option>
            <option className="text-navy-800">Book a truck</option>
          </select>
          <input className="rounded-md border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 outline-none focus:border-accent-500" placeholder="Moving from → to" />
          <button type="button" className="rounded-sm bg-accent-500 px-6 py-3 font-700 uppercase tracking-wide text-white transition hover:bg-accent-600 sm:col-span-2">
            Get my free quote
          </button>
        </form>
      </div>
    </section>
  );
}
