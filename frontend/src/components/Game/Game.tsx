import React, { useEffect } from 'react';

import { BackendAnimal } from 'types';

import * as S from './Game.styles';

interface Props {
  animals: BackendAnimal[];
}

export const Game = (props: Props) => {
  const { animals } = props;

  useEffect(() => {
    console.log(animals);
  }, [animals]);

  return (
    <>
      <S.Wrapper>
        <S.ElementsWrapper>
          <S.DarkCardWrapper>
            <S.Card type="dark">
              <S.CardContent>
                <S.Title>Dolphins</S.Title>
              </S.CardContent>
            </S.Card>
          </S.DarkCardWrapper>
          <S.InfoWrapper>
            <h1>WTF!</h1>
          </S.InfoWrapper>
          <S.LightCardWrapper>
            <S.Card type="light">
              <S.CardContent>
                <S.Title>Test</S.Title>
              </S.CardContent>
            </S.Card>
          </S.LightCardWrapper>
        </S.ElementsWrapper>
      </S.Wrapper>
    </>
  );
};
