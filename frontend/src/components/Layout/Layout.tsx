import React from 'react';
import { AnimatePresence } from 'framer-motion';

import { Navbar } from 'components/Navbar/Navbar';
import { Logger } from 'components/Logger/Logger';
import { useLoggerContext } from 'context/LoggerContext';

import * as S from './Layout.styles';
import { WrapperV } from './Layout.motion';

interface Props {
  children: React.ReactNode;
  isReady: boolean;
}

export const Layout = (props: Props) => {
  const { isReady, children } = props;

  const { isLoggerOpen } = useLoggerContext();

  return (
    <>
      <S.Wrapper
        transition={{ type: 'tween', duration: 0.4 }}
        initial="initial"
        animate={isReady ? 'animate' : 'initial'}
        variants={WrapperV}
      >
        <AnimatePresence>
          {isLoggerOpen && (
            <Logger initial="initial" animate="animate" exit="exit" />
          )}
        </AnimatePresence>

        <Navbar />
        {children}
      </S.Wrapper>
    </>
  );
};
