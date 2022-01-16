import styled from 'styled-components';

import { media } from 'styles/media';

export const Wrapper = styled.div``;

export const GameWrapper = styled.div`
  padding: 0 2.5rem;
  margin-top: 10rem;
  display: flex;
  align-items: center;

  ${media.tablet} {
    padding: 0;
    width: 100rem;
    margin: 0 auto;
    margin-top: -10rem;
  }
`;
