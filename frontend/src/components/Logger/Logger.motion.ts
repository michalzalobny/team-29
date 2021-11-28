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

export const ButtonsWrapperV = {
  initial: {
    opacity: 0,
    y: '5rem',
  },
  animate: {
    opacity: 1,
    y: '0rem',
  },
  exit: {
    opacity: 0,
    y: '0rem',
  },
};
