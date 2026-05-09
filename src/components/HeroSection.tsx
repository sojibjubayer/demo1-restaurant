import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-primary-bg">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-accent-gold blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent-bronze blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left Content */}
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-accent-gold/20 bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-gold">
            <Star size={14} />
            Premium Fine Dining
          </p>

          <h1 className="mt-6 text-4xl font-black leading-tight text-heading sm:text-5xl lg:text-7xl">
            Taste Luxury
            <span className="mt-2 block text-accent-gold">in Every Bite</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-body sm:text-lg">
            Discover chef-crafted dishes, elegant ambiance, and unforgettable
            dining moments designed for true food lovers in Doha.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#reservation"
              className="inline-flex items-center gap-2 rounded-full bg-accent-gold px-7 py-3 font-semibold text-dark-text transition-all duration-300 hover:scale-105 hover:bg-accent-bronze"
            >
              Reserve Table
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#menu"
              className="rounded-full border border-accent-gold/30 px-7 py-3 font-medium text-heading transition-all duration-300 hover:border-accent-gold hover:text-accent-gold"
            >
              Explore Menu
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <h3 className="text-2xl font-bold text-accent-gold">15+</h3>
              <p className="mt-1 text-sm text-body">Signature Dishes</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-accent-gold">10K+</h3>
              <p className="mt-1 text-sm text-body">Happy Guests</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-accent-gold">5★</h3>
              <p className="mt-1 text-sm text-body">Dining Experience</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="relative h-130 overflow-hidden rounded-4xl border border-accent-gold/20 bg-card shadow-2xl">
            <Image
              src="/menus/hero-image.webp"
              alt="Luxury Restaurant Dining"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-6 left-6 rounded-3xl border border-accent-gold/20 bg-card/95 px-6 py-5 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              Chef Special
            </p>
            <h4 className="mt-2 text-lg font-bold text-heading">
              Wagyu Steak Experience
            </h4>
            <p className="mt-1 text-sm text-body">
              Premium selection for luxury dining
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
