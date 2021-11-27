import React from 'react';

import { Head } from 'seo/Head/Head';

import { Props } from './data';
import * as S from './IndexPage.styles';

export default function IndexPage(props: Props) {
  const { head } = props;

  return (
    <>
      <Head {...head} />
      <S.Wrapper></S.Wrapper>
    </>
  );
}
