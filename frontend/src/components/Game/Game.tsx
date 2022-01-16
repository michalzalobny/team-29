import React, { useEffect } from 'react';

import { BackendAnimal } from 'types';

import vsSrc from './images/vs.svg';
import pawSrc from './images/paw.svg';
import paw2Src from './images/paw2.svg';
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
            <S.PawWrapper position={1}>
              <PreloadImage imageSrc={pawSrc} altText="paw" />
            </S.PawWrapper>
            <S.PawWrapper position={2}>
              <PreloadImage imageSrc={pawSrc} altText="paw" />
            </S.PawWrapper>
            <S.PawWrapper position={3}>
              <PreloadImage imageSrc={pawSrc} altText="paw" />
            </S.PawWrapper>
          </S.DarkCardWrapper>
          <S.InfoWrapper>
            <S.TopTextWrapper>
              <S.Text bold>
                Which animals are... <S.Text light>more</S.Text> endangered?
              </S.Text>
            </S.TopTextWrapper>
            <S.VsImageWrapper>
              <PreloadImage altText="vs icon" imageSrc={vsSrc} />
            </S.VsImageWrapper>
            <S.BottomTextWrapper>
              <S.Text>Pick by clicking the card.</S.Text>
            </S.BottomTextWrapper>
          </S.InfoWrapper>
          <S.LightCardWrapper>
            <S.Card type="light">
              <S.CardContent>
                <S.Title>Test</S.Title>
              </S.CardContent>
            </S.Card>
            <S.PawWrapper position={4}>
              <PreloadImage imageSrc={paw2Src} altText="paw" />
            </S.PawWrapper>
            <S.PawWrapper position={5}>
              <PreloadImage imageSrc={paw2Src} altText="paw" />
            </S.PawWrapper>
            <S.PawWrapper position={6}>
              <PreloadImage imageSrc={paw2Src} altText="paw" />
            </S.PawWrapper>
          </S.LightCardWrapper>
        </S.ElementsWrapper>
      </S.Wrapper>
    </>
  );
};
