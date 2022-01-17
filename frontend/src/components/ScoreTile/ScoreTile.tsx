import React from 'react';

import * as S from './ScoreTile.styles';

interface Props {
  score: number;
  username: string;
}

export const ScoreTile = (props: Props) => {
  const { score, username } = props;

  return (
    <>
      <S.Wrapper>
        <S.InfoWrapper>
          <S.ContentWrapper>
            <S.Label>Score</S.Label>
            <S.ScoreWrapper>
              <S.Text>{score}</S.Text>
            </S.ScoreWrapper>
          </S.ContentWrapper>
          <S.ContentWrapper>
            <S.Label>Username</S.Label>
            <S.Text>{username}</S.Text>
          </S.ContentWrapper>
        </S.InfoWrapper>
      </S.Wrapper>
    </>
  );
};
