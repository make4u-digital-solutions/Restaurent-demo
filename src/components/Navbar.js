"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X, Phone, Calendar, Clock, MapPin, Utensils } from "lucide-react";
import { restaurantData } from "../data/restaurantData";

export default function Navbar({ onOpenReservation }) {
  const pathname = usePathname();
  const isMenuPage = pathname === "/menu";

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/", hash: "#hero" },
    { name: "Menu", href: "/menu", isPage: true },
    { name: "About", href: "/#about", hash: "#about" },
    { name: "Dishes", href: "/#signature-dishes", hash: "#signature-dishes" },
    { name: "Gallery", href: "/#gallery", hash: "#gallery" },
    { name: "Reviews", href: "/#reviews", hash: "#reviews" },
    { name: "Contact", href: "/#contact", hash: "#contact" },
  ];

  const handleNavClick = (e, link) => {
    setMobileMenuOpen(false);

    // If on homepage and clicking an in-page hash
    if (!isMenuPage && link.hash) {
      e.preventDefault();
      const target = document.querySelector(link.hash);
      if (target) {
        const navOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const isLightHeader = isMenuPage || isScrolled;

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isLightHeader
            ? "bg-[#FAF8F3]/95 backdrop-blur-md border-b border-[#E8E3D9] shadow-xs py-3.5"
            : "bg-transparent text-white py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <Link
            href="/"
            onClick={(e) => {
              if (!isMenuPage) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="group flex flex-col focus:outline-none"
          >
            <span
              className={`font-serif text-2xl sm:text-3xl font-normal tracking-[0.2em] uppercase transition-colors ${
                isLightHeader ? "text-[#24231F]" : "text-white"
              }`}
            >
              {restaurantData.brand.name}
            </span>
            <span
              className={`text-[9px] sm:text-[10px] tracking-[0.3em] uppercase -mt-1 font-sans transition-colors ${
                isLightHeader ? "text-[#6E6B65]" : "text-white/80"
              }`}
            >
              Mediterranean & Hearth
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center space-x-7"
          >
            {navLinks.map((link) => {
              const isActive = link.isPage && pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`relative text-xs uppercase tracking-[0.18em] font-medium transition-colors py-1.5 px-1 ${
                    isActive
                      ? "text-[#B85D36] font-bold"
                      : isLightHeader
                      ? "text-[#24231F] hover:text-[#B85D36]"
                      : "text-white/90 hover:text-white"
                  } focus:outline-none focus:ring-1 focus:ring-[#B85D36] rounded-xs`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B85D36] rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenReservation}
              className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.15em] font-semibold transition-all duration-300 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#B85D36]/50 cursor-pointer ${
                isLightHeader
                  ? "bg-[#B85D36] text-white hover:bg-[#9C4B29]"
                  : "bg-white text-[#24231F] hover:bg-[#FAF8F3] hover:text-[#B85D36]"
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve a Table</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className={`md:hidden p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#B85D36] ${
                isLightHeader
                  ? "text-[#24231F] hover:bg-[#EAE5DC]"
                  : "text-white hover:bg-white/20"
              }`}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs md:hidden"
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-[#FAF8F3] text-[#24231F] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto md:hidden"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-6 border-b border-[#E8E3D9]">
                  <div>
                    <span className="font-serif text-2xl tracking-[0.2em] uppercase text-[#24231F]">
                      {restaurantData.brand.name}
                    </span>
                    <p className="text-[10px] uppercase tracking-widest text-[#6E6B65]">
                      Artisanal Dining & Lounge
                    </p>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-[#EAE5DC] text-[#24231F] transition-colors focus:outline-none focus:ring-2 focus:ring-[#B85D36]"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="mt-8 flex flex-col space-y-3">
                  {navLinks.map((link, idx) => {
                    const isActive = link.isPage && pathname === link.href;

                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04 + 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={(e) => handleNavClick(e, link)}
                          className={`text-lg font-serif tracking-wide transition-colors py-2.5 border-b border-[#F0ECE2] flex items-center justify-between ${
                            isActive
                              ? "text-[#B85D36] font-semibold pl-2 bg-[#B85D36]/8 rounded-lg border-b-transparent"
                              : "text-[#24231F] hover:text-[#B85D36]"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            {link.isPage && (
                              <Utensils className="w-4 h-4 text-[#B85D36]" />
                            )}
                            {link.name}
                          </span>
                          <span className="text-xs text-[#B85D36] font-sans">
                            0{idx + 1}
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Practical info in drawer */}
                <div className="mt-8 pt-6 border-t border-[#E8E3D9] space-y-3 text-xs text-[#6E6B65]">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#B85D36] shrink-0 mt-0.5" />
                    <span>{restaurantData.contact.shortAddress}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#B85D36] shrink-0" />
                    <span>Tue – Sun: 5:00 PM – Late</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#B85D36] shrink-0" />
                    <a
                      href={`tel:${restaurantData.contact.phoneRaw}`}
                      className="hover:text-[#B85D36] transition-colors font-medium text-[#24231F]"
                    >
                      {restaurantData.contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Drawer CTA */}
              <div className="pt-6 border-t border-[#E8E3D9] space-y-3 mt-6">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenReservation();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#B85D36] text-white font-semibold text-xs uppercase tracking-[0.15em] hover:bg-[#9C4B29] transition-colors shadow-md cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve a Table</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
