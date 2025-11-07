import { Variants } from 'framer-motion';

export const onScrollVariant: Variants = {
  offscreen: {
    y: 100,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.8
    }
  }
};
