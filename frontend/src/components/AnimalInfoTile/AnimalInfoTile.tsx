import React from 'react';

import { BackendAnimal } from 'types';

import * as S from './AnimalInfoTile.styles';

interface Props {
  animal: BackendAnimal;
}

export const AnimalInfoTile = (props: Props) => {
  const { animal } = props;

  return (
    <>
      <S.Wrapper>
        <S.InfoWrapper>
          <S.ContentWrapper>
            <S.Label>Name</S.Label>
            <S.Text>{animal.name}</S.Text>
          </S.ContentWrapper>
          <S.ContentWrapper>
            <S.Label>Scientific name</S.Label>
            <S.Text>{animal.scientific_name}</S.Text>
          </S.ContentWrapper>

          <S.ContentWrapper>
            <S.Label>Category</S.Label>
            <S.Text>{animal.category}</S.Text>
          </S.ContentWrapper>

          <S.ContentWrapper>
            <S.Label>Population</S.Label>
            <S.Text>{animal.population}</S.Text>
          </S.ContentWrapper>

          <S.ContentWrapper alignTop>
            <S.Label>Description</S.Label>
            <S.Text>{animal.description}</S.Text>
          </S.ContentWrapper>
        </S.InfoWrapper>
      </S.Wrapper>
    </>
  );
};
