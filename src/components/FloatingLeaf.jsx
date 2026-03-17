import { motion } from 'framer-motion';

function Leaf({ style, delay, size, opacity, rotate }) {
  return (
    <motion.div
      className="absolute pointer-events-none select-none"
      style={{ ...style, fontSize: size, opacity }}
      initial={{ y: -20, rotate: rotate - 20, opacity: 0 }}
      animate={{
        y: [0, -18, 0, -10, 0],
        rotate: [rotate, rotate + 15, rotate - 10, rotate + 5, rotate],
        opacity: [0, opacity, opacity, opacity, 0],
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      🍃
    </motion.div>
  );
}

export function FloatingLeaves({ count = 5 }) {
  const leaves = Array.from({ length: count }, (_, i) => ({
    id: i,
    style: {
      left: `${10 + i * 18}%`,
      top: `${20 + (i % 3) * 20}%`,
    },
    delay: i * 1.3,
    size: `${14 + (i % 3) * 4}px`,
    opacity: 0.15 + (i % 4) * 0.05,
    rotate: -30 + i * 20,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {leaves.map((leaf) => (
        <Leaf key={leaf.id} {...leaf} />
      ))}
    </div>
  );
}
