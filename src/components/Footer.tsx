import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Reservation", href: "#reservation" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-secondary-bg">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-accent-gold/30 bg-card">
                <span className="text-lg font-bold text-accent-gold">
                  R
                </span>
              </div>

              <div>
                <h2 className="text-lg font-bold uppercase tracking-[0.18em] text-heading">
                  Royal Dining
                </h2>
                <p className="text-xs uppercase tracking-[0.2em] text-body">
                  Fine Dining Experience
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-body">
              Experience premium dining with elegant interiors, chef-crafted
              dishes, and unforgettable hospitality in the heart of Doha.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-heading">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {footerLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-body transition-all duration-300 hover:text-accent-gold"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-heading">
              Contact
            </h3>

            <div className="mt-5 space-y-3 text-sm text-body">
              <p>📍 West Bay, Doha, Qatar</p>
              <p>📞 +974 3000 0000</p>
              <p>✉ reservations@royaldining.qa</p>
              <p>🕒 Open Daily: 12 PM – 12 AM</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-xs tracking-wide text-muted">
            © 2026 Royal Dining. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}