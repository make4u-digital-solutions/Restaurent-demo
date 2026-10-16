"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { restaurantData } from "../data/restaurantData";

export default function RestaurantGallery() {
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activePhotoIndex === null) return;
      if (e.key === "Escape") setActivePhotoIndex(null);
      if (e.key === "ArrowRight") {
        setActivePhotoIndex((prev) => (prev + 1) % restaurantData.gallery.length);
      }
      if (e.key === "ArrowLeft") {
        setActivePhotoIndex(
          (prev) => (prev - 1 + restaurantData.gallery.length) % restaurantData.gallery.length
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIndex]);

  return (
    <section
      id="gallery"
      aria-label="Restaurant Ambience Gallery"
      className="py-24 sm:py-32 bg-[#FAF8F3] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B85D36]/10 text-[#B85D36] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Atmosphere</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#24231F] tracking-tight leading-tight">
            Spaces Designed for Lingering
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6E6B65] max-w-xl mx-auto leading-relaxed">
            From the warmth of our live hearth counter to the tranquil seclusion of
            our courtyard veranda, explore the settings that shape your dining experience.
          </p>
        </div>

        {/* Editorial Mosaic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {restaurantData.gallery.map((item, index) => {
            // Asymmetric aspect classes for editorial rhythm
            const aspectClass =
              item.aspect === "wide"
                ? "aspect-[16/10]"
                : item.aspect === "tall"
                ? "aspect-[3/4]"
                : "aspect-[4/3]";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                onClick={() => setActivePhotoIndex(index)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-xs hover:shadow-2xl transition-all duration-500 bg-[#F5F1E8]"
              >
                <div className={`relative w-full ${aspectClass}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                </div>

                {/* Overlay Text Details */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white pointer-events-none">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                      {item.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Maximize2 className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-white font-normal leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#E5DFD4] mt-1 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhotoIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePhotoIndex(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 max-w-5xl w-full max-h-[90vh] flex flex-col bg-[#1C1B18] text-white rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              {/* Top Controls */}
              <div className="flex items-center justify-between p-4 px-6 border-b border-white/10 bg-black/40">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#B85D36] font-semibold">
                    {restaurantData.gallery[activePhotoIndex].category} · Photo{" "}
                    {activePhotoIndex + 1} of {restaurantData.gallery.length}
                  </span>
                  <h4 className="font-serif text-lg text-white">
                    {restaurantData.gallery[activePhotoIndex].title}
                  </h4>
                </div>
                <button
                  onClick={() => setActivePhotoIndex(null)}
                  className="p-2 rounded-full hover:bg-white/20 transition-colors text-white focus:outline-none focus:ring-2 focus:ring-white/40"
                  aria-label="Close photo preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Photo Display */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full max-h-[65vh] bg-black">
                <Image
                  src={restaurantData.gallery[activePhotoIndex].image}
                  alt={restaurantData.gallery[activePhotoIndex].title}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />

                {/* Left/Right Arrows */}
                <button
                  onClick={() =>
                    setActivePhotoIndex(
                      (prev) =>
                        (prev - 1 + restaurantData.gallery.length) %
                        restaurantData.gallery.length
                    )
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors border border-white/20"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() =>
                    setActivePhotoIndex(
                      (prev) => (prev + 1) % restaurantData.gallery.length
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors border border-white/20"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Caption Bar */}
              <div className="p-4 px-6 bg-black/40 text-center text-sm text-[#D8D2C4] font-sans">
                {restaurantData.gallery[activePhotoIndex].caption}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
