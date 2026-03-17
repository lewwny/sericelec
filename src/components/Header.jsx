import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Phone, Menu, X } from 'lucide-react';
import { navLinks, siteConfig } from '../data/content';
import { Button } from './Button';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-forest-900/8 border-b border-forest-100'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={() => handleNavClick('#hero')}
            className="flex items-center gap-2.5 group"
            aria-label="Eco Elec 23 — Retour à l'accueil"
          >
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-forest-600 flex items-center justify-center shadow-md shadow-forest-600/30 group-hover:shadow-forest-600/50 transition-shadow duration-300">
                <Zap className="w-5 h-5 text-white fill-energy-300" />
              </div>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-energy-400 rounded-full border-2 border-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`font-extrabold text-lg tracking-tight transition-colors duration-300 ${
                  scrolled ? 'text-forest-900' : 'text-white'
                }`}
              >
                Eco Elec 23
              </span>
              <span
                className={`text-xs font-medium transition-colors duration-300 ${
                  scrolled ? 'text-forest-600' : 'text-forest-200'
                }`}
              >
                Électricien Creuse
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-forest-100/60 hover:text-forest-700 ${
                  scrolled ? 'text-gray-700' : 'text-white/90 hover:bg-white/15 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={siteConfig.phoneHref}
              className={`flex items-center gap-2 text-sm font-semibold transition-colors duration-200 ${
                scrolled ? 'text-forest-700 hover:text-forest-900' : 'text-white/90 hover:text-white'
              }`}
              aria-label={`Appeler le ${siteConfig.phone}`}
            >
              <Phone className="w-4 h-4" />
              {siteConfig.phone}
            </a>
            <Button href="#contact" variant="primary" className="text-sm px-5 py-2.5">
              Devis Gratuit
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <motion.button
            className={`lg:hidden p-2 rounded-xl transition-colors duration-200 ${
              scrolled ? 'text-forest-700 hover:bg-forest-50' : 'text-white hover:bg-white/15'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9 }}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Ouvrir le menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-forest-100 shadow-xl overflow-hidden"
          >
            <nav className="px-4 py-5 flex flex-col gap-1" aria-label="Menu mobile">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="px-4 py-3 rounded-2xl text-forest-800 font-medium hover:bg-forest-50 hover:text-forest-700 transition-colors duration-150"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-forest-100 flex flex-col gap-2.5">
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-forest-50 text-forest-700 font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.phone}
                </a>
                <Button href="#contact" variant="primary" className="justify-center">
                  Devis Gratuit
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
