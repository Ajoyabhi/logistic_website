import type { Metadata } from "next";
import { PageHero, SectionTitle } from "@/components/UI";
import TrackWidget from "@/components/TrackWidget";

export const metadata: Metadata = {
  title: "Track Your Move",
  description: "Track your DPSV Logistic booking in real time — from survey and packing to delivery — by booking ID or mobile number.",
};

export default function TrackPage() {
  return (
    <>
      <PageHero
        title="Track Your Move"
        subtitle="Follow your move in real time — from survey and packing to delivery and unpacking."
        image="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2000&q=70"
        trail={[{ label: "Track Move" }]}
      />

      <section className="py-16 md:py-24">
        <div className="shell max-w-3xl">
          <SectionTitle center eyebrow="Live move status" title="Where is my move?" intro="Enter your booking ID or registered mobile number to see live status and milestones." />
          <div className="mt-10"><TrackWidget /></div>
        </div>
      </section>
    </>
  );
}
