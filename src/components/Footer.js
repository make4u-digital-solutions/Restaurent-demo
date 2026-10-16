"use client";

import { Compass, ArrowUp, Heart } from "lucide-react";
import { restaurantData } from "../data/restaurantData";

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

export default function Footer({ onOpenReservation }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Signature Dishes", href: "#signature-dishes" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
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
    <footer
      role="contentinfo"
      className="bg-[#F5F1E8] border-t border-[#E8E3D9] text-[#24231F] pt-16 sm:pt-20 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[#E8E3D9]">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-serif text-3xl sm:text-4xl font-normal tracking-[0.2em] uppercase text-[#24231F] block">
              {restaurantData.brand.name}
            </span>
            <p className="text-xs uppercase tracking-[0.25em] text-[#B85D36] font-medium">
              {restaurantData.brand.tagline}
            </p>
            <p className="text-sm text-[#6E6B65] max-w-sm leading-relaxed font-sans pt-1">
              {restaurantData.brand.statement}
            </p>

            {/* Social Links */}
            <div className="pt-4 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Aurelia on Instagram"
                className="w-9 h-9 rounded-full bg-white border border-[#E8E3D9] flex items-center justify-center text-[#24231F] hover:text-[#B85D36] hover:border-[#B85D36] transition-colors shadow-2xs"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Aurelia on Facebook"
                className="w-9 h-9 rounded-full bg-white border border-[#E8E3D9] flex items-center justify-center text-[#24231F] hover:text-[#B85D36] hover:border-[#B85D36] transition-colors shadow-2xs"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://tripadvisor.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Aurelia on TripAdvisor"
                className="w-9 h-9 rounded-full bg-white border border-[#E8E3D9] flex items-center justify-center text-[#24231F] hover:text-[#B85D36] hover:border-[#B85D36] transition-colors shadow-2xs"
              >
                <Compass className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (NO Menu link!) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#24231F]">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-[#6E6B65] hover:text-[#B85D36] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenReservation}
                  className="text-[#B85D36] hover:underline font-semibold"
                >
                  Reserve a Table &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Hours Col */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#24231F]">
              Service Hours
            </h4>
            <div className="space-y-2 text-xs text-[#6E6B65]">
              <p>
                <strong className="text-[#24231F] block">Tue – Thu</strong>
                5:00 PM – 10:30 PM
              </p>
              <p>
                <strong className="text-[#24231F] block">Fri – Sat</strong>
                5:00 PM – 11:30 PM
              </p>
              <p>
                <strong className="text-[#24231F] block">Sunday</strong>
                4:30 PM – 10:00 PM
              </p>
              <p className="text-[#B85D36] font-medium pt-1">
                Monday Closed
              </p>
            </div>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#24231F]">
              Location & Contact
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-[#6E6B65]">
              <p className="text-[#24231F]">{restaurantData.contact.address}</p>
              <p>
                <a
                  href={`tel:${restaurantData.contact.phoneRaw}`}
                  className="hover:text-[#B85D36] transition-colors text-[#24231F] font-medium"
                >
                  {restaurantData.contact.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${restaurantData.contact.email}`}
                  className="hover:text-[#B85D36] transition-colors"
                >
                  {restaurantData.contact.email}
                </a>
              </p>
              <p className="text-xs text-[#4A5B38] pt-2">
                {restaurantData.contact.valet}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6E6B65]">
          <p>
            &copy; 2026 {restaurantData.brand.name} Restaurant. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">Crafted with culinary devotion</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#24231F] hover:text-[#B85D36] transition-colors font-medium p-1 rounded"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
