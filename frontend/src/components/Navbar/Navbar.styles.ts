import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { media } from 'styles/media';

interface LinkItem {
  isBold?: boolean;
  isRound?: boolean;
}

export const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--blue);
`;

export const SectionsWrapper = styled.div`
  padding: 2rem 1rem;
  display: flex;
  align-items: center;

  ${media.tablet} {
    width: 140rem;
    margin: 0 auto;
    padding: 3rem 0;
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
  padding: 2rem 3rem;
  background-color: var(--blue);
  width: 100%;

  ${media.tablet} {
    padding: 3rem;
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
      margin-right: 20px;
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

export const LinkItem = styled.a<LinkItem>`
  color: var(--white);
  line-height: 1.6;
  font-size: 15px;
  cursor: pointer;

  ${(props) =>
    props.isBold &&
    css`
      font-weight: 800;
    `}

  ${(props) =>
    props.isRound &&
    css`
      font-weight: 800;
      padding: 15px 20px;
      border-radius: 50px;
      background-color: var(--grey);
    `}
`;
