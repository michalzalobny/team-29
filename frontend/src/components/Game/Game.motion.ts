import { Variants } from 'framer-motion';

export const WrapperV: Variants = {
  initial: {
    pointerEvents: 'none',
    userSelect: 'none',
    opacity: 0,
  },
  animate: {
    pointerEvents: 'initial',
    userSelect: 'initial',
    opacity: 1,
  },
};
