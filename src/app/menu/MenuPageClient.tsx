"use client";

import Link from "next/link";
import { ArrowLeft, Search, Star, Utensils } from "lucide-react";
import { useMemo, useState } from "react";

const phoneNumber = "97471294020";

const categories = [
  "All Items",
  "Biryani & Rice",
  "Curry",
  "Tandoor & Grill",
  "Seafood",
  "Snacks",
  "Bread",
  "Dessert",
  "Drinks",
];

const menuItems = [
  {
    id: 1,
    name: "Kacchi Biryani",
    category: "Biryani & Rice",
    price: "QAR 28",
    image:
      "https://images.unsplash.com/photo-1691170979035-27e5ec943205?auto=format&fit=crop&w=900&q=80",
    desc: "Aromatic rice cooked with tender meat, potato, fried onion and rich spices.",
    popular: true,
  },
  {
    id: 2,
    name: "Chicken Biryani",
    category: "Biryani & Rice",
    price: "QAR 22",
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=80",
    desc: "Classic chicken biryani served with flavorful rice, soft chicken and raita.",
    popular: true,
  },
  {
    id: 3,
    name: "Beef Tehari",
    category: "Biryani & Rice",
    price: "QAR 24",
    image:
      "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=900&q=80",
    desc: "Spiced rice cooked with beef pieces, mustard aroma and traditional flavor.",
    popular: false,
  },
  {
    id: 4,
    name: "Plain Rice",
    category: "Biryani & Rice",
    price: "QAR 8",
    image:
      "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=900&q=80",
    desc: "Steamed rice, perfect with curry, bhuna, grill and seafood dishes.",
    popular: false,
  },
  {
    id: 5,
    name: "Butter Chicken",
    category: "Curry",
    price: "QAR 26",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=80",
    desc: "Creamy chicken curry cooked with butter, tomato gravy and mild spices.",
    popular: true,
  },
  {
    id: 6,
    name: "Chicken Tikka Masala",
    category: "Curry",
    price: "QAR 25",
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=80",
    desc: "Grilled chicken pieces simmered in a rich, smooth and spicy masala gravy.",
    popular: false,
  },
  {
    id: 7,
    name: "Beef Bhuna",
    category: "Curry",
    price: "QAR 24",
    image:
      "https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=900&q=80",
    desc: "Slow-cooked beef with thick gravy, onion, chili and strong spice flavor.",
    popular: false,
  },
  {
    id: 8,
    name: "Dal Tadka",
    category: "Curry",
    price: "QAR 16",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80",
    desc: "Comforting yellow lentils tempered with garlic, cumin and fresh herbs.",
    popular: false,
  },
  {
    id: 9,
    name: "Tandoori Chicken",
    category: "Tandoor & Grill",
    price: "QAR 30",
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=900&q=80",
    desc: "Char-grilled chicken marinated with yogurt, lemon and tandoori spices.",
    popular: true,
  },
  {
    id: 10,
    name: "Chicken Tikka",
    category: "Tandoor & Grill",
    price: "QAR 27",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80",
    desc: "Juicy boneless chicken pieces grilled with smoky spice marinade.",
    popular: false,
  },
  {
    id: 11,
    name: "Seekh Kebab",
    category: "Tandoor & Grill",
    price: "QAR 29",
    image:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=900&q=80",
    desc: "Minced meat kebab grilled over flame and served with fresh salad.",
    popular: true,
  },
  {
    id: 12,
    name: "Mixed Grill Platter",
    category: "Tandoor & Grill",
    price: "QAR 45",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
    desc: "Premium platter with kebab, tikka, grilled chicken and fresh sides.",
    popular: true,
  },
  {
    id: 13,
    name: "Fish Curry",
    category: "Seafood",
    price: "QAR 24",
    image:
      "https://images.unsplash.com/photo-1626500155537-93690c24099e?auto=format&fit=crop&w=900&q=80",
    desc: "Fresh fish cooked with onion, chili, coriander and traditional spices.",
    popular: false,
  },
  {
    id: 14,
    name: "Prawn Masala",
    category: "Seafood",
    price: "QAR 32",
    image:
      "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=900&q=80",
    desc: "Prawns cooked in thick masala gravy with garlic, herbs and spices.",
    popular: false,
  },
  {
    id: 15,
    name: "Fried Fish",
    category: "Seafood",
    price: "QAR 26",
    image:
      "https://images.unsplash.com/photo-1535400255456-984241443b29?auto=format&fit=crop&w=900&q=80",
    desc: "Crispy fried fish served with lemon, salad and signature sauce.",
    popular: false,
  },
  {
    id: 16,
    name: "Chicken Samosa",
    category: "Snacks",
    price: "QAR 8",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
    desc: "Crispy pastry filled with seasoned chicken and spices.",
    popular: false,
  },
  {
    id: 17,
    name: "Fuchka",
    category: "Snacks",
    price: "QAR 12",
    image:
      "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=900&q=80",
    desc: "Crispy shells served with spicy filling and tangy tamarind water.",
    popular: true,
  },
  {
    id: 18,
    name: "Chotpoti",
    category: "Snacks",
    price: "QAR 14",
    image:
      "https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?auto=format&fit=crop&w=900&q=80",
    desc: "Spicy chickpea snack mixed with egg, onion, chili and tamarind sauce.",
    popular: false,
  },
  {
    id: 19,
    name: "Butter Naan",
    category: "Bread",
    price: "QAR 6",
    image:
      "https://images.unsplash.com/photo-1617692855027-33b14f061079?auto=format&fit=crop&w=900&q=80",
    desc: "Soft tandoor bread brushed with butter and served warm.",
    popular: false,
  },
  {
    id: 20,
    name: "Garlic Naan",
    category: "Bread",
    price: "QAR 7",
    image:
      "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=80",
    desc: "Fresh naan topped with garlic, herbs and butter.",
    popular: true,
  },
  {
    id: 21,
    name: "Paratha",
    category: "Bread",
    price: "QAR 5",
    image:
      "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=900&q=80",
    desc: "Flaky layered bread, perfect with curry, kebab or tea.",
    popular: false,
  },
  {
    id: 22,
    name: "Gulab Jamun",
    category: "Dessert",
    price: "QAR 10",
    image:
      "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=900&q=80",
    desc: "Soft milk dumplings served in warm sweet syrup.",
    popular: false,
  },
  {
    id: 23,
    name: "Rasmalai",
    category: "Dessert",
    price: "QAR 12",
    image:
      "https://images.unsplash.com/photo-1605197181726-e3bd08490ba1?auto=format&fit=crop&w=900&q=80",
    desc: "Soft cheese patties served in chilled creamy milk with nuts.",
    popular: true,
  },
  {
    id: 24,
    name: "Falooda",
    category: "Drinks",
    price: "QAR 14",
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80",
    desc: "Refreshing dessert drink with milk, rose syrup, jelly and ice cream.",
    popular: true,
  },
  {
    id: 25,
    name: "Mango Lassi",
    category: "Drinks",
    price: "QAR 12",
    image:
      "https://images.unsplash.com/photo-1626201850129-a1c5b587c1b5?auto=format&fit=crop&w=900&q=80",
    desc: "Smooth yogurt drink blended with sweet mango.",
    popular: false,
  },
  {
    id: 26,
    name: "Fresh Lime",
    category: "Drinks",
    price: "QAR 9",
    image:
      "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=900&q=80",
    desc: "Chilled lime drink served fresh with mint and ice.",
    popular: false,
  },
];

const createWhatsAppLink = (itemName: string, itemPrice: string) => {
  const message = `Hello, I want to order: ${itemName} (${itemPrice})`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};

export default function MenuPageClient() {
  const [selectedCategory, setSelectedCategory] = useState("All Items");
  const [search, setSearch] = useState("");

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory =
        selectedCategory === "All Items" || item.category === selectedCategory;

      const searchValue = search.toLowerCase().trim();

      const matchesSearch =
        item.name.toLowerCase().includes(searchValue) ||
        item.category.toLowerCase().includes(searchValue) ||
        item.desc.toLowerCase().includes(searchValue);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, search]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-secondary-bg">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-bg px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-accent-gold blur-3xl sm:h-96 sm:w-96" />
          <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent-bronze blur-3xl sm:h-96 sm:w-96" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-accent-gold/15 bg-card px-5 py-2 text-sm font-semibold text-heading transition-all duration-300 hover:border-accent-gold hover:text-accent-gold"
          >
            <ArrowLeft size={17} />
            Back to Home
          </Link>

          <div className="mx-auto mt-10 max-w-3xl text-center sm:mt-12">
            <p className="inline-flex items-center gap-2 rounded-full border border-accent-gold/20 bg-card px-5 py-2 text-sm font-semibold text-accent-gold">
              <Utensils size={16} />
              Full Restaurant Menu
            </p>

            <h1 className="mt-6 text-4xl font-black leading-tight text-heading sm:text-5xl lg:text-6xl">
              Explore Our Full Menu
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-body sm:text-lg">
              Choose from biryani, curry, tandoor grill, seafood, snacks,
              breads, desserts and refreshing drinks.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Search and Filter */}
          <div className="rounded-[26px] border border-accent-gold/10 bg-card p-4 shadow-xl shadow-black/5 sm:p-5">
            <div className="grid gap-4 lg:grid-cols-[1fr_280px] lg:items-center">
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-body"
                />

                <input
                  type="text"
                  placeholder="Search menu item..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-full border border-accent-gold/10 bg-secondary-bg py-3.5 pl-12 pr-5 text-sm text-heading outline-none transition-all placeholder:text-body focus:border-accent-gold"
                />
              </div>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full rounded-full border border-accent-gold/10 bg-secondary-bg px-5 py-3.5 text-sm font-semibold text-heading outline-none transition-all focus:border-accent-gold"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-5 flex max-w-full gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-accent-gold text-black"
                      : "border border-accent-gold/10 bg-secondary-bg text-heading hover:border-accent-gold/40"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Title */}
          <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-black text-heading sm:text-3xl">
                {selectedCategory}
              </h2>

              <p className="mt-1 text-sm text-body">
                Showing {filteredItems.length} item
                {filteredItems.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>

          {/* Menu Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-accent-gold/10 bg-card shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-accent-gold/30"
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden sm:h-60">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/5 to-transparent" />

                  {item.popular && (
                    <div className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-accent-gold px-3 py-1 text-xs font-bold text-black shadow-md">
                      <Star size={13} fill="currentColor" />
                      Popular
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-gold">
                    {item.category}
                  </p>

                  <h3 className="mt-3 line-clamp-1 text-xl font-bold text-heading">
                    {item.name}
                  </h3>

                  <p className="mt-3 line-clamp-2 min-h-14 text-sm leading-7 text-body">
                    {item.desc}
                  </p>

                  <div className="mt-auto flex flex-col gap-4 pt-6 min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between">
                    <span className="text-xl font-black text-heading">
                      {item.price}
                    </span>

                    <a
                      href={createWhatsAppLink(item.name, item.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center rounded-full bg-green-500 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-green-600 min-[420px]:w-auto"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="mt-14 rounded-[28px] border border-accent-gold/10 bg-card p-8 text-center sm:p-10">
              <h3 className="text-2xl font-bold text-heading">
                No items found
              </h3>

              <p className="mt-3 text-body">
                Try a different item name or menu category.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
