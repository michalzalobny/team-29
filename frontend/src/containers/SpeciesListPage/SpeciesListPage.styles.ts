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

export const InputWrapper = styled.div`
  margin: 3rem 0;
`;

export const FilterInput = styled.input`
  width: 100%;
  font-size: 16px;
  border-radius: 50px;
  padding: 14px 25px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);

  transition: box-shadow 0.3s;

  &:focus {
    outline: none;
    box-shadow: 0 0 12px ${sharedValues.colors.brown};
  }
`;
