import React, { useEffect } from 'react';

import * as S from './UsersManager.styles';

import { usersGet } from 'utils/apiQueries/user';
import { useAuthContext } from 'context/AuthContext';

export const UsersManager = () => {
  const { user } = useAuthContext();

  const fetchUsers = React.useCallback(async () => {
    try {
      const res = await usersGet(user.accessToken as string);

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }, [user.accessToken]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <>
      <S.Wrapper></S.Wrapper>
    </>
  );
};
