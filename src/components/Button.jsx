import { motion } from 'framer-motion';

export function Button({ children, href, variant = 'primary', className = '', onClick, ...props }) {
  const base =
    'inline-flex items-center gap-2.5 font-semibold rounded-full px-7 py-3.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer text-sm tracking-wide';

  const variants = {
    primary:
      'bg-forest-600 text-white hover:bg-forest-700 focus:ring-forest-500 shadow-lg shadow-forest-600/30 hover:shadow-forest-600/50 hover:shadow-xl',
    secondary:
      'bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20 focus:ring-white/50',
    outline:
      'bg-transparent text-forest-700 border-2 border-forest-600 hover:bg-forest-50 focus:ring-forest-500',
    energy:
      'bg-energy-400 text-forest-900 hover:bg-energy-300 focus:ring-energy-400 shadow-lg shadow-energy-400/30 hover:shadow-energy-400/50 hover:shadow-xl font-bold',
  };

  const combinedClass = `${base} ${variants[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.04 },
    whileTap: { scale: 0.97 },
    transition: { type: 'spring', stiffness: 400, damping: 20 },
  };

  if (href) {
    return (
      <motion.a href={href} className={combinedClass} {...motionProps} {...props}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} className={combinedClass} {...motionProps} {...props}>
      {children}
    </motion.button>
  );
}
