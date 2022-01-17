import styled from 'styled-components';
import { sharedValues } from 'utils/sharedValues';

import { media } from 'styles/media';

export const Wrapper = styled.div`
  padding: 0 3rem;
  margin: 18rem 0;
  display: flex;
  flex-direction: column;

  ${media.tablet} {
    width: 100rem;
    margin: 30rem auto;
  }
`;

export const LoadingInfo = styled.span`
  font-size: 15px;
  font-weight: 800;
  color: ${sharedValues.colors.black};
`;

export const Title = styled.h1`
  font-size: 5.5rem;
  color: ${sharedValues.colors.blue};
  font-weight: 800;
  position: relative;
  margin-bottom: 4rem;
`;
