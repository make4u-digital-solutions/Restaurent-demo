"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Wine, Info, X } from "lucide-react";
import { restaurantData } from "../data/restaurantData";

export default function SignatureDishes({ onOpenReservation }) {
  const [selectedDish, setSelectedDish] = useState(null);

  return (
    <section
      id="signature-dishes"
      aria-label="Signature Dishes Showcase"
      className="py-20 sm:py-28 bg-[#FAF8F3] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B85D36]/10 text-[#B85D36] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Culinary Masterpieces</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#24231F] tracking-tight leading-tight">
            Curated Signature Dishes
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6E6B65] max-w-2xl mx-auto leading-relaxed font-sans">
            A seasonal showcase of our kitchen&apos;s finest wood-fired creations,
            celebrating the purity of line-caught seafood and dry-aged cuts.
          </p>
        </div>

        {/* Editorial Dishes Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {restaurantData.signatureDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E8E3D9] shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Dish Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F5F1E8]">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#24231F] text-[11px] font-semibold uppercase tracking-[0.15em] shadow-xs border border-[#E8E3D9]">
                    {dish.badge}
                  </span>
                </div>

                {/* Price Tag */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-[#24231F]/90 backdrop-blur-md text-white text-xs font-serif font-medium shadow-xs">
                    {dish.price}
                  </span>
                </div>
              </div>

              {/* Dish Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#B85D36]">
                      {dish.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#24231F] font-normal tracking-tight group-hover:text-[#B85D36] transition-colors leading-snug">
                    {dish.name}
                  </h3>

                  <p className="mt-3 text-sm text-[#6E6B65] leading-relaxed line-clamp-3">
                    {dish.description}
                  </p>
                </div>

                {/* Card Action & Sommelier Pairing */}
                <div className="mt-6 pt-5 border-t border-[#F0ECE2] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[#4A5B38] font-medium">
                    <Wine className="w-3.5 h-3.5 text-[#B85D36]" />
                    <span className="truncate max-w-[170px]">
                      {dish.pairing}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedDish(dish)}
                    className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#B85D36] hover:text-[#9C4B29] transition-colors p-1 rounded focus:outline-none focus:ring-1 focus:ring-[#B85D36]"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Notes</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Bottom Note & Reservation Prompt */}
        <div className="mt-14 sm:mt-16 text-center bg-[#F5F1E8] rounded-2xl p-6 sm:p-8 border border-[#E8E3D9] max-w-2xl mx-auto">
          <p className="font-serif text-lg text-[#24231F] italic mb-3">
            “The secret to dining is not just good ingredients, but the patience
            and reverence of fire.”
          </p>
          <p className="text-xs text-[#6E6B65] uppercase tracking-[0.18em] mb-4">
            Our daily offerings rotate with morning local farm deliveries.
          </p>
          <button
            onClick={onOpenReservation}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#B85D36] text-white text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#9C4B29] transition-colors shadow-xs"
          >
            Experience Tonight at Aurelia
          </button>
        </div>
      </div>

      {/* Tasting Note Modal */}
      <AnimatePresence>
        {selectedDish && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDish(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-lg bg-[#FAF8F3] rounded-2xl shadow-2xl border border-[#E8E3D9] overflow-hidden p-6 sm:p-8"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B85D36]">
                    {selectedDish.category} · {selectedDish.badge}
                  </span>
                  <h4 className="font-serif text-2xl text-[#24231F] mt-1">
                    {selectedDish.name}
                  </h4>
                </div>
                <button
                  onClick={() => setSelectedDish(null)}
                  className="p-1.5 rounded-full hover:bg-[#EAE5DC] text-[#6E6B65] hover:text-[#24231F] transition-colors"
                  aria-label="Close notes modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-5 space-y-4 text-sm text-[#24231F]">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#6E6B65] block mb-1">
                    Description & Flavor Profile
                  </span>
                  <p className="leading-relaxed text-[#24231F]">
                    {selectedDish.description}
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-[#E8E3D9]">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#4A5B38] flex items-center gap-1.5 mb-1">
                    <Wine className="w-4 h-4 text-[#B85D36]" /> Sommelier Cellar Pairing
                  </span>
                  <p className="font-medium text-[#24231F]">
                    {selectedDish.pairing}
                  </p>
                  <p className="text-xs text-[#6E6B65] mt-1">
                    Selected to complement the caramelized hearth notes and natural salinity of the dish.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="font-serif text-xl text-[#24231F]">
                    {selectedDish.price}
                  </span>
                  <button
                    onClick={() => {
                      setSelectedDish(null);
                      onOpenReservation();
                    }}
                    className="px-5 py-2 rounded-full bg-[#B85D36] text-white text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#9C4B29] transition-colors"
                  >
                    Reserve Table
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
