import React from 'react';

import { Head } from 'seo/Head/Head';

import { Props } from './data';
import * as S from './IndexPage.styles';
import bottomSrc from './images/bottom.svg';

export default function IndexPage(props: Props) {
  const { head } = props;

  return (
    <>
      <Head {...head} />
      <S.Wrapper>
        <S.ContentWrapper>
          <S.HeadingWrapper>
            <S.Heading>
              Play game and support your <span>favourite</span> animal!
            </S.Heading>
          </S.HeadingWrapper>

          <S.BottomImg src={bottomSrc} />
        </S.ContentWrapper>
      </S.Wrapper>
    </>
  );
}
