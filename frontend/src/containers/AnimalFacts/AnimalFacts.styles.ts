import styled from 'styled-components';

import { media } from 'styles/media';
import { sharedValues } from 'utils/sharedValues';

export const Wrapper = styled.header`
  background-color: ${sharedValues.colors.white};
  position: relative;
`;

export const HeadingWrapper = styled.div`
  padding: 0 6rem;

  ${media.tablet} {
    width: 100rem;
    margin: 0 auto;
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
export const Text = styled.div`
  padding-top: 30px;
  font-size: 30px;
  color: ${sharedValues.colors.black};
  font-weight: 800;
  line-height: 1.5;
`;

export const Heading = styled.div`
  width: 80%;
  font-weight: 800;
  font-size: 10px;
  line-height: 1.4;
  color: ${sharedValues.colors.blue};
  padding: 2.5rem 0 5rem 0;

  span {
    color: ${sharedValues.colors.brown};
  }

  ${media.tablet} {
    width: 55%;
    font-size: 5.2rem;
    padding: 5rem 0 18rem 0;
  }
`;

export const bigDiv = styled.div`
  padding-top: 100px;
`;

export const link = styled.text`
  text-decoration: underline;
  color: ${sharedValues.colors.brown};
`;

export const Info = styled.text`
  color: ${sharedValues.colors.brownDark};
`;
