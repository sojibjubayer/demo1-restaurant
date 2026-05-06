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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 sm:px-6 lg:px-8">
        
        {/* LOGO */}
        <Link
          href="#home"
          onClick={closeMenu}
          className="group flex shrink-0 items-center"
        >
          <div className="relative w-30 sm:w-35 lg:w-38.75">
            <Image
              src="/logo55.png"
              alt="Royal Dining Logo"
              width={155}
              height={55}
              priority
              className="h-auto w-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-6 lg:flex">
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

        {/* DESKTOP CTA */}
        <Link
          href="#reservation"
          className="hidden rounded-full border border-accent-gold bg-accent-gold px-5 py-2 text-sm font-semibold text-dark-text transition-all duration-300 hover:scale-105 hover:bg-accent-bronze md:inline-flex"
        >
          Book Table
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-accent-gold/20 bg-card text-accent-gold transition-colors lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="border-t border-white/10 bg-primary-bg px-4 pb-4 pt-3 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl border border-accent-gold/10 bg-card px-4 py-2.5 text-sm font-medium text-body transition-all duration-300 hover:border-accent-gold/30 hover:text-accent-gold"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="#reservation"
              onClick={closeMenu}
              className="mt-2 rounded-full bg-accent-gold px-5 py-2.5 text-center text-sm font-semibold text-dark-text transition-all duration-300 hover:bg-accent-bronze"
            >
              Book Table
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}