import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { media } from 'styles/media';
import { sharedValues } from 'utils/sharedValues';

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
  padding-top: 85px;

  ${media.tablet} {
    padding-top: 80px;
  }
`;

export const ModalWrapper = styled(motion.div)`
  width: 90%;
  padding: 35px;
  background-color: ${sharedValues.colors.white};
  border-radius: 10px;

  ${media.tablet} {
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
