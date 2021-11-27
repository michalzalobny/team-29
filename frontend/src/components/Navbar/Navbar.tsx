import React from 'react';

import * as S from './Navbar.styles';
import { LogoDark } from 'components/LogoDark/LogoDark';

interface Props {}

export const Navbar = (props: Props) => {
  return (
    <>
      <S.Wrapper>
        <S.LogoSection>
          <LogoDark />
        </S.LogoSection>
        <S.LinksSection>
          <S.LinkWrapper>
            <S.LinkItem></S.LinkItem>
          </S.LinkWrapper>
        </S.LinksSection>
      </S.Wrapper>
    </>
  );
};
