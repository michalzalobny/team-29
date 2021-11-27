import React, { useRef } from 'react';

import { useLoggerContext } from 'context/LoggerContext';
import { springMedium } from 'components/Animations/framerTransitions';
import { CloseButton } from 'components/Buttons/CloseButton/CloseButton';
import { useElementSize } from 'hooks/useElementSize';

import * as S from './Logger.styles';
import { BackgroundV, ModalWrapperV, WrapperV } from './Logger.motion';

export interface Props {
  initial: string;
  animate: string;
  exit: string;
}

export const Logger = (props: Props) => {
  const { ...rest } = props;
  const { setActiveLoggerMode, setIsLoggerOpen, activeLoggerMode } =
    useLoggerContext();

  const buttonInRef = useRef(null);
  const buttonUpRef = useRef(null);
  const buttonsWrapperRef = useRef(null);

  const { size: sizeIn } = useElementSize(buttonInRef);
  const { size: sizeUp } = useElementSize(buttonUpRef);
  const { size: sizeWrapper } = useElementSize(buttonsWrapperRef);

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
            <S.CenterContent>
              <S.ButtonsWrapper ref={buttonsWrapperRef}>
                <S.Border
                  translateX={
                    activeLoggerMode === 'signin'
                      ? 0
                      : sizeWrapper.clientRect.width - sizeUp.clientRect.width
                  }
                  elWidth={
                    activeLoggerMode === 'signin'
                      ? sizeIn.clientRect.width
                      : sizeUp.clientRect.width
                  }
                />
                <S.ButtonsContainer>
                  <S.Button
                    onClick={() => setActiveLoggerMode('signin')}
                    ref={buttonInRef}
                    isActive={activeLoggerMode === 'signin'}
                  >
                    Sign in
                  </S.Button>
                  <S.Button
                    onClick={() => setActiveLoggerMode('signup')}
                    ref={buttonUpRef}
                    isActive={activeLoggerMode === 'signup'}
                  >
                    Sign up
                  </S.Button>
                </S.ButtonsContainer>
              </S.ButtonsWrapper>
            </S.CenterContent>
            {<p style={{ fontSize: '15px' }}>{activeLoggerMode} mode</p>}
          </S.ModalWrapper>
        </S.ModalContainer>
      </S.Wrapper>
    </>
  );
};
