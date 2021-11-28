import React, { useRef } from 'react';

import { useLoggerContext } from 'context/LoggerContext';
import {
  springMedium,
  springQuick,
} from 'components/Animations/framerTransitions';
import { CloseButton } from 'components/Buttons/CloseButton/CloseButton';
import { useElementSize } from 'hooks/useElementSize';
import { SignInForm } from 'components/Forms/SignInForm/SignInForm';

import * as S from './Logger.styles';
import {
  BackgroundV,
  ModalWrapperV,
  WrapperV,
  ButtonsWrapperV,
} from './Logger.motion';

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

  const BorderV = {
    initial: {
      x: 0,
    },
    animate: {
      x: sizeWrapper.clientRect.width - sizeUp.clientRect.width,
    },
  };

  return (
    <>
      <S.Wrapper variants={WrapperV} {...rest}>
        <S.Background transition={springMedium} variants={BackgroundV} />
        <S.ModalContainer>
          <S.ModalWrapper
            variants={ModalWrapperV}
            transition={{
              ...springMedium,
              staggerChildren: 0.05,
              delayChildren: 0.15,
            }}
          >
            <S.CloseButtonWrapper
              aria-label="close modal"
              onClick={() => setIsLoggerOpen(false)}
            >
              <CloseButton isCrossed={true} />
            </S.CloseButtonWrapper>
            <S.CenterContent>
              <S.ButtonsWrapper
                variants={ButtonsWrapperV}
                transition={springMedium}
                ref={buttonsWrapperRef}
              >
                <S.Border
                  transition={springQuick}
                  variants={BorderV}
                  initial="initial"
                  animate={
                    activeLoggerMode === 'signup' ? 'animate' : 'initial'
                  }
                  elwidth={
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
            {activeLoggerMode === 'signin' ? <SignInForm /> : null}
          </S.ModalWrapper>
        </S.ModalContainer>
      </S.Wrapper>
    </>
  );
};
