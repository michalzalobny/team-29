import styled from 'styled-components';

export const TextWrapper = styled.span`
  position: relative;
  display: inline-block;

  & > * {
    margin: revert;
    padding: revert;
    text-decoration: revert;
    border: revert;
  }

  & > * {
    &:first-child {
      margin-top: 0;
      padding-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
      padding-bottom: 0;
    }
  }
`;
