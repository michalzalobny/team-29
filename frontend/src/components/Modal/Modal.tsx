import React from 'react';

import { springMedium } from 'components/Animations/framerTransitions';
import { CloseButton } from 'components/Buttons/CloseButton/CloseButton';

import { BackgroundV, ModalWrapperV, WrapperV } from './Modal.motion';
import * as S from './Modal.styles';

interface Props {
  children: React.ReactNode;
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = (props: Props) => {
  const { setIsOpened, children, isOpened } = props;

  return (
    <>
      <S.Wrapper variants={WrapperV} initial="initial" animate="animate" exit="exit">
        <S.Background transition={springMedium} variants={BackgroundV} />
        <S.ModalContainer>
          <S.ModalWrapper
            variants={ModalWrapperV}
            transition={{
              ...springMedium,
              staggerChildren: 0.05,
            }}
          >
            <S.CloseButtonWrapper aria-label="close modal" onClick={() => setIsOpened(false)}>
              <CloseButton isCrossed={true} />
            </S.CloseButtonWrapper>
            {children}
          </S.ModalWrapper>
        </S.ModalContainer>
      </S.Wrapper>
    </>
  );
};
