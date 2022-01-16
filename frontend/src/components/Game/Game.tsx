import React from 'react';

import { BackendAnimal } from 'types';

import * as S from './Game.styles';

interface Props {
  animals: BackendAnimal[];
}

export const Game = (props: Props) => {
  const { animals } = props;

  console.log(animals);

  return (
    <>
      <S.Wrapper>
        <div>Animals</div>
      </S.Wrapper>
    </>
  );
};
