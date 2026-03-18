import { motion } from 'framer-motion'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  light?: boolean
}

export default function SectionHeading({
  title,
  subtitle,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="text-center mb-12 sm:mb-16">
      <motion.h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${light ? 'text-white' : 'text-navy-900'}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className={`text-lg max-w-2xl mx-auto ${light ? 'text-navy-200' : 'text-navy-500'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
