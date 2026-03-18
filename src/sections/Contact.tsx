import { motion } from 'framer-motion'
import { Phone, Clock, MapPin } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import SectionHeading from '../components/SectionHeading'
import { contact, business } from '../data/content'

const iconMap = { Phone, Clock, MapPin }

export default function Contact() {
  return (
    <SectionWrapper id="contact" dark>
      <SectionHeading
        title={contact.title}
        subtitle={contact.subtitle}
        light
      />

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Contact cards */}
        <div className="space-y-6">
          {contact.items.map((item, i) => {
            const Icon = iconMap[item.icon]
            const content = (
              <motion.div
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:bg-white/10 transition-colors"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-electric-500/20 border border-electric-400/30 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-electric-400" />
                </div>
                <div>
                  <div className="text-navy-300 text-sm mb-1">{item.label}</div>
                  <div className="text-white font-semibold text-lg">
                    {item.value}
                  </div>
                </div>
              </motion.div>
            )
            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block"
              >
                {content}
              </a>
            ) : (
              <div key={item.label}>{content}</div>
            )
          })}

          {/* Big CTA */}
          <motion.a
            href={business.phoneHref}
            className="flex items-center justify-center gap-3 bg-electric-500 hover:bg-electric-400 text-white font-bold text-lg px-8 py-5 rounded-2xl shadow-2xl shadow-electric-500/25 transition-colors w-full"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Phone className="w-5 h-5" />
            Appelez maintenant : {business.phone}
          </motion.a>
        </div>

        {/* Map placeholder */}
        <motion.div
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden min-h-[320px] flex flex-col"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex-1 relative bg-navy-800/50">
            <iframe
              title="Localisation S.ERIC ELEC"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.5!2d4.9428!3d49.7019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDQyJzA3LjAiTiA0wrA1NiczNi4yIkU!5e0!3m2!1sfr!2sfr!4v1"
              className="w-full h-full absolute inset-0"
              style={{ border: 0, minHeight: '320px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="p-4 text-center">
            <p className="text-navy-300 text-sm">
              <MapPin className="w-4 h-4 inline mr-1" />
              Rue Bridier 5, 08200 Sedan — Région Grand Est
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
