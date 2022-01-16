import React, { useEffect } from 'react';

import { BackendAnimal } from 'types';

import vsSrc from './images/vs.svg';
import * as S from './Game.styles';
import { PreloadImage } from 'components/PreloadImage/PreloadImage';

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
            <S.VsImageWrapper>
              <PreloadImage altText="vs icon" imageSrc={vsSrc} />
            </S.VsImageWrapper>
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
