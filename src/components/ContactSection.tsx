import { MapPin, Phone, Clock, Navigation, ExternalLink } from "lucide-react";
import { RESTAURANT_DATA } from "@/data/restaurant";

export default function ContactSection() {
  return (
    <section id="iletisim" className="py-16 sm:py-24 bg-brand-beige/60 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-brand-olive bg-white px-3 py-1.5 rounded-full mb-3 border border-brand-border">
            <Navigation className="w-3.5 h-3.5 text-brand-red" />
            <span>Bize Ulaşın</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight">
            Ziyaret & Sipariş
          </h2>
          <p className="mt-3 text-base text-brand-muted">
            Küçükpark’ta lezzet dolu bir mola vermek veya adresinize sipariş istemek için bize kolayca ulaşın.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Address & Maps */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border shadow-card flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-beige text-brand-red flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-dark mb-2">
                Konum
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed mb-6">
                {RESTAURANT_DATA.locationDisplay}
              </p>
            </div>

            <a
              href={RESTAURANT_DATA.mapsQueryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-2xl bg-brand-beige hover:bg-brand-border text-brand-dark font-semibold text-sm transition-colors min-h-[44px]"
            >
              <Navigation className="w-4 h-4 text-brand-olive" />
              <span>Haritada Ara</span>
              <ExternalLink className="w-3.5 h-3.5 text-brand-muted ml-auto" />
            </a>
          </div>

          {/* Card 2: Hours */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border shadow-card flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-beige text-brand-olive flex items-center justify-center mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-dark mb-2">
                Çalışma Saatleri
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed mb-4">
                Öğle servisinden gece geç saatlere kadar Küçükpark’ta taze çiğköfte servisi devam eder.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-brand-beige/70 border border-brand-border/80 flex items-center justify-between">
              <span className="text-xs uppercase font-bold tracking-wider text-brand-olive">
                Servis Saatleri
              </span>
              <span className="font-serif text-lg font-bold text-brand-dark">
                {RESTAURANT_DATA.hours}
              </span>
            </div>
          </div>

          {/* Card 3: Phone & Order */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border shadow-card flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-red text-white flex items-center justify-center mb-6">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-dark mb-2">
                Telefonla Sipariş
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed mb-6">
                Dürüm, menü veya kilo çiğköfte siparişleriniz için bizi doğrudan arayın; hemen hazırlayalım.
              </p>
            </div>

            <a
              href={RESTAURANT_DATA.phoneHref}
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-2xl bg-brand-red hover:bg-brand-red-hover text-white font-semibold text-sm transition-colors shadow-sm min-h-[44px]"
            >
              <Phone className="w-4 h-4" />
              <span>{RESTAURANT_DATA.phone} · Ara</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
