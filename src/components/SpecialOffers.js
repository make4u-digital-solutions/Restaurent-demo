"use client";

import Image from "next/image";
import { Sparkles, ArrowRight, Calendar, Users } from "lucide-react";
import { restaurantData } from "../data/restaurantData";

export default function SpecialOffers({ onOpenReservation }) {
  return (
    <section
      id="special-events"
      aria-label="Special Offers and Events"
      className="py-24 sm:py-32 bg-[#FAF8F3] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B85D36]/10 text-[#B85D36] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Gatherings</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#24231F] tracking-tight leading-tight">
            Special Experiences & Private Dining
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6E6B65] leading-relaxed">
            From chef-led multi-course tasting journeys to bespoke subterranean
            wine room celebrations.
          </p>
        </div>

        {/* 2-Card Featured Offer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {restaurantData.specialOffers.map((offer) => (
            <div
              key={offer.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E8E3D9] shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Photo Area */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F5F1E8]">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#24231F] text-[11px] font-semibold uppercase tracking-[0.16em] shadow-xs">
                    {offer.badge}
                  </span>
                </div>

                <div className="absolute bottom-4 left-6 right-6 z-10 text-white">
                  <span className="font-serif text-2xl font-light">
                    {offer.price}
                  </span>
                </div>
              </div>

              {/* Text Area */}
              <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#24231F] leading-snug group-hover:text-[#B85D36] transition-colors">
                    {offer.title}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-[#6E6B65] leading-relaxed">
                    {offer.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs text-[#4A5B38] font-medium bg-[#4A5B38]/8 p-3 rounded-xl border border-[#4A5B38]/20">
                    <Calendar className="w-4 h-4 shrink-0 text-[#B85D36]" />
                    <span>{offer.details}</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#F0ECE2] flex items-center justify-between">
                  <button
                    onClick={onOpenReservation}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#24231F] text-white text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#B85D36] transition-colors shadow-xs"
                  >
                    <span>{offer.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <span className="text-xs text-[#6E6B65] hidden sm:inline-flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#B85D36]" />
                    <span>Inquire for parties of 2–18</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
