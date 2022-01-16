import styled from 'styled-components';

import { sharedValues } from 'utils/sharedValues';
import { media } from 'styles/media';

export const Wrapper = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  padding: 30px;
  display: flex;

  flex-wrap: wrap;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }

  ${media.tablet} {
    align-items: center;
    flex-direction: initial;
  }
`;

export const Text = styled.div`
  font-size: 15px;
  color: ${sharedValues.colors.black};
  font-weight: 800;
  line-height: 1.5;
`;

export const Label = styled.span`
  font-size: 13px;
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
