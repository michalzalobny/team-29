import React from 'react';

import * as S from './UserTile.styles';

interface Props {
  username: string;
  userId: number;
}

export const UserTile = (props: Props) => {
  const { userId, username } = props;

  return (
    <>
      <S.Wrapper>
        <S.InfoWrapper>
          <S.Label>username</S.Label>
          <S.Text>{username}</S.Text>
        </S.InfoWrapper>
      </S.Wrapper>
    </>
  );
};
