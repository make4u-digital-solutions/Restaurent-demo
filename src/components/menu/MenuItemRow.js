"use client";

import { Flame, Sparkles, Award } from "lucide-react";
import { formatPrice } from "../../data/menuData";

export default function MenuItemRow({ item }) {
  const isVeg = item.dietaryType === "vegetarian";

  return (
    <div className="group py-5 sm:py-6 border-b border-[#E8E3D9] transition-colors duration-200 hover:bg-[#F5F1E8]/50 px-3 sm:px-4 rounded-xl">
      {/* Top Row: Name, Dietary Dot, Badges & Price */}
      <div className="flex items-baseline justify-between gap-4">
        {/* Left Side: Dietary Marker + Name + Badges */}
        <div className="flex-1 min-w-0 pr-2">
          <div className="flex flex-wrap items-center gap-2">
            {/* Dietary Symbol (Standard Green Square with Dot for Veg / Brown/Red for Non-Veg) */}
            <span
              className={`inline-flex items-center justify-center w-3.5 h-3.5 border rounded-xs shrink-0 ${
                isVeg
                  ? "border-[#4A5B38] text-[#4A5B38]"
                  : "border-[#B85D36] text-[#B85D36]"
              }`}
              title={isVeg ? "Vegetarian" : "Non-Vegetarian"}
              aria-label={isVeg ? "Vegetarian" : "Non-Vegetarian"}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isVeg ? "bg-[#4A5B38]" : "bg-[#B85D36]"
                }`}
              />
            </span>

            {/* Dish Name */}
            <h4 className="font-serif text-lg sm:text-xl font-normal text-[#24231F] group-hover:text-[#B85D36] transition-colors leading-snug">
              {item.name}
            </h4>

            {/* Badges / Tags */}
            {item.tags && item.tags.length > 0 && (
              <div className="inline-flex items-center gap-1.5 ml-1">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-[#B85D36]/10 text-[#B85D36]"
                  >
                    {tag === "Chef's Special" && <Sparkles className="w-2.5 h-2.5" />}
                    {tag === "Woodfire" && <Flame className="w-2.5 h-2.5" />}
                    {tag === "Bestseller" && <Award className="w-2.5 h-2.5" />}
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Description */}
          {item.description && (
            <p className="mt-1.5 text-xs sm:text-sm text-[#6E6B65] leading-relaxed font-sans max-w-2xl">
              {item.description}
            </p>
          )}
        </div>

        {/* Right Side: INR Price */}
        <div className="shrink-0 text-right">
          <span className="font-serif text-base sm:text-lg font-medium text-[#24231F] group-hover:text-[#B85D36] transition-colors whitespace-nowrap">
            {formatPrice(item.price)}
          </span>
        </div>
      </div>
    </div>
  );
}
