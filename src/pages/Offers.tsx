import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { COUPONS, PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../components/ProductCard';
import { Tag, Sparkles, Copy, Check, Clock, Gift, Percent, ArrowRight } from 'lucide-react';

export const Offers: React.FC = () => {
  const { applyCoupon, appliedCoupon } = useCart();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Simulated countdown timer for Festive Flash Deal
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 28, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    applyCoupon(code);
    setTimeout(() => {
      setCopiedCode(null);
    }, 3000);
  };

  // High discount products
  const discountedSarees = PRODUCTS.filter((p) => p.discountPercent >= 24);

  return (
    <div className="min-h-screen bg-[#FAF6F0] py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        <div className="bg-gradient-to-r from-[#4A151E] via-[#380C14] to-[#26070E] text-[#FAF6F0] rounded-2xl p-6 sm:p-10 mb-8 border border-[#5C1B27] shadow-xl relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6C174]/20 border border-[#E6C174]/40 text-[#E6C174] text-xs font-semibold mb-3">
              <Gift className="w-3.5 h-3.5" />
              <span>Festive Season Celebrations</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#E6C174] font-medium mb-3">
              Exclusive Offers & Deals
            </h1>
            <p className="text-xs sm:text-sm text-[#E6D5BD]/90">
              Celebrate life’s grandest occasions with royal handlooms at festive privileged prices.
              Apply promo codes at checkout for instant discounts and complimentary pan-India shipping.
            </p>
          </div>
        </div>

        {/* Limited Time Flash Deal Box */}
        <div className="bg-white rounded-2xl p-6 border border-[#E6D5BD] shadow-md mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#FAF6F0] text-[#782333] flex items-center justify-center shrink-0 border border-[#E6D5BD]">
              <Clock className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#B88B35] font-semibold block">
                Ending Soon
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#380C14]">
                Diwali & Wedding Pre-Booking Flash Sale
              </h3>
              <p className="text-xs text-[#8C7A70]">
                Up to 28% off on pure Katan Banarasi and Kanchipuram silk sarees.
              </p>
            </div>
          </div>

          {/* Countdown Clock */}
          <div className="flex items-center gap-3 bg-[#FAF6F0] px-4 py-2.5 rounded-xl border border-[#E6D5BD]">
            <div className="text-center">
              <span className="font-mono text-lg font-bold text-[#380C14]">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="block text-[9px] uppercase tracking-wider text-[#8C7A70]">Hours</span>
            </div>
            <span className="font-bold text-[#782333]">:</span>
            <div className="text-center">
              <span className="font-mono text-lg font-bold text-[#380C14]">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="block text-[9px] uppercase tracking-wider text-[#8C7A70]">Mins</span>
            </div>
            <span className="font-bold text-[#782333]">:</span>
            <div className="text-center">
              <span className="font-mono text-lg font-bold text-[#380C14]">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="block text-[9px] uppercase tracking-wider text-[#8C7A70]">Secs</span>
            </div>
          </div>
        </div>

        {/* Coupon Cards Grid */}
        <div className="mb-12">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#380C14] mb-4 flex items-center gap-2">
            <Tag className="w-5 h-5 text-[#C89D42]" />
            <span>Active Discount Vouchers</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COUPONS.map((coupon) => {
              const isApplied = appliedCoupon?.code === coupon.code;
              const isCopied = copiedCode === coupon.code;

              return (
                <div
                  key={coupon.code}
                  className={`bg-white rounded-xl p-5 border-2 transition-all relative overflow-hidden flex flex-col justify-between ${
                    isApplied ? 'border-[#C89D42] shadow-md bg-[#FFFDF9]' : 'border-[#E6D5BD]'
                  }`}
                >
                  {isApplied && (
                    <div className="absolute top-0 right-0 bg-[#C89D42] text-white text-[10px] font-bold px-3 py-0.5 rounded-bl">
                      Applied in Cart
                    </div>
                  )}

                  <div>
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="font-mono text-lg font-bold text-[#4A151E] tracking-wider bg-[#FAF6F0] px-3 py-1 rounded-md border border-[#E6D5BD] border-dashed">
                        {coupon.code}
                      </span>
                      <span className="text-sm font-bold text-[#B88B35]">
                        {coupon.discountType === 'percentage'
                          ? `${coupon.discountValue}% OFF`
                          : `₹${coupon.discountValue} OFF`}
                      </span>
                    </div>

                    <p className="text-xs text-[#2C1810] font-medium mb-1">
                      {coupon.description}
                    </p>
                    <p className="text-[11px] text-[#8C7A70] mb-4">
                      Min. cart value: ₹{coupon.minPurchase.toLocaleString('en-IN')}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopyCode(coupon.code)}
                    className={`w-full py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                      isApplied
                        ? 'bg-[#E8F5E9] text-[#2E7D32] border border-[#A5D6A7]'
                        : 'bg-[#4A151E] hover:bg-[#380C14] text-[#E6C174]'
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Code Applied!</span>
                      </>
                    ) : isApplied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Applied in Cart</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Apply & Copy Code</span>
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Featured Limited Time Deals Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#380C14]">
                Top Discounted Sarees
              </h2>
              <p className="text-xs text-[#8C7A70]">Limited stocks remaining at festive promotional rates</p>
            </div>
            <Link to="/all-sarees" className="text-xs font-semibold text-[#4A151E] hover:underline flex items-center gap-1">
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {discountedSarees.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
