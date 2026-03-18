import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeading from '../components/SectionHeading'
import { about } from '../data/content'

export default function About() {
  return (
    <SectionWrapper id="a-propos">
      <SectionHeading title={about.title} subtitle={about.subtitle} />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={about.image}
              alt="Électricien professionnel au travail"
              className="w-full h-80 sm:h-96 object-cover"
            />
          </div>
          {/* Floating badge */}
          <motion.div
            className="absolute -bottom-6 -right-4 sm:right-8 bg-electric-500 text-white rounded-2xl p-4 shadow-xl"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', delay: 0.4 }}
          >
            <div className="text-3xl font-extrabold">13+</div>
            <div className="text-sm text-electric-100">Ans d'expérience</div>
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-navy-600 text-lg leading-relaxed mb-8">
            {about.text}
          </p>

          <div className="space-y-4">
            {[
              'Installations conformes aux normes NF C 15-100',
              'Intervention rapide en moins d\'une heure',
              'Devis gratuit et transparent',
              'Garantie décennale sur tous nos travaux',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-electric-500 mt-0.5 shrink-0" />
                <span className="text-navy-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {about.stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="text-center p-6 rounded-2xl bg-navy-50 border border-navy-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="text-3xl sm:text-4xl font-extrabold text-electric-500 mb-1">
              {stat.value}
            </div>
            <div className="text-navy-500 text-sm font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
