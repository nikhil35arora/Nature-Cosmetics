import { Link } from 'react-router-dom';
import { Heart, Star } from 'lucide-react';
import { Product } from '@/data/products';
import { useWishlist } from '@/hooks/use-wishlist';
import { motion } from 'framer-motion';

const ProductCard = ({ product }: { product: Product }) => {
  const { toggle, isInWishlist } = useWishlist();
  const wishlisted = isInWishlist(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative aspect-square bg-secondary rounded-lg overflow-hidden mb-3">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            width={800}
            height={800}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              toggle(product.id);
            }}
            className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center transition-transform hover:scale-110"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                wishlisted ? 'fill-accent text-accent' : 'text-muted-foreground'
              }`}
            />
          </button>
          {product.isBestseller && (
            <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-medium uppercase tracking-wider px-2 py-1 rounded">
              Bestseller
            </span>
          )}
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-accent text-accent" />
            <span className="text-xs text-muted-foreground">
              {product.rating} ({product.reviewCount})
            </span>
          </div>
          <h3 className="font-body font-medium text-sm text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-muted-foreground">{product.shortDescription}</p>
          <p className="font-body font-semibold text-sm text-foreground">${product.price}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
