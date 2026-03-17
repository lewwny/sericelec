import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { reviews, siteConfig } from '../data/content';
import { AnimatedSection } from '../components/AnimatedSection';
import { SectionLabel } from '../components/SectionLabel';
import { StarRating } from '../components/StarRating';

function ReviewCard({ review, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.14, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className="relative flex flex-col gap-5 bg-white rounded-4xl p-8 shadow-card border border-gray-100 hover:border-forest-200 hover:shadow-organic transition-all duration-300"
      aria-label={`Avis de ${review.author}`}
    >
      {/* Quote icon */}
      <div className="absolute top-6 right-6 opacity-10">
        <Quote className="w-14 h-14 text-forest-600" />
      </div>

      {/* Stars */}
      <StarRating rating={review.rating} />

      {/* Text */}
      <blockquote className="text-gray-700 leading-relaxed text-base flex-1 italic">
        "{review.text}"
      </blockquote>

      {/* Author */}
      <footer className="flex items-center gap-3 pt-2 border-t border-gray-100">
        <div
          className={`w-10 h-10 rounded-full ${review.avatarColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
          aria-hidden="true"
        >
          {review.avatar}
        </div>
        <div>
          <cite className="not-italic text-forest-900 font-semibold text-sm">{review.author}</cite>
          <div className="text-gray-400 text-xs">Client · {review.date}</div>
        </div>
        {/* Google badge */}
        <div className="ml-auto flex items-center gap-1.5 text-xs text-gray-400 font-medium">
          <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Google
        </div>
      </footer>
    </motion.article>
  );
}

export function Reviews() {
  return (
    <section
      id="reviews"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
      aria-labelledby="reviews-heading"
    >
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-forest-50/80 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <AnimatedSection delay={0}>
            <SectionLabel>Avis clients</SectionLabel>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2
              id="reviews-heading"
              className="text-4xl lg:text-5xl font-extrabold text-forest-900 leading-tight tracking-tight max-w-xl"
            >
              Ce que disent nos{' '}
              <span className="text-forest-600">clients satisfaits</span>
            </h2>
          </AnimatedSection>

          {/* Rating summary */}
          <AnimatedSection delay={0.2}>
            <div className="inline-flex items-center gap-4 bg-forest-50 border border-forest-200 rounded-3xl px-6 py-4 mt-2">
              <div className="text-center">
                <div className="text-4xl font-extrabold text-forest-800">{siteConfig.rating}</div>
                <StarRating rating={5} size="md" />
              </div>
              <div className="w-px h-12 bg-forest-200" aria-hidden="true" />
              <div className="text-left">
                <div className="text-forest-900 font-semibold">{siteConfig.reviewCount} avis</div>
                <div className="text-forest-600 text-sm">sur Google Maps</div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <ReviewCard key={review.id} review={review} index={i} />
          ))}
        </div>

        {/* CTA to Google */}
        <AnimatedSection delay={0.2} className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Vous êtes un client satisfait ?{' '}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest-600 font-semibold hover:text-forest-700 underline underline-offset-2"
            >
              Laissez un avis sur Google
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
