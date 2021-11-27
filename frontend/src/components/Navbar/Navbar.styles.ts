import styled, { css } from 'styled-components';
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
  width: 12rem;

  ${media.tablet} {
    width: 24rem;
  }
`;

export const LogoWrapper = styled.a`
  width: 100%;
  cursor: pointer;
`;

export const LinksSection = styled.ul`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const LinkWrapper = styled.li`
  ${media.tablet} {
    &:not(:last-child) {
      margin-right: 35px;
    }
  }
`;

export const LinkItem = styled.a<LinkItem>`
  color: var(--white);
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
