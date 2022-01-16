import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { media } from 'styles/media';
import { sharedValues } from 'utils/sharedValues';

export const Wrapper = styled(motion.div)`
  width: 100%;
  z-index: 1;
`;

export const ElementsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${media.tablet} {
    flex-direction: initial;
    align-items: center;
    justify-content: space-between;
  }
`;

export const DarkCardWrapper = styled.div`
  margin: 0 auto;
  width: 75%;
  position: relative;

  &:before {
    content: '';
    display: block;
    padding-bottom: 105%;
  }

  ${media.tablet} {
    margin: initial;
    width: 35rem;
  }
`;

export const InfoWrapper = styled.div`
  margin: 3.2rem auto;
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.tablet} {
    margin: initial;
    width: 30rem;
  }
`;

export const LightCardWrapper = styled.div`
  margin: 0 auto;
  width: 75%;
  position: relative;

  &:before {
    content: '';
    display: block;
    padding-bottom: 105%;
  }

  ${media.tablet} {
    margin: initial;
    width: 35rem;
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
  border-radius: 1.5rem;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  padding: 2rem;

  ${props =>
    props.type === 'light' &&
    css`
      background-color: ${sharedValues.colors.brown};
    `}

  ${media.tablet} {
    border-radius: 2.5rem;
    padding: 2.5rem;
  }
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
    border-radius: 1rem;
    border: 2px solid rgba(255, 255, 255, 0.2);

    ${media.tablet} {
      border-radius: 1.5rem;
    }
  }
`;

export const Title = styled.p`
  font-size: 2.5rem;
  font-weight: 800;
  color: ${sharedValues.colors.white};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${media.tablet} {
    font-size: 3.5rem;
  }
`;

export const VsImageWrapper = styled.div`
  width: 6rem;
  height: 6rem;
  position: relative;

  ${media.tablet} {
    width: 9rem;
    height: 9rem;
  }
`;

interface Text {
  light?: boolean;
  bold?: boolean;
}

export const Text = styled.span<Text>`
  font-size: 1.5rem;
  color: ${sharedValues.colors.black};

  ${props =>
    props.light &&
    css`
      color: ${sharedValues.colors.brown};
    `}

  ${props =>
    props.bold &&
    css`
      font-weight: 800;
    `}

    ${media.tablet} {
    font-size: 1.8rem;
  }
`;

export const TopTextWrapper = styled.p`
  width: 70%;
  text-align: center;
  margin-bottom: 1.4rem;
`;

export const BottomTextWrapper = styled.p`
  width: 70%;
  text-align: center;
  margin-top: 1.4rem;
`;
