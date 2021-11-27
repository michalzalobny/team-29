import React from 'react';

import { Navbar } from 'components/Navbar/Navbar';

import * as S from './Layout.styles';
import { WrapperV } from './Layout.motion';

interface Props {
  children: React.ReactNode;
  isReady: boolean;
}

export const Layout = (props: Props) => {
  const { isReady, children } = props;

  return (
    <>
      <S.Wrapper
        transition={{ type: 'tween', duration: 0.5 }}
        initial="initial"
        animate={isReady ? 'animate' : 'initial'}
        variants={WrapperV}
      >
        <Navbar />
        {children}
      </S.Wrapper>
    </>
  );
};
