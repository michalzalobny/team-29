import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';

import { BlobButton } from 'components/Buttons/BlobButton/BlobButton';
import { sharedValues } from 'utils/sharedValues';
import { Modal } from 'components/Modal/Modal';
import { deleteUser } from 'utils/apiQueries/user';
import { useAuthContext } from 'context/AuthContext';

import * as S from './UserTile.styles';

interface Props {
  username: string;
  userId: number;
  refetchUsers: () => void;
}

export const UserTile = (props: Props) => {
  const { refetchUsers, userId, username } = props;
  const { user } = useAuthContext();
  const [isOpened, setIsOpened] = useState(false);

  const handleUserDelete = React.useCallback(async () => {
    try {
      const res = await deleteUser({ userId, token: user.accessToken });

      if (res.status !== 200) {
        toast.error('Something went wrong.');
      } else {
        toast.info('User has been deleted.');
        setIsOpened(false);
        refetchUsers();
      }
    } catch (error) {
      toast.error('Something went wrong.');
    }
  }, [refetchUsers, user.accessToken, userId]);

  return (
    <>
      <S.Wrapper>
        <S.InfoWrapper>
          <S.Label>Username</S.Label>
          <S.Text>{username}</S.Text>
        </S.InfoWrapper>
        <S.DeleteWrapper onClick={() => setIsOpened(true)}>
          <BlobButton label="Delete user" backgroundColor={sharedValues.colors.red} />
        </S.DeleteWrapper>
      </S.Wrapper>
      <AnimatePresence>
        {isOpened && (
          <Modal isOpened={isOpened} setIsOpened={setIsOpened}>
            <S.ConfirmationWrapper>
              <S.Text>
                You will delete user: {username}. <br />
                Are you sure?
              </S.Text>
            </S.ConfirmationWrapper>

            <S.DeleteWrapper onClick={() => handleUserDelete()}>
              <BlobButton label="Delete user" backgroundColor={sharedValues.colors.red} />
            </S.DeleteWrapper>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};
