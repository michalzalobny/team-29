import styled from 'styled-components';
import { media } from 'styles/media';

export const Wrapper = styled.div``;

export const ContentWrapper = styled.div`
  padding: 0 3rem;
  margin: 18rem 0;
  display: flex;

  ${media.tablet} {
    width: 100rem;
    margin: 30rem auto;
  }
`;

export const TilesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  margin-bottom: 8rem;

  ${media.tablet} {
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 15rem;
  }

  ${media.tabletLand} {
    grid-gap: 4rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
