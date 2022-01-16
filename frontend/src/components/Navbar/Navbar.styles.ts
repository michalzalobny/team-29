import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { sharedValues } from 'utils/sharedValues';
import { media } from 'styles/media';

import { BottomSvg } from './svg/BottomSvg';

interface LinkItemProps {
  isBold?: boolean;
}

export const Wrapper = styled.nav`
  position: fixed;
  z-index: 15;
  top: 0;
  left: 0;
  width: 100%;
  background: ${sharedValues.colors.blue};
`;

export const SectionsWrapper = styled.div`
  padding: 1.8rem 1rem;
  display: flex;
  align-items: center;

  ${media.tablet} {
    width: 140rem;
    margin: 0 auto;
    padding: 2.2rem 0;
  }
`;

export const LogoSection = styled.div`
  width: 16rem;

  ${media.tablet} {
    width: 24rem;
  }
`;

export const ButtonSection = styled.button`
  margin-left: auto;
  margin-right: 2rem;
  width: 45px;
  cursor: pointer;

  ${media.tablet} {
    display: none;
  }
`;

export const LogoWrapper = styled.a`
  width: 100%;
  cursor: pointer;
`;

export const LinksSection = styled(motion.ul)`
  position: absolute;
  left: 0;
  top: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 3rem;
  background-color: ${sharedValues.colors.blue};
  width: 100%;

  ${media.tablet} {
    padding: 2rem;
    position: initial;
    top: initial;
    left: initial;
    flex-direction: row;
    width: initial;
    align-items: center;
    margin-left: auto;
  }
`;

export const LinkWrapper = styled.li`
  padding-bottom: 50px;

  ${media.tablet} {
    padding-bottom: 0;

    &:not(:last-child) {
      margin-right: 15px;
      margin-bottom: 0;
    }
  }

  ${media.tabletLand} {
    &:not(:last-child) {
      margin-right: 35px;
      margin-bottom: 0;
    }
  }
`;

export const BottomImg = styled(BottomSvg)`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  transform: translateY(-4%);
`;

export const LinkItem = styled.span<LinkItemProps>`
  display: inline-block;
  color: ${sharedValues.colors.white};
  line-height: 1.6;
  font-size: 15px;
  cursor: pointer;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${sharedValues.colors.white};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.45s ease-in-out;
  }

  &:hover {
    &:before {
      transform: scale(1);
    }
  }

  ${props =>
    props.isBold &&
    css`
      font-weight: 800;
    `}
`;
