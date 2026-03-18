import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      className={`rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg ${className}`}
      whileHover={
        hover
          ? {
              scale: 1.03,
              boxShadow: '0 20px 40px rgba(0, 163, 232, 0.15)',
            }
          : undefined
      }
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}
