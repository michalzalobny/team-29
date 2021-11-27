import React from 'react';
import { ScrollMotionValues } from 'framer-motion';

import { useEffect } from 'react';

interface UseScroll {
  scrollValues: ScrollMotionValues;
}

export const useScroll = ({ scrollValues }: UseScroll) => {
  const scrollingUp = React.useRef(false);

  const onScroll = () => {
    if (!scrollValues) {
      return;
    }

    if (scrollValues.scrollY.get() > scrollValues.scrollY.getPrevious()) {
      scrollingUp.current = true;
    } else {
      scrollingUp.current = false;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return {
    scrollingUp: scrollingUp.current,
  };
};
