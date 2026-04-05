import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, ChevronDown } from 'lucide-react';
import { toast } from 'sonner';

const faqs = [
  { q: 'What is your return policy?', a: 'We accept returns within 30 days of purchase with original receipt. Items must be unused and in original packaging.' },
  { q: 'Are your products cruelty-free?', a: 'Yes! We are committed to cruelty-free products and prioritize brands that share our values.' },
  { q: 'Do you offer gift wrapping?', a: 'Absolutely! We offer complimentary gift wrapping in-store. Just ask any team member.' },
  { q: 'Can I get product recommendations?', a: 'Of course! Visit us in-store for personalized recommendations, or send us a message through our contact form.' },
  { q: 'Do you ship products?', a: 'Online shopping is coming soon! For now, please visit our store to purchase products.' },
];

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We\'ll get back to you soon.');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center py-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4">Get in Touch</p>
          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-6">We'd Love to Hear From You</h1>
          <p className="text-lg text-muted-foreground font-body">
            Have a question, suggestion, or just want to say hello? Reach out anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="text-xs font-body font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs font-body font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-xs font-body font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-body font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-heading text-xl text-foreground mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-body font-medium text-foreground text-sm">Email</p>
                    <p className="text-sm text-muted-foreground">hello@naturecosmetics.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-body font-medium text-foreground text-sm">Location</p>
                    <p className="text-sm text-muted-foreground">New York, NY</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-body font-medium text-foreground text-sm">Hours</p>
                    <p className="text-sm text-muted-foreground">Open 24 Hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="font-heading text-xl text-foreground mb-6">Frequently Asked Questions</h3>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-border rounded-lg overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-body font-medium text-foreground hover:bg-secondary/50 transition-colors"
                    >
                      {faq.q}
                      <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === i && (
                      <div className="px-4 pb-3">
                        <p className="text-sm text-muted-foreground font-body leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
