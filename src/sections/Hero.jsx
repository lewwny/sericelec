import { motion } from 'framer-motion';
import { Phone, ArrowRight, Shield, Clock, Star } from 'lucide-react';
import { hero, siteConfig } from '../data/content';
import { Button } from '../components/Button';
import { FloatingLeaves } from '../components/FloatingLeaf';

function StatBadge({ value, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center gap-1 px-6 py-4 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20"
    >
      <span className="text-2xl font-extrabold text-white">{value}</span>
      <span className="text-xs text-white/70 font-medium uppercase tracking-wider">{label}</span>
    </motion.div>
  );
}

export function Hero() {
  const lines = hero.headline.split('\n');

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Section héros — Eco Elec 23"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero.backgroundImage}
          alt="Maison moderne écologique avec panneaux solaires en Creuse"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Multi-layer organic overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-950/90 via-forest-900/80 to-forest-800/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />
        {/* Organic teal-green shape */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-forest-600/20 to-transparent pointer-events-none" />
      </div>

      {/* Floating leaves decoration */}
      <FloatingLeaves count={7} />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-energy-400/30"
            style={{
              left: `${15 + i * 14}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 4 + i, delay: i * 0.7, repeat: Infinity }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Rating badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-energy-400 text-energy-400" />
              ))}
            </div>
            <span className="text-white/90 text-sm font-medium">{hero.badge}</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6 text-shadow">
            {lines.map((line, i) => (
              <motion.span
                key={i}
                className="block"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                {i === 1 ? (
                  <span className="text-energy-400">{line}</span>
                ) : (
                  line
                )}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl"
          >
            {hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Button href={hero.ctaPrimary.href} variant="energy" className="text-base px-8 py-4 text-base">
              <Phone className="w-5 h-5" />
              {hero.ctaPrimary.label}
            </Button>
            <Button href={hero.ctaSecondary.href} variant="secondary" className="text-base px-8 py-4">
              {hero.ctaSecondary.label}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Stats */}
          <div className="flex flex-wrap gap-3">
            {hero.stats.map((stat, i) => (
              <StatBadge key={stat.label} {...stat} delay={0.8 + i * 0.12} />
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="absolute bottom-8 right-4 sm:right-8 hidden lg:flex flex-col gap-3"
          aria-hidden="true"
        >
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-2.5 border border-white/15">
            <Shield className="w-4 h-4 text-forest-300" />
            <span className="text-white/80 text-xs font-medium">Certifié & Assuré</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-2.5 border border-white/15">
            <Clock className="w-4 h-4 text-energy-300" />
            <span className="text-white/80 text-xs font-medium">Intervention 48h max.</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
            fill="#f8faf5"
          />
        </svg>
      </div>
    </section>
  );
}
