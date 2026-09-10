import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InfoStrip from "@/components/InfoStrip";
import FlavorsSection from "@/components/FlavorsSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-red focus:text-white focus:rounded-lg"
      >
        İçeriğe Geç
      </a>

      <Header />

      <main id="main-content" className="flex-grow">
        <Hero />
        <InfoStrip />
        <FlavorsSection />
        <AboutSection />
        <GallerySection />
        <ContactSection />
      </main>

      <Footer />
      <MobileBottomBar />
    </div>
  );
}
