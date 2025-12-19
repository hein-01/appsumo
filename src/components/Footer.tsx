import { Globe } from 'lucide-react';

const footerLinks = {
  product: [
    { label: 'AI Tools', href: '#' },
    { label: 'AI News', href: '#' },
    { label: 'Rankings', href: '#' },
    { label: 'Models', href: '#' },
  ],
  resources: [
    { label: 'Documentation', href: '#' },
    { label: 'API', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Community', href: '#' },
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy text-white/90">
      <div className="container-main py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold gradient-text">AI</span>
              <span className="text-2xl font-bold text-white">Base</span>
            </div>
            <p className="text-white/60 text-sm mb-4">
              The world's largest AI tools directory. Discover, compare, and use the best AI tools for your needs.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <Globe className="h-4 w-4" />
              <span>English</span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/40">
              © 2025 AIBase. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
