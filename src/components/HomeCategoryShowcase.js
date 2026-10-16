"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Flame,
  Utensils,
  Wheat,
  CakeSlice,
  GlassWater,
  ArrowRight,
} from "lucide-react";
import { menuCategories, menuItems } from "../data/menuData";

export default function HomeCategoryShowcase() {
  const iconMap = {
    Sparkles: Sparkles,
    Flame: Flame,
    Utensils: Utensils,
    Wheat: Wheat,
    CakeSlice: CakeSlice,
    GlassWater: GlassWater,
  };

  return (
    <section
      id="category-showcase"
      aria-label="Menu Category Showcase"
      className="py-20 sm:py-28 bg-[#FAF8F3] border-b border-[#E8E3D9] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B85D36]/10 text-[#B85D36] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Culinary Repertoire</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#24231F] tracking-tight leading-tight">
            Explore by Category
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6E6B65] max-w-2xl mx-auto leading-relaxed font-sans">
            Every chapter of our menu reflects a devotion to Mediterranean seasonality,
            live hearth craft, and hand-rolled pasta traditions.
          </p>
        </div>

        {/* Category Tiles Grid - Strictly NO images, elegant typography and icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {menuCategories.map((category, index) => {
            const Icon = iconMap[category.iconName] || Utensils;
            const itemCount = menuItems.filter(
              (item) => item.categoryId === category.id
            ).length;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  href={`/menu?category=${category.id}`}
                  className="group block h-full bg-white rounded-2xl p-7 sm:p-8 border border-[#E8E3D9] shadow-xs hover:shadow-xl hover:border-[#B85D36]/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Bar: Icon + Item count tag */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#F5F1E8] group-hover:bg-[#B85D36]/10 border border-[#E8E3D9] group-hover:border-[#B85D36]/30 flex items-center justify-center text-[#B85D36] transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#6E6B65] bg-[#F5F1E8] px-3 py-1 rounded-full group-hover:bg-[#B85D36]/10 group-hover:text-[#B85D36] transition-colors">
                        {itemCount} Delicacies
                      </span>
                    </div>

                    {/* Category Title */}
                    <h3 className="font-serif text-xl sm:text-2xl text-[#24231F] font-normal tracking-tight group-hover:text-[#B85D36] transition-colors leading-snug">
                      {category.name}
                    </h3>

                    {/* Category Description */}
                    <p className="mt-3 text-sm text-[#6E6B65] leading-relaxed font-sans line-clamp-2">
                      {category.description}
                    </p>
                  </div>

                  {/* Bottom Action Link */}
                  <div className="mt-7 pt-5 border-t border-[#F0ECE2] flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-[#B85D36] group-hover:text-[#9C4B29] transition-colors">
                    <span>View Category Menu</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View Full Menu CTA Banner */}
        <div className="mt-14 sm:mt-16 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#24231F] text-white text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#B85D36] transition-colors shadow-md"
          >
            <Utensils className="w-4 h-4" />
            <span>Discover Full A la Carte Menu</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
