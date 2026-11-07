import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, ShoppingBag, Check } from 'lucide-react';
import { Product } from '../types/saree';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

interface ProductCardProps {
  product: Product;
  badge?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, badge }) => {
  const { addToCart, cart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const isFavorited = isInWishlist(product.id);
  const isInCart = cart.some((item) => item.product.id === product.id);

  const displayBadge =
    badge ||
    (product.isBestseller
      ? 'Bestseller'
      : product.isNewArrival
      ? 'New Arrival'
      : product.silkMarkCertified
      ? 'Silk Mark Certified'
      : null);

  return (
    <div className="group relative flex flex-col bg-white rounded-xl overflow-hidden border border-[#E6D5BD] hover:border-[#C89D42] shadow-xs hover:shadow-lg transition-all duration-300">
      {/* Image Container with Badges & Wishlist Button */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#FAF6F0]">
        <Link to={`/product/${product.slug}`} className="block w-full h-full">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
        </Link>

        {/* Badge */}
        {displayBadge && (
          <div className="absolute top-2.5 left-2.5 bg-[#4A151E] text-[#E6C174] text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-sm shadow-xs border border-[#E6C174]/30 pointer-events-none">
            {displayBadge}
          </div>
        )}

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product);
          }}
          className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm ${
            isFavorited
              ? 'bg-[#4A151E] text-[#E6C174]'
              : 'bg-white/90 text-[#380C14] hover:bg-white hover:text-[#782333]'
          }`}
          aria-label={isFavorited ? 'Remove from Wishlist' : 'Add to Wishlist'}
        >
          <Heart className={`w-4 h-4 ${isFavorited ? 'fill-[#E6C174]' : ''}`} />
        </button>

        {/* Quick Add Overlay on Desktop Hover */}
        <div className="absolute inset-x-2 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:block">
          <button
            type="button"
            onClick={() => addToCart(product, 1)}
            className="w-full py-2 bg-[#380C14]/90 hover:bg-[#380C14] text-[#E6C174] text-xs font-medium rounded-lg backdrop-blur-xs flex items-center justify-center gap-1.5 shadow-md transition-colors"
          >
            {isInCart ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#E6C174]" />
                <span>Added in Cart</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Quick Add</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-3.5 sm:p-4 flex flex-col flex-1 justify-between bg-white">
        <div>
          {/* Category & Fabric info */}
          <div className="flex items-center justify-between text-[11px] text-[#8C7A70] mb-1">
            <span className="uppercase tracking-wider font-medium text-[#B88B35]">
              {product.categoryLabel}
            </span>
            <div className="flex items-center gap-1 text-[#C89D42]">
              <Star className="w-3 h-3 fill-[#C89D42]" />
              <span className="font-semibold text-[#2C1810]">{product.rating}</span>
              <span className="text-[#8C7A70]">({product.reviewCount})</span>
            </div>
          </div>

          {/* Saree Name */}
          <Link
            to={`/product/${product.slug}`}
            className="block font-serif text-sm sm:text-base font-semibold text-[#2C1810] group-hover:text-[#4A151E] line-clamp-2 transition-colors mb-2 leading-snug"
          >
            {product.name}
          </Link>
        </div>

        {/* Price & Action Row */}
        <div className="pt-2 border-t border-[#F2E7D5] mt-auto">
          <div className="flex items-baseline gap-2 mb-2.5">
            <span className="font-semibold text-base sm:text-lg text-[#380C14]">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice > product.price && (
              <>
                <span className="text-xs text-[#8C7A70] line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-[11px] font-semibold text-[#B88B35]">
                  {product.discountPercent}% OFF
                </span>
              </>
            )}
          </div>

          {/* Mobile / Direct Button */}
          <button
            type="button"
            onClick={() => addToCart(product, 1)}
            className="w-full sm:hidden py-1.5 bg-[#FAF6F0] hover:bg-[#F2E7D5] border border-[#E6D5BD] text-[#380C14] rounded-md text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>{isInCart ? 'In Cart' : 'Add to Cart'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
