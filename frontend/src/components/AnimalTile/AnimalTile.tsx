import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';

import { BlobButton } from 'components/Buttons/BlobButton/BlobButton';
import { sharedValues } from 'utils/sharedValues';
import { Modal } from 'components/Modal/Modal';

import * as S from './AnimalTile.styles';

interface Props {
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
  );
};
