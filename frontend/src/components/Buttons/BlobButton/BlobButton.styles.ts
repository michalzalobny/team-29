import styled, { css } from 'styled-components';

interface Wrapper {
  backgroundColor: string;
  textColor: string;
  extraSidePadding: boolean;
}

export const Wrapper = styled.span<Wrapper>`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.textColor};
  border-radius: 50px;
  padding: 14px 25px;

  ${props =>
    props.extraSidePadding &&
    css`
      padding: 14px 55px;
    `}

  display: inline-block;
  position: relative;
  z-index: 1;
  box-shadow: 0 0 13px ${props => props.backgroundColor};
  font-size: 15px;
  line-height: 1.6;

  &::before {
    content: '';
    pointer-events: none;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    background-color: inherit;
    z-index: -1;
    border-radius: inherit;
    transition-duration: 0.8s;
    transition-property: opacity, width, height;
  }

  &:hover {
    &::before {
      opacity: 0;
      width: calc(100% + 32px);
      height: calc(100% + 32px);
    }
  }
`;
