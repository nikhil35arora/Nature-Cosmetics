import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SlidersHorizontal } from 'lucide-react';
import { products, Product } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const categories = ['all', 'skincare', 'beauty', 'clothing', 'jewelry'];
const skinTypes = ['all', 'dry', 'oily', 'normal', 'combination', 'sensitive'];
const sortOptions = [
  { value: 'popular', label: 'Most Popular' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const initialMood = searchParams.get('mood') || '';

  const [category, setCategory] = useState(initialCategory);
  const [skinType, setSkinType] = useState('all');
  const [sort, setSort] = useState('popular');
  const [mood, setMood] = useState(initialMood);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];
    if (category !== 'all') result = result.filter((p) => p.category === category);
    if (skinType !== 'all') result = result.filter((p) => p.skinType?.includes(skinType));
    if (mood) result = result.filter((p) => p.mood?.includes(mood));

    switch (sort) {
      case 'price-low': result.sort((a, b) => a.price - b.price); break;
      case 'price-high': result.sort((a, b) => b.price - a.price); break;
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
      default: result.sort((a, b) => b.reviewCount - a.reviewCount);
    }
    return result;
  }, [category, skinType, sort, mood]);

  const handleCategory = (c: string) => {
    setCategory(c);
    setMood('');
    if (c === 'all') searchParams.delete('category');
    else searchParams.set('category', c);
    searchParams.delete('mood');
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="font-heading text-4xl text-foreground mb-2">
            {mood ? `Shop "${mood}" Mood` : category !== 'all' ? `Shop ${category.charAt(0).toUpperCase() + category.slice(1)}` : 'All Products'}
          </h1>
          <p className="text-muted-foreground font-body">{filtered.length} products</p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => handleCategory(c)}
                className={`px-4 py-2 rounded-full text-sm font-body transition-colors border ${
                  category === c
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background text-muted-foreground border-border hover:border-primary/50'
                }`}
              >
                {c.charAt(0).toUpperCase() + c.slice(1)}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="ml-auto flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-body text-muted-foreground border border-border hover:border-primary/50 transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>
        </div>

        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="flex flex-wrap gap-6 mb-8 p-6 bg-secondary rounded-xl"
          >
            {category === 'skincare' && (
              <div>
                <label className="text-xs font-body font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                  Skin Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {skinTypes.map((t) => (
                    <button
                      key={t}
                      onClick={() => setSkinType(t)}
                      className={`px-3 py-1.5 rounded-full text-xs font-body transition-colors border ${
                        skinType === t
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'bg-background text-muted-foreground border-border'
                      }`}
                    >
                      {t.charAt(0).toUpperCase() + t.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div>
              <label className="text-xs font-body font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                Sort By
              </label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="px-3 py-1.5 rounded-lg text-xs font-body bg-background border border-border text-foreground"
              >
                {sortOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
          </motion.div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground font-body">
            No products found. Try adjusting your filters.
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
