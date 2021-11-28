import React, { useEffect, useRef } from 'react';

import { useLoggerContext } from 'context/LoggerContext';
import {
  springMedium,
  springQuick,
} from 'components/Animations/framerTransitions';
import { CloseButton } from 'components/Buttons/CloseButton/CloseButton';
import { useElementSize } from 'hooks/useElementSize';
import { SignInForm } from 'components/Forms/SignInForm/SignInForm';
import { SignUpForm } from 'components/Forms/SignUpForm/SignUpForm';

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
  const signInRef = useRef(null);
  const signUpRef = useRef(null);

  const { size: sizeIn } = useElementSize(buttonInRef);
  const { size: sizeUp } = useElementSize(buttonUpRef);
  const { size: sizeWrapper } = useElementSize(buttonsWrapperRef);
  const { onResize: onResizeIn, size: sizeInWrapper } =
    useElementSize(signInRef);
  const { onResize: onResizeUp, size: sizeUpWrapper } =
    useElementSize(signUpRef);

  const BorderV = {
    initial: {
      x: 0,
    },
    animate: {
      x: sizeWrapper.clientRect.width - sizeUp.clientRect.width,
    },
  };

  useEffect(() => {
    console.log('height', sizeInWrapper.clientRect.height);
  }, [sizeInWrapper]);

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
            }}
          >
            <S.CloseButtonWrapper
              aria-label="close modal"
              onClick={() => setIsLoggerOpen(false)}
            >
              <CloseButton isCrossed={true} />
            </S.CloseButtonWrapper>
            <S.ContentWrapper>
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
                    $elWidth={
                      activeLoggerMode === 'signin'
                        ? sizeIn.clientRect.width
                        : sizeUp.clientRect.width
                    }
                    $isWidthReady={sizeIn.isReady && sizeUp.isReady}
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

              <S.FillBackground
                elHeight={
                  activeLoggerMode === 'signup'
                    ? sizeUpWrapper.clientRect.height
                    : sizeInWrapper.clientRect.height
                }
              >
                <S.SignInWrapper
                  isActive={activeLoggerMode === 'signin'}
                  ref={signInRef}
                >
                  <S.FormContainer>
                    <SignInForm
                      resizeFn={() => onResizeIn()}
                      initial="initial"
                      animate={
                        activeLoggerMode === 'signin' ? 'animate' : 'initial'
                      }
                    />
                  </S.FormContainer>
                </S.SignInWrapper>
                <S.SignUpWrapper
                  isActive={activeLoggerMode === 'signup'}
                  ref={signUpRef}
                >
                  <S.FormContainer>
                    <SignUpForm
                      resizeFn={() => onResizeUp()}
                      initial="initial"
                      animate={
                        activeLoggerMode === 'signup' ? 'animate' : 'initial'
                      }
                    />
                  </S.FormContainer>
                </S.SignUpWrapper>
              </S.FillBackground>
            </S.ContentWrapper>
          </S.ModalWrapper>
        </S.ModalContainer>
      </S.Wrapper>
    </>
  );
};
