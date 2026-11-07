import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS, SAMPLE_REVIEWS } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { ProductCard } from '../components/ProductCard';
import {
  Heart,
  Star,
  ShoppingBag,
  Truck,
  ShieldCheck,
  Award,
  RefreshCw,
  Check,
  ChevronRight,
  Share2,
} from 'lucide-react';

export const ProductDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const product = useMemo(() => {
    return PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];
  }, [slug]);

  const [selectedImage, setSelectedImage] = useState<string>(product.images[0]);
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]?.name || 'Standard');
  const [quantity, setQuantity] = useState<number>(1);
  const [addedNotice, setAddedNotice] = useState<boolean>(false);

  // Reviews state
  const [reviewsList, setReviewsList] = useState(SAMPLE_REVIEWS);
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewComment, setNewReviewComment] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  // Sync selected image if product changes
  React.useEffect(() => {
    setSelectedImage(product.images[0]);
    setSelectedColor(product.colors[0]?.name || 'Standard');
    setQuantity(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product]);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2500);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedColor);
    navigate('/cart');
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewAuthor.trim() || !newReviewComment.trim()) return;

    const newRev = {
      id: `rev-${Date.now()}`,
      userName: newReviewAuthor.trim(),
      userCity: 'Verified Buyer',
      rating: newReviewRating,
      date: 'Just now',
      comment: newReviewComment.trim(),
      verified: true,
    };

    setReviewsList([newRev, ...reviewsList]);
    setNewReviewAuthor('');
    setNewReviewComment('');
    setReviewSubmitted(true);
  };

  const isFavorited = isInWishlist(product.id);

  // Related products from same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.occasions.some((o) => product.occasions.includes(o)))
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#FAF6F0] py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-[#8C7A70] mb-6 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-[#4A151E]">Home</Link>
          <ChevronRight className="w-3 h-3 text-[#C89D42]" />
          <Link to="/all-sarees" className="hover:text-[#4A151E]">All Sarees</Link>
          <ChevronRight className="w-3 h-3 text-[#C89D42]" />
          <Link to={`/all-sarees?category=${product.category}`} className="hover:text-[#4A151E]">
            {product.categoryLabel}
          </Link>
          <ChevronRight className="w-3 h-3 text-[#C89D42]" />
          <span className="text-[#380C14] font-medium truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Product Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white rounded-2xl p-6 sm:p-10 border border-[#E6D5BD] shadow-sm mb-14">
          {/* Left Column: Gallery */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main large image */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#FAF6F0] border border-[#E6D5BD] shadow-inner group">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                {product.silkMarkCertified && (
                  <span className="bg-[#4A151E] text-[#E6C174] text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded shadow-sm border border-[#E6C174]/40">
                    Silk Mark Certified
                  </span>
                )}
                {product.isBestseller && (
                  <span className="bg-[#C89D42] text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded shadow-sm">
                    Bestseller
                  </span>
                )}
              </div>

              {/* Wishlist toggle */}
              <button
                type="button"
                onClick={() => toggleWishlist(product)}
                className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-md ${
                  isFavorited
                    ? 'bg-[#4A151E] text-[#E6C174]'
                    : 'bg-white/90 text-[#380C14] hover:bg-white hover:text-[#782333]'
                }`}
                title={isFavorited ? 'Remove from Wishlist' : 'Add to Wishlist'}
              >
                <Heart className={`w-5 h-5 ${isFavorited ? 'fill-[#E6C174]' : ''}`} />
              </button>
            </div>

            {/* Multiple Image Thumbnails */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {product.images.map((imgUrl, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImage(imgUrl)}
                  className={`relative w-20 h-24 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                    selectedImage === imgUrl
                      ? 'border-[#4A151E] ring-2 ring-[#E6C174]'
                      : 'border-[#E6D5BD] opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Product Purchase Module */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs text-[#8C7A70] mb-1.5">
                <span className="uppercase tracking-widest font-semibold text-[#B88B35]">
                  {product.categoryLabel} · SKU: {product.sku}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Saree link copied to clipboard!');
                  }}
                  className="flex items-center gap-1 hover:text-[#380C14]"
                  title="Share this saree"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </button>
              </div>

              {/* Product Title */}
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#380C14] font-medium leading-tight mb-3">
                {product.name}
              </h1>

              {/* Ratings */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1 bg-[#FAF6F0] px-2.5 py-1 rounded-md border border-[#E6D5BD]">
                  <Star className="w-4 h-4 fill-[#C89D42] text-[#C89D42]" />
                  <span className="font-bold text-xs text-[#2C1810]">{product.rating}</span>
                </div>
                <span className="text-xs text-[#8C7A70]">
                  Based on {product.reviewCount} verified reviews
                </span>
              </div>

              {/* Price Block */}
              <div className="p-4 bg-[#FAF6F0] rounded-xl border border-[#E6D5BD] mb-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#380C14]">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  {product.originalPrice > product.price && (
                    <>
                      <span className="text-sm text-[#8C7A70] line-through">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs font-bold text-[#B88B35] bg-[#FFFDF9] px-2 py-0.5 rounded border border-[#E6D5BD]">
                        Save {product.discountPercent}% (₹{(product.originalPrice - product.price).toLocaleString('en-IN')})
                      </span>
                    </>
                  )}
                </div>
                <p className="text-[11px] text-[#8C7A70] mt-1">
                  Inclusive of all taxes · Complimentary express insured shipping across India
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#2C1810] leading-relaxed mb-6 font-light">
                {product.description}
              </p>

              {/* Color Selector */}
              <div className="mb-6">
                <label className="block text-xs font-semibold text-[#2C1810] uppercase tracking-wider mb-2">
                  Select Shade: <span className="font-serif text-sm font-bold text-[#380C14] normal-case">{selectedColor}</span>
                </label>
                <div className="flex items-center gap-3">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSelectedColor(c.name)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs transition-all cursor-pointer ${
                        selectedColor === c.name
                          ? 'border-[#4A151E] bg-[#FAF6F0] font-semibold text-[#380C14] shadow-xs ring-1 ring-[#4A151E]'
                          : 'border-[#E6D5BD] text-[#8C7A70] hover:border-[#C89D42]'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-black/20"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Stepper & Buttons */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-[#E6D5BD] rounded-xl bg-[#FAF6F0] p-1">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 flex items-center justify-center text-[#380C14] hover:bg-[#F2E7D5] rounded-lg"
                    >
                      -
                    </button>
                    <span className="w-10 text-center text-xs font-bold font-mono text-[#2C1810]">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center text-[#380C14] hover:bg-[#F2E7D5] rounded-lg"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to Cart */}
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="flex-1 py-3 px-6 bg-[#380C14] hover:bg-[#4A151E] text-[#E6C174] text-xs sm:text-sm font-semibold rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    {addedNotice ? (
                      <>
                        <Check className="w-4 h-4 text-[#E6C174]" />
                        <span>Added to Cart!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Cart</span>
                      </>
                    )}
                  </button>

                  {/* Buy Now */}
                  <button
                    type="button"
                    onClick={handleBuyNow}
                    className="py-3 px-8 bg-[#F4D086] hover:bg-[#E6C174] text-[#380C14] text-xs sm:text-sm font-semibold rounded-xl shadow-md transition-colors cursor-pointer"
                  >
                    Buy Now
                  </button>
                </div>
              </div>

              {/* Trust Badges Bar */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#F2E7D5] text-center">
                <div className="p-2.5 bg-[#FAF6F0] rounded-xl border border-[#E6D5BD]">
                  <Award className="w-4 h-4 text-[#C89D42] mx-auto mb-1" />
                  <p className="font-semibold text-[11px] text-[#380C14]">100% Pure Silk</p>
                  <p className="text-[10px] text-[#8C7A70]">Silk Mark Tagged</p>
                </div>

                <div className="p-2.5 bg-[#FAF6F0] rounded-xl border border-[#E6D5BD]">
                  <Truck className="w-4 h-4 text-[#C89D42] mx-auto mb-1" />
                  <p className="font-semibold text-[11px] text-[#380C14]">Free Shipping</p>
                  <p className="text-[10px] text-[#8C7A70]">All India Express</p>
                </div>

                <div className="p-2.5 bg-[#FAF6F0] rounded-xl border border-[#E6D5BD]">
                  <RefreshCw className="w-4 h-4 text-[#C89D42] mx-auto mb-1" />
                  <p className="font-semibold text-[11px] text-[#380C14]">7-Day Returns</p>
                  <p className="text-[10px] text-[#8C7A70]">Easy Exchange</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications & Textile Details Table */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E6D5BD] shadow-xs mb-14">
          <h2 className="font-serif text-xl sm:text-2xl text-[#380C14] font-bold mb-6 border-b border-[#F2E7D5] pb-3">
            Textile Specifications & Craftsmanship
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-xs">
            <div className="flex justify-between py-2.5 border-b border-[#F2E7D5]">
              <span className="text-[#8C7A70] font-medium">Fabric Quality</span>
              <span className="font-semibold text-[#2C1810] text-right">{product.fabric}</span>
            </div>

            <div className="flex justify-between py-2.5 border-b border-[#F2E7D5]">
              <span className="text-[#8C7A70] font-medium">Saree Length</span>
              <span className="font-semibold text-[#2C1810] text-right">{product.length}</span>
            </div>

            <div className="flex justify-between py-2.5 border-b border-[#F2E7D5]">
              <span className="text-[#8C7A70] font-medium">Blouse Piece Details</span>
              <span className="font-semibold text-[#2C1810] text-right max-w-xs">{product.blouseDetails}</span>
            </div>

            <div className="flex justify-between py-2.5 border-b border-[#F2E7D5]">
              <span className="text-[#8C7A70] font-medium">Weaving Technique</span>
              <span className="font-semibold text-[#2C1810] text-right">Authentic Handloom Jacquard / Brocade</span>
            </div>

            <div className="flex justify-between py-2.5 border-b border-[#F2E7D5]">
              <span className="text-[#8C7A70] font-medium">Zari Quality</span>
              <span className="font-semibold text-[#2C1810] text-right">Tested Electroplated Gold & Silver Zari</span>
            </div>

            <div className="flex justify-between py-2.5 border-b border-[#F2E7D5]">
              <span className="text-[#8C7A70] font-medium">Wash & Care Instructions</span>
              <span className="font-semibold text-[#782333] text-right">{product.careInstructions}</span>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E6D5BD] shadow-xs mb-14">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#F2E7D5] pb-6 mb-8">
            <div>
              <h2 className="font-serif text-xl sm:text-2xl text-[#380C14] font-bold">
                Customer Reviews ({reviewsList.length})
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex text-[#C89D42]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C89D42]" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#380C14]">{product.rating} out of 5 stars</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Reviews List */}
            <div className="lg:col-span-7 space-y-4">
              {reviewsList.map((rev) => (
                <div key={rev.id} className="p-4 bg-[#FAF6F0] rounded-xl border border-[#E6D5BD] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-xs text-[#380C14]">{rev.userName}</span>
                    <span className="text-[10px] text-[#8C7A70]">{rev.date}</span>
                  </div>
                  <div className="flex text-[#C89D42]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C89D42]" />
                    ))}
                  </div>
                  <p className="text-xs text-[#2C1810] leading-relaxed italic">&ldquo;{rev.comment}&rdquo;</p>
                  {rev.verified && (
                    <p className="text-[10px] text-[#2E7D32] font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      Verified Saree Purchase
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Write a Review Box */}
            <div className="lg:col-span-5 bg-[#FAF6F0] p-6 rounded-xl border border-[#E6D5BD]">
              <h3 className="font-serif text-base font-bold text-[#380C14] mb-3">
                Share Your Experience
              </h3>

              {reviewSubmitted ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs space-y-2">
                  <p className="font-bold">Review Added!</p>
                  <p>Thank you for contributing to the Renuka Sarees connoisseur community.</p>
                </div>
              ) : (
                <form onSubmit={handleAddReview} className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-[#2C1810] mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={newReviewAuthor}
                      onChange={(e) => setNewReviewAuthor(e.target.value)}
                      placeholder="e.g. Deepika Varma"
                      className="w-full px-3 py-2 text-xs bg-white border border-[#E6D5BD] rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#2C1810] mb-1">Rating</label>
                    <select
                      value={newReviewRating}
                      onChange={(e) => setNewReviewRating(Number(e.target.value))}
                      className="w-full px-3 py-2 text-xs bg-white border border-[#E6D5BD] rounded-lg"
                    >
                      <option value="5">★★★★★ 5 Stars (Exceptional)</option>
                      <option value="4">★★★★☆ 4 Stars (Very Good)</option>
                      <option value="3">★★★☆☆ 3 Stars (Good)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#2C1810] mb-1">Review Comments</label>
                    <textarea
                      rows={3}
                      required
                      value={newReviewComment}
                      onChange={(e) => setNewReviewComment(e.target.value)}
                      placeholder="How did the saree drape? What did you think of the zari and fabric softness?"
                      className="w-full px-3 py-2 text-xs bg-white border border-[#E6D5BD] rounded-lg"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#4A151E] hover:bg-[#380C14] text-[#E6C174] text-xs font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
                  >
                    Submit Review
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Related Sarees */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="font-serif text-xl sm:text-2xl text-[#380C14] font-bold mb-6">
              You May Also Adore
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
