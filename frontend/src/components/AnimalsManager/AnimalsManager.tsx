import React, { useEffect } from 'react';

import { useGetAnimals } from 'hooks/useQueries';
import { AnimalTile } from 'components/AnimalTile/AnimalTile';
import { BackendAnimal } from 'types';

import * as S from './AnimalsManager.styles';

export const AnimalsManager = () => {
  const { refetch, data, status } = useGetAnimals();

  return (
    <>
      <S.Wrapper>
        {status === 'loading' ? (
          <S.LoadingInfo>Loading...</S.LoadingInfo>
        ) : (
          data &&
          data.data.map((animal: BackendAnimal) => (
            <AnimalTile refetchAnimals={refetch} key={animal.id} animal={animal} />
          ))
        )}
      </S.Wrapper>
    </>
  );
};
