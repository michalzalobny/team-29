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
    margin-bottom: 10rem;
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

export const DeleteWrapper = styled.button`
  cursor: pointer;
  display: flex;
  margin-top: 1rem;

  ${media.tablet} {
    margin-top: 0;
    margin-left: auto;
  }
`;

export const ConfirmationWrapper = styled.div`
  margin-bottom: 3rem;
`;

export const Text = styled.div`
  font-size: 15px;
  color: ${sharedValues.colors.black};
  font-weight: 800;
  line-height: 1.5;
`;

export const ClearRankingButtonWrapper = styled.button`
  position: fixed;
  z-index: 1;
  bottom: 3rem;
  left: 3rem;
  cursor: pointer;
`;
