import React from 'react';

import * as S from './Header.styles';

export const Header = () => {
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
