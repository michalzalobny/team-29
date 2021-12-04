import React, { useRef } from 'react';

import { springQuick, springMedium } from 'components/Animations/framerTransitions';
import { useHover } from 'hooks/useHover';

import * as S from './CloseButton.styles';
import { BarBottomV, BarTopV, ContentWrapperV } from './CloseButton.motion';

interface Props {
  isCrossed: boolean;
}

export const CloseButton = (props: Props) => {
  const { isCrossed } = props;

  const hoverRef = useRef(null);
  const { isHovered } = useHover(hoverRef);

  return (
    <>
      <S.Wrapper>
        <S.ContentWrapper
          ref={hoverRef}
          transition={springMedium}
          variants={ContentWrapperV}
          initial="initial"
          animate={isHovered ? 'animate' : 'initial'}
        >
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
        </S.ContentWrapper>
      </S.Wrapper>
    </>
  );
};
