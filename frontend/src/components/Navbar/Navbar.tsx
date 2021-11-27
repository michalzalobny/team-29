import React from 'react';
import Link from 'next/link';

import * as S from './Navbar.styles';
import { LogoDark } from 'components/LogoDark/LogoDark';

interface Props {}

export const Navbar = (props: Props) => {
  return (
    <>
      <S.Wrapper>
        <S.SectionsWrapper>
          <S.LogoSection>
            <Link href="/" passHref>
              <S.LogoWrapper>
                <LogoDark />
              </S.LogoWrapper>
            </Link>
          </S.LogoSection>
          <S.LinksSection>
            <S.LinkWrapper>
              <S.LinkItem></S.LinkItem>
            </S.LinkWrapper>
          </S.LinksSection>
        </S.SectionsWrapper>
      </S.Wrapper>
    </>
  );
};
