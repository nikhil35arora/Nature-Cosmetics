import { motion } from 'framer-motion';
import { MapPin, Clock, Smile, Hand, ShoppingBag, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const expectations = [
  { icon: Smile, title: 'Friendly Welcome', desc: 'A warm greeting, never overwhelming. We\'re here when you need us.' },
  { icon: Hand, title: 'No-Pressure Browsing', desc: 'Take your time. Explore freely without anyone hovering or following you.' },
  { icon: ShoppingBag, title: 'Personalized Help', desc: 'Want recommendations? Just ask. Our team knows the products inside and out.' },
  { icon: Heart, title: 'Comfortable Space', desc: 'A calm, beautiful environment designed for a relaxing shopping experience.' },
];

const Store = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">Visit Us</p>
          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
            Your Shopping Experience, Your Way
          </h1>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            We've created a space where you can explore our full collection comfortably — no pressure, no rush.
            Just beautiful products and a welcoming atmosphere.
          </p>
        </motion.div>
      </section>

      {/* Store Info */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <h2 className="font-heading text-3xl text-foreground mb-6">Find Us</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-body font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">New York, NY</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-body font-medium text-foreground">Hours</p>
                    <p className="text-sm text-muted-foreground">Open 24 Hours, 7 days a week</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground font-body italic">
                "We value your comfort — browse at your own pace, and our friendly team is always happy to help when you're ready."
              </p>
            </motion.div>
            <motion.div
              {...fadeUp}
              className="aspect-video bg-cream rounded-xl overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2798895849!2d-74.25987!3d40.6976312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nature Cosmetics location"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 container mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-12">
          <h2 className="font-heading text-3xl text-foreground mb-3">What to Expect</h2>
          <p className="text-muted-foreground font-body">Your comfort is our priority</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expectations.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-secondary rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 pb-10">
        <motion.div {...fadeUp} className="text-center">
          <p className="text-muted-foreground font-body mb-4">Can't visit in person?</p>
          <Link
            to="/products"
            className="inline-flex bg-primary text-primary-foreground px-8 py-3 rounded-lg font-body font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Browse Our Collection Online
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Store;
