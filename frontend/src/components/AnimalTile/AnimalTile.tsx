import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import { BlobButton } from 'components/Buttons/BlobButton/BlobButton';
import { sharedValues } from 'utils/sharedValues';
import { Modal } from 'components/Modal/Modal';
import { deleteAnimal } from 'utils/apiQueries/animal';
import { useAuthContext } from 'context/AuthContext';
import { BackendAnimal } from 'types';
import AnimalFacts from 'containers/AnimalFacts/AnimalFacts';
import Link from 'next/link';

import * as S from './AnimalTile.styles';

interface Props {
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
  );
};

export const AnimalTileMain = (props: Props) => {
  const { refetchAnimals, animal } = props;
  return (
    <S.Wrapper>
      <S.InfoWrapper>
        <S.Label2>Name</S.Label2>
      </S.InfoWrapper>
      <BlobButton label={animal.name} backgroundColor={sharedValues.colors.blue} />
      <S.DeleteWrapper>
        <BlobButton label="Favourite" backgroundColor={sharedValues.colors.brown} />
      </S.DeleteWrapper>
    </S.Wrapper>
  );
};

export const LoggedOutAnimalTile = (props: Props) => {
  const { refetchAnimals, animal } = props;

  const handleOnClick = React.useCallback(async () => {
    alert('I have been clicked');
    AnimalFacts({
      animalName: animal.name,
      scientificName: animal.scientific_name,
      description: animal.description,
      category: animal.category,
      population: animal.population,
    });
  }, [animal.category, animal.description, animal.name, animal.population, animal.scientific_name]);

  return (
    <>
      <S.Wrapper>
        <S.InfoWrapper>
          <S.Label2>Name</S.Label2>
        </S.InfoWrapper>

        <S.MiddleWrapper onClick={() => handleOnClick()}>
          <BlobButton label={animal.name} backgroundColor={sharedValues.colors.blue} />
        </S.MiddleWrapper>
      </S.Wrapper>
    </>
  );
};
