import { motion } from 'framer-motion';
import { Leaf, Heart, Sparkles, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const values = [
  { icon: Leaf, title: 'Natural First', desc: 'We prioritize natural, clean ingredients and materials in everything we offer.' },
  { icon: Heart, title: 'Your Comfort Matters', desc: 'Browse freely, at your own pace. No pressure, no hovering — just a welcoming space.' },
  { icon: Sparkles, title: 'Self-Expression', desc: 'Beauty is personal. We celebrate individuality through our diverse collections.' },
  { icon: Users, title: 'Inclusive Beauty', desc: 'Products for every skin tone, type, and style. Everyone belongs here.' },
];

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">Our Story</p>
          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-6 leading-tight">
            Beauty That Feels Like Home
          </h1>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            Nature Cosmetics was born from a simple belief: shopping for beauty should feel as good as the products themselves.
            We created a space where you can explore, discover, and fall in love with products — comfortably, on your own terms.
          </p>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <h2 className="font-heading text-3xl text-foreground mb-6">Our Mission</h2>
              <p className="text-foreground/80 font-body leading-relaxed mb-4">
                We believe beauty isn't about perfection — it's about feeling confident in your own skin.
                That's why we carefully curate products that enhance your natural beauty: from nourishing skincare
                and subtle makeup to effortless clothing and timeless jewelry.
              </p>
              <p className="text-foreground/80 font-body leading-relaxed">
                Every product in our collection is chosen for its quality, integrity, and ability to make you feel wonderful.
                We value your comfort above all — both in our products and in your shopping experience.
              </p>
            </motion.div>
            <motion.div
              {...fadeUp}
              className="aspect-square bg-cream rounded-2xl flex items-center justify-center text-muted-foreground/30 font-heading text-xl"
            >
              Our Story
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 container mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-12">
          <h2 className="font-heading text-3xl text-foreground mb-3">What We Stand For</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 pb-10">
        <motion.div
          {...fadeUp}
          className="bg-primary rounded-2xl p-12 text-center text-primary-foreground"
        >
          <h2 className="font-heading text-3xl mb-4">Come Experience It Yourself</h2>
          <p className="font-body opacity-80 mb-8 max-w-lg mx-auto">
            Our door is always open — literally. Visit us anytime to explore our full collection in a calm, welcoming space.
          </p>
          <Link
            to="/store"
            className="inline-flex bg-primary-foreground text-primary px-8 py-3 rounded-lg font-body font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Visit Our Store
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
