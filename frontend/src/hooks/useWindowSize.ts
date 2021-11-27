import { useState, useEffect, useRef } from 'react';
import { debounce } from 'lodash';

interface WindowSize {
  windowWidth: number | null;
  windowHeight: number | null;
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    windowWidth: null,
    windowHeight: null,
  });

  const windowSizeRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    };

    windowSizeRef.current.width = window.innerWidth;
    windowSizeRef.current.height = window.innerHeight;

    const handleResizeDebounced = debounce(() => {
      handleResize();
    }, 50);

    handleResize();
    window.addEventListener('resize', handleResizeDebounced);
    return () => window.removeEventListener('resize', handleResizeDebounced);
  }, []);

  return { windowSize, windowSizeRef };
};
