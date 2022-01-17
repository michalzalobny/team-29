import React from 'react';

import { Head } from 'seo/Head/Head';
import { AnimalInfoTile } from 'components/AnimalInfoTile/AnimalInfoTile';

import { Props } from './data';
import * as S from './SpeciesListPage.styles';

export default function SpeciesListPage(props: Props) {
  const { animals, head } = props;
  return (
    <>
      <Head {...head} />
      <S.Wrapper>
        <S.Title>List of animals</S.Title>

        <S.TilesWrapper>
          {animals.map(animal => (
            <AnimalInfoTile animal={animal} key={animal.id} />
          ))}
        </S.TilesWrapper>
      </S.Wrapper>
    </>
  );
}
