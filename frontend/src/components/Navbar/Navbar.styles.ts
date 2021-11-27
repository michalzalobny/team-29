import styled from 'styled-components';
import { media } from 'styles/media';

export const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const SectionsWrapper = styled.div`
  padding: 2rem 1rem;

  ${media.tablet} {
    width: 140rem;
    margin: 0 auto;
    padding: 4rem 0 0 0;
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

export const LinkWrapper = styled.li``;

export const LinkItem = styled.a``;
