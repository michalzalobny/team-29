import { Variants } from 'framer-motion';

export const WrapperV: Variants = {
  initial: {
    pointerEvents: 'none',
  },
  animate: {
    pointerEvents: 'initial',
  },
  exit: {
    pointerEvents: 'none',
  },
};

export const BackgroundV = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const ModalWrapperV = {
  initial: {
    opacity: 0,
    x: '-30%',
  },
  animate: {
    opacity: 1,
    x: '0%',
  },
  exit: {
    opacity: 0,
    x: '-30%',
  },
};
