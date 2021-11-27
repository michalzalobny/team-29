import styled from 'styled-components';
import { motion } from 'framer-motion';

import { sharedValues } from 'utils/sharedValues';

export const Wrapper = styled.span`
  display: inline-block;
  width: 100%;
  position: relative;

  &:before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

export const Background = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${sharedValues.colors.white};
  border-radius: 50%;
`;

export const BarTop = styled(motion.span)`
  display: inline-block;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  height: 1px;
  background-color: ${sharedValues.colors.black};
`;

export const BarBottom = styled(motion.span)`
  display: inline-block;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  height: 1px;
  background-color: ${sharedValues.colors.black};
`;

export const ContentWrapper = styled(motion.span)`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
