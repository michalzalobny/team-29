import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';

import { BlobButton } from 'components/Buttons/BlobButton/BlobButton';
import { sharedValues } from 'utils/sharedValues';
import { Modal } from 'components/Modal/Modal';
<<<<<<< HEAD
=======
import { deleteAnimal } from 'utils/apiQueries/animal';
import { useAuthContext } from 'context/AuthContext';
import { BackendAnimal } from 'types';
>>>>>>> e36ac0c59983177fa637e02a71a2bfb7ce206589

import * as S from './AnimalTile.styles';

interface Props {
<<<<<<< HEAD
  name: string;
}

export const animalTile = (props: Props) => {
  const name = props;
  return (
    <S.Wrapper>
      <S.InfoWrapper>
        <S.DeleteWrapper>
          <BlobButton label="name" backgroundColor={sharedValues.colors.brown} />
        </S.DeleteWrapper>
        <S.DeleteWrapper>
          <BlobButton label="Favourite" backgroundColor={sharedValues.colors.brown} />
        </S.DeleteWrapper>
      </S.InfoWrapper>
    </S.Wrapper>
=======
  animal: BackendAnimal;
  refetchAnimals: () => void;
}

export const AnimalTile = (props: Props) => {
  const { refetchAnimals, animal } = props;
  const { user } = useAuthContext();
  const [isOpened, setIsOpened] = useState(false);

  const handleUserDelete = React.useCallback(async () => {
    try {
      const res = await deleteAnimal({ animalId: animal.id, token: user.accessToken });

      if (res.status !== 200) {
        toast.error('Something went wrong.');
      } else {
        toast.info('Entry has been deleted.');
        setIsOpened(false);
        refetchAnimals();
      }
    } catch (error) {
      toast.error('Something went wrong.');
    }
  }, [animal.id, refetchAnimals, user.accessToken]);

  return (
    <>
      <S.Wrapper>
        <S.InfoWrapper>
          <S.Label>Name</S.Label>
          <S.Text>{animal.name}</S.Text>
        </S.InfoWrapper>
        <S.DeleteWrapper onClick={() => setIsOpened(true)}>
          <BlobButton label="Delete entry" backgroundColor={sharedValues.colors.red} />
        </S.DeleteWrapper>
      </S.Wrapper>
      <AnimatePresence>
        {isOpened && (
          <Modal isOpened={isOpened} setIsOpened={setIsOpened}>
            <S.ConfirmationWrapper>
              <S.Text>
                You will delete entry: {animal.name}. <br />
                Are you sure?
              </S.Text>
            </S.ConfirmationWrapper>

            <S.DeleteWrapper onClick={() => handleUserDelete()}>
              <BlobButton label="Delete entry" backgroundColor={sharedValues.colors.red} />
            </S.DeleteWrapper>
          </Modal>
        )}
      </AnimatePresence>
    </>
>>>>>>> e36ac0c59983177fa637e02a71a2bfb7ce206589
  );
};
