"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Icon from "./Icon";
import { metros } from "@/lib/site";

const moveTypes = [
  { key: "home", label: "Home", icon: "home" },
  { key: "office", label: "Office", icon: "building" },
  { key: "vehicle", label: "Vehicle", icon: "car" },
  { key: "intra", label: "In-City", icon: "bolt" },
] as const;

const field = "w-full rounded-md border border-line px-3.5 py-3 text-sm outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-100";

export default function HeroQuoteCard() {
  const router = useRouter();
  const [tab, setTab] = useState<"quote" | "track">("quote");
  const [type, setType] = useState<string>("home");

  return (
    <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl md:p-7">
      {/* Tabs */}
      <div className="flex gap-6 border-b border-line">
        {(["quote", "track"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`-mb-px border-b-2 pb-3 font-head text-lg font-600 uppercase tracking-wide transition ${
              tab === t ? "border-accent-500 text-navy-800" : "border-transparent text-mute hover:text-navy-700"
            }`}
          >
            {t === "quote" ? "Get Estimate" : "Track Move"}
          </button>
        ))}
      </div>

      {tab === "quote" ? (
        <form onSubmit={(e) => { e.preventDefault(); router.push("/quote"); }} className="mt-5">
          <p className="mb-3 font-head text-lg font-500 text-navy-800">
            <span className="font-700">Free</span> moving estimate
          </p>

          <div className="grid grid-cols-4 gap-2">
            {moveTypes.map((m) => (
              <button
                type="button"
                key={m.key}
                onClick={() => setType(m.key)}
                className={`flex flex-col items-center gap-1 rounded-md border px-1 py-2.5 text-center transition ${
                  type === m.key ? "border-accent-500 bg-accent-500 text-white" : "border-line text-navy-700 hover:border-navy-500"
                }`}
              >
                <Icon name={m.icon} size={20} />
                <span className="text-[11px] font-600 uppercase">{m.label}</span>
              </button>
            ))}
          </div>

          <div className="mt-4 grid gap-3">
            <div className="grid grid-cols-2 gap-3">
              <select className={field} defaultValue={metros[0]} aria-label="From city">
                {metros.map((c) => <option key={c}>{c}</option>)}
              </select>
              <select className={field} defaultValue={type === "intra" ? metros[0] : metros[1]} aria-label="To city">
                {metros.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <input type="date" className={field} aria-label="Moving date" />
          </div>

          <button type="submit" className="mt-4 w-full rounded-sm bg-accent-500 py-3.5 font-700 uppercase tracking-wide text-white transition hover:bg-accent-600">
            Get Free Quote
          </button>
        </form>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); router.push("/track"); }} className="mt-5">
          <p className="mb-3 font-head text-lg font-500 text-navy-800">
            <span className="font-700">Track</span> your move
          </p>
          <input placeholder="Booking ID or mobile number" className={field} aria-label="Booking ID or mobile" />
          <button type="submit" className="mt-4 w-full rounded-sm bg-accent-500 py-3.5 font-700 uppercase tracking-wide text-white transition hover:bg-accent-600">
            Track
          </button>
        </form>
      )}

      <div className="mt-5 flex items-center gap-3 border-t border-line pt-4 text-xs text-mute">
        <Icon name="shield" size={16} className="text-accent-500" />
        Our own trained crew · Transparent pricing · Insured moves.
      </div>
    </div>
  );
}
