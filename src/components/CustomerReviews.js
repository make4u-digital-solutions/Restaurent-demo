"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, ExternalLink, Sparkles } from "lucide-react";
import { restaurantData } from "../data/restaurantData";

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + restaurantData.testimonials.length) % restaurantData.testimonials.length
    );
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % restaurantData.testimonials.length);
  };

  const current = restaurantData.testimonials[currentIndex];

  return (
    <section
      id="reviews"
      aria-label="Customer Reviews & Press"
      className="py-24 sm:py-32 bg-[#F5F1E8] border-y border-[#E8E3D9] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B85D36]/10 text-[#B85D36] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Critic & Guest Reflections</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#24231F] tracking-tight leading-tight">
            Memories Made at Our Hearth
          </h2>
          <p className="mt-4 text-base text-[#6E6B65]">
            Reflections from culinary journals and verified guests who have shared
            unhurried evenings with us.
          </p>
        </div>

        {/* Testimonial Showcase Carousel */}
        <div className="relative bg-white rounded-3xl p-8 sm:p-14 border border-[#E8E3D9] shadow-md">
          {/* Subtle Quote Icon Graphic */}
          <div className="absolute top-8 right-8 text-[#FAF8F3] -z-0 pointer-events-none">
            <Quote className="w-24 h-24 text-[#B85D36]/10 rotate-180" />
          </div>

          <div className="relative z-10 min-h-[220px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                {/* Star Rating & Source */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(current.stars)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#B85D36] text-[#B85D36]"
                      />
                    ))}
                  </div>
                  <span className="text-xs uppercase tracking-[0.16em] font-semibold text-[#4A5B38] bg-[#4A5B38]/10 px-3 py-1 rounded-full">
                    {current.source}
                  </span>
                </div>

                {/* Editorial Quote */}
                <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-[#24231F] font-normal leading-relaxed italic">
                  “{current.quote}”
                </blockquote>

                {/* Author Info */}
                <div className="pt-4 border-t border-[#F0ECE2] flex items-center justify-between">
                  <div>
                    <p className="font-sans font-semibold text-sm sm:text-base text-[#24231F]">
                      {current.author}
                    </p>
                    <p className="text-xs text-[#6E6B65] mt-0.5 font-sans">
                      {current.role} · {current.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-between pt-6 border-t border-[#F0ECE2]">
              {/* Dots indicator */}
              <div className="flex items-center gap-2">
                {restaurantData.testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 transition-all rounded-full ${
                      idx === currentIndex
                        ? "w-8 bg-[#B85D36]"
                        : "w-2 bg-[#D8D2C4] hover:bg-[#B85D36]/50"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevReview}
                  className="w-10 h-10 rounded-full border border-[#E8E3D9] flex items-center justify-center text-[#24231F] hover:bg-[#FAF8F3] hover:border-[#B85D36] transition-colors focus:outline-none focus:ring-2 focus:ring-[#B85D36]"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextReview}
                  className="w-10 h-10 rounded-full border border-[#E8E3D9] flex items-center justify-center text-[#24231F] hover:bg-[#FAF8F3] hover:border-[#B85D36] transition-colors focus:outline-none focus:ring-2 focus:ring-[#B85D36]"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Link to External Reviews */}
        <div className="mt-10 text-center">
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-medium text-[#6E6B65] hover:text-[#B85D36] transition-colors"
          >
            <span>Read all 420+ verified dining reviews on Google</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
