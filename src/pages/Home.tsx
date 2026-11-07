import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { CollectionRow } from '../components/CollectionRow';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS, SAMPLE_REVIEWS } from '../data/products';
import { LotusLogo } from '../components/LotusLogo';
import { Star, ArrowRight, Sparkles, Award, ShieldCheck, HeartHandshake } from 'lucide-react';

export const Home: React.FC = () => {
  const bestsellers = PRODUCTS.filter((p) => p.isBestseller).slice(0, 4);
  const newArrivals = PRODUCTS.filter((p) => p.isNewArrival).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#FAF6F0]">
      {/* 1. Exact Reference Hero Section with Carousel */}
      <Hero />

      {/* 2. Exact Reference 8 Collection Cards Section: "— Explore Our Collections —" */}
      <CollectionRow />

      {/* 3. Featured Bestsellers Section */}
      <section className="py-12 md:py-16 bg-[#FFFDF9] border-t border-[#F2E7D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B35] mb-1.5">
                <Sparkles className="w-4 h-4 text-[#C89D42]" />
                <span>Patron Favorites</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#380C14] font-medium tracking-tight">
                Our Most Cherished Sarees
              </h2>
              <p className="text-xs sm:text-sm text-[#8C7A70] mt-1 max-w-xl">
                Mastercrafted weaves that embody timeless elegance, celebrated by brides and saree connoisseurs across India.
              </p>
            </div>
            <Link
              to="/bestsellers"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#4A151E] hover:text-[#782333] transition-colors group shrink-0"
            >
              <span>View All Bestsellers</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Luxury Craftsmanship Banner: Varanasi & Kanchipuram Weaving Heritage */}
      <section className="py-14 md:py-20 bg-gradient-to-r from-[#380C14] via-[#4A151E] to-[#26070E] text-[#FAF6F0] relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none">
          <LotusLogo className="w-full h-full text-[#E6C174]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6C174]/20 border border-[#E6C174]/40 text-[#E6C174] text-xs font-medium tracking-wide">
                <Award className="w-3.5 h-3.5" />
                <span>Government Recognized Silk Mark Certified</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#E6C174] leading-tight">
                The Sacred Art of Pure Handloom Weaving
              </h2>
              <p className="text-sm md:text-base text-[#E6D5BD]/90 leading-relaxed font-light">
                Every Renuka saree is a testament to India’s centuries-old textile genius.
                In the narrow gullies of Varanasi and the temple courtyards of Kanchipuram, our master weavers
                spend up to 45 days meticulously throwing silk shuttles and drawing genuine silver-gold zari threads by hand.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="border-l-2 border-[#E6C174] pl-3">
                  <p className="text-xl md:text-2xl font-serif text-[#E6C174] font-bold">100%</p>
                  <p className="text-[11px] text-[#E6D5BD]/70">Pure Mulberry Silk</p>
                </div>
                <div className="border-l-2 border-[#E6C174] pl-3">
                  <p className="text-xl md:text-2xl font-serif text-[#E6C174] font-bold">45+ Days</p>
                  <p className="text-[11px] text-[#E6D5BD]/70">Handloom Weave Time</p>
                </div>
                <div className="border-l-2 border-[#E6C174] pl-3">
                  <p className="text-xl md:text-2xl font-serif text-[#E6C174] font-bold">1,200+</p>
                  <p className="text-[11px] text-[#E6D5BD]/70">Artisan Families Supported</p>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#F4D086] hover:bg-[#E6C174] text-[#380C14] text-xs font-semibold rounded-full shadow-md transition-all"
                >
                  <span>Our Artisan Legacy</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
              <div className="aspect-[3/4] rounded-xl overflow-hidden border border-[#E6C174]/30 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
                  alt="Traditional Banarasi Weaver"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden border border-[#E6C174]/30 shadow-xl mt-6">
                <img
                  src="https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80"
                  alt="Kanchipuram Silk Saree Pallu"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Fresh New Arrivals */}
      <section className="py-12 md:py-16 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B35] mb-1.5">
                <Sparkles className="w-4 h-4 text-[#C89D42]" />
                <span>Season 2026</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#380C14] font-medium tracking-tight">
                Fresh Off The Handlooms
              </h2>
              <p className="text-xs sm:text-sm text-[#8C7A70] mt-1 max-w-xl">
                Discover our newest bridal shades, ethereal organza weaves, and festive pastels.
              </p>
            </div>
            <Link
              to="/new-arrivals"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#4A151E] hover:text-[#782333] transition-colors group shrink-0"
            >
              <span>Explore All New Arrivals</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Special Offers Banner */}
      <section className="py-10 bg-[#FAF2E6] border-y border-[#E6D5BD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#4A151E] rounded-2xl p-6 sm:p-10 text-[#FAF6F0] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-xl text-center md:text-left">
              <span className="text-xs uppercase tracking-widest text-[#E6C174] font-semibold block mb-1">
                Festive Celebrations Deal
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-medium mb-2">
                Flat 20% Off with Code <span className="text-[#E6C174] underline">FESTIVE20</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#E6D5BD]/90">
                Unlock royal discounts on all pure Silk and Banarasi sarees on orders above ₹15,000. Free insured express delivery across India.
              </p>
            </div>
            <div className="relative z-10 shrink-0">
              <Link
                to="/offers"
                className="px-8 py-3.5 bg-[#F4D086] hover:bg-[#E6C174] text-[#380C14] text-xs sm:text-sm font-semibold rounded-full shadow-lg transition-transform hover:scale-105 inline-block"
              >
                Claim Festive Offers →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Patron Reviews / Testimonials */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-[#B88B35] font-semibold block mb-1">
              Testimonials of Trust
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#380C14] font-medium">
              Loved by Discerning Connoisseurs
            </h2>
            <p className="text-xs sm:text-sm text-[#8C7A70] mt-2">
              Over 15,000 satisfied brides and families draped in authentic Renuka weaves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SAMPLE_REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="p-6 bg-[#FAF6F0] rounded-xl border border-[#E6D5BD] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#C89D42] mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C89D42]" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#2C1810] leading-relaxed italic mb-4">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E6D5BD]/60 flex items-center justify-between">
                  <div>
                    <p className="font-serif text-xs font-semibold text-[#380C14]">{rev.userName}</p>
                    <p className="text-[11px] text-[#8C7A70]">{rev.userCity}</p>
                  </div>
                  {rev.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] text-[#2E7D32] bg-[#E8F5E9] px-2 py-0.5 rounded font-medium">
                      <ShieldCheck className="w-3 h-3" />
                      Verified
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
