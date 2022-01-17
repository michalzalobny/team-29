import React from 'react';

import { Head } from 'seo/Head/Head';
import { BackendScore } from 'types';
import { useGetUsersScores } from 'hooks/useQueries';
import { ScoreTile } from 'components/ScoreTile/ScoreTile';

import { Props } from './data';
import * as S from './RankingPage.styles';

export default function RankingPage(props: Props) {
  const { head } = props;

  const { refetch, data, status } = useGetUsersScores();

  return (
    <>
      <Head {...head} />
      <S.Wrapper>
        <S.Title>Official ranking</S.Title>
        {status === 'loading' ? (
          <S.LoadingInfo>Loading...</S.LoadingInfo>
        ) : (
          <>
            {data &&
              data.data.map((scoreInfo: BackendScore) => (
                <ScoreTile
                  username={scoreInfo.username}
                  key={scoreInfo.id}
                  score={scoreInfo.score}
                />
              ))}
          </>
        )}
      </S.Wrapper>
    </>
  );
}
