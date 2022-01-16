import styled from 'styled-components';

import { media } from 'styles/media';

export const Wrapper = styled.div``;

export const GameWrapper = styled.div`
  padding: 0 2.5rem;
  margin-top: 10rem;
  display: flex;
  align-items: center;
  margin-top: -2rem;
  margin-bottom: 5rem;

  ${media.tablet} {
    padding: 0;
    width: 100rem;
    margin: 0 auto;
    margin-top: -10rem;
    margin-bottom: 8rem;
  }
`;
