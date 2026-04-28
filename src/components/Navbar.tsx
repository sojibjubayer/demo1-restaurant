"use client";

import { useState } from "react";
import Link from "next/link";
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
        <Link href="/" onClick={closeMenu} className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-accent-gold/30 bg-card shadow-lg transition-all duration-300 group-hover:scale-105 sm:h-11 sm:w-11">
            <span className="text-lg font-bold text-accent-gold">R</span>
          </div>

          <div className="flex flex-col">
            <h1 className="text-sm font-bold uppercase tracking-[0.14em] text-heading sm:text-lg sm:tracking-[0.18em]">
              Royal Dining
            </h1>
            <p className="text-[9px] uppercase tracking-[0.16em] text-body sm:text-[11px] sm:tracking-[0.25em]">
              Fine Dining Experience
            </p>
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

        {/* Mobile Button */}
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