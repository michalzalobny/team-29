import styled from 'styled-components';
import { media } from 'styles/media';

export const Wrapper = styled.div``;

export const Container = styled.div`
  padding: 1.8rem 1rem;
  display: flex;
  flex-direction: column;
  margin-top: 10rem;

  ${media.tablet} {
    width: 140rem;
    margin: 0 auto;
    margin-top: 20rem;
    padding: 2.2rem 0;
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

export const PanelsWrapper = styled.div`
  width: 100%;
  margin-top: 10rem;
`;
