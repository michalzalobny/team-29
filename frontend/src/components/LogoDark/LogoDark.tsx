import React from 'react';

import { useMediaPreload } from 'hooks/useMediaPreload';

import logoSrc from './img/logodark.svg';
import * as S from './LogoDark.styles';

interface Props {}

export const LogoDark = (props: Props) => {
  const { isLoaded } = useMediaPreload({ isImage: true, mediaSrc: logoSrc });

  return (
    <>
      <S.Wrapper isLoaded={isLoaded}>
        <S.LogoImg src={logoSrc} alt="dark logo" />
      </S.Wrapper>
    </>
  );
};
