import { MapPin, Clock, Phone } from "lucide-react";
import { RESTAURANT_DATA } from "@/data/restaurant";

export default function InfoStrip() {
  return (
    <section className="relative z-10 -mt-2 sm:-mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-beige rounded-3xl p-4 sm:p-6 lg:p-8 border border-brand-border shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-brand-border">
            {/* Item 1: Location */}
            <a
              href={RESTAURANT_DATA.mapsQueryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 pt-4 first:pt-0 md:pt-0 md:px-6 first:px-0 group focus-visible:outline-2 focus-visible:outline-brand-red rounded-xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-red shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-brand-olive mb-0.5">
                  Konum
                </div>
                <div className="font-serif text-lg font-bold text-brand-dark group-hover:text-brand-red transition-colors">
                  Küçükpark / Bornova
                </div>
                <div className="text-xs text-brand-muted">
                  İzmir · Haritada Aç →
                </div>
              </div>
            </a>

            {/* Item 2: Working Hours */}
            <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-6">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-olive shrink-0 shadow-sm">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-brand-olive mb-0.5">
                  Çalışma Saatleri
                </div>
                <div className="font-serif text-lg font-bold text-brand-dark">
                  10:30 – 00:30
                </div>
                <div className="text-xs text-brand-muted">
                  Öğleden Gece Yarısına Kadar
                </div>
              </div>
            </div>

            {/* Item 3: Phone Order */}
            <a
              href={RESTAURANT_DATA.phoneHref}
              className="flex items-center gap-4 pt-4 md:pt-0 md:px-6 group focus-visible:outline-2 focus-visible:outline-brand-red rounded-xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-red text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-brand-olive mb-0.5">
                  Sipariş Telefonu
                </div>
                <div className="font-serif text-lg font-bold text-brand-red group-hover:text-brand-red-hover transition-colors">
                  0553 918 85 57
                </div>
                <div className="text-xs text-brand-muted">
                  Hemen arayın, taze hazırlayalım
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
