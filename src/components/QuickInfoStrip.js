"use client";

import { UtensilsCrossed, Clock, MapPin, Sparkles } from "lucide-react";
import { restaurantData } from "../data/restaurantData";

export default function QuickInfoStrip() {
  const iconMap = {
    UtensilsCrossed: UtensilsCrossed,
    Clock: Clock,
    MapPin: MapPin,
    Sparkles: Sparkles,
  };

  return (
    <section
      id="quick-info"
      aria-label="Quick Information"
      className="relative z-30 bg-[#FAF8F3] border-b border-[#E8E3D9] py-8 sm:py-10 shadow-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-[#E8E3D9]">
          {restaurantData.quickInfo.map((item, index) => {
            const Icon = iconMap[item.iconName] || UtensilsCrossed;
            return (
              <div
                key={item.label}
                className={`pt-4 sm:pt-0 ${
                  index !== 0 ? "lg:pl-8" : ""
                } flex items-start gap-4`}
              >
                <div className="w-10 h-10 rounded-full bg-[#F5F1E8] border border-[#E8E3D9] flex items-center justify-center text-[#B85D36] shrink-0 mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#6E6B65] block mb-1">
                    {item.label}
                  </span>
                  <p className="text-sm sm:text-base font-medium text-[#24231F] leading-snug">
                    {item.value}
                  </p>
                  {item.subtext && (
                    <span className="text-xs text-[#6E6B65] mt-0.5 block">
                      {item.subtext}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
