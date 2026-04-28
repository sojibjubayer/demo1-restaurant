"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Reservation", href: "#reservation" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-primary-bg/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
{/* Logo */}
<Link
  href="#home"
  onClick={closeMenu}
  className="group flex items-center"
>
  <div className="relative h-14 w-45 sm:h-16 sm:w-55">
    <Image
      src="/logo.png"
      alt="Royal Dining Logo"
      fill
      priority
      sizes="(max-width: 640px) 180px, 220px"
      className="object-contain object-left"
    />
  </div>
</Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium tracking-wide text-body transition-all duration-300 hover:text-accent-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="#reservation"
          className="hidden rounded-full border border-accent-gold bg-accent-gold px-6 py-2.5 text-sm font-semibold text-dark-text transition-all duration-300 hover:scale-105 hover:bg-accent-bronze md:inline-flex"
        >
          Book Table
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent-gold/20 bg-card text-accent-gold lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-primary-bg px-4 pb-5 pt-3 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="rounded-2xl border border-accent-gold/10 bg-card px-4 py-3 text-sm font-medium text-body transition-all duration-300 hover:border-accent-gold/30 hover:text-accent-gold"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="#reservation"
              onClick={closeMenu}
              className="mt-2 rounded-full bg-accent-gold px-5 py-3 text-center text-sm font-semibold text-dark-text transition-all duration-300 hover:bg-accent-bronze"
            >
              Book Table
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}