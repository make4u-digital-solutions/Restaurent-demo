"use client";

import MenuItemRow from "./MenuItemRow";
import { menuCategories } from "../../data/menuData";

export default function MenuItemList({ items, selectedCategory }) {
  // If specific category is selected
  if (selectedCategory !== "all") {
    const categoryInfo = menuCategories.find((c) => c.id === selectedCategory);

    return (
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E3D9] shadow-xs">
        {/* Category Header */}
        <div className="pb-6 mb-2 border-b border-[#E8E3D9]">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B85D36] block mb-1">
            Section Category
          </span>
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#24231F] font-normal">
              {categoryInfo ? categoryInfo.name : "Category Dishes"}
            </h2>
            <span className="text-xs text-[#6E6B65] font-semibold uppercase tracking-wider bg-[#F5F1E8] px-3 py-1 rounded-full border border-[#E8E3D9]">
              {items.length} {items.length === 1 ? "Item" : "Items"}
            </span>
          </div>
          {categoryInfo?.description && (
            <p className="mt-2 text-sm text-[#6E6B65] font-sans max-w-2xl">
              {categoryInfo.description}
            </p>
          )}
        </div>

        {/* Dish Items */}
        <div className="divide-y-0">
          {items.map((item) => (
            <MenuItemRow key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }

  // If "All Items" is selected: Group by category
  const categoriesWithItems = menuCategories
    .map((category) => {
      const categoryDishes = items.filter((d) => d.categoryId === category.id);
      return {
        ...category,
        dishes: categoryDishes,
      };
    })
    .filter((cat) => cat.dishes.length > 0);

  return (
    <div className="space-y-12 sm:space-y-16">
      {categoriesWithItems.map((category) => (
        <section
          key={category.id}
          id={`category-${category.id}`}
          className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E3D9] shadow-xs"
        >
          {/* Grouped Category Header */}
          <div className="pb-6 mb-2 border-b border-[#E8E3D9]">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#B85D36] block mb-1">
                  Chapter
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#24231F] font-normal">
                  {category.name}
                </h3>
              </div>
              <span className="text-xs text-[#6E6B65] font-semibold uppercase tracking-wider bg-[#F5F1E8] px-3 py-1 rounded-full border border-[#E8E3D9]">
                {category.dishes.length} {category.dishes.length === 1 ? "Item" : "Items"}
              </span>
            </div>
            {category.description && (
              <p className="mt-2 text-sm text-[#6E6B65] font-sans max-w-2xl">
                {category.description}
              </p>
            )}
          </div>

          {/* Dish Rows */}
          <div>
            {category.dishes.map((item) => (
              <MenuItemRow key={item.id} item={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
