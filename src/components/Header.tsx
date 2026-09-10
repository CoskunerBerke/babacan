"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, Clock, MapPin } from "lucide-react";
import { RESTAURANT_DATA } from "@/data/restaurant";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Lezzetler", href: "#lezzetler" },
    { name: "Hakkımızda", href: "#hakkimizda" },
    { name: "Galeri", href: "#galeri" },
    { name: "İletişim", href: "#iletisim" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-bg/95 backdrop-blur-md shadow-sm border-b border-brand-border/80 py-3"
          : "bg-brand-bg/90 backdrop-blur-sm border-b border-brand-border/40 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand area */}
          <Link
            href="/"
            className="group flex flex-col focus-visible:outline-2 focus-visible:outline-brand-red rounded-lg p-1"
          >
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-brand-dark group-hover:text-brand-red transition-colors">
                {RESTAURANT_DATA.brandName}
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-red" />
            </div>
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-brand-olive -mt-0.5">
              {RESTAURANT_DATA.brandSubtitle}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Ana Menü">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-dark/85 hover:text-brand-red transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-red hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action & Call Button */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-brand-muted font-medium bg-brand-beige/70 px-3 py-1.5 rounded-full border border-brand-border/60">
              <Clock className="w-3.5 h-3.5 text-brand-olive" />
              <span>{RESTAURANT_DATA.hoursDisplay}</span>
            </div>

            <a
              href={RESTAURANT_DATA.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-brand-red hover:bg-brand-red-hover text-white font-medium text-sm transition-all shadow-sm hover:shadow-lift active:scale-[0.98] min-h-[44px] min-w-[44px]"
            >
              <Phone className="w-4 h-4" />
              <span>Sipariş İçin Ara</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={RESTAURANT_DATA.phoneHref}
              aria-label="Sipariş için ara"
              className="p-2.5 rounded-full bg-brand-red text-white min-h-[44px] min-w-[44px] flex items-center justify-center shadow-sm"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
              className="p-2.5 rounded-xl border border-brand-border bg-white text-brand-dark hover:text-brand-red transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline-2 focus-visible:outline-brand-red"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-brand-border shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-3 rounded-lg text-base font-medium text-brand-dark hover:bg-brand-beige/50 hover:text-brand-red transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-brand-border/70 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-brand-muted px-3">
                <Clock className="w-4 h-4 text-brand-olive shrink-0" />
                <span>Çalışma Saatleri: {RESTAURANT_DATA.hoursDisplay}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-brand-muted px-3">
                <MapPin className="w-4 h-4 text-brand-red shrink-0" />
                <span>{RESTAURANT_DATA.locationDisplay}</span>
              </div>

              <a
                href={RESTAURANT_DATA.phoneHref}
                className="mt-2 flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-brand-red text-white font-medium text-base shadow-sm active:scale-[0.99] min-h-[48px]"
              >
                <Phone className="w-5 h-5" />
                <span>0553 918 85 57 · Sipariş Ver</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
