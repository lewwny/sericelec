import { motion } from 'framer-motion';
import { Phone, Clock, MapPin, ArrowRight, Zap } from 'lucide-react';
import { contact, siteConfig } from '../data/content';
import { AnimatedSection, AnimatedGroup } from '../components/AnimatedSection';
import { SectionLabel } from '../components/SectionLabel';
import { Button } from '../components/Button';

const iconMap = { Phone, Clock, MapPin };

function ContactItem({ item, index }) {
  const Icon = iconMap[item.icon] || Phone;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-start gap-4 p-5 rounded-3xl bg-white/60 backdrop-blur-sm border border-forest-200/60 hover:bg-white hover:border-forest-300 transition-all duration-300 group"
    >
      <div className="w-12 h-12 rounded-2xl bg-forest-600 flex items-center justify-center flex-shrink-0 group-hover:bg-forest-700 group-hover:shadow-glow-green transition-all duration-300">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div className="flex flex-col gap-0.5">
        <span className="text-xs font-semibold uppercase tracking-widest text-forest-600">
          {item.label}
        </span>
        {item.href ? (
          <a
            href={item.href}
            className="text-forest-900 font-bold text-lg hover:text-forest-600 transition-colors duration-200"
          >
            {item.value}
          </a>
        ) : (
          <span className="text-forest-900 font-bold text-lg">{item.value}</span>
        )}
        <span className="text-gray-500 text-sm">{item.description}</span>
      </div>
    </motion.div>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-forest-900 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-forest-700/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-forest-800/60 blur-3xl" />
        {/* Organic pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #86efac 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Energy glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-forest-600/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — CTA + Info */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <AnimatedSection delay={0}>
                <SectionLabel className="[&>span]:bg-forest-800 [&>span]:text-forest-200 [&>span]:border-forest-700">
                  {contact.sectionLabel}
                </SectionLabel>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <h2
                  id="contact-heading"
                  className="text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight"
                >
                  {contact.title.split('Projet')[0]}
                  <span className="text-energy-400">Projet</span>
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p className="text-forest-300 text-lg leading-relaxed">
                  {contact.subtitle}
                </p>
              </AnimatedSection>
            </div>

            {/* Contact items */}
            <div className="flex flex-col gap-3">
              {contact.items.map((item, i) => (
                <ContactItem key={item.label} item={item} index={i} />
              ))}
            </div>

            {/* Main CTA */}
            <AnimatedSection delay={0.4}>
              <motion.a
                href={contact.ctaHref}
                className="group flex items-center justify-between gap-4 px-8 py-5 rounded-3xl bg-energy-400 hover:bg-energy-300 transition-all duration-300 shadow-xl shadow-energy-400/20 hover:shadow-energy-400/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-forest-900/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-forest-900" />
                  </div>
                  <div className="text-left">
                    <div className="text-forest-900 font-extrabold text-xl">{siteConfig.phone}</div>
                    <div className="text-forest-800/70 text-sm font-medium">Disponible 24h/24 — 7j/7</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-forest-900 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
            </AnimatedSection>
          </div>

          {/* Right — Map */}
          <AnimatedSection delay={0.2} className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-lg">
              Zone d'intervention — Creuse & alentours
            </h3>
            <div className="relative rounded-4xl overflow-hidden shadow-2xl border border-forest-700/50 aspect-[4/3] lg:aspect-auto lg:h-[480px]">
              <iframe
                src={contact.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte de la zone d'intervention d'Eco Elec 23 — Guéret, Creuse"
                className="w-full h-full"
              />
              {/* Map overlay badge */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2.5 shadow-lg flex items-center gap-2">
                <MapPin className="w-4 h-4 text-forest-600" />
                <span className="text-forest-900 font-semibold text-sm">Saint-Léger-le-Guérétois</span>
              </div>
            </div>
            <p className="text-forest-400 text-sm">
              Basés à Saint-Léger-le-Guérétois, nous intervenons dans toute la Creuse (23) et les départements limitrophes.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full rotate-180" preserveAspectRatio="none">
          <path d="M0 30C240 60 480 0 720 30C960 60 1200 0 1440 30V60H0V30Z" fill="#f8faf5" />
        </svg>
      </div>
    </section>
  );
}
