import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Loader = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    document.body.classList.add('loader');
    setTimeout(() => {
      setLoading(false);
      document.body.classList.remove('loader');
    }, 4000);
  }, []);
  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: 'linear' }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen overflow-hidden bg-light-main dark:bg-dark-main overscroll-none">
          <motion.svg
            id="color-fill"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            height="300"
            width="300"
            viewBox="0 0 300 300">
            <motion.polygon
              className="hex"
              variants={draw}
              custom={1}
              fill="none"
              stroke="currentColor"
              strokeWidth="10"
              points="50,50 100,50 100,125 200,125 200,50 250,50 250,250 200,250 200,175 100,175 100,250 50,250"></motion.polygon>
          </motion.svg>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
