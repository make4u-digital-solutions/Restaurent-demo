"use client";

import { Sparkles, Clock, ShieldCheck } from "lucide-react";

export default function MenuHero() {
  return (
    <section
      aria-label="Menu Introduction"
      className="pt-10 sm:pt-14 pb-8 sm:pb-10 bg-[#FAF8F3] border-b border-[#E8E3D9]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B85D36]/10 text-[#B85D36] text-xs font-semibold uppercase tracking-[0.22em] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>A La Carte Selection</span>
        </div>

        {/* Heading */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#24231F] tracking-tight leading-tight">
          Made to Be Savoured
        </h1>

        {/* Short Description */}
        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#6E6B65] max-w-2xl mx-auto leading-relaxed font-sans">
          A seasonal culinary narrative cooked over live oak coals, celebrating
          farm-to-table harvests, line-caught seafood, and handcrafted pasta traditions.
        </p>

        {/* Supporting Meta Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-[#6E6B65] font-medium pt-4 border-t border-[#E8E3D9]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#4A5B38]" />
            <span>Pure Vegetarian & Non-Vegetarian Options</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#B85D36]" />
            <span>Dinner Service: 5:00 PM – Late</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#4A5B38]" />
            <span>All Prices in INR (₹) · Taxes Applicable</span>
          </div>
        </div>
      </div>
    </section>
  );
}
