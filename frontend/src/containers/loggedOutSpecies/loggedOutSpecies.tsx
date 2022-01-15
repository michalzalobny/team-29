import React from 'react';

import { Head } from 'seo/Head/Head';

import { Props } from 'containers/loggedOutSpecies/data';
import * as S from './loggedOutSpecies.styles';

export default function AnimalFacts(props: Props) {
  const { head } = props;
  return (
    <>
      <Head {...head} />
      <S.Wrapper>
        <div></div>
      </S.Wrapper>
    </>
  );
}
