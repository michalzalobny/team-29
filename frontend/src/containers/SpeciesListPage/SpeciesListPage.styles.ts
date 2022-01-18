import styled from 'styled-components';
import { media } from 'styles/media';

export const Wrapper = styled.div``;

export const Container = styled.div`
  padding: 1.8rem 1rem;
import { sharedValues } from 'utils/sharedValues';
import { media } from 'styles/media';

export const Wrapper = styled.div`
  padding: 0 3rem;
  margin: 18rem 0;
  display: flex;
  flex-direction: column;

  ${media.tablet} {
    width: 140rem;
    margin: 0 auto;
    padding: 2.2rem 0;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 8rem;
  flex-wrap: wrap;
`;

export const ButtonContainer = styled.button`
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 1.2rem;
  }
`;

export const PanelsWrapper = styled.div`
  width: 100%;
  margin-top: 10rem;
    width: 100rem;
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
    grid-template-columns: 1fr 1fr;
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
