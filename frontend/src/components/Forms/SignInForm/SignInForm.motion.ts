import { Variants } from 'framer-motion';

export const WrapperV: Variants = {
  initial: {
    rotateX: '90deg',
    opacity: 0,
  },
  animate: {
    rotateX: '0deg',
    opacity: 1,
  },
};
