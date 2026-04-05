import { Link } from 'react-router-dom';
import { MapPin, Clock, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <h3 className="font-heading text-xl mb-4">Nature Cosmetics</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Embracing natural beauty through carefully curated skincare, beauty, clothing, and jewelry.
            </p>
          </div>

          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4 opacity-70">Shop</h4>
            <div className="space-y-2">
              {['Skincare', 'Beauty', 'Clothing', 'Jewelry'].map((cat) => (
                <Link
                  key={cat}
                  to={`/products?category=${cat.toLowerCase()}`}
                  className="block text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4 opacity-70">Company</h4>
            <div className="space-y-2">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/store', label: 'Visit Our Store' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4 opacity-70">Visit Us</h4>
            <div className="space-y-3 text-sm opacity-80">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                New York, NY
              </p>
              <p className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                Open 24 Hours
              </p>
              <p className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                hello@naturecosmetics.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-xs opacity-60">© 2026 Nature Cosmetics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
