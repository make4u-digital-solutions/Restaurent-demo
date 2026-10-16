"use client";

import { motion } from "framer-motion";
import { Sparkles, Flame, Utensils, Wheat, CakeSlice, GlassWater, Layers } from "lucide-react";
import { menuCategories } from "../../data/menuData";

export default function MenuCategoryFilter({
  selectedCategory,
  onSelectCategory,
  selectedDietary,
  onSelectDietary,
  categoryCounts,
}) {
  const iconMap = {
    all: Layers,
    starters: Sparkles,
    "woodfire-mains": Flame,
    "pastas-grains": Utensils,
    "artisan-breads": Wheat,
    desserts: CakeSlice,
    beverages: GlassWater,
  };

  const allCategories = [
    { id: "all", shortName: "All Items", name: "All Items" },
    ...menuCategories,
  ];

  return (
    <div className="space-y-6">
      {/* Category Tabs: Horizontal Scrollable on Mobile, Centered Wrap on Desktop */}
      <div className="relative">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar sm:flex-wrap sm:justify-center">
          {allCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const Icon = iconMap[cat.id] || Utensils;
            const count = categoryCounts[cat.id] || 0;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`group shrink-0 inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.14em] font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B85D36]/50 cursor-pointer ${
                  isSelected
                    ? "bg-[#B85D36] text-white shadow-md"
                    : "bg-white text-[#24231F] border border-[#E8E3D9] hover:border-[#B85D36]/40 hover:bg-[#FAF8F3]"
                }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 ${
                    isSelected ? "text-white" : "text-[#B85D36] group-hover:scale-110 transition-transform"
                  }`}
                />
                <span>{cat.shortName || cat.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-sans ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-[#F5F1E8] text-[#6E6B65]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dietary Sub-Filters: Vegetarian vs Non-Vegetarian */}
      <div className="flex items-center justify-center gap-2 text-xs">
        <span className="text-[#6E6B65] uppercase tracking-wider text-[11px] font-semibold mr-1">
          Dietary:
        </span>
        <button
          onClick={() => onSelectDietary("all")}
          className={`px-3 py-1.5 rounded-full font-medium transition-colors cursor-pointer ${
            selectedDietary === "all"
              ? "bg-[#24231F] text-white"
              : "bg-white text-[#6E6B65] border border-[#E8E3D9] hover:text-[#24231F]"
          }`}
        >
          All Plates
        </button>
        <button
          onClick={() => onSelectDietary("vegetarian")}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-medium transition-colors cursor-pointer ${
            selectedDietary === "vegetarian"
              ? "bg-[#4A5B38] text-white"
              : "bg-white text-[#4A5B38] border border-[#E8E3D9] hover:bg-[#4A5B38]/10"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#4A5B38]" />
          <span>Vegetarian</span>
        </button>
        <button
          onClick={() => onSelectDietary("non-vegetarian")}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-medium transition-colors cursor-pointer ${
            selectedDietary === "non-vegetarian"
              ? "bg-[#B85D36] text-white"
              : "bg-white text-[#B85D36] border border-[#E8E3D9] hover:bg-[#B85D36]/10"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#B85D36]" />
          <span>Non-Vegetarian</span>
        </button>
      </div>
    </div>
  );
}
