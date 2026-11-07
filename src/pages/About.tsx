import React from 'react';
import { Link } from 'react-router-dom';
import { LotusLogo } from '../components/LotusLogo';
import { Award, HeartHandshake, ShieldCheck, Sparkles, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF6F0] py-8 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        <div className="bg-[#380C14] text-[#FAF6F0] rounded-2xl p-8 sm:p-14 mb-12 border border-[#5C1B27] text-center relative overflow-hidden shadow-xl">
          <div className="max-w-3xl mx-auto relative z-10 space-y-4">
            <LotusLogo className="w-14 h-14 text-[#E6C174] mx-auto" />
            <span className="text-xs uppercase tracking-widest text-[#E6C174] font-semibold">
              The Renuka Sarees Story
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#E6C174] font-medium leading-tight">
              Tradition Woven for Every Occasion
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-[#E6D5BD]/90 leading-relaxed max-w-2xl mx-auto font-light">
              Founded on the sacred ghats of Varanasi and nurtured by the temple looms of Kanchipuram,
              Renuka Sarees is dedicated to preserving the purest heritage of Indian handloom artistry.
            </p>
          </div>
        </div>

        {/* Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#B88B35] font-semibold">
              Our Genesis
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#380C14] font-medium leading-tight">
              Preserving Centuries of Handloom Mastery
            </h2>
            <p className="text-xs sm:text-sm text-[#2C1810] leading-relaxed">
              In a world dominated by fast fashion and synthetic polyester imitations, Renuka Sarees stands as a sanctuary of authentic handwoven silks. Every saree in our boutique is born on traditional wooden pit-looms where hereditary master weavers translate folklore, floral jaals, and sacred temple gopurams into gold-plated zari threads.
            </p>
            <p className="text-xs sm:text-sm text-[#2C1810] leading-relaxed">
              We work directly with over 1,200 weaver families across Varanasi, Kanchipuram, Chanderi, and Murshidabad, eliminating all middlemen so our artisans receive fair living wages while our patrons enjoy heirloom-grade textiles at honest prices.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-[#E6D5BD]">
                <p className="font-serif text-2xl font-bold text-[#4A151E]">100%</p>
                <p className="text-xs font-medium text-[#2C1810]">Mulberry & Katan Silk</p>
                <p className="text-[11px] text-[#8C7A70]">Tested and certified authenticity</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-[#E6D5BD]">
                <p className="font-serif text-2xl font-bold text-[#4A151E]">4 Decades</p>
                <p className="text-xs font-medium text-[#2C1810]">Artisan Heritage</p>
                <p className="text-[11px] text-[#8C7A70]">Cherished by 3 generations</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#E6D5BD] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80"
                alt="Renuka Sarees Weaving Atelier"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-widest text-[#B88B35] font-semibold">
              The Renuka Promise
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#380C14] font-medium mt-1">
              Uncompromising Quality in Every Thread
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#E6D5BD] text-center shadow-xs">
              <Award className="w-10 h-10 text-[#C89D42] mx-auto mb-3" />
              <h3 className="font-serif font-bold text-sm text-[#380C14] mb-1">Silk Mark Certified</h3>
              <p className="text-xs text-[#8C7A70] leading-relaxed">
                Authorized Silk Mark tagging on pure mulberry, katan, and tussar silk drapes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E6D5BD] text-center shadow-xs">
              <ShieldCheck className="w-10 h-10 text-[#C89D42] mx-auto mb-3" />
              <h3 className="font-serif font-bold text-sm text-[#380C14] mb-1">Authentic Tested Zari</h3>
              <p className="text-xs text-[#8C7A70] leading-relaxed">
                Genuine electroplated silver and gold zari threads that never tarnish or lose luster.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E6D5BD] text-center shadow-xs">
              <HeartHandshake className="w-10 h-10 text-[#C89D42] mx-auto mb-3" />
              <h3 className="font-serif font-bold text-sm text-[#380C14] mb-1">Fair Weaver Wages</h3>
              <p className="text-xs text-[#8C7A70] leading-relaxed">
                Direct weaver empowerment ensuring centuries-old handloom techniques flourish for future generations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E6D5BD] text-center shadow-xs">
              <Sparkles className="w-10 h-10 text-[#C89D42] mx-auto mb-3" />
              <h3 className="font-serif font-bold text-sm text-[#380C14] mb-1">Bridal Concierge</h3>
              <p className="text-xs text-[#8C7A70] leading-relaxed">
                Personalized trousseau styling, matching unstitched blouses, and bespoke fall-pico services.
              </p>
            </div>
          </div>
        </div>

        {/* Flagship Boutiques */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E6D5BD]">
          <h2 className="font-serif text-2xl font-bold text-[#380C14] mb-6 text-center">
            Visit Our Heritage Boutiques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-[#FAF6F0] rounded-xl border border-[#E6D5BD]">
              <div className="flex items-center gap-2 text-[#4A151E] font-semibold text-sm mb-2">
                <MapPin className="w-4 h-4 text-[#C89D42]" />
                <span>Varanasi Flagship</span>
              </div>
              <p className="text-xs text-[#2C1810]">
                Chowk Heritage Silk Corridor, Varanasi, UP 221001
              </p>
              <p className="text-[11px] text-[#8C7A70] mt-2">Specializing in Bridal Katan & Shikargah Silk</p>
            </div>

            <div className="p-4 bg-[#FAF6F0] rounded-xl border border-[#E6D5BD]">
              <div className="flex items-center gap-2 text-[#4A151E] font-semibold text-sm mb-2">
                <MapPin className="w-4 h-4 text-[#C89D42]" />
                <span>Kanchipuram Atelier</span>
              </div>
              <p className="text-xs text-[#2C1810]">
                42 Gandhi Road, Temple Gate, Kanchipuram, TN 631501
              </p>
              <p className="text-[11px] text-[#8C7A70] mt-2">Direct loom gallery & temple border silks</p>
            </div>

            <div className="p-4 bg-[#FAF6F0] rounded-xl border border-[#E6D5BD]">
              <div className="flex items-center gap-2 text-[#4A151E] font-semibold text-sm mb-2">
                <MapPin className="w-4 h-4 text-[#C89D42]" />
                <span>Mumbai Boutique</span>
              </div>
              <p className="text-xs text-[#2C1810]">
                Kala Ghoda Art District, Fort, Mumbai, MH 400001
              </p>
              <p className="text-[11px] text-[#8C7A70] mt-2">Private bridal styling appointments</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/all-sarees"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#4A151E] hover:bg-[#380C14] text-[#E6C174] text-xs font-semibold rounded-full shadow-md transition-colors"
            >
              <span>Explore Our Sarees Collection</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
