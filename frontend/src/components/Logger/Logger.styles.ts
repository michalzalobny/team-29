import styled from 'styled-components';
import { motion } from 'framer-motion';

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
  background-color: rgba(0, 0, 0, 0.6);
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
  padding-top: 18rem;
`;

export const ModalWrapper = styled(motion.div)`
  width: 48rem;
  padding: 4rem;
  background-color: ${sharedValues.colors.white};
  border-radius: 10px;
`;

export const CloseButtonWrapper = styled(motion.button)`
  position: absolute;
  left: calc(100% + 30px);
  top: 0;
  width: 45px;
  cursor: pointer;
`;
