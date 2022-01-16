import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { sharedValues } from 'utils/sharedValues';

export const Wrapper = styled(motion.div)`
  width: 100%;
  z-index: 1;
`;

export const ElementsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DarkCardWrapper = styled.div`
  width: 35rem;
  position: relative;

  &:before {
    content: '';
    display: block;
    padding-bottom: 105%;
  }
`;

export const InfoWrapper = styled.div``;

export const LightCardWrapper = styled.div`
  width: 35rem;
  position: relative;

  &:before {
    content: '';
    display: block;
    padding-bottom: 105%;
  }
`;

interface Card {
  type: 'light' | 'dark';
}

export const Card = styled.div<Card>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${sharedValues.colors.blue};
  border-radius: 2.5rem;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  padding: 2.5rem;

  ${props =>
    props.type === 'light' &&
    css`
      background-color: ${sharedValues.colors.brown};
    `}
`;

export const CardContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    border-radius: 1.5rem;
    border: 2px solid rgba(255, 255, 255, 0.2);
  }
`;

export const Title = styled.p`
  font-size: 4.5rem;
  font-weight: 800;
  color: ${sharedValues.colors.white};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const VsImageWrapper = styled.div`
  width: 9rem;
  height: 9rem;
  position: relative;
`;
