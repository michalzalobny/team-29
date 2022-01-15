import React from 'react';

import { Head } from 'seo/Head/Head';

import { Props } from 'containers/AnimalFacts/data';
import * as S from './AnimalFacts.styles';

export default function AnimalFacts(props: Props) {
  const { head } = props;
  return (
    <>
      <Head {...head} />
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
