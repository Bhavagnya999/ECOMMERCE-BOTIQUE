import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { Heart, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export const Wishlist: React.FC = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-[#FAF6F0] py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        <div className="bg-[#380C14] text-[#FAF6F0] rounded-2xl p-6 sm:p-8 mb-8 border border-[#5C1B27] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#E6C174] font-semibold">
              Curated Favorites
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#E6C174] font-medium mt-1">
              My Saved Sarees ({wishlist.length})
            </h1>
            <p className="text-xs sm:text-sm text-[#E6D5BD]/90 mt-1">
              Your personalized wishlist of heirlooms and festive drapes.
            </p>
          </div>
          {wishlist.length > 0 && (
            <Link
              to="/all-sarees"
              className="text-xs text-[#E6C174] hover:underline self-start sm:self-center"
            >
              Continue Browsing →
            </Link>
          )}
        </div>

        {wishlist.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-[#E6D5BD] max-w-lg mx-auto shadow-xs">
            <div className="w-16 h-16 rounded-full bg-[#FAF6F0] border border-[#E6D5BD] flex items-center justify-center mx-auto text-[#782333] mb-4">
              <Heart className="w-8 h-8" />
            </div>
            <h2 className="font-serif text-xl sm:text-2xl text-[#380C14] font-semibold mb-2">
              Your Wishlist is Empty
            </h2>
            <p className="text-xs text-[#8C7A70] mb-6 leading-relaxed">
              Explore our handloom collections and tap the heart icon on any saree you wish to save for your trousseau or celebrations.
            </p>
            <Link
              to="/all-sarees"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#4A151E] hover:bg-[#380C14] text-[#E6C174] text-xs font-semibold rounded-full shadow-md transition-colors"
            >
              <span>Explore Sarees</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl border border-[#E6D5BD] overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#FAF6F0]">
                  <Link to={`/product/${product.slug}`}>
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                  <button
                    type="button"
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-red-600 flex items-center justify-center shadow-sm transition-colors"
                    title="Remove from wishlist"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-4 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-[#B88B35] tracking-wider">
                      {product.categoryLabel}
                    </span>
                    <Link
                      to={`/product/${product.slug}`}
                      className="block font-serif text-sm font-semibold text-[#2C1810] hover:text-[#4A151E] line-clamp-2 mt-0.5 mb-2"
                    >
                      {product.name}
                    </Link>
                  </div>

                  <div className="pt-2 border-t border-[#F2E7D5]">
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="font-semibold text-base text-[#380C14]">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-xs text-[#8C7A70] line-through">
                          ₹{product.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        addToCart(product, 1);
                        removeFromWishlist(product.id);
                      }}
                      className="w-full py-2 bg-[#4A151E] hover:bg-[#380C14] text-[#E6C174] text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Move to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
