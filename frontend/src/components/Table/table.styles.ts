import styled from 'styled-components';

import { media } from 'styles/media';
import { sharedValues } from 'utils/sharedValues';
import { CloudSvg } from './svg/CloudSvg';

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

export const CloudImg = styled(CloudSvg)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  transform: translateY(50%);
`;

export const Heading = styled.h1`
  width: 80%;
  font-weight: 800;
  font-size: 2.2rem;
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
