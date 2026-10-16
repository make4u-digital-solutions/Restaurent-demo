"use client";

import { Search, X } from "lucide-react";

export default function MenuSearch({ searchQuery, setSearchQuery, resultCount, totalCount }) {
  return (
    <div className="w-full max-w-xl mx-auto">
      <label htmlFor="menu-search-input" className="sr-only">
        Search menu dishes by name or ingredients
      </label>
      <div className="relative flex items-center">
        <div className="absolute left-4 pointer-events-none text-[#6E6B65]">
          <Search className="w-4 h-4" />
        </div>
        <input
          id="menu-search-input"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search dishes, ingredients (e.g. Scallops, Truffle, Ribeye)..."
          className="w-full pl-11 pr-24 py-3 sm:py-3.5 bg-white border border-[#E8E3D9] rounded-2xl text-sm sm:text-base text-[#24231F] placeholder:text-[#6E6B65]/70 focus:outline-none focus:ring-2 focus:ring-[#B85D36] focus:border-transparent transition-all shadow-xs"
        />

        <div className="absolute right-3 flex items-center gap-2">
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="p-1 rounded-full text-[#6E6B65] hover:text-[#24231F] hover:bg-[#F5F1E8] transition-colors focus:outline-none focus:ring-1 focus:ring-[#B85D36]"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <span className="text-[11px] font-semibold text-[#6E6B65] bg-[#F5F1E8] px-2.5 py-1 rounded-full border border-[#E8E3D9]">
            {resultCount} {resultCount === 1 ? "dish" : "dishes"}
          </span>
        </div>
      </div>
    </div>
  );
}
