"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import AnnouncementBar from "../../components/AnnouncementBar";
import Footer from "../../components/Footer";
import ReservationModal from "../../components/ReservationModal";
import MenuHero from "../../components/menu/MenuHero";
import MenuSearch from "../../components/menu/MenuSearch";
import MenuCategoryFilter from "../../components/menu/MenuCategoryFilter";
import MenuItemList from "../../components/menu/MenuItemList";
import MenuEmptyState from "../../components/menu/MenuEmptyState";
import { menuCategories, menuItems } from "../../data/menuData";

function MenuContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Derive selected category directly from URL parameter
  const categoryParam = searchParams.get("category");
  const selectedCategory =
    categoryParam && menuCategories.some((c) => c.id === categoryParam)
      ? categoryParam
      : "all";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDietary, setSelectedDietary] = useState("all"); // "all" | "vegetarian" | "non-vegetarian"
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  // Handle category selection via router update without scroll or reload
  const handleSelectCategory = (categoryId) => {
    if (categoryId === "all") {
      router.replace("/menu", { scroll: false });
    } else {
      router.replace(`/menu?category=${categoryId}`, { scroll: false });
    }
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedDietary("all");
    router.replace("/menu", { scroll: false });
  };

  // Memoized filtered items
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // 1. Category match
      const matchesCategory =
        selectedCategory === "all" || item.categoryId === selectedCategory;

      // 2. Dietary match
      const matchesDietary =
        selectedDietary === "all" || item.dietaryType === selectedDietary;

      // 3. Search query match (name, description, tags - case-insensitive)
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        (item.description && item.description.toLowerCase().includes(query)) ||
        (item.tags && item.tags.some((t) => t.toLowerCase().includes(query)));

      return matchesCategory && matchesDietary && matchesSearch;
    });
  }, [selectedCategory, selectedDietary, searchQuery]);

  // Calculate counts for categories taking search and dietary into account
  const categoryCounts = useMemo(() => {
    const counts = { all: 0 };
    menuCategories.forEach((cat) => {
      counts[cat.id] = 0;
    });

    menuItems.forEach((item) => {
      const matchesDietary =
        selectedDietary === "all" || item.dietaryType === selectedDietary;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        (item.description && item.description.toLowerCase().includes(query));

      if (matchesDietary && matchesSearch) {
        counts.all += 1;
        if (counts[item.categoryId] !== undefined) {
          counts[item.categoryId] += 1;
        }
      }
    });

    return counts;
  }, [selectedDietary, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#24231F] flex flex-col selection:bg-[#B85D36]/20 selection:text-[#24231F]">
      {/* Announcement Bar */}
      <AnnouncementBar onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Navbar with active /menu indicator */}
      <Navbar onOpenReservation={() => setIsReservationOpen(true)} />

      <main className="flex-1 pb-24 sm:pb-32">
        {/* Compact Typography-Led Introduction (NO IMAGES) */}
        <MenuHero />

        {/* Controls Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12 space-y-8">
          {/* Search Bar */}
          <MenuSearch
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            resultCount={filteredItems.length}
            totalCount={menuItems.length}
          />

          {/* Category Navigation & Dietary Filters */}
          <MenuCategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={handleSelectCategory}
            selectedDietary={selectedDietary}
            onSelectDietary={setSelectedDietary}
            categoryCounts={categoryCounts}
          />

          {/* Results Area */}
          <div className="pt-4">
            {filteredItems.length > 0 ? (
              <MenuItemList
                items={filteredItems}
                selectedCategory={selectedCategory}
              />
            ) : (
              <MenuEmptyState
                onReset={handleResetFilters}
                searchQuery={searchQuery}
                selectedCategory={selectedCategory}
              />
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Reservation Inquiry Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </div>
  );
}

export default function MenuPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#FAF8F3] flex items-center justify-center text-xs uppercase tracking-widest text-[#6E6B65]">
          Loading Menu...
        </div>
      }
    >
      <MenuContent />
    </Suspense>
  );
}
