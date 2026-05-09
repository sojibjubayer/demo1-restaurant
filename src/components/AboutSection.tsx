import Link from "next/link";
import { Award, ChefHat, Wine } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: ChefHat,
    title: "World-Class Chefs",
    description:
      "Our culinary experts craft every dish with precision, passion, and premium ingredients.",
  },
  {
    icon: Award,
    title: "Luxury Dining Experience",
    description:
      "Elegant interiors, refined service, and unforgettable ambiance for every occasion.",
  },
  {
    icon: Wine,
    title: "Premium Selection",
    description:
      "From signature dishes to exclusive beverages, every detail reflects excellence.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-primary-bg py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-4xl border border-accent-gold/20 bg-card shadow-2xl">
            <Image
  src="/menus/luxury-restaurant-interior.webp"
  alt="Luxury restaurant interior"
  width={1200}
  height={800}
  className="h-full w-full object-cover"
/>
          </div>

          {/* Floating Experience Card */}
          <div className="absolute -bottom-6 right-6 rounded-3xl border border-accent-gold/20 bg-card/95 px-6 py-5 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              Since
            </p>
            <h3 className="mt-2 text-3xl font-bold text-accent-gold">2012</h3>
            <p className="mt-1 text-sm text-body">
              Serving luxury dining experiences
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent-gold">
            About Us
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight text-heading sm:text-5xl">
            More Than a Restaurant,
            <span className="mt-2 block text-accent-gold">
              A Luxury Experience
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-body sm:text-lg">
            Royal Dining is where exceptional cuisine meets timeless elegance.
            From intimate dinners to special celebrations, we create memorable
            moments through refined hospitality and chef-crafted perfection.
          </p>

          {/* Features */}
          <div className="mt-10 space-y-6">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex gap-5 rounded-3xl border border-accent-gold/10 bg-card p-5"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-accent-gold/20 bg-secondary-bg">
                    <Icon className="text-accent-gold" size={24} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-heading">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-body">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-10">
            <Link
              href="#reservation"
              className="inline-flex rounded-full bg-accent-gold px-7 py-3 font-semibold text-dark-text transition-all duration-300 hover:scale-105 hover:bg-accent-bronze"
            >
              Reserve Your Experience
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
