import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { media } from 'styles/media';
import { sharedValues } from 'utils/sharedValues';

interface Button {
  isActive: boolean;
}

interface Border {
  elwidth: number;
  isWidthReady: boolean;
}

export const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
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
  padding-top: 10rem;
`;

export const ModalWrapper = styled(motion.div)`
  width: 90%;
  padding: 30px;
  background-color: ${sharedValues.colors.white};
  border-radius: 10px;

  ${media.tablet} {
    padding: 35px;
    width: 430px;
  }
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

export const Border = styled(motion.span)<Border>`
  position: absolute;
  pointer-events: none;
  z-index: 1;
  top: 0;
  left: 0;
  border-radius: 50px;
  border: 2px solid ${sharedValues.colors.brownDark};
  display: inline-block;
  height: 100%;
  width: ${(props) => props.elwidth}px;
  opacity: 0;
  transition: width 0.35s, opacity 0.35s 0.35s;

  ${(props) =>
    props.isWidthReady &&
    css`
      opacity: 1;
    `}
`;

export const Button = styled.button<Button>`
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

  ${(props) =>
    props.isActive &&
    css`
      color: ${sharedValues.colors.brownDark};
    `}
`;
