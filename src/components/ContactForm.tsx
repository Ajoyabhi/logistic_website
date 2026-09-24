"use client";

import { useState } from "react";
import Icon from "./Icon";

const field = "rounded-md border border-line px-4 py-3 text-sm outline-none transition focus:border-navy-500 focus:ring-2 focus:ring-navy-100";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex items-center gap-4 rounded-xl border border-line bg-cloud p-8">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent-500 text-white"><Icon name="check" size={26} /></span>
        <div>
          <h3 className="font-head text-lg font-600 uppercase text-navy-800">Thank you!</h3>
          <p className="text-sm text-mute">Your enquiry has been received. A DPSV expert will be in touch shortly. (Demo form — nothing was sent.)</p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="grid gap-4 rounded-xl border border-line bg-white p-6 shadow-sm sm:grid-cols-2"
    >
      <input required className={field} placeholder="First name *" />
      <input required className={field} placeholder="Last name *" />
      <input required type="email" className={`${field} sm:col-span-2`} placeholder="Email address *" />
      <input className={field} placeholder="Company" />
      <input className={field} placeholder="Location / Country" />
      <select className={`${field} text-mute`} defaultValue="">
        <option value="" disabled>Service *</option>
        <option>Home Shifting</option>
        <option>Office &amp; Commercial Shifting</option>
        <option>Intercity Relocation</option>
        <option>Intra-City Transport (Book a Truck)</option>
        <option>Car &amp; Bike Transport</option>
        <option>Storage &amp; Warehousing</option>
        <option>Partner / Careers</option>
        <option>Other</option>
      </select>
      <select className={`${field} text-mute`} defaultValue="">
        <option value="" disabled>You are</option>
        <option>A family / household</option>
        <option>A working professional</option>
        <option>An office / business</option>
        <option>A student / bachelor</option>
        <option>A tenant / landlord</option>
        <option>Moving from another city</option>
      </select>
      <textarea rows={4} className={`${field} sm:col-span-2`} placeholder="How can we help? *" required />
      <label className="flex items-start gap-2 text-xs text-mute sm:col-span-2">
        <input type="checkbox" required className="mt-0.5" />
        I agree to be contacted and accept the privacy policy.
      </label>
      <button type="submit" className="rounded-sm bg-accent-500 px-6 py-3 font-700 uppercase tracking-wide text-white transition hover:bg-accent-600 sm:col-span-2">
        Submit enquiry
      </button>
    </form>
  );
}
