import styled from 'styled-components';

import { sharedValues } from 'utils/sharedValues';
import { media } from 'styles/media';

export const Wrapper = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  padding: 30px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const Text = styled.div`
  font-size: 16px;
  color: ${sharedValues.colors.black};
  font-weight: 800;
  line-height: 1.5;
`;

export const Label = styled.span`
  font-size: 14px;
  color: ${sharedValues.colors.white};
  font-weight: 800;
  padding: 10px;
  background-color: ${sharedValues.colors.brown};
  border-radius: 10px;
  margin-right: 10px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const DeleteWrapper = styled.button`
  cursor: pointer;

  ${media.tablet} {
    margin-left: auto;
  }
`;

export const ConfirmationWrapper = styled.div`
  margin-bottom: 3rem;
`;
