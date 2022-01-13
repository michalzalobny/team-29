import React from 'react';

import { Head } from 'seo/Head/Head';
import { Header } from 'components/sections/Header/Header';

import { Props } from 'containers/IndexPage/data';
import * as S from './SpeciesListPage.styles';

export default function SpeciesListPage(props: Props) {
  const { head } = props;
  return (
    <>
      <Head {...head} />
      <S.Wrapper>
        <Header />
        <div></div>
      </S.Wrapper>
    </>
  );
}
