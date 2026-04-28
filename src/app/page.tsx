import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import ReservationSection from "@/components/ReservationSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-primary-bg">
      <Navbar />

      <HeroSection />

      <MenuSection />

      <AboutSection />

      <ReservationSection />

      <Footer />
    </main>
  );
}