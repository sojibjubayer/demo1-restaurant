"use client"
import { menuItems } from "@/data/menu";

const phoneNumber = "97471294020";

const createWhatsAppLink = (itemName: string) => {
  const message = `Hello, I want to order: ${itemName}`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};

export default function MenuSection() {
  return (
    <section
      id="menu"
      className="bg-secondary-bg py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent-gold">
            Our Special Menu
          </p>

          <h2 className="mt-4 text-4xl font-black text-heading sm:text-5xl">
            Signature Dishes
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-body">
            Crafted with premium ingredients and presented with perfection —
            every dish is designed to create a memorable dining experience.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-[28px] border border-accent-gold/10 bg-card transition-all duration-300 hover:-translate-y-2 hover:border-accent-gold/30"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent-gold">
                  {item.category}
                </p>

                <h3 className="mt-3 text-xl font-bold text-heading">
                  {item.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-body">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-lg font-semibold text-heading">
                    {item.price}
                  </span>

                  <button
                    onClick={() =>
                      window.open(
                        createWhatsAppLink(item.name),
                        "_blank"
                      )
                    }
                    className="rounded-full border border-green-500/30 bg-green-500 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-green-600"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}