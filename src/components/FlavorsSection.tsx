"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";
import { RESTAURANT_DATA, MenuItem } from "@/data/restaurant";

export default function FlavorsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredItems =
    activeCategory === "all"
      ? RESTAURANT_DATA.menuItems
      : RESTAURANT_DATA.menuItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section id="lezzetler" className="py-16 sm:py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-brand-olive bg-brand-beige px-3 py-1.5 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5 text-brand-red" />
              <span>Doğrulanmış Lezzetler</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight">
              Babacan’ın İmza Tatları
            </h2>
            <p className="mt-3 text-base text-brand-muted max-w-xl">
              Geleneksel el yoğurmasından patentli kova konseptine, Küçükpark’ın en çok tercih edilen çiğköfte lezzetleri.
            </p>
          </div>

          {/* Call CTA notice */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-white p-4 rounded-2xl border border-brand-border shadow-sm">
            <div className="text-xs text-brand-muted">
              <span className="font-semibold text-brand-dark block">
                Güncel Menü & Fiyat Bilgisi
              </span>
              Sipariş vermeden önce anlık fiyatları öğrenmek için arayın.
            </div>
            <a
              href={RESTAURANT_DATA.phoneHref}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red hover:bg-brand-red-hover text-white text-xs font-semibold whitespace-nowrap transition-colors min-h-[44px]"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>0553 918 85 57</span>
            </a>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {RESTAURANT_DATA.menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap min-h-[44px] ${
                activeCategory === cat.id
                  ? "bg-brand-dark text-white shadow-sm"
                  : "bg-white text-brand-muted hover:text-brand-dark border border-brand-border hover:border-brand-dark/20"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item: MenuItem) => (
            <article
              key={item.id}
              className="group flex flex-col justify-between bg-white rounded-3xl overflow-hidden border border-brand-border shadow-card hover:shadow-soft transition-all duration-300"
            >
              <div>
                {/* Optional Image */}
                {item.image && (
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-beige">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.badge && (
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-brand-red text-xs font-bold shadow-sm">
                        {item.badge}
                      </span>
                    )}
                  </div>
                )}

                <div className="p-6">
                  {/* Badge when no image */}
                  {!item.image && item.badge && (
                    <span className="inline-block mb-3 px-3 py-1 rounded-full bg-brand-beige text-brand-olive text-xs font-bold">
                      {item.badge}
                    </span>
                  )}

                  <h3 className="font-serif text-xl font-bold text-brand-dark group-hover:text-brand-red transition-colors mb-2">
                    {item.name}
                  </h3>

                  <p className="text-sm text-brand-muted leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {item.portions && (
                    <div className="flex items-center gap-1.5 text-xs font-medium text-brand-olive bg-brand-olive-light/50 px-3 py-1.5 rounded-lg w-fit">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-olive" />
                      <span>{item.portions}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer: Call for Current Price */}
              <div className="p-6 pt-0 border-t border-brand-border/40 mt-4 flex items-center justify-between">
                <span className="text-xs text-brand-muted font-medium">
                  Güncel Menü & Fiyat
                </span>
                <a
                  href={RESTAURANT_DATA.phoneHref}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red hover:text-brand-red-hover p-2 -mr-2"
                >
                  <span>Arayarak Öğren</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Slogan Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-brand-beige border border-brand-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs uppercase font-bold tracking-wider text-brand-olive mb-1">
              {RESTAURANT_DATA.patentNote}
            </div>
            <div className="font-serif text-xl sm:text-2xl font-bold text-brand-dark">
              “{RESTAURANT_DATA.slogan}”
            </div>
          </div>
          <a
            href={RESTAURANT_DATA.phoneHref}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-red hover:bg-brand-red-hover text-white font-medium text-sm transition-all shadow-sm active:scale-[0.98] shrink-0 min-h-[44px]"
          >
            <Phone className="w-4 h-4" />
            <span>Sipariş Vermek İçin Ara</span>
          </a>
        </div>
      </div>
    </section>
  );
}
