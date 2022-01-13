import React, { useEffect } from 'react';

import { useGetUsers } from 'hooks/useQueries';
import { useAuthContext } from 'context/AuthContext';
import { UserTile } from 'components/UserTile/UserTile';
import { BackendUser } from 'types';

import * as S from './UsersManager.styles';

export const UsersManager = () => {
  const { user } = useAuthContext();
  const { data, status } = useGetUsers(user.accessToken as string);

  useEffect(() => {
    console.log(data);
    console.log(status);
  }, [data, status]);

  return (
    <>
      <S.Wrapper>
        {status === 'loading' ? (
          <S.LoadingInfo>Loading...</S.LoadingInfo>
        ) : (
          data &&
          data.data.map((user: BackendUser) => (
            <UserTile key={user.username} userId={user.id} username={user.username} />
          ))
        )}
      </S.Wrapper>
    </>
  );
};
