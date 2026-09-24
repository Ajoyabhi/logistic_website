"use client";

import { useState } from "react";
import Icon from "./Icon";
import { metros } from "@/lib/site";

const field = "w-full rounded-md border border-line px-4 py-3 text-sm outline-none transition focus:border-navy-500 focus:ring-2 focus:ring-navy-100";

const vehicles = [
  { key: "bike", label: "Two-Wheeler", icon: "bolt", cap: "Up to 20 kg", base: 40, perKm: 9, note: "Documents, food & small parcels" },
  { key: "auto", label: "Three-Wheeler", icon: "truck", cap: "Up to 500 kg", base: 120, perKm: 16, note: "Bulky parcels & multiple boxes" },
  { key: "ace", label: "Tata Ace", icon: "truck", cap: "Up to 750 kg", base: 250, perKm: 22, note: "Store runs & B2B loads" },
  { key: "pickup", label: "Pickup 8ft", icon: "truck", cap: "Up to 1.5 T", base: 450, perKm: 28, note: "Heavy & large consignments" },
] as const;

type VehicleKey = (typeof vehicles)[number]["key"];

export default function CityDeliveryWidget() {
  const [vehicle, setVehicle] = useState<VehicleKey>("bike");
  const [km, setKm] = useState("6");
  const [booked, setBooked] = useState(false);
  const [result, setResult] = useState<{ fare: number; eta: number } | null>(null);

  const v = vehicles.find((x) => x.key === vehicle)!;

  function estimate() {
    const d = Math.max(parseFloat(km) || 0, 1);
    const fare = Math.round(v.base + v.perKm * d);
    const eta = Math.round(d / 18 * 60) + 15; // travel + pickup buffer
    setResult({ fare, eta });
    setBooked(false);
  }

  if (booked && result) {
    return (
      <div className="rounded-xl border border-line bg-white p-8 text-center shadow-sm">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent-500 text-white"><Icon name="check" size={28} /></span>
        <h3 className="mt-4 font-head text-2xl font-600 uppercase text-navy-800">Driver on the way!</h3>
        <p className="mx-auto mt-2 max-w-md text-mute">
          Your {v.label.toLowerCase()} is booked. Estimated arrival for pickup in about {result.eta} minutes.
          You&apos;ll get live tracking on the Nexora app. (Demo — no real booking is made.)
        </p>
        <button onClick={() => { setBooked(false); setResult(null); }} className="mt-6 rounded-sm border border-navy-800 px-6 py-3 font-700 uppercase tracking-wide text-navy-800 hover:bg-navy-800 hover:text-white">
          Book another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); estimate(); }} className="rounded-xl border border-line bg-white p-6 shadow-sm md:p-8">
      <p className="font-head text-lg font-600 uppercase text-navy-800">Book a vehicle to move your goods</p>

      {/* Vehicle picker */}
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {vehicles.map((x) => (
          <button
            type="button"
            key={x.key}
            onClick={() => { setVehicle(x.key); setResult(null); }}
            className={`flex flex-col items-center gap-1 rounded-md border px-2 py-3 text-center transition ${
              vehicle === x.key ? "border-accent-500 bg-accent-500 text-white" : "border-line text-navy-700 hover:border-navy-500"
            }`}
          >
            <Icon name={x.icon} size={22} />
            <span className="text-xs font-600 uppercase leading-tight">{x.label}</span>
            <span className={`text-[10px] ${vehicle === x.key ? "text-white/80" : "text-mute"}`}>{x.cap}</span>
          </button>
        ))}
      </div>
      <p className="mt-2 text-xs text-mute">{v.note}</p>

      {/* Route */}
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs font-600 uppercase tracking-wide text-mute">City</label>
          <select className={field} defaultValue={metros[0]}>
            {metros.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-600 uppercase tracking-wide text-mute">Pickup area</label>
          <input required className={field} placeholder="e.g. Koramangala" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-600 uppercase tracking-wide text-mute">Drop area</label>
          <input required className={field} placeholder="e.g. Indiranagar" />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 flex items-center justify-between text-xs font-600 uppercase tracking-wide text-mute">
            <span>Approx. distance</span>
            <span className="text-navy-800">{km} km</span>
          </label>
          <input
            type="range"
            min={1}
            max={40}
            value={km}
            onChange={(e) => { setKm(e.target.value); setResult(null); }}
            className="w-full accent-[var(--color-accent-500)]"
          />
        </div>
      </div>

      <button type="submit" className="mt-6 w-full rounded-sm bg-accent-500 px-6 py-3.5 font-700 uppercase tracking-wide text-white transition hover:bg-accent-600">
        Get fare &amp; ETA
      </button>

      {result && (
        <div className="mt-6 rounded-lg border border-line bg-cloud p-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-mute">Estimated fare</p>
              <p className="font-head text-3xl font-700 text-accent-600">₹{result.fare.toLocaleString("en-IN")}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-mute">Pickup in</p>
              <p className="font-head text-3xl font-700 text-navy-800">~{result.eta} min</p>
            </div>
          </div>
          <p className="mt-2 text-xs text-mute">Indicative, incl. of taxes. Final fare depends on exact route, waiting and load. Demo estimator.</p>
          <button onClick={() => setBooked(true)} className="mt-3 w-full rounded-sm bg-navy-800 px-6 py-3 font-700 uppercase tracking-wide text-white transition hover:bg-navy-700">
            Book now
          </button>
        </div>
      )}
    </form>
  );
}
