import styled from 'styled-components';

import { sharedValues } from 'utils/sharedValues';
import { media } from 'styles/media';

export const Wrapper = styled.div`
  padding: 0 3rem;
  margin: 18rem 0;
  display: flex;
  flex-direction: column;

  ${media.tablet} {
    width: 60rem;
    margin: 30rem auto;
    margin-bottom: 10rem;
  }
`;

export const TilesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  margin-bottom: 8rem;

  ${media.tablet} {
    grid-gap: 2rem;
    grid-template-columns: 1fr;
    margin-bottom: 15rem;
  }
`;

export const Title = styled.h1`
  font-size: 5.5rem;
  color: ${sharedValues.colors.blue};
  font-weight: 800;
  position: relative;
  margin-bottom: 4rem;
`;
