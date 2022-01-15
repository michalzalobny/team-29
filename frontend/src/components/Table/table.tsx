import React from 'react';

import * as S from './table.styles';
import { BlobButton } from 'components/Buttons/BlobButton/BlobButton';
import { sharedValues } from 'utils/sharedValues';

const favourite = true;
interface Props {}

export const Table = (props: Props) => {
  return (
    <S.Wrapper>
      <S.Heading>animal name</S.Heading>
      <S.ButtonsWrapper>
        <S.ButtonContainer>
          <BlobButton
            backgroundColor={
              favourite === true ? sharedValues.colors.brownDark : sharedValues.colors.brown
            }
            label="Favourite"
          />
        </S.ButtonContainer>
      </S.ButtonsWrapper>
    </S.Wrapper>
  );
};
