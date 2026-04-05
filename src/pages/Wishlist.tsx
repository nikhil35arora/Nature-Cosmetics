import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useWishlist } from '@/hooks/use-wishlist';
import ProductCard from '@/components/ProductCard';

const Wishlist = () => {
  const { items } = useWishlist();
  const wishlistProducts = products.filter((p) => items.includes(p.id));

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-16"
        >
          <h1 className="font-heading text-4xl text-foreground mb-2">Your Wishlist</h1>
          <p className="text-muted-foreground font-body">{items.length} saved items</p>
        </motion.div>

        {wishlistProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlistProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Heart className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
            <p className="text-muted-foreground font-body mb-6">Your wishlist is empty</p>
            <Link
              to="/products"
              className="inline-flex bg-primary text-primary-foreground px-8 py-3 rounded-lg font-body font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Start Exploring
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
