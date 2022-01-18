import React, { useState } from 'react';

import { Head } from 'seo/Head/Head';

import { sharedValues } from 'utils/sharedValues';
import { BlobButton } from 'components/Buttons/BlobButton/BlobButton';
import { Table } from 'components/Table/table';
import { Props } from 'containers/SpeciesListPage/data';
import { AnimalInfoTile } from 'components/AnimalInfoTile/AnimalInfoTile';

import { Props } from './data';
import * as S from './SpeciesListPage.styles';
import { AllAnimalsView, FavouriteAnimalsView } from 'components/AnimalsManager/AnimalsManager';

type CurrentView = 'all' | 'favourites';

export default function SpeciesListPage(props: Props) {
  const [currentView, setCurrentView] = useState<CurrentView>('all');
  const { head } = props;

  const { animals, head } = props;
  return (
    <>
      <Head {...head} />

      <S.Wrapper>
        <S.Container>
          <S.ButtonsWrapper>
            <S.ButtonContainer onClick={() => setCurrentView('all')}>
              <BlobButton
                backgroundColor={
                  currentView === 'all' ? sharedValues.colors.brownDark : sharedValues.colors.brown
                }
                label="All"
              />
            </S.ButtonContainer>

            <S.ButtonContainer onClick={() => setCurrentView('favourites')}>
              <BlobButton
                backgroundColor={
                  currentView === 'favourites'
                    ? sharedValues.colors.brownDark
                    : sharedValues.colors.brown
                }
                label="Favourites"
              />
            </S.ButtonContainer>
          </S.ButtonsWrapper>
          <S.PanelsWrapper>
            {currentView === 'all' && <AllAnimalsView />}
            {currentView === 'favourites' && <FavouriteAnimalsView />}
          </S.PanelsWrapper>
        </S.Container>
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
