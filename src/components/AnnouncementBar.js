"use client";

import { useState } from "react";
import { Sparkles, X } from "lucide-react";

export default function AnnouncementBar({ onOpenReservation }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Announcement"
      className="relative z-50 bg-[#F5F1E8] border-b border-[#E8E3D9] text-[#24231F] px-4 py-2 text-xs md:text-sm transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1 flex items-center justify-center gap-2 text-center">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#B85D36]/10 text-[#B85D36] font-medium text-[11px] tracking-wide uppercase">
            <Sparkles className="w-3 h-3" /> Season Notice
          </span>
          <span className="font-medium text-[#24231F] hidden sm:inline">
            Seasonal Spring-Summer Hearth Tasting Menu Now Available.
          </span>
          <span className="font-medium text-[#24231F] sm:hidden">
            Spring-Summer Hearth Tasting Now Open.
          </span>
          <button
            onClick={onOpenReservation}
            className="underline underline-offset-4 font-semibold text-[#B85D36] hover:text-[#9C4B29] transition-colors ml-1 focus:outline-none focus:ring-2 focus:ring-[#B85D36]/40 rounded"
          >
            Reserve Table &rarr;
          </button>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="text-[#6E6B65] hover:text-[#24231F] p-1 rounded-full hover:bg-[#EAE5DC] transition-colors focus:outline-none focus:ring-2 focus:ring-[#B85D36]/40"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
