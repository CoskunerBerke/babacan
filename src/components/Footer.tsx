import Link from "next/link";
import { Phone, MapPin, Instagram, Heart } from "lucide-react";
import { RESTAURANT_DATA } from "@/data/restaurant";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white pt-14 pb-24 md:pb-14 border-t border-brand-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-6 flex flex-col">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-serif text-3xl font-bold tracking-tight text-white">
                {RESTAURANT_DATA.brandName}
              </span>
              <span className="inline-block w-2 h-2 rounded-full bg-brand-red" />
            </div>
            <span className="text-xs uppercase tracking-widest text-brand-beige/70 font-semibold mb-4">
              {RESTAURANT_DATA.brandSubtitle}
            </span>
            <p className="text-sm text-white/70 max-w-md leading-relaxed mb-6">
              Küçükpark’ta lezzetin Babacan hâli. Günlük el yoğurması çiğköfte,
              patentli kova çeşitleri ve özenli restoran sunumlarıyla hizmetinizdeyiz.
            </p>
            <div className="text-xs text-white/50 italic">
              “{RESTAURANT_DATA.slogan}”
            </div>
          </div>

          {/* Quick Info & Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-beige/80 mb-2">
              Hızlı Bilgiler
            </div>
            <div className="flex items-center gap-2.5 text-sm text-white/80">
              <MapPin className="w-4 h-4 text-brand-red shrink-0" />
              <span>{RESTAURANT_DATA.locationDisplay}</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-white/80">
              <span className="text-xs font-semibold text-brand-olive bg-white/10 px-2 py-0.5 rounded">
                Saatler
              </span>
              <span>{RESTAURANT_DATA.hoursDisplay}</span>
            </div>
            <a
              href={RESTAURANT_DATA.phoneHref}
              className="flex items-center gap-2.5 text-sm text-white/90 hover:text-brand-red transition-colors mt-2"
            >
              <Phone className="w-4 h-4 text-brand-red shrink-0" />
              <span className="font-semibold">{RESTAURANT_DATA.phone}</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-beige/80 mb-2">
              Sosyal Medya
            </div>
            <p className="text-xs text-white/70 leading-relaxed mb-2">
              Güncel duyurular ve yeni sunumlarımızı Instagram sayfamızdan takip edebilirsiniz.
            </p>
            <a
              href={RESTAURANT_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors w-fit min-h-[44px]"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>{RESTAURANT_DATA.instagramUsername}</span>
            </a>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {currentYear} {RESTAURANT_DATA.name}. Tüm hakları saklıdır.
          </div>
          <div className="flex items-center gap-1">
            <span>Küçükpark, Bornova</span>
            <span>·</span>
            <span>İzmir</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
