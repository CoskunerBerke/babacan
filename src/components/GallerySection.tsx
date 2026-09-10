"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, ExternalLink, ZoomIn } from "lucide-react";
import { RESTAURANT_DATA } from "@/data/restaurant";
import Lightbox from "./Lightbox";

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems = RESTAURANT_DATA.gallery;

  return (
    <section id="galeri" className="py-16 sm:py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-brand-olive bg-brand-beige px-3 py-1.5 rounded-full mb-3">
            <Camera className="w-3.5 h-3.5 text-brand-red" />
            <span>Gerçek Kareler</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight">
            Babacan’dan Fotoğraflar
          </h2>
          <p className="mt-3 text-base text-brand-muted">
            Küçükpark şubemizden taze lezzetler, patentli sunumlar ve samimi mekân atmosferi.
          </p>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-[240px] sm:auto-rows-[280px]">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setLightboxIndex(index);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`${item.title} - Görseli büyüt`}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-brand-beige border border-brand-border shadow-card focus-visible:outline-2 focus-visible:outline-brand-red ${
                item.span ?? "col-span-1 row-span-1"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300" />

              {/* Tag Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-brand-dark text-xs font-semibold shadow-sm">
                  {item.tag}
                </span>
              </div>

              {/* Zoom Icon on hover */}
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-9 h-9 rounded-full bg-brand-red text-white flex items-center justify-center shadow-md">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              {/* Caption Card at Bottom */}
              <div className="absolute bottom-0 inset-x-0 p-5 text-white z-10">
                <h3 className="font-serif text-lg sm:text-xl font-bold leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 mt-1 line-clamp-1">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Profile CTA */}
        <div className="mt-12 text-center">
          <a
            href={RESTAURANT_DATA.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-brand-beige text-brand-dark hover:text-brand-red font-semibold text-sm border border-brand-border transition-all shadow-sm active:scale-[0.98] min-h-[44px]"
          >
            <span>Instagram’da Daha Fazlası</span>
            <ExternalLink className="w-4 h-4 text-brand-olive" />
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          items={galleryItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(newIndex) => setLightboxIndex(newIndex)}
        />
      )}
    </section>
  );
}
