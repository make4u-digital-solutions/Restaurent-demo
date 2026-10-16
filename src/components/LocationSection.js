"use client";

import Image from "next/image";
import { MapPin, Clock, Phone, Mail, Navigation, Car, Sparkles } from "lucide-react";
import { restaurantData } from "../data/restaurantData";

export default function LocationSection() {
  return (
    <section
      id="contact"
      aria-label="Find Us and Location"
      className="py-24 sm:py-32 bg-[#FAF8F3] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B85D36]/10 text-[#B85D36] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visit Us</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#24231F] tracking-tight leading-tight">
            Find Aurelia in the Arts District
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6E6B65] leading-relaxed">
            Conveniently situated on historic Heritage Boulevard, just moments
            from downtown galleries and theaters.
          </p>
        </div>

        {/* 2-Column Location Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Practical Details */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border border-[#E8E3D9] shadow-xs flex flex-col justify-between">
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF8F3] border border-[#E8E3D9] flex items-center justify-center text-[#B85D36] shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#6E6B65] mb-1">
                    Address
                  </h4>
                  <p className="font-serif text-lg text-[#24231F] leading-snug">
                    {restaurantData.contact.address}
                  </p>
                  <a
                    href={restaurantData.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#B85D36] hover:text-[#9C4B29] mt-2 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions via Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF8F3] border border-[#E8E3D9] flex items-center justify-center text-[#B85D36] shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#6E6B65] mb-2">
                    Service Hours
                  </h4>
                  <div className="space-y-1.5 text-xs sm:text-sm text-[#24231F]">
                    {restaurantData.hours.map((h) => (
                      <div
                        key={h.days}
                        className="flex items-center justify-between py-1 border-b border-[#F5F1E8]"
                      >
                        <span className="font-medium">{h.days}</span>
                        <span className="text-[#6E6B65]">{h.times}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Phone & Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF8F3] border border-[#E8E3D9] flex items-center justify-center text-[#B85D36] shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#6E6B65] mb-1">
                    Direct Contact
                  </h4>
                  <p className="font-serif text-base text-[#24231F]">
                    <a
                      href={`tel:${restaurantData.contact.phoneRaw}`}
                      className="hover:text-[#B85D36] transition-colors"
                    >
                      {restaurantData.contact.phone}
                    </a>
                  </p>
                  <p className="text-xs text-[#6E6B65] mt-1 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-[#B85D36]" />
                    <a
                      href={`mailto:${restaurantData.contact.email}`}
                      className="hover:text-[#B85D36] transition-colors"
                    >
                      {restaurantData.contact.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Valet Note */}
            <div className="mt-8 pt-6 border-t border-[#F0ECE2] flex items-center gap-3 text-xs text-[#4A5B38] bg-[#4A5B38]/8 p-4 rounded-2xl">
              <Car className="w-4 h-4 shrink-0 text-[#4A5B38]" />
              <span>{restaurantData.contact.valet}</span>
            </div>
          </div>

          {/* Right Column: Stylized Visual Map & Exterior Photo */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#E8E3D9] shadow-xs relative min-h-[380px] flex flex-col justify-between bg-[#F5F1E8]">
            {/* Visual Restaurant Exterior/District Map Representation */}
            <div className="relative w-full h-full min-h-[380px]">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop"
                alt="Aurelia Restaurant facade and outdoor evening terrace"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              {/* Pin Overlay Card */}
              <div className="absolute top-6 left-6 right-6 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-[#E8E3D9]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#B85D36] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-serif text-sm font-semibold text-[#24231F]">
                      Aurelia Dining & Lounge
                    </h5>
                    <p className="text-[11px] text-[#6E6B65]">
                      428 Heritage Blvd, NY 10012
                    </p>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-[#E8E3D9] flex items-center justify-between text-[11px]">
                  <span className="text-[#4A5B38] font-medium">Open Tonight</span>
                  <a
                    href={restaurantData.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#B85D36] hover:underline"
                  >
                    Open in Maps &rarr;
                  </a>
                </div>
              </div>

              {/* Bottom Transit & Directions prompt */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-white">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#E6A37A] font-semibold block">
                    Transit & Neighborhood
                  </span>
                  <p className="text-xs text-[#E5DFD4] mt-0.5">
                    Subway: Spring St (C, E) or Broadway-Lafayette (B, D, F, M) — 3 min walk
                  </p>
                </div>
                <a
                  href={restaurantData.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-white text-[#24231F] text-xs uppercase tracking-wider font-semibold hover:bg-[#FAF8F3] transition-colors shrink-0 shadow-md"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
