import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, MapPin, Clock, Leaf } from 'lucide-react';
import { products, reviews } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import heroImage from '@/assets/hero-skincare.jpg';
import catSkincare from '@/assets/category-skincare.jpg';
import catBeauty from '@/assets/category-beauty.jpg';
import catClothing from '@/assets/category-clothing.jpg';
import catJewelry from '@/assets/category-jewelry.jpg';

const categories = [
  { name: 'Skincare', image: catSkincare, slug: 'skincare' },
  { name: 'Beauty', image: catBeauty, slug: 'beauty' },
  { name: 'Clothing', image: catClothing, slug: 'clothing' },
  { name: 'Jewelry', image: catJewelry, slug: 'jewelry' },
];

const moods = [
  { name: 'Glow', emoji: '✨', slug: 'glow' },
  { name: 'Minimal', emoji: '🤍', slug: 'minimal' },
  { name: 'Self-Care', emoji: '🌿', slug: 'self-care' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Index = () => {
  const bestsellers = products.filter((p) => p.isBestseller);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Natural skincare products on linen surface"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-foreground/30" />
        </div>
        <div className="relative container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl"
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-cream mb-4 flex items-center gap-2">
              <Leaf className="w-4 h-4" /> Natural Beauty, Redefined
            </p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-cream leading-tight mb-6">
              Embrace Your Natural Glow
            </h1>
            <p className="font-body text-cream/80 text-lg mb-8 leading-relaxed">
              Curated skincare, beauty, clothing & jewelry — all in one calm, welcoming space.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-body font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Explore Collection <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/store"
                className="inline-flex items-center gap-2 bg-cream/20 backdrop-blur-sm text-cream border border-cream/30 px-8 py-3 rounded-lg font-body font-medium text-sm hover:bg-cream/30 transition-colors"
              >
                Visit Our Store
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 container mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-3">Shop by Category</h2>
          <p className="text-muted-foreground font-body">Discover our curated collections</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/products?category=${cat.slug}`}
                className="group block relative aspect-[3/4] rounded-xl overflow-hidden"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-heading text-xl text-cream">{cat.name}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Shop by Mood */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="font-heading text-3xl text-foreground mb-3">Shop by Mood</h2>
            <p className="text-muted-foreground font-body">Find products that match your energy</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {moods.map((mood) => (
              <Link
                key={mood.slug}
                to={`/products?mood=${mood.slug}`}
                className="flex items-center gap-3 bg-background hover:bg-cream-dark px-8 py-4 rounded-full font-body font-medium text-foreground transition-colors border border-border"
              >
                <span className="text-xl">{mood.emoji}</span>
                {mood.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-20 container mx-auto px-6">
        <motion.div {...fadeUp} className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-2">Bestsellers</h2>
            <p className="text-muted-foreground font-body">Our most loved products</p>
          </div>
          <Link
            to="/products"
            className="hidden md:flex items-center gap-1 text-sm font-body text-primary hover:underline"
          >
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-3">What Our Customers Say</h2>
            <p className="text-muted-foreground font-body">Real experiences from real people</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background rounded-xl p-6 border border-border"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed mb-4">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-body font-medium text-sm text-foreground">{review.name}</span>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Info Banner */}
      <section className="py-20 container mx-auto px-6">
        <motion.div
          {...fadeUp}
          className="bg-primary rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="flex-1 text-primary-foreground">
            <h2 className="font-heading text-3xl md:text-4xl mb-4">Visit Our Store</h2>
            <p className="font-body opacity-80 mb-6 leading-relaxed">
              Experience Nature Cosmetics in person. Browse our full collection in a calm, comfortable atmosphere.
              We're open 24 hours — come whenever suits you best.
            </p>
            <div className="flex flex-wrap gap-6 mb-6 text-sm opacity-80">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> New York, NY</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Open 24 Hours</span>
            </div>
            <Link
              to="/store"
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-lg font-body font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="w-full md:w-80 h-48 rounded-xl bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/40 font-heading">
            Store Preview
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
