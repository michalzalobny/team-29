import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';

import { AuthGuard } from 'components/AuthGuard/AuthGuard';
import { sharedValues } from 'utils/sharedValues';
import { BlobButton } from 'components/Buttons/BlobButton/BlobButton';
import { Modal } from 'components/Modal/Modal';
import { Head } from 'seo/Head/Head';
import { BackendScore } from 'types';
import { useGetUsersScores } from 'hooks/useQueries';
import { ScoreTile } from 'components/ScoreTile/ScoreTile';
import { useAuthContext } from 'context/AuthContext';
import { deleteLeaderboard } from 'utils/apiQueries/user';

import { Props } from './data';
import * as S from './RankingPage.styles';

export default function RankingPage(props: Props) {
  const { head } = props;
  const { user } = useAuthContext();
  const [isOpened, setIsOpened] = useState(false);
  const { refetch, data, status } = useGetUsersScores();

  const handleClearRanking = useCallback(async () => {
    try {
      const res = await deleteLeaderboard({ token: user.accessToken });

      if (res.status !== 200) {
        toast.error('Something went wrong.');
      } else {
        toast.info('Ranking has been cleared.');
        setIsOpened(false);
        refetch();
      }
    } catch (error) {
      toast.error('Something went wrong.');
    }
  }, [refetch, user.accessToken]);

  const [sortedScores, setSortedScores] = useState<BackendScore[]>([]);

  useEffect(() => {
    if (data) {
      const arrSorted = (data.data as BackendScore[]).sort((a, b) => {
        if (a.score < b.score) {
          return 1;
        }
        if (a.score > b.score) {
          return -1;
        }
        return 0;
      });

      setSortedScores(arrSorted);
    }
  }, [data]);

  return (
    <>
      <Head {...head} />
      <AuthGuard authFor={['ADMIN', 'USER']}>
        <S.Wrapper>
          <S.Title>Official ranking</S.Title>
          {status === 'loading' ? (
            <S.LoadingInfo>Loading...</S.LoadingInfo>
          ) : (
            <>
              {sortedScores.map((scoreInfo: BackendScore) => (
                <ScoreTile
                  username={scoreInfo.username}
                  key={scoreInfo.id}
                  score={scoreInfo.score}
                />
              ))}

              {user.scope === 'ADMIN' && (
                <S.ClearRankingButtonWrapper onClick={() => setIsOpened(true)}>
                  <BlobButton label="Clear ranking" backgroundColor={sharedValues.colors.red} />
                </S.ClearRankingButtonWrapper>
              )}
            </>
          )}

          <AnimatePresence>
            {isOpened && (
              <Modal isOpened={isOpened} setIsOpened={setIsOpened}>
                <S.ConfirmationWrapper>
                  <S.Text>
                    You will reset the whole ranking and remove all the records. <br />
                    Are you sure?
                  </S.Text>
                </S.ConfirmationWrapper>

                <S.DeleteWrapper onClick={() => handleClearRanking()}>
                  <BlobButton label="Clear ranking" backgroundColor={sharedValues.colors.red} />
                </S.DeleteWrapper>
              </Modal>
            )}
          </AnimatePresence>
        </S.Wrapper>
      </AuthGuard>
    </>
  );
}
