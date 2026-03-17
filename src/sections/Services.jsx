import { motion } from 'framer-motion';
import { Zap, Sun, Leaf, CheckCircle2 } from 'lucide-react';
import { services } from '../data/content';
import { AnimatedSection, AnimatedGroup } from '../components/AnimatedSection';
import { SectionLabel } from '../components/SectionLabel';
import { Button } from '../components/Button';

const iconMap = { Zap, Sun, Leaf };

function ServiceCard({ service, index }) {
  const Icon = iconMap[service.icon] || Zap;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group relative flex flex-col bg-white rounded-4xl overflow-hidden shadow-card border border-gray-100 hover:border-forest-200 hover:shadow-organic transition-all duration-300"
      aria-labelledby={`service-${service.id}-title`}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={service.image}
          alt={service.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-60 group-hover:opacity-50 transition-opacity duration-300`} />

        {/* Icon */}
        <div className="absolute top-5 left-5 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-7">
        <div className={`text-xs font-semibold uppercase tracking-widest mb-2 ${service.accentColor}`}>
          {service.subtitle}
        </div>
        <h3
          id={`service-${service.id}-title`}
          className="text-xl font-bold text-forest-900 mb-3"
        >
          {service.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
          {service.description}
        </p>

        {/* Features */}
        <ul className="flex flex-col gap-2 mb-6">
          {service.features.map((feat) => (
            <li key={feat} className="flex items-center gap-2.5 text-sm text-gray-700">
              <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${service.accentColor}`} />
              {feat}
            </li>
          ))}
        </ul>

        <Button href="#contact" variant="outline" className="self-start text-sm px-5 py-2.5">
          En savoir plus
        </Button>
      </div>
    </motion.article>
  );
}

export function Services() {
  return (
    <section
      id="services"
      className="relative py-24 lg:py-32 bg-sage-50 overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 -translate-y-1/2 -left-48 w-96 h-96 rounded-full bg-forest-100/50 blur-3xl" />
        <div className="absolute -bottom-40 right-0 w-80 h-80 rounded-full bg-energy-100/40 blur-3xl" />
        {/* Dotted grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #15803d 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <AnimatedSection delay={0}>
            <SectionLabel>Nos services</SectionLabel>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2
              id="services-heading"
              className="text-4xl lg:text-5xl font-extrabold text-forest-900 leading-tight tracking-tight max-w-2xl"
            >
              Tout ce dont vous avez{' '}
              <span className="text-forest-600">besoin en électricité</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-gray-600 text-lg max-w-xl">
              De l'urgence au neuf, nous proposons des solutions complètes, modernes et respectueuses de l'environnement.
            </p>
          </AnimatedSection>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.3} className="text-center mt-14">
          <p className="text-gray-600 mb-5">
            Besoin d'un service spécifique ? Contactez-nous pour un devis personnalisé.
          </p>
          <Button href="tel:+33636470778" variant="primary" className="inline-flex mx-auto">
            <Zap className="w-4 h-4" />
            Appeler maintenant — 06 36 47 07 78
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
