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

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 5rem;
`;

export const AddButtonWrapper = styled.button`
  cursor: pointer;
  display: flex;
`;

export const Text = styled.div`
  font-size: 15px;
  color: ${sharedValues.colors.black};
  font-weight: 800;
  line-height: 1.5;
`;

export const PanelsWrapper = styled.div`
  width: 100%;
  margin-top: 10rem;
`;
