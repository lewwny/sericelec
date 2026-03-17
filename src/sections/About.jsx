import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, Clock } from 'lucide-react';
import { about } from '../data/content';
import { AnimatedSection, AnimatedGroup } from '../components/AnimatedSection';
import { SectionLabel } from '../components/SectionLabel';
import { Button } from '../components/Button';

const iconMap = { ShieldCheck, Leaf, Clock };

export function About() {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 bg-earth-50 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Organic decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-forest-100/60 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-sage-100/80 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <AnimatedSection delay={0.1} className="order-2 lg:order-1">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-4xl overflow-hidden shadow-organic aspect-[4/3]">
                <img
                  src={about.image}
                  alt={about.imageAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/30 to-transparent" />
              </div>

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-6 -right-4 sm:-right-8 bg-white rounded-3xl p-5 shadow-card border border-forest-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-forest-600 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-forest-900 font-bold text-lg leading-none">4.9/5</div>
                    <div className="text-forest-600 text-sm font-medium">Note Google</div>
                  </div>
                </div>
              </motion.div>

              {/* Eco badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -top-5 -left-4 sm:-left-8 bg-forest-600 rounded-3xl px-4 py-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-forest-200" />
                  <span className="text-white font-semibold text-sm">Éco-responsable</span>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Text column */}
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <AnimatedSection delay={0}>
              <SectionLabel>{about.sectionLabel}</SectionLabel>
            </AnimatedSection>

            <AnimatedSection delay={0.12}>
              <h2
                id="about-heading"
                className="text-4xl lg:text-5xl font-extrabold text-forest-900 leading-tight tracking-tight"
              >
                {about.title.split('\n').map((line, i) => (
                  <span key={i} className={`block ${i === 1 ? 'text-forest-600' : ''}`}>
                    {line}
                  </span>
                ))}
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-gray-600 text-lg leading-relaxed">
                {about.body}
              </p>
            </AnimatedSection>

            {/* Highlights */}
            <AnimatedGroup className="grid grid-cols-3 gap-4 mt-2" staggerDelay={0.1}>
              {about.highlights.map((h) => (
                <div
                  key={h.label}
                  className="flex flex-col items-center text-center p-4 rounded-3xl bg-white border border-forest-100 shadow-sm hover:shadow-card hover:border-forest-200 transition-all duration-300"
                >
                  <span className="text-2xl font-extrabold text-forest-700 leading-none">{h.value}</span>
                  <span className="text-xs text-gray-500 font-medium mt-1.5 leading-tight">{h.label}</span>
                </div>
              ))}
            </AnimatedGroup>

            <AnimatedSection delay={0.45}>
              <Button href="#contact" variant="primary" className="self-start mt-2">
                Obtenir un devis gratuit
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
