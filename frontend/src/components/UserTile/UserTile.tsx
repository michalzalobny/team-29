import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { BlobButton } from 'components/Buttons/BlobButton/BlobButton';
import { sharedValues } from 'utils/sharedValues';
import { Modal } from 'components/Modal/Modal';

import * as S from './UserTile.styles';

interface Props {
  username: string;
  userId: number;
}

export const UserTile = (props: Props) => {
  const { userId, username } = props;

  const [isOpened, setIsOpened] = useState(false);

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

            <S.DeleteWrapper onClick={() => setIsOpened(true)}>
              <BlobButton label="Delete user" backgroundColor={sharedValues.colors.red} />
            </S.DeleteWrapper>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};
