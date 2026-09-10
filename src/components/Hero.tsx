import Image from "next/image";
import { Phone, ArrowRight, Clock, Sparkles } from "lucide-react";
import { RESTAURANT_DATA } from "@/data/restaurant";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-16 lg:pb-24">
      {/* Background warm ambient glow */}
      <div className="absolute top-1/4 right-0 -mr-48 w-96 h-96 rounded-full bg-brand-beige/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 w-80 h-80 rounded-full bg-brand-red-light/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Location Tag */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-brand-beige border border-brand-border/80 text-brand-olive text-xs font-bold tracking-wider uppercase mb-5">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span>{RESTAURANT_DATA.hero.tag}</span>
            </div>

            {/* H1 Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-dark leading-[1.15] mb-6">
              Küçükpark’ta lezzetin{" "}
              <span className="text-brand-red underline decoration-brand-olive/40 decoration-wavy decoration-2 underline-offset-8">
                Babacan
              </span>{" "}
              hâli.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-brand-muted leading-relaxed max-w-2xl mb-8 font-normal">
              {RESTAURANT_DATA.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-8">
              <a
                href={RESTAURANT_DATA.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-brand-red hover:bg-brand-red-hover text-white font-medium text-base transition-all shadow-card hover:shadow-lift active:scale-[0.98] min-h-[48px]"
              >
                <Phone className="w-5 h-5 shrink-0" />
                <span>{RESTAURANT_DATA.hero.primaryCta}</span>
              </a>

              <a
                href="#lezzetler"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-brand-beige/50 text-brand-dark font-medium text-base border border-brand-border hover:border-brand-dark/20 transition-all active:scale-[0.98] min-h-[48px]"
              >
                <span>{RESTAURANT_DATA.hero.secondaryCta}</span>
                <ArrowRight className="w-4 h-4 text-brand-olive shrink-0" />
              </a>
            </div>

            {/* Trust / Specialty note */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-4 border-t border-brand-border/60 text-xs sm:text-sm text-brand-muted">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-red" />
                <span className="font-medium text-brand-dark">Günlük Taze El Yoğurması</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-border" />
                <span>Patentli Kova Konsepti</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-border" />
                <span>Sıcak & Hızlı Servis</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Real Photo with Floating Badges */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Photo Card Container */}
              <div className="relative rounded-3xl overflow-hidden bg-white p-2.5 sm:p-3 shadow-card border border-brand-border/80 group">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-brand-beige">
                  <Image
                    src="/images/babacan-kanka-menu.jpg"
                    alt="Babacan Çiğköfte Kanka Menü iki adet dürüm, köpüklü ayran ve taze garnitürler"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 540px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 via-transparent to-transparent opacity-60" />

                  {/* Caption on image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-brand-dark/70 backdrop-blur-sm text-[11px] font-medium tracking-wide uppercase">
                      Gerçek Ürün · Kanka Menü
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Working Hours Badge */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-lift border border-brand-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-beige flex items-center justify-center text-brand-olive shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-brand-muted font-bold">
                    Açılış – Kapanış
                  </div>
                  <div className="font-serif text-base sm:text-lg font-bold text-brand-dark">
                    {RESTAURANT_DATA.hours}
                  </div>
                </div>
              </div>

              {/* Floating Slogan Pill */}
              <div className="hidden sm:flex absolute -top-3 -right-3 bg-brand-beige/90 backdrop-blur-md rounded-full px-4 py-2 shadow-sm border border-brand-border text-xs font-semibold text-brand-olive items-center gap-1.5">
                <span>⭐</span>
                <span>{RESTAURANT_DATA.slogan}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
