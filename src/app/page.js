"use client";

import { useState } from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import QuickInfoStrip from "../components/QuickInfoStrip";
import HomeCategoryShowcase from "../components/HomeCategoryShowcase";
import SignatureDishes from "../components/SignatureDishes";
import AboutSection from "../components/AboutSection";
import WhyChooseUs from "../components/WhyChooseUs";
import RestaurantGallery from "../components/RestaurantGallery";
import CustomerReviews from "../components/CustomerReviews";
import SpecialOffers from "../components/SpecialOffers";
import ReservationCTA from "../components/ReservationCTA";
import LocationSection from "../components/LocationSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import ReservationModal from "../components/ReservationModal";

export default function Home() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const openReservation = () => setIsReservationOpen(true);
  const closeReservation = () => setIsReservationOpen(false);

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#24231F] flex flex-col selection:bg-[#B85D36]/20 selection:text-[#24231F]">
      {/* Section 1: Announcement Bar */}
      <AnnouncementBar onOpenReservation={openReservation} />

      {/* Section 2: Navbar / Header */}
      <Navbar onOpenReservation={openReservation} />

      <main className="flex-1 flex flex-col">
        {/* Section 3: Hero Section */}
        <HeroSection onOpenReservation={openReservation} />

        {/* Section 4: Quick Information Strip */}
        <QuickInfoStrip />

        {/* Category Showcase Section */}
        <HomeCategoryShowcase />

        {/* Section 5: Signature Dishes / Bestsellers */}
        <SignatureDishes onOpenReservation={openReservation} />

        {/* Section 6: About the Restaurant */}
        <AboutSection onOpenReservation={openReservation} />

        {/* Section 7: Why Choose Us */}
        <WhyChooseUs />

        {/* Section 8: Restaurant Ambience / Gallery */}
        <RestaurantGallery />

        {/* Section 9: Customer Reviews */}
        <CustomerReviews />

        {/* Section 10: Special Offers / Events */}
        <SpecialOffers onOpenReservation={openReservation} />

        {/* Section 11: Reservation / Order CTA */}
        <ReservationCTA onOpenReservation={openReservation} />

        {/* Section 12: Find Us / Location */}
        <LocationSection />

        {/* Section 13: FAQ */}
        <FAQSection onOpenReservation={openReservation} />
      </main>

      {/* Section 14: Footer */}
      <Footer onOpenReservation={openReservation} />

      {/* Interactive Reservation Booking Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={closeReservation}
      />
    </div>
  );
}
