import React from 'react';

import { springQuick } from 'components/Animations/framerTransitions';

import * as S from './CloseButton.styles';
import { BarBottomV, BarTopV } from './CloseButton.motion';

interface Props {
  isCrossed: boolean;
}

export const CloseButton = (props: Props) => {
  const { isCrossed } = props;

  return (
    <>
      <S.Wrapper>
        <S.Background />
        <S.BarTop
          transition={springQuick}
          variants={BarTopV}
          initial="initial"
          animate={isCrossed ? 'animate' : 'initial'}
        />
        <S.BarBottom
          transition={springQuick}
          variants={BarBottomV}
          initial="initial"
          animate={isCrossed ? 'animate' : 'initial'}
        />
      </S.Wrapper>
    </>
  );
};
