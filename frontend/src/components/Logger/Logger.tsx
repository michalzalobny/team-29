import React from 'react';

import { useLoggerContext } from 'context/LoggerContext';
import { springMedium } from 'components/Animations/framerTransitions';
import { CloseButton } from 'components/Buttons/CloseButton/CloseButton';

import * as S from './Logger.styles';
import { BackgroundV, ModalWrapperV, WrapperV } from './Logger.motion';

export interface Props {
  initial: string;
  animate: string;
  exit: string;
}

export const Logger = (props: Props) => {
  const { ...rest } = props;
  const { setIsLoggerOpen, activeLoggerMode } = useLoggerContext();

  return (
    <>
      <S.Wrapper variants={WrapperV} {...rest}>
        <S.Background transition={springMedium} variants={BackgroundV} />
        <S.ModalContainer>
          <S.ModalWrapper variants={ModalWrapperV} transition={springMedium}>
            <S.CloseButtonWrapper
              aria-label="close modal"
              onClick={() => setIsLoggerOpen(false)}
            >
              <CloseButton isCrossed={true} />
            </S.CloseButtonWrapper>
            {<p style={{ fontSize: '15px' }}>{activeLoggerMode} mode</p>}
          </S.ModalWrapper>
        </S.ModalContainer>
      </S.Wrapper>
    </>
  );
};
