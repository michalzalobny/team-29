import styled from 'styled-components';

import { media } from 'styles/media';
import { sharedValues } from 'utils/sharedValues';
import { CloudSvg } from './svg/CloudSvg';

export const Wrapper = styled.header`
  background-color: ${sharedValues.colors.blue};
  position: relative;
  z-index: -1;
`;

export const HeadingWrapper = styled.div`
  padding: 0 6rem;
  padding-top: 130px;

  ${media.tablet} {
    width: 100rem;
    margin: 0 auto;
    padding-top: 120px;
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
  color: ${sharedValues.colors.white};
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
