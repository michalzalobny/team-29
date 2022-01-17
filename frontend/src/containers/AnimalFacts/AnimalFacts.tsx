import React from 'react';

import { Head } from 'seo/Head/Head';

import * as S from './AnimalFacts.styles';
import { BackendAnimal } from 'types';
import { animalsCategoriesNormal } from 'utils/apiQueries/animal';

interface Props {
  animalName: string;
  scientificName: string;
  description: string;
  category: string;
  population: number;
}

export default function AnimalFacts(props: Props) {
  const { animalName, scientificName, description, category, population } = props;

  return (
    <>
      <S.Wrapper>
        <S.bigDiv></S.bigDiv>
        <S.HeadingWrapper>
          <S.Text>
            Name: <S.Info>{animalName}</S.Info>
          </S.Text>

          <S.Text>Scientific Name: </S.Text>
          <S.Text>Description: </S.Text>
          <S.Text>Category: </S.Text>
          <S.Text>Population: </S.Text>
          <S.Text>
            Donation Link:{' '}
            <a href={'https://support.wwf.org.uk/donate-to-wwf'} target="_blank" rel="noreferrer">
              <S.link>WWF Donation Link</S.link>
            </a>
          </S.Text>
        </S.HeadingWrapper>
      </S.Wrapper>
    </>
  );
}
