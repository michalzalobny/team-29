import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background: red;

  &:before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;
