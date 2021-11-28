import styled, { css } from 'styled-components';

interface Wrapper {
  isLoaded: boolean;
}

export const LogoImg = styled.img`
  width: 100%;
`;

export const Wrapper = styled.div<Wrapper>`
  width: 100%;
  display: flex;
  opacity: 0;

  transition: opacity 0.2s;

  ${(props) =>
    props.isLoaded &&
    css`
      opacity: 1;
    `}
`;
