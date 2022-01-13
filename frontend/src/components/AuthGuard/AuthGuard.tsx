import React from 'react';

import * as S from './AuthGuard.styles';

import { Scope, useAuthContext } from 'context/AuthContext';

interface Props {
  children: React.ReactNode;
  authFor: Scope;
}

export const AuthGuard = (props: Props) => {
  const { authFor, children } = props;
  const { user } = useAuthContext();

  return <>{user.scope === authFor ? children : <S.Wrapper>Access denied.</S.Wrapper>}</>;
};
