"use client";

import { useState } from "react";
import Icon from "./Icon";

type Mode = "Booking ID" | "Mobile";
const modes: Mode[] = ["Booking ID", "Mobile"];

type Step = { label: string; place: string; date: string; done: boolean };

const demo: { status: string; service: string; steps: Step[] } = {
  status: "In Transit",
  service: "2 BHK · Lucknow → Delhi",
  steps: [
    { label: "Booking confirmed", place: "Coordinator assigned", date: "12 Sep, 10:20", done: true },
    { label: "Pre-move survey done", place: "Indira Nagar, Lucknow", date: "13 Sep, 16:00", done: true },
    { label: "Packing completed", place: "Indira Nagar, Lucknow", date: "16 Sep, 11:30", done: true },
    { label: "Loaded & in transit", place: "En route to Delhi", date: "16 Sep, 18:45", done: true },
    { label: "Out for delivery", place: "Dwarka, Delhi", date: "Expected 18 Sep", done: false },
    { label: "Delivered & unpacked", place: "Delhi", date: "—", done: false },
  ],
};

export default function TrackWidget() {
  const [mode, setMode] = useState<Mode>("Booking ID");
  const [ref, setRef] = useState("");
  const [result, setResult] = useState<typeof demo | null>(null);

  return (
    <div>
      <form
        onSubmit={(e) => { e.preventDefault(); setResult(demo); }}
        className="rounded-xl border border-line bg-white p-6 shadow-sm"
      >
        <div className="flex flex-wrap gap-2">
          {modes.map((m) => (
            <button
              type="button"
              key={m}
              onClick={() => setMode(m)}
              className={`rounded-md px-4 py-2 text-sm font-600 transition ${mode === m ? "bg-navy-800 text-white" : "bg-cloud text-navy-700 hover:bg-navy-100"}`}
            >
              {m}
            </button>
          ))}
        </div>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Icon name="track" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-mute" />
            <input
              value={ref}
              onChange={(e) => setRef(e.target.value)}
              required
              className="w-full rounded-md border border-line py-3.5 pl-11 pr-4 text-sm outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-100"
              placeholder={mode === "Booking ID" ? "Enter your booking ID (e.g. NX-48213)" : "Enter your registered mobile number"}
            />
          </div>
          <button type="submit" className="rounded-sm bg-accent-500 px-8 py-3.5 font-700 uppercase tracking-wide text-white transition hover:bg-accent-600">
            Track
          </button>
        </div>
      </form>

      {result && (
        <div className="mt-8 overflow-hidden rounded-xl border border-line bg-white shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line bg-cloud p-6">
            <div>
              <p className="text-xs uppercase tracking-wide text-mute">Booking</p>
              <p className="font-head text-xl font-600 uppercase text-navy-800">{ref || "NX-48213"}</p>
            </div>
            <div className="text-sm text-mute">{result.service}</div>
            <span className="rounded-full bg-accent-100 px-4 py-1.5 text-sm font-600 uppercase tracking-wide text-accent-700">{result.status}</span>
          </div>

          <ol className="relative p-6 pl-10">
            <span className="absolute left-[26px] top-8 bottom-8 w-0.5 bg-line" />
            {result.steps.map((s) => (
              <li key={s.label} className="relative mb-6 last:mb-0">
                <span className={`absolute -left-[22px] grid h-6 w-6 place-items-center rounded-full ${s.done ? "bg-accent-500 text-white" : "border-2 border-line bg-white text-transparent"}`}>
                  <Icon name="check" size={14} />
                </span>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className={`font-600 ${s.done ? "text-navy-800" : "text-mute"}`}>{s.label}</p>
                  <p className="text-sm text-mute">{s.date}</p>
                </div>
                <p className="text-sm text-mute">{s.place}</p>
              </li>
            ))}
          </ol>
          <p className="border-t border-line p-4 text-center text-xs text-mute">Demo tracking — data is illustrative.</p>
        </div>
      )}
    </div>
  );
}
