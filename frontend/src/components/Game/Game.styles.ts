import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { media } from 'styles/media';
import { sharedValues } from 'utils/sharedValues';

export const Wrapper = styled(motion.div)`
  width: 100%;
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

interface CardProps {
  type: 'light' | 'dark';
}

export const CardInfo = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: ${sharedValues.colors.green};
  border-radius: 1.5rem;

  ${media.tablet} {
    border-radius: 2.5rem;
  }
`;

export const DonateInfoWrapper = styled.div`
  margin-bottom: 2.5rem;
`;

export const DonateContainer = styled.div`
  display: flex;
`;

export const DonateWrapper = styled.a`
  cursor: pointer;
`;

export const Card = styled.div<CardProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${sharedValues.colors.blue};
  border-radius: 1.5rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
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

export const CardBorder = styled.div`
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.25);

  transition-duration: 0.55s;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.64, 0.02, 0.16, 0.97);
  backface-visibility: hidden;

  ${media.tablet} {
    border-radius: 1.5rem;
  }
`;

export const CardContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:hover > div {
    transform: scale(1.1);
  }
`;

export const Title = styled.p`
  width: 100%;
  text-align: center;
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

interface TextProps {
  light?: boolean;
  bold?: boolean;
  biggerLineHeight?: boolean;
}

interface ScoreProps {
  bold?: boolean;
}

export const ScoreWrapper = styled.div`
  margin-bottom: 2.5rem;
  display: flex;
`;

export const Score = styled.span<ScoreProps>`
  font-size: 30px;
  color: ${sharedValues.colors.blue};
  font-weight: 800;
  ${props =>
    props.bold &&
    css`
      color: ${sharedValues.colors.brown};
    `}
`;

export const Text = styled.span<TextProps>`
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

  ${props =>
    props.biggerLineHeight &&
    css`
      line-height: 1.5;
    `}
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

interface PawWrapperProps {
  position: 1 | 2 | 3 | 4 | 5 | 6;
}

export const PawWrapper = styled.div<PawWrapperProps>`
  width: 15%;
  position: absolute;

  &:before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  ${props =>
    props.position === 1 &&
    css`
      left: 5%;
      top: 90%;
      transform: rotate(10deg);
    `}

  ${props =>
    props.position === 2 &&
    css`
      left: 23%;
      top: 80%;
      transform: rotate(-25deg);
    `}

    ${props =>
    props.position === 3 &&
    css`
      left: 10%;
      top: 63%;
      transform: rotate(-45deg);
    `}

    ${props =>
    props.position === 4 &&
    css`
      right: 10%;
      top: 70%;
      transform: rotate(15deg);
    `}

    ${props =>
    props.position === 5 &&
    css`
      right: 15%;
      top: 90%;
      transform: rotate(-25deg);
    `}

    
    ${props =>
    props.position === 6 &&
    css`
      right: 90%;
      top: 22%;
      transform: rotate(-45deg);
    `}
`;
