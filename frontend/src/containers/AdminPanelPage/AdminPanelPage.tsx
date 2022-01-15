import React, { useState } from 'react';

import { sharedValues } from 'utils/sharedValues';
import { Head } from 'seo/Head/Head';
import { BlobButton } from 'components/Buttons/BlobButton/BlobButton';
import { AuthGuard } from 'components/AuthGuard/AuthGuard';
import { UsersManager } from 'components/UsersManager/UsersManager';
import { AnimalsManager } from 'components/AnimalsManager/AnimalsManager';

import { Props } from './data';
import * as S from './AdminPanelPage.styles';

type CurrentView = 'users' | 'animals';

export default function AdminPanelPage(props: Props) {
  const { head } = props;
  const [currentView, setCurrentView] = useState<CurrentView>('users');

  return (
    <>
      <Head {...head} />
      <AuthGuard authFor="ADMIN">
        <S.Wrapper>
          <S.Container>
            <S.ButtonsWrapper>
              <S.ButtonContainer onClick={() => setCurrentView('users')}>
                <BlobButton
                  backgroundColor={
                    currentView === 'users'
                      ? sharedValues.colors.brownDark
                      : sharedValues.colors.brown
                  }
                  label="Users"
                />
              </S.ButtonContainer>

              <S.ButtonContainer onClick={() => setCurrentView('animals')}>
                <BlobButton
                  backgroundColor={
                    currentView === 'animals'
                      ? sharedValues.colors.brownDark
                      : sharedValues.colors.brown
                  }
                  label="Animals"
                />
              </S.ButtonContainer>
            </S.ButtonsWrapper>
            <S.PanelsWrapper>
              {currentView === 'users' && <UsersManager />}
              {currentView === 'animals' && <AnimalsManager />}
            </S.PanelsWrapper>
          </S.Container>
        </S.Wrapper>
      </AuthGuard>
    </>
  );
}
