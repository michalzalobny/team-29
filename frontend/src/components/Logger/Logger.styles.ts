import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { media } from 'styles/media';
import { sharedValues } from 'utils/sharedValues';

interface ButtonProps {
  isActive: boolean;
}

interface BorderProps {
  $elWidth: number;
  $isWidthReady: boolean;
}

export const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  width: 100%;
  height: 100%;
`;

export const Background = styled(motion.div)`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: saturate(180%) blur(5px);
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 85px;

  ${media.tablet} {
    padding-top: 80px;
  }
`;

export const ModalWrapper = styled(motion.div)`
  width: 90%;
  padding: 35px;
  padding-bottom: 0;
  background-color: ${sharedValues.colors.white};
  border-radius: 10px;

  ${media.tablet} {
    width: 430px;
  }
`;

export const ContentWrapper = styled.div`
  max-height: 60vh;
  overflow: auto;
`;

export const CloseButtonWrapper = styled.button`
  position: absolute;
  right: 0;
  bottom: calc(100% + 20px);
  width: 45px;
  cursor: pointer;

  ${media.tablet} {
    right: initial;
    bottom: initial;
    left: calc(100% + 20px);
    top: 0;
  }
`;

export const CenterContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonsWrapper = styled(motion.div)`
  position: relative;
`;

export const ButtonsContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 2px solid ${sharedValues.colors.lightGrey};
  border-radius: 50px;
`;

export const Border = styled(motion.span)<BorderProps>`
  position: absolute;
  pointer-events: none;
  z-index: 1;
  top: 0;
  left: 0;
  border-radius: 50px;
  border: 2px solid ${sharedValues.colors.brownDark};
  display: inline-block;
  height: 100%;
  width: ${props => props.$elWidth}px;
  opacity: 0;
  transition: width 0.35s, opacity 0.35s 0.35s;

  ${props =>
    props.$isWidthReady &&
    css`
      opacity: 1;
    `}
`;

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  font-weight: 800;
  color: ${sharedValues.colors.black};
  border-radius: 50px;
  cursor: pointer;
  padding: 10px 25px;
  font-size: 15px;
  line-height: 1.6;
  transition: color 0.35s ease-in-out;

  &:not(:last-child) {
    margin-right: 5px;

    ${media.tablet} {
      margin-right: 25px;
    }
  }

  ${props =>
    props.isActive &&
    css`
      color: ${sharedValues.colors.brownDark};
    `}
`;

interface SignInWrapperProps {
  isActive: boolean;
}

export const SignInWrapper = styled.div<SignInWrapperProps>`
  position: absolute;
  left: 0;
  width: 100%;
  padding-bottom: 35px;

  ${props =>
    !props.isActive &&
    css`
      pointer-events: none;
      user-select: none;
    `}
`;

interface SignUpWrapperProps {
  isActive: boolean;
}

export const SignUpWrapper = styled.div<SignUpWrapperProps>`
  position: absolute;
  left: 0;
  width: 100%;
  padding-bottom: 35px;

  ${props =>
    !props.isActive &&
    css`
      pointer-events: none;
      user-select: none;
    `}
`;

export const FormContainer = styled.div`
  padding: 35px 0;
  width: 80%;
  margin: 0 auto;
  perspective: 500px;
`;

interface FillBackgroundProps {
  elHeight: number;
}

export const FillBackground = styled.div<FillBackgroundProps>`
  width: 100%;
  position: relative;
  background-color: ${sharedValues.colors.white};
  transition: height 0.65s cubic-bezier(0.64, 0.02, 0.16, 0.97);
  height: ${props => props.elHeight}px;
  overflow: hidden;
`;
