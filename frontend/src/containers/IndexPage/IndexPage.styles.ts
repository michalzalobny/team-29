import styled from 'styled-components';

import { media } from 'styles/media';

export const Wrapper = styled.div`
  max-width: 140rem;
  background-color: red;
  margin: 0 auto;

  ${media.tablet} {
    background-color: yellow;
  }
`;
