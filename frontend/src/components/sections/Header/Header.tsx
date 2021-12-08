import React from 'react';

import * as S from './Header.styles';

interface Props {}

export const Header = (props: Props) => {
  return (
    <>
      <S.Wrapper>
        <S.HeadingWrapper>
          <S.Heading>
            Play game and support your <span>favourite</span> animal!
          </S.Heading>
        </S.HeadingWrapper>

        <S.CloudImg />
      </S.Wrapper>
    </>
  );
};
