"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "@/data/restaurant";

interface LightboxProps {
  items: readonly GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  items,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);

  const currentItem = items[currentIndex];

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  // Keyboard navigation & Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Lock body scroll
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleNext, handlePrev, onClose]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartXRef.current - touchEndX;

    if (deltaX > 50) {
      handleNext();
    } else if (deltaX < -50) {
      handlePrev();
    }
    touchStartXRef.current = null;
  };

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Görsel İnceleme"
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark/90 backdrop-blur-md p-4 sm:p-6 select-none animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top action bar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 text-white">
        <div className="text-xs sm:text-sm font-medium bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
          {currentIndex + 1} / {items.length}
        </div>

        <button
          onClick={onClose}
          aria-label="Kapat (Escape)"
          className="p-2.5 rounded-full bg-black/50 hover:bg-brand-red text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline-2 focus-visible:outline-white"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Previous Button */}
      <button
        onClick={handlePrev}
        aria-label="Önceki Görsel"
        className="hidden sm:flex absolute left-4 p-3 rounded-full bg-black/40 hover:bg-brand-red text-white transition-colors z-10 min-h-[48px] min-w-[48px] items-center justify-center focus-visible:outline-2 focus-visible:outline-white"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        aria-label="Sonraki Görsel"
        className="hidden sm:flex absolute right-4 p-3 rounded-full bg-black/40 hover:bg-brand-red text-white transition-colors z-10 min-h-[48px] min-w-[48px] items-center justify-center focus-visible:outline-2 focus-visible:outline-white"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="relative max-w-4xl max-h-[80vh] w-full h-full flex flex-col items-center justify-center">
        <div className="relative w-full h-full max-h-[70vh] flex items-center justify-center">
          <Image
            src={currentItem.src}
            alt={currentItem.alt}
            fill
            sizes="90vw"
            className="object-contain"
            priority
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center max-w-xl px-4">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
            {currentItem.title}
          </h3>
          <p className="text-xs sm:text-sm text-white/80 mt-1">
            {currentItem.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
