import { Phone, Navigation } from "lucide-react";
import { RESTAURANT_DATA } from "@/data/restaurant";

export default function MobileBottomBar() {
  return (
    <aside
      aria-label="Hızlı İşlemler"
      className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-brand-border shadow-2xl p-3 pb-safe"
    >
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={RESTAURANT_DATA.phoneHref}
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-brand-red active:bg-brand-red-hover text-white font-semibold text-sm transition-all shadow-sm min-h-[48px]"
        >
          <Phone className="w-4 h-4 shrink-0" />
          <span>Ara</span>
        </a>

        {/* Maps Button */}
        <a
          href={RESTAURANT_DATA.mapsQueryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-brand-beige active:bg-brand-border text-brand-dark font-semibold text-sm border border-brand-border transition-all min-h-[48px]"
        >
          <Navigation className="w-4 h-4 text-brand-olive shrink-0" />
          <span>Haritada Ara</span>
        </a>
      </div>
    </aside>
  );
}
