import { Zap, Leaf, Phone } from 'lucide-react';
import { footer, siteConfig, navLinks } from '../data/content';

export function Footer() {
  const handleNavClick = (href) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      className="bg-forest-950 text-forest-400 py-12"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-forest-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white fill-energy-300" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-extrabold text-white text-lg">Eco Elec 23</span>
                <span className="text-forest-400 text-xs">Électricien Creuse</span>
              </div>
            </div>
            <p className="text-forest-400 text-sm max-w-xs leading-relaxed">
              {footer.tagline}
            </p>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 text-energy-400 font-semibold hover:text-energy-300 transition-colors duration-200 text-sm"
              aria-label={`Appeler le ${siteConfig.phone}`}
            >
              <Phone className="w-4 h-4" />
              {siteConfig.phone}
            </a>
          </div>

          {/* Navigation */}
          <nav aria-label="Navigation secondaire">
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Navigation</h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-sm hover:text-forest-200 transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Info */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Infos pratiques</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li className="flex items-start gap-2">
                <Leaf className="w-4 h-4 text-forest-500 flex-shrink-0 mt-0.5" />
                <span>Saint-Léger-le-Guérétois</span>
              </li>
              <li>Creuse (23) et alentours</li>
              <li className="text-energy-500 font-medium">Ouvert 24h/24 — 7j/7</li>
              <li>Intervention en 48h</li>
              <li>
                <span className="text-energy-400 font-semibold">{siteConfig.rating}</span>{' '}
                sur Google ({siteConfig.reviewCount} avis)
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-forest-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-forest-600">{footer.copyright}</p>
          <div className="flex gap-5">
            {footer.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-forest-600 hover:text-forest-400 transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
