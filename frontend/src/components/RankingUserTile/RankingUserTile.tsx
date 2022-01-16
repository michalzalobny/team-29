import React from 'react';

import * as S from './RankingUserTile.styles';

interface Props {
  username: string;
  score: number;
}

export const RankingUserTile = (props: Props) => {
  const { score, username } = props;

  return (
    <>
      <S.Wrapper>
        <S.InfoWrapper>
          <S.Label>Username</S.Label>
          <S.Text>{username}</S.Text>
        </S.InfoWrapper>

        <S.InfoWrapper>
          <S.Label>Score</S.Label>
          <S.Text>{score}</S.Text>
        </S.InfoWrapper>
      </S.Wrapper>
    </>
  );
};
