import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { LotusLogo } from './LotusLogo';

interface Slide {
  id: number;
  tag: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  accent: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    tag: 'Heritage Collection',
    title: 'Renuka Sarees',
    subtitle: 'A Complete Destination for Every Type of Saree',
    ctaText: 'Shop Now',
    ctaLink: '/all-sarees',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1400&q=85',
    accent: '#E6C174'
  },
  {
    id: 2,
    tag: 'Royal Bridal Trousseau',
    title: 'Imperial Banarasi Weaves',
    subtitle: 'Pure Katan Silk with Authentic 24K Gold Tested Zari Pallu',
    ctaText: 'Explore Bridal',
    ctaLink: '/collections?occasion=bridal',
    image: '/src/assets/images/hero_saree_model_bridal_1794037964458.jpg',
    accent: '#F4D086'
  },
  {
    id: 3,
    tag: 'Temple Artistry',
    title: 'Kanchipuram Silk Heirlooms',
    subtitle: 'Woven with Sacred Korvai Motifs by Master Weavers',
    ctaText: 'Discover Handlooms',
    ctaLink: '/all-sarees?category=kanchipuram',
    image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1400&q=85',
    accent: '#D4A94E'
  }
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide, isHovered]);

  const slide = SLIDES[currentSlide];

  return (
    <section
      className="relative w-full bg-[#2A080F] overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Hero Container */}
      <div className="relative min-h-[460px] md:min-h-[520px] lg:min-h-[580px] w-full flex items-center">
        {/* Left Side: Photography (Model in traditional silk saree) */}
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-12 w-full h-full">
          {/* Left image area (45-50% width on desktop) */}
          <div className="relative md:col-span-6 lg:col-span-5 h-[300px] md:h-full overflow-hidden">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center md:object-right transition-transform duration-1000 ease-out transform scale-100 hover:scale-105"
              onError={(e) => {
                // Fallback to high quality saree photography
                const target = e.target as HTMLImageElement;
                if (!target.src.includes('unsplash')) {
                  target.src = 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1400&q=85';
                }
              }}
            />
            {/* Soft inner vignette and gradient transition into right maroon panel */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-[#2A080F]/30 to-[#380C14] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2A080F] via-transparent to-transparent md:hidden" />
          </div>

          {/* Right maroon atmospheric backdrop matching reference */}
          <div className="relative md:col-span-6 lg:col-span-7 bg-gradient-to-b md:bg-gradient-to-r from-[#380C14] via-[#4A151E] to-[#2B080F] flex items-center justify-center p-6 md:p-12 lg:p-16">
            {/* Ambient golden glow bokeh */}
            <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-[#E6C174]/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-[#782333]/30 blur-2xl pointer-events-none" />

            {/* Traditional Indian arches filigree watermark */}
            <div className="absolute right-4 bottom-4 opacity-10 pointer-events-none hidden lg:block">
              <LotusLogo className="w-64 h-64 text-[#E6C174]" />
            </div>

            {/* Hero Text Content matching reference image */}
            <div className="relative z-10 max-w-xl text-center flex flex-col items-center">
              {/* Golden Lotus emblem with delicate wing flourishes */}
              <div className="flex items-center justify-center gap-3 mb-3 md:mb-4">
                <span className="h-[1px] w-8 md:w-12 bg-gradient-to-r from-transparent to-[#E6C174]" />
                <LotusLogo className="w-9 h-9 md:w-11 md:h-11 text-[#E6C174] drop-shadow-md" />
                <span className="h-[1px] w-8 md:w-12 bg-gradient-to-l from-transparent to-[#E6C174]" />
              </div>

              {/* Large Luxury Title in Italic Serif matching reference: "Renuka Sarees" */}
              <h1 className="font-serif italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#E6C174] tracking-tight leading-none mb-3 md:mb-4 drop-shadow-sm">
                {slide.title}
              </h1>

              {/* Tagline matching reference: "A Complete Destination for Every Type of Saree" */}
              <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#FAF6F0] font-light tracking-wide max-w-md mx-auto mb-4 md:mb-6 leading-relaxed">
                {slide.subtitle}
              </p>

              {/* Decorative small golden lotus divider ornament */}
              <div className="flex items-center justify-center gap-2 mb-6 md:mb-8 text-[#E6C174]">
                <span className="h-[1px] w-12 md:w-16 bg-[#E6C174]/60" />
                <LotusLogo className="w-5 h-5 text-[#E6C174]" />
                <span className="h-[1px] w-12 md:w-16 bg-[#E6C174]/60" />
              </div>

              {/* Gold-colored Shop Now button matching reference */}
              <Link
                to={slide.ctaLink}
                className="group inline-flex items-center gap-2.5 px-8 md:px-10 py-3 md:py-3.5 bg-[#F4D086] hover:bg-[#E6C174] text-[#380C14] font-medium text-sm md:text-base tracking-wide rounded-full shadow-lg hover:shadow-xl hover:shadow-[#F4D086]/20 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>{slide.ctaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Previous Slide Arrow button matching reference */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-xs transition-all duration-200 z-20 border border-white/20 hover:border-[#E6C174] hover:text-[#E6C174] shadow-md"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Next Slide Arrow button matching reference */}
        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-xs transition-all duration-200 z-20 border border-white/20 hover:border-[#E6C174] hover:text-[#E6C174] shadow-md"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Three Carousel Indicators matching reference */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === idx
                  ? 'w-3 h-3 bg-[#E6C174] scale-110'
                  : 'w-2.5 h-2.5 border border-[#E6C174]/70 bg-transparent hover:bg-[#E6C174]/30'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
