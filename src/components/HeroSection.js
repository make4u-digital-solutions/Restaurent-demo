"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, ArrowDown, Sparkles, Clock, Utensils } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { restaurantData } from "../data/restaurantData";

export default function HeroSection({ onOpenReservation }) {
  const heroRef = useRef(null);
  const imageContainerRef = useRef(null);
  const textContentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Image scale entrance and parallax on scroll
      gsap.fromTo(
        imageContainerRef.current,
        { scale: 1.08, filter: "brightness(0.9)" },
        {
          scale: 1,
          filter: "brightness(1)",
          duration: 1.8,
          ease: "power2.out",
        }
      );

      // Subtle parallax effect on scroll
      gsap.to(imageContainerRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // Staggered text entrance
      const elements = textContentRef.current?.querySelectorAll(".hero-anim-item");
      if (elements && elements.length > 0) {
        gsap.fromTo(
          elements,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.3,
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToAbout = (e) => {
    e.preventDefault();
    const target = document.querySelector("#about");
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative -mt-20 md:-mt-24 w-full min-h-[90vh] lg:min-h-[94vh] flex items-center justify-center overflow-hidden bg-[#1E1C18]"
    >
      {/* Background Image Container with Parallax */}
      <div
        ref={imageContainerRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] select-none pointer-events-none"
      >
        <Image
          src="https://images.unsplash.com/photo-1544025162-d76694265947?q=85&w=2400&auto=format&fit=crop"
          alt="Aurelia Restaurant dining room atmosphere and wood-fired table setting"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Elegant multilayered scrim overlays to guarantee readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/40" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/30 to-black/80" />
      </div>

      {/* Hero Content Layer - Positioned DIRECTLY over image */}
      <div
        ref={textContentRef}
        className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-28 pb-16 flex flex-col items-center justify-center"
      >
        {/* Eyebrow Label */}
        <div className="hero-anim-item inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FAF8F3] text-xs sm:text-sm font-medium tracking-[0.25em] uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#E6A37A]" />
          <span>A Place for Good Food</span>
        </div>

        {/* Memorable Headline */}
        <h1 className="hero-anim-item font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#FAF8F3] leading-[1.08] max-w-4xl">
          Good Food.
          <br />
          <span className="italic font-light text-[#EADEC9]">
            Beautiful Moments.
          </span>
        </h1>

        {/* Supporting Sentence */}
        <p className="hero-anim-item mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg md:text-xl text-[#E5DFD4] font-normal leading-relaxed tracking-wide font-sans">
          A culinary sanctuary in the heart of the city, celebrating seasonal
          Mediterranean produce, live woodfire gastronomy, and heartfelt
          hospitality.
        </p>

        {/* Primary & Secondary Call To Actions */}
        <div className="hero-anim-item mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenReservation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#B85D36] text-white font-medium text-xs sm:text-sm uppercase tracking-[0.18em] shadow-lg hover:bg-[#9C4B29] transition-colors focus:outline-none focus:ring-2 focus:ring-[#B85D36]/60 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve a Table</span>
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#about"
            onClick={handleScrollToAbout}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/15 hover:bg-white/25 text-[#FAF8F3] backdrop-blur-md border border-white/30 font-medium text-xs sm:text-sm uppercase tracking-[0.18em] transition-colors focus:outline-none focus:ring-2 focus:ring-white/40 cursor-pointer"
          >
            <span>Explore Our Story</span>
          </motion.a>
        </div>

        {/* Compact Supporting Information Badges */}
        <div className="hero-anim-item mt-12 sm:mt-16 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 text-xs sm:text-sm text-[#D8D2C4] font-sans">
          <div className="inline-flex items-center justify-center gap-2">
            <Utensils className="w-4 h-4 text-[#E6A37A]" />
            <span className="tracking-wide">
              Contemporary Mediterranean & Live Wood Hearth
            </span>
          </div>
          <div className="inline-flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-[#E6A37A]" />
            <span className="tracking-wide">
              Tuesday – Sunday: 5:00 PM – Late
            </span>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="hero-anim-item mt-10">
          <a
            href="#quick-info"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector("#quick-info");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            aria-label="Scroll to discover restaurant details"
            className="inline-flex flex-col items-center gap-1.5 text-white/70 hover:text-white transition-colors group"
          >
            <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-[#E6A37A]" />
          </a>
        </div>
      </div>
    </section>
  );
}
