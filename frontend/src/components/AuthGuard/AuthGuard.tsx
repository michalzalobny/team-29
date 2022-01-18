import React from 'react';

import * as S from './AuthGuard.styles';

import { Scope, useAuthContext } from 'context/AuthContext';

interface Props {
  children: React.ReactNode;
  authFor: Scope | Scope[];
}

export const AuthGuard = (props: Props) => {
  const { authFor, children } = props;
  const { user } = useAuthContext();

  return (
    <>
      {user.scope === authFor || (user.scope && authFor.includes(user.scope)) ? (
        children
      ) : (
        <S.Wrapper>Access denied.</S.Wrapper>
      )}
    </>
  );
};
