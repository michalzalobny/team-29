import React from 'react';

import { Head } from 'seo/Head/Head';

import { Props } from 'containers/loggedOutSpecies/data';
import * as S from './loggedOutSpecies.styles';
import { useGetAnimals } from 'hooks/useQueries';
import { LoggedOutAnimalView } from 'components/AnimalsManager/AnimalsManager';

export default function AnimalFacts(props: Props) {
  const { head } = props;
  const { refetch, data, status } = useGetAnimals();

  return (
    <>
      <Head {...head} />
      <S.Wrapper>
        <S.PanelsWrapper>
          <LoggedOutAnimalView></LoggedOutAnimalView>
        </S.PanelsWrapper>
      </S.Wrapper>
    </>
  );
}
