"use client";

import { useState } from "react";
import Icon from "./Icon";
import { metros } from "@/lib/site";

const field = "w-full rounded-md border border-line px-4 py-3 text-sm outline-none transition focus:border-navy-500 focus:ring-2 focus:ring-navy-100";

const moveTypes = [
  { key: "home", label: "Home Shifting", icon: "home" },
  { key: "office", label: "Office Shifting", icon: "building" },
  { key: "vehicle", label: "Car / Bike", icon: "car" },
  { key: "intra", label: "In-City Load", icon: "bolt" },
] as const;

type MoveKey = (typeof moveTypes)[number]["key"];

// Indicative base prices (₹) for a local move by home size
const homeSizes: Record<string, number> = {
  "1 RK": 3500,
  "1 BHK": 6000,
  "2 BHK": 9500,
  "3 BHK": 14000,
  "4 BHK+": 20000,
};

export default function QuoteWidget() {
  const [type, setType] = useState<MoveKey>("home");
  const [size, setSize] = useState("2 BHK");
  const [distance, setDistance] = useState("intercity"); // local | intercity
  const [result, setResult] = useState<{ low: number; high: number } | null>(null);

  function estimate() {
    let base = 0;
    if (type === "home") base = homeSizes[size];
    else if (type === "office") base = 18000;
    else if (type === "vehicle") base = 6000;
    else base = 1500; // intra-city load
    const distMult = distance === "intercity" ? 2.1 : 1;
    const mid = base * distMult;
    setResult({ low: Math.round(mid * 0.85), high: Math.round(mid * 1.2) });
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); estimate(); }} className="rounded-xl border border-line bg-white p-6 shadow-sm md:p-8">
      {/* Move type */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {moveTypes.map((m) => (
          <button
            type="button"
            key={m.key}
            onClick={() => { setType(m.key); setResult(null); }}
            className={`flex flex-col items-center gap-1.5 rounded-md border px-3 py-3 text-center text-xs font-600 uppercase tracking-wide transition ${
              type === m.key ? "border-accent-500 bg-accent-500 text-white" : "border-line text-navy-700 hover:border-navy-500"
            }`}
          >
            <Icon name={m.icon} size={22} /> {m.label}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-600 uppercase tracking-wide text-mute">Moving from</label>
          <select className={field} defaultValue={metros[0]}>{metros.map((c) => <option key={c}>{c}</option>)}</select>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-600 uppercase tracking-wide text-mute">Moving to</label>
          <select className={field} defaultValue={metros[1]}>{metros.map((c) => <option key={c}>{c}</option>)}</select>
        </div>

        {type === "home" && (
          <div>
            <label className="mb-1.5 block text-xs font-600 uppercase tracking-wide text-mute">Home size</label>
            <select value={size} onChange={(e) => { setSize(e.target.value); setResult(null); }} className={field}>
              {Object.keys(homeSizes).map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
        )}
        {type === "vehicle" && (
          <div>
            <label className="mb-1.5 block text-xs font-600 uppercase tracking-wide text-mute">Vehicle type</label>
            <select className={field} defaultValue=""><option value="" disabled>Select…</option><option>Two-wheeler</option><option>Hatchback</option><option>Sedan</option><option>SUV</option></select>
          </div>
        )}

        <div>
          <label className="mb-1.5 block text-xs font-600 uppercase tracking-wide text-mute">Distance</label>
          <select value={distance} onChange={(e) => { setDistance(e.target.value); setResult(null); }} className={field}>
            <option value="local">Within city (local)</option>
            <option value="intercity">Another city (intercity)</option>
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-600 uppercase tracking-wide text-mute">Preferred date</label>
          <input type="date" className={field} />
        </div>
        <input required type="tel" className={`${field} sm:col-span-2`} placeholder="Your mobile number *" />
      </div>

      <button type="submit" className="mt-6 w-full rounded-sm bg-accent-500 px-6 py-3.5 font-700 uppercase tracking-wide text-white transition hover:bg-accent-600">
        Get estimate
      </button>

      {result && (
        <div className="mt-6 rounded-lg border border-line bg-cloud p-5">
          <p className="text-xs uppercase tracking-wide text-mute">Estimated cost</p>
          <p className="mt-1 font-head text-3xl font-700 text-accent-600">
            ₹{result.low.toLocaleString("en-IN")} – ₹{result.high.toLocaleString("en-IN")}
          </p>
          <p className="mt-1 text-xs text-mute">Indicative range incl. packing & transport, GST extra. A coordinator will confirm the exact quote after a quick survey. Demo estimator — no booking is made.</p>
          <a href="/contact" className="mt-3 inline-flex items-center gap-1.5 text-sm font-600 text-navy-800 hover:text-accent-600">
            Book a free survey <Icon name="arrow" size={16} />
          </a>
        </div>
      )}
    </form>
  );
}
