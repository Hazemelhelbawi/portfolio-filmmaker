import { motion, AnimatePresence } from 'framer-motion';
import { useDarkMode } from '../../context/DarkModeContext';

export const BaseToggle = () => {
  const { toggleDarkMode, darkMode } = useDarkMode();

  return (
    <div
      className="cont"
      data-darkmode={darkMode}
      onClick={() => {
        toggleDarkMode();
      }}
      style={{ justifyContent: darkMode ? 'flex-end' : 'flex-start' }}>
      <motion.div layout className="handle">
        <AnimatePresence initial={false}>
          <motion.i
            key="toggle"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.4 }}
            data-darkmode={darkMode}
          />
          {!darkMode ? null : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              aria-labelledby="title"
              aria-describedby="desc"
              role="img"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <title>Crescent Moon</title>
              <desc>A color styled icon from Orion Icon Library.</desc>
              <path
                data-name="layer1"
                d="M35 2a25 25 0 0 1-22 36.8 24.9 24.9 0 0 1-10.6-2.3A30 30 0 1 0 35 2z"
                fill="#e6f0fa"></path>
              <path
                data-name="opacity"
                d="M32 50.8A29.9 29.9 0 0 1 7.6 38.2a25.2 25.2 0 0 1-5.2-1.8 30 30 0 1 0 59.1-10.1A30 30 0 0 1 32 50.8z"
                fill="#000064"
                opacity=".15"></path>
              <path
                data-name="stroke"
                d="M35 2a25 25 0 0 1-22 36.8 24.9 24.9 0 0 1-10.6-2.3A30 30 0 1 0 35 2z"
                fill="none"
                stroke="#2e4369"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"></path>
            </svg>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
