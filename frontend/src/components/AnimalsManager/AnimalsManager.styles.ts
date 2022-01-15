import styled from 'styled-components';

import { media } from 'styles/media';
import { sharedValues } from 'utils/sharedValues';

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  ${media.tablet} {
    width: 85%;
  }

  ${media.desktop} {
    width: 60%;
  }
`;

export const LoadingInfo = styled.span`
  font-size: 15px;
  font-weight: 800;
  color: ${sharedValues.colors.black};
`;

export const AddButtonWrapper = styled.button`
  cursor: pointer;
  display: flex;
  margin-bottom: 5rem;

  ${media.tablet} {
  }
`;

export const Text = styled.div`
  font-size: 15px;
  color: ${sharedValues.colors.black};
  font-weight: 800;
  line-height: 1.5;
`;
