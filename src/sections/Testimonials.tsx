import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeading from '../components/SectionHeading'
import { testimonials } from '../data/content'

export default function Testimonials() {
  return (
    <SectionWrapper id="avis">
      <SectionHeading
        title={testimonials.title}
        subtitle={testimonials.subtitle}
      />

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.reviews.map((review, i) => (
          <motion.div
            key={review.name}
            className="relative rounded-2xl border border-navy-100 bg-white p-6 sm:p-8 shadow-sm hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -4 }}
          >
            <Quote className="w-8 h-8 text-electric-200 mb-4" />

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(review.rating)].map((_, j) => (
                <svg
                  key={j}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-navy-600 leading-relaxed mb-6 italic">
              "{review.text}"
            </p>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-electric-100 flex items-center justify-center">
                <span className="text-electric-600 font-bold text-sm">
                  {review.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </span>
              </div>
              <div>
                <div className="font-semibold text-navy-900">{review.name}</div>
                <div className="text-sm text-navy-400">Client vérifié</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
