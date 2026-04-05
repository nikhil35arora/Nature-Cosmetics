import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Star, ArrowLeft, Leaf } from 'lucide-react';
import { products, reviews } from '@/data/products';
import { useWishlist } from '@/hooks/use-wishlist';
import ProductCard from '@/components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { toggle, isInWishlist } = useWishlist();

  if (!product) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <p className="text-muted-foreground font-body">Product not found.</p>
      </div>
    );
  }

  const wishlisted = isInWishlist(product.id);
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 font-body"
        >
          <ArrowLeft className="w-4 h-4" /> Back to shop
        </Link>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-square bg-secondary rounded-2xl flex items-center justify-center text-muted-foreground/30 font-heading text-2xl"
          >
            {product.category}
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-body uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                {product.category}
              </span>
              {product.isBestseller && (
                <span className="text-xs font-body uppercase tracking-wider text-accent bg-accent/10 px-2 py-1 rounded">
                  Bestseller
                </span>
              )}
            </div>

            <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-3">{product.name}</h1>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(product.rating) ? 'fill-accent text-accent' : 'text-border'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground font-body">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-2xl font-body font-semibold text-foreground mb-6">${product.price}</p>

            <p className="text-foreground/80 font-body leading-relaxed mb-8">{product.description}</p>

            {product.ingredients && (
              <div className="mb-6">
                <h3 className="font-body font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">
                  Key Ingredients
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="inline-flex items-center gap-1 text-xs font-body bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full"
                    >
                      <Leaf className="w-3 h-3" /> {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {product.usage && (
              <div className="mb-8">
                <h3 className="font-body font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">
                  How to Use
                </h3>
                <p className="text-sm text-foreground/70 font-body">{product.usage}</p>
              </div>
            )}

            {product.skinType && (
              <div className="mb-8">
                <h3 className="font-body font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">
                  Skin Type
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.skinType.map((t) => (
                    <span key={t} className="text-xs font-body bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full capitalize">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <Link
                to="/store"
                className="flex-1 text-center bg-primary text-primary-foreground py-3.5 rounded-lg font-body font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Visit Store to Purchase
              </Link>
              <button
                onClick={() => toggle(product.id)}
                className={`w-12 h-12 rounded-lg border flex items-center justify-center transition-colors ${
                  wishlisted
                    ? 'bg-accent/10 border-accent text-accent'
                    : 'border-border text-muted-foreground hover:border-primary/50'
                }`}
              >
                <Heart className={`w-5 h-5 ${wishlisted ? 'fill-accent' : ''}`} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Reviews */}
        <div className="mb-20">
          <h2 className="font-heading text-2xl text-foreground mb-8">Customer Reviews</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.slice(0, 2).map((review) => (
              <div key={review.id} className="bg-secondary rounded-xl p-6">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed mb-3">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-body font-medium text-sm">{review.name}</span>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div>
            <h2 className="font-heading text-2xl text-foreground mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
