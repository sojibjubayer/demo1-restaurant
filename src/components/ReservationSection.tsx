"use client";

import { useRef, useState } from "react";
import { Clock3, MapPin, Phone } from "lucide-react";

const phoneNumber = "97430221044";

export default function ReservationSection() {
  const dateInputRef = useRef<HTMLInputElement>(null);
  const timeInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2 Guests",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
🍽️ New Table Reservation

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📅 Date: ${formData.date}
⏰ Time: ${formData.time}
👥 Guests: ${formData.guests}
    `;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappURL, "_blank");
  };
  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="reservation" className="bg-secondary-bg py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent-gold">
            Reservation
          </p>

          <h2 className="mt-4 text-4xl font-black text-heading sm:text-5xl">
            Book Your Table
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-body">
            Reserve your dining experience and enjoy premium hospitality,
            signature dishes, and unforgettable moments with us.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Left Info */}
          <div className="rounded-4xl border border-accent-gold/10 bg-card p-8">
            <h3 className="text-2xl font-bold text-heading">
              Visit Royal Dining
            </h3>

            <p className="mt-4 text-base leading-8 text-body">
              Located in the heart of Doha, we offer an elegant fine dining
              atmosphere perfect for family dinners, business meetings, and
              special celebrations.
            </p>

            <div className="mt-10 space-y-6">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent-gold/20 bg-secondary-bg">
                  <MapPin className="text-accent-gold" size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-heading">Location</h4>

                  <p className="mt-1 text-sm text-body">
                    West Bay, Doha, Qatar
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent-gold/20 bg-secondary-bg">
                  <Phone className="text-accent-gold" size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-heading">Phone</h4>

                  <p className="mt-1 text-sm text-body">+974 3000 0000</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent-gold/20 bg-secondary-bg">
                  <Clock3 className="text-accent-gold" size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-heading">Opening Hours</h4>

                  <p className="mt-1 text-sm text-body">
                    Daily: 12:00 PM – 12:00 AM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="rounded-4xl border border-accent-gold/10 bg-card p-8">
            <form onSubmit={handleReservation} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-heading">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-accent-gold/10 bg-secondary-bg px-5 py-4 text-heading outline-none placeholder:text-muted focus:border-accent-gold"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-medium text-heading">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full rounded-2xl border border-accent-gold/10 bg-secondary-bg px-5 py-4 text-heading outline-none placeholder:text-muted focus:border-accent-gold"
                  required
                />
              </div>

              {/* Date & Time */}
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Date */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-heading">
                    Reservation Date
                  </label>

                  <input
                    ref={dateInputRef}
                    type="date"
                    name="date"
                    min={today}
                    value={formData.date}
                    onChange={handleChange}
                    onClick={() => dateInputRef.current?.showPicker?.()}
                    onFocus={() => dateInputRef.current?.showPicker?.()}
                    className="w-full cursor-pointer rounded-2xl border border-accent-gold/10 bg-secondary-bg px-5 py-4 text-heading outline-none focus:border-accent-gold"
                    required
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-heading">
                    Reservation Time
                  </label>

                  <input
                    ref={timeInputRef}
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    onClick={() => timeInputRef.current?.showPicker?.()}
                    onFocus={() => timeInputRef.current?.showPicker?.()}
                    className="w-full cursor-pointer rounded-2xl border border-accent-gold/10 bg-secondary-bg px-5 py-4 text-heading outline-none focus:border-accent-gold"
                    required
                  />
                </div>
              </div>

              {/* Guests */}
              <div>
                <label className="mb-2 block text-sm font-medium text-heading">
                  Number of Guests
                </label>

                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-accent-gold/10 bg-secondary-bg px-5 py-4 text-heading outline-none focus:border-accent-gold"
                >
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>4 Guests</option>
                  <option>6 Guests</option>
                  <option>8+ Guests</option>
                </select>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full rounded-full bg-accent-gold px-7 py-4 font-semibold text-dark-text transition-all duration-300 hover:scale-[1.02] hover:bg-accent-bronze"
              >
                Confirm Reservation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
