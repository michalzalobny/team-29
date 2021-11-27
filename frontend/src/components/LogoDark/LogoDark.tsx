import React from 'react';

import logoSrc from './img/logodark.svg';
import * as S from './LogoDark.styles';

interface Props {}

export const LogoDark = (props: Props) => {
  return (
    <>
      <S.Wrapper>
        <img src={logoSrc} alt="dark logo" />
      </S.Wrapper>
    </>
  );
};
