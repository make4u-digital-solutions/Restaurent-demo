"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, PhoneCall, Sparkles } from "lucide-react";
import { restaurantData } from "../data/restaurantData";

export default function ReservationCTA({ onOpenReservation }) {
  return (
    <section
      id="reservation"
      aria-label="Table Reservations"
      className="relative py-24 sm:py-32 bg-[#24231F] text-white overflow-hidden"
    >
      {/* Background Image with Warm Vignette */}
      <div className="absolute inset-0 select-none pointer-events-none opacity-25">
        <Image
          src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2000&auto=format&fit=crop"
          alt="Warm candlelit restaurant evening background"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-radial from-transparent via-[#24231F]/80 to-[#24231F]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#E6A37A] text-xs font-semibold uppercase tracking-[0.25em] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Table Bookings & Gatherings</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#FAF8F3] tracking-tight leading-tight">
          Join Us at Our Table
        </h2>

        <p className="mt-6 text-base sm:text-xl text-[#D8D2C4] font-normal max-w-2xl mx-auto leading-relaxed font-sans">
          Whether planning an intimate dinner for two, a business repast, or a milestone
          celebration, we look forward to welcoming you with warmth and grace.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenReservation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#B85D36] text-white font-semibold text-xs sm:text-sm uppercase tracking-[0.18em] hover:bg-[#9C4B29] transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-[#B85D36]/60 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve a Table</span>
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href={`tel:${restaurantData.contact.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF8F3] backdrop-blur-md border border-white/25 font-semibold text-xs sm:text-sm uppercase tracking-[0.18em] transition-colors focus:outline-none focus:ring-2 focus:ring-white/40 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-[#E6A37A]" />
            <span>Call Concierge: {restaurantData.contact.phone}</span>
          </motion.a>
        </div>

        {/* Small reassurance line */}
        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-[#A8A29E] max-w-lg mx-auto">
          <span>We accommodate dietary requests with advance notice.</span>
          <span className="mx-2">·</span>
          <span>Valet parking available daily from 5:00 PM.</span>
        </div>
      </div>
    </section>
  );
}
