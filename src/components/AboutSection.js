"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, Flame, Leaf, Wine } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { restaurantData } from "../data/restaurantData";

export default function AboutSection({ onOpenReservation }) {
  const sectionRef = useRef(null);
  const imageColRef = useRef(null);
  const textColRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Image reveal animation
      gsap.fromTo(
        imageColRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // Text column staggered reveal
      const items = textColRef.current?.querySelectorAll(".about-stagger");
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: textColRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const pillarIcons = [Leaf, Flame, Wine];

  return (
    <section
      id="about"
      ref={sectionRef}
      aria-label="About Aurelia Restaurant"
      className="py-24 sm:py-32 bg-[#F5F1E8] border-y border-[#E8E3D9] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetrical 2-Column Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Imagery with overlapping detail card */}
          <div ref={imageColRef} className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src={restaurantData.about.chefImage}
                alt="Executive Chef Julian Vance preparing dishes at the woodfire counter"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Inset Chef Title */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-serif text-xl sm:text-2xl font-light">
                  {restaurantData.about.chefName}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-[#E6A37A] mt-0.5">
                  {restaurantData.about.chefTitle}
                </p>
              </div>
            </div>

            {/* Floating Overlapping Detail Photo on Desktop */}
            <div className="hidden sm:block absolute -bottom-10 -right-8 w-48 sm:w-56 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <Image
                src={restaurantData.about.detailImage}
                alt="Sommelier pouring vintage wine in crystal glassware"
                fill
                sizes="250px"
                className="object-cover"
              />
            </div>

            {/* Experience Stamp Badge */}
            <div className="absolute -top-6 -left-4 sm:-left-6 bg-white rounded-full p-4 shadow-xl border border-[#E8E3D9] flex items-center justify-center text-center w-24 h-24">
              <div>
                <span className="font-serif text-xl font-bold text-[#B85D36] block leading-none">
                  Since
                </span>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#24231F] mt-1 block">
                  {restaurantData.brand.established}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Differentiators */}
          <div ref={textColRef} className="lg:col-span-7 lg:pl-6">
            <div className="about-stagger inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B85D36]/10 text-[#B85D36] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{restaurantData.about.eyebrow}</span>
            </div>

            <h2 className="about-stagger font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#24231F] tracking-tight leading-tight">
              {restaurantData.about.title}
            </h2>

            <div className="about-stagger mt-6 space-y-4 text-base sm:text-lg text-[#6E6B65] leading-relaxed font-sans">
              <p>{restaurantData.about.p1}</p>
              <p>{restaurantData.about.p2}</p>
            </div>

            {/* Chef Quote Callout */}
            <div className="about-stagger my-8 pl-5 border-l-2 border-[#B85D36] italic font-serif text-lg text-[#24231F]">
              “{restaurantData.about.chefQuote}”
            </div>

            {/* Differentiators Pillars */}
            <div className="about-stagger grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#E8E3D9]">
              {restaurantData.about.pillars.map((pillar, i) => {
                const IconComponent = pillarIcons[i] || Leaf;
                return (
                  <div key={pillar.number} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#B85D36]">
                        {pillar.number}
                      </span>
                      <IconComponent className="w-4 h-4 text-[#4A5B38]" />
                    </div>
                    <h4 className="font-serif text-base text-[#24231F] font-medium leading-snug">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-[#6E6B65] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action CTA */}
            <div className="about-stagger mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenReservation}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#24231F] text-white text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#B85D36] transition-colors shadow-xs"
              >
                <span>Reserve a Table</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="#gallery"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#24231F] border border-[#E8E3D9] text-xs uppercase tracking-[0.16em] font-medium hover:border-[#B85D36] transition-colors"
              >
                View The Ambiance
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
