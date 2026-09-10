import Image from "next/image";
import { Heart, Check } from "lucide-react";
import { RESTAURANT_DATA } from "@/data/restaurant";

export default function AboutSection() {
  return (
    <section id="hakkimizda" className="py-16 sm:py-24 bg-brand-beige/50 border-y border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Real venue photo */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden bg-white p-3 shadow-card border border-brand-border">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-brand-beige">
                <Image
                  src="/images/babacan-taze-tezgah.jpg"
                  alt="Babacan Çiğköfte Küçükpark şubesi taze tezgâhı ve garnitürler"
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs uppercase tracking-wider font-semibold text-white/90">
                    Küçükpark, Bornova
                  </div>
                  <div className="font-serif text-lg font-bold">
                    Taze Tezgâh & Günlük Hazırlık
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Warm, authentic Turkish narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-brand-olive bg-brand-beige px-3 py-1.5 rounded-full mb-4 border border-brand-border">
              <Heart className="w-3.5 h-3.5 text-brand-red" />
              <span>Hakkımızda</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight leading-tight mb-6">
              Küçükpark’ın enerjisinde, samimi bir çiğköfte durağı.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-brand-muted leading-relaxed mb-8">
              <p>
                İzmir Bornova’nın en canlı noktalarından biri olan Küçükpark’ta,
                çiğköfte severleri lezzetli ve taze sunumlarla ağırlıyoruz.
                Klasik dürüm alışkanlığını yenilikçi kova konseptleri ve özenli
                restoran tabaklarıyla bir araya getiriyoruz.
              </p>
              <p>
                Öğle molalarından gece yarısına kadar uzanan çalışma saatlerimizle,
                ister dükkânımızda keyifle vakit geçirebilir, isterseniz telefonla
                arayarak siparişinizi taptaze hazırlatabilirsiniz.
              </p>
            </div>

            {/* Slogan Quote Block */}
            <blockquote className="border-l-4 border-brand-red pl-5 py-2 mb-8 bg-white/80 rounded-r-2xl border border-l-0 border-brand-border/60">
              <p className="font-serif italic text-lg sm:text-xl text-brand-dark font-medium">
                “{RESTAURANT_DATA.slogan}”
              </p>
              <footer className="text-xs text-brand-olive font-semibold mt-1 uppercase tracking-wider">
                — Babacan Çiğköfte Mottosu
              </footer>
            </blockquote>

            {/* Genuine Store Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-brand-dark font-medium">
                <div className="w-5 h-5 rounded-full bg-brand-olive/10 text-brand-olive flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>Taze Yeşillik & Zengin Garnitür</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-brand-dark font-medium">
                <div className="w-5 h-5 rounded-full bg-brand-olive/10 text-brand-olive flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>Özel Soslu Kova Çiğköfte Çeşitleri</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-brand-dark font-medium">
                <div className="w-5 h-5 rounded-full bg-brand-olive/10 text-brand-olive flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>10:30–00:30 Çalışma Saatleri</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-brand-dark font-medium">
                <div className="w-5 h-5 rounded-full bg-brand-olive/10 text-brand-olive flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>Küçükpark İçi Hızlı İletişim</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
