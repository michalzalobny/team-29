import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { sharedValues } from 'utils/sharedValues';
import { BlobButton } from 'components/Buttons/BlobButton/BlobButton';
import { Modal } from 'components/Modal/Modal';
import { useGetAnimals } from 'hooks/useQueries';
import { AnimalTile } from 'components/AnimalTile/AnimalTile';
import { BackendAnimal } from 'types';
import { AddAnimalForm } from 'components/Forms/AddAnimalForm/AddAnimalForm';

import * as S from './AnimalsManager.styles';

export const AnimalsManager = () => {
  const { refetch, data, status } = useGetAnimals();
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <S.Wrapper>
        {status === 'loading' ? (
          <S.LoadingInfo>Loading...</S.LoadingInfo>
        ) : (
          <>
            <>
              <S.ButtonContainer>
                <S.AddButtonWrapper onClick={() => setIsOpened(true)}>
                  <BlobButton label="Add animal" backgroundColor={sharedValues.colors.lightBlue} />
                </S.AddButtonWrapper>
              </S.ButtonContainer>
            </>
            {data &&
              data.data.map((animal: BackendAnimal) => (
                <AnimalTile refetchAnimals={refetch} key={animal.id} animal={animal} />
              ))}
          </>
        )}

        <AnimatePresence>
          {isOpened && (
            <Modal isOpened={isOpened} setIsOpened={setIsOpened}>
              <S.Text>Add new animal.</S.Text>
              <AddAnimalForm refetchAnimals={refetch} setShowModal={setIsOpened} />
            </Modal>
          )}
        </AnimatePresence>
      </S.Wrapper>
    </>
  );
};
