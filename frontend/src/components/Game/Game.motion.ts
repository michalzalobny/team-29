import { Variants } from 'framer-motion';
import { springSlow } from 'components/Animations/framerTransitions';
import { sharedValues } from 'utils/sharedValues';

export const CardInfoV: Variants = {
  initial: {
    scale: 0.99,
    opacity: 1,
    backgroundColor: sharedValues.colors.white,
    transition: {
      duration: 0,
      type: 'tween',
    },
  },
  success: {
    scale: 1.35,
    opacity: 0,
    backgroundColor: sharedValues.colors.green,
    transition: {
      ...springSlow,
      backgroundColor: {
        duration: 0,
      },
    },
  },
  fail: {
    scale: 1.35,
    opacity: 0,
    backgroundColor: sharedValues.colors.red,
    transition: {
      ...springSlow,
      backgroundColor: {
        duration: 0,
      },
    },
  },
};
