import styled, { css } from 'styled-components';

interface WrapperProps {
  isLoaded: boolean;
}

export const LogoImg = styled.img`
  width: 100%;
`;

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  display: flex;
  opacity: 0;

  transition: opacity 0.2s;

  ${props =>
    props.isLoaded &&
    css`
      opacity: 1;
    `}
`;
