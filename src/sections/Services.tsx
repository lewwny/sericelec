import { motion } from 'framer-motion'
import { Zap, Home, Lightbulb, ShieldCheck } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeading from '../components/SectionHeading'
import { services } from '../data/content'

const iconMap = { Zap, Home, Lightbulb, ShieldCheck }

export default function Services() {
  return (
    <SectionWrapper id="services" dark className="relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-600/10 rounded-full blur-3xl pointer-events-none" />

      <SectionHeading
        title={services.title}
        subtitle={services.subtitle}
        light
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.items.map((service, i) => {
          const Icon = iconMap[service.icon]
          return (
            <motion.div
              key={service.title}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                scale: 1.03,
                boxShadow: '0 20px 40px rgba(0, 163, 232, 0.2)',
              }}
            >
              {/* Image */}
              <div className="h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-6">
                <div className="w-12 h-12 rounded-xl bg-electric-500/20 border border-electric-400/30 flex items-center justify-center mb-4 -mt-12 relative z-10">
                  <Icon className="w-6 h-6 text-electric-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-navy-300 text-sm">{service.description}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
