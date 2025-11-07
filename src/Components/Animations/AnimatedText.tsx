import { motion } from 'framer-motion';

const AnimatedTextCharacter = ({
  text,
  delay = 1,
  onScroll = false
}: {
  text: string;
  delay?: number;
  onScroll?: boolean;
}) => {
  const letters = Array.from(text);

  // Variants for Container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = delay) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i }
    })
  };

  // Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { type: 'spring', damping: 20, stiffness: 90 }
    },
    hidden: {
      opacity: 0,
      x: 0,
      y: 100,
      transition: { type: 'spring', damping: 20, stiffness: 90 }
    }
  };

  return (
    <motion.div
      // ✅ allow wrapping instead of nowrap
      style={{ overflow: 'hidden', display: 'flex', flexWrap: 'wrap', whiteSpace: 'normal' }}
      className="flex pb-2 flex-wrap"
      variants={container}
      initial="hidden"
      {...(onScroll
        ? { whileInView: 'visible', viewport: { once: true, amount: 0.9 } }
        : { animate: 'visible' })}>
      {letters.map((letter, index) => (
        <motion.span
          variants={child}
          key={index}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}>
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextCharacter;
