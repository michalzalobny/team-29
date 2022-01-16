import React from 'react';

import { Head } from 'seo/Head/Head';

import * as S from './AnimalFacts.styles';
import { BackendAnimal } from 'types';

interface Props {
  animal: BackendAnimal;
  refetchAnimals: () => void;
}

export default function AnimalFacts(props: Props) {
  return (
    <>
      <S.Wrapper>
        <S.Heading>Name:</S.Heading>
        <S.Heading>Scientific Name:</S.Heading>
        <S.Heading>Description:</S.Heading>
        <S.Heading>Category:</S.Heading>
        <S.Heading>Population:</S.Heading>
        <S.Heading>Donation Link:</S.Heading>
      </S.Wrapper>
    </>
  );
}
