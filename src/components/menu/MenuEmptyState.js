"use client";

import { UtensilsCrossed, RefreshCw } from "lucide-react";

export default function MenuEmptyState({ onReset, searchQuery, selectedCategory }) {
  return (
    <div className="bg-white rounded-3xl p-10 sm:p-16 border border-[#E8E3D9] text-center max-w-xl mx-auto shadow-xs">
      <div className="w-16 h-16 rounded-full bg-[#F5F1E8] border border-[#E8E3D9] flex items-center justify-center text-[#B85D36] mx-auto mb-6">
        <UtensilsCrossed className="w-7 h-7" />
      </div>

      <h3 className="font-serif text-2xl text-[#24231F] font-normal">
        No Dishes Found
      </h3>

      <p className="mt-3 text-sm text-[#6E6B65] max-w-sm mx-auto leading-relaxed font-sans">
        {searchQuery
          ? `We couldn't find any dishes matching "${searchQuery}" in this category.`
          : "No dishes match your selected filter criteria."}
      </p>

      <div className="mt-8">
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B85D36] text-white text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#9C4B29] transition-colors shadow-xs cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset All Filters</span>
        </button>
      </div>
    </div>
  );
}
