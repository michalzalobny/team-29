import React from 'react';

import { Head } from 'seo/Head/Head';

import { Props } from './data';
import * as S from './SpeciesListPage.styles';

export default function SpeciesListPage(props: Props) {
  const { animals, head } = props;
  return (
    <>
      <Head {...head} />
      <S.Wrapper>
        <S.ContentWrapper>
          <S.TilesWrapper>
            <h1>dasd</h1>
          </S.TilesWrapper>
        </S.ContentWrapper>
      </S.Wrapper>
    </>
  );
}
