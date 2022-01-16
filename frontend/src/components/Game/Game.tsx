import React, { useCallback, useEffect, useState } from 'react';
import shuffle from 'lodash.shuffle';
import { AnimatePresence } from 'framer-motion';

import { BackendAnimal } from 'types';
import { SlideItemWithKey } from 'components/Animations/SlideItemWithKey/SlideItemWithKey';
import { PreloadImage } from 'components/PreloadImage/PreloadImage';
import { Modal } from 'components/Modal/Modal';
import { BlobButton } from 'components/Buttons/BlobButton/BlobButton';
import { sharedValues } from 'utils/sharedValues';

import vsSrc from './images/vs.svg';
import pawSrc from './images/paw.svg';
import paw2Src from './images/paw2.svg';
import * as S from './Game.styles';
import { CardInfoV } from './Game.motion';

interface Props {
  animals: BackendAnimal[];
}

type CardStatus = 'initial' | 'fail' | 'success';
interface HandleGameFinish {
  state: 'won' | 'lost';
  correctAnimal?: BackendAnimal;
  wrongAnimal?: BackendAnimal;
}

export const Game = (props: Props) => {
  const { animals } = props;
  const [animalsShuffled, setAnimalsShuffled] = useState<BackendAnimal[]>([]);
  const [roundNumber, setRoundNumber] = useState(0);
  const [winningIndex, setWinningIndex] = useState<number>(0);
  const [cardStatusDark, setCardStatusDark] = useState<CardStatus>('initial');
  const [cardStatusLight, setCardStatusLight] = useState<CardStatus>('initial');
  const [isOpened, setIsOpened] = useState(false);
  const [modalText, setModalText] = useState('');

  const resetGame = useCallback(() => {
    setWinningIndex(0);
    setRoundNumber(0);
    const shuffled = shuffle(animals);
    setAnimalsShuffled(shuffled);
  }, [animals]);

  const handleGameFinish = useCallback(
    ({ correctAnimal, state, wrongAnimal }: HandleGameFinish) => {
      setIsOpened(true);
      if (state === 'won') {
        const text =
          'Congrats! You answered all the questions correctly. As a reward you can send a donation to your favorite animal';
        setModalText(text);
      } else {
        const text = `You were so close! The population of ${wrongAnimal?.name} is ${wrongAnimal?.population}, whereas there is only ${correctAnimal?.population} of ${correctAnimal?.name}. Win the next time, by donating to your favourite animals making their population bigger!`;
        setModalText(text);
      }
    },
    []
  );

  //Reset the game state only when the modal is being closed
  useEffect(() => {
    if (!isOpened) {
      resetGame();
    }
  }, [isOpened, resetGame]);

  const handleCardChange = useCallback(
    (cardIndex: number) => {
      if (roundNumber + 2 >= animalsShuffled.length) {
        return handleGameFinish({ state: 'won' });
      }

      setRoundNumber(prev => prev + 1);
      setWinningIndex(cardIndex);
    },
    [animalsShuffled.length, handleGameFinish, roundNumber]
  );

  const handleCardClick = useCallback(
    (side: 'dark' | 'light') => {
      let clickedCardIndex;
      let otherCardIndex;

      if (side === 'dark') {
        clickedCardIndex = winningIndex;
        otherCardIndex = roundNumber + 1;
      } else {
        clickedCardIndex = roundNumber + 1;
        otherCardIndex = winningIndex;
      }

      if (
        animalsShuffled[clickedCardIndex].population < animalsShuffled[otherCardIndex].population
      ) {
        if (side === 'dark') setCardStatusDark('success');
        if (side === 'light') setCardStatusLight('success');
        handleCardChange(clickedCardIndex);
      } else {
        if (side === 'dark') setCardStatusDark('fail');
        if (side === 'light') setCardStatusLight('fail');
        handleGameFinish({
          state: 'lost',
          correctAnimal: animalsShuffled[otherCardIndex],
          wrongAnimal: animalsShuffled[clickedCardIndex],
        });
      }
    },
    [animalsShuffled, handleCardChange, handleGameFinish, roundNumber, winningIndex]
  );

  return (
    <>
      <S.Wrapper>
        <AnimatePresence>
          {isOpened && (
            <Modal isOpened={isOpened} setIsOpened={setIsOpened}>
              <S.ScoreWrapper>
                <S.Score>
                  You scored <S.Score bold>{roundNumber + 1}</S.Score>
                </S.Score>
              </S.ScoreWrapper>
              <S.DonateInfoWrapper>
                <S.Text biggerLineHeight>{modalText}</S.Text>
              </S.DonateInfoWrapper>
              <S.DonateContainer>
                <S.DonateWrapper href="https://www.worldanimalprotection.org.uk/" target="_blank">
                  <BlobButton
                    label="Donate to animals"
                    backgroundColor={sharedValues.colors.lightBlue}
                  />
                </S.DonateWrapper>
              </S.DonateContainer>
            </Modal>
          )}
        </AnimatePresence>

        <S.ElementsWrapper>
          <S.DarkCardWrapper>
            <S.Card onClick={() => handleCardClick('dark')} type="dark">
              <S.CardInfo
                initial="initial"
                animate={cardStatusDark}
                onAnimationComplete={() =>
                  cardStatusDark !== 'initial' && setCardStatusDark('initial')
                }
                variants={CardInfoV}
              />
              <S.CardContent>
                <S.CardBorder />
                <S.Title>
                  <SlideItemWithKey itemKey={animalsShuffled[winningIndex]?.name || winningIndex}>
                    <span style={{ width: '100%' }}>
                      {animalsShuffled[winningIndex]?.name || winningIndex}
                    </span>
                  </SlideItemWithKey>
                </S.Title>
              </S.CardContent>
            </S.Card>
            <S.PawWrapper position={1}>
              <PreloadImage imageSrc={pawSrc} altText="paw" />
            </S.PawWrapper>
            <S.PawWrapper position={2}>
              <PreloadImage imageSrc={pawSrc} altText="paw" />
            </S.PawWrapper>
            <S.PawWrapper position={3}>
              <PreloadImage imageSrc={pawSrc} altText="paw" />
            </S.PawWrapper>
          </S.DarkCardWrapper>
          <S.InfoWrapper>
            <S.TopTextWrapper>
              <S.Text bold>
                Which animal is... <S.Text light>more</S.Text> endangered?
              </S.Text>
            </S.TopTextWrapper>
            <S.VsImageWrapper>
              <PreloadImage altText="vs icon" imageSrc={vsSrc} />
            </S.VsImageWrapper>
            <S.BottomTextWrapper>
              <S.Text>Pick by clicking the card.</S.Text>
            </S.BottomTextWrapper>

            <S.BottomTextWrapper>
              <SlideItemWithKey itemKey={roundNumber + 1}>
                <span style={{ width: '100%' }}>
                  <S.Text>
                    Current round: <S.Text bold>{roundNumber + 1}</S.Text>
                  </S.Text>
                </span>
              </SlideItemWithKey>
            </S.BottomTextWrapper>
          </S.InfoWrapper>
          <S.LightCardWrapper>
            <S.Card onClick={() => handleCardClick('light')} type="light">
              <S.CardInfo
                initial="initial"
                animate={cardStatusLight}
                onAnimationComplete={() =>
                  cardStatusLight !== 'initial' && setCardStatusLight('initial')
                }
                variants={CardInfoV}
              />
              <S.CardContent>
                <S.CardBorder />
                <S.Title>
                  <SlideItemWithKey
                    itemKey={animalsShuffled[roundNumber + 1]?.name || roundNumber + 1}
                  >
                    <span style={{ width: '100%' }}>
                      {animalsShuffled[roundNumber + 1]?.name || roundNumber + 1}
                    </span>
                  </SlideItemWithKey>
                </S.Title>
              </S.CardContent>
            </S.Card>
            <S.PawWrapper position={4}>
              <PreloadImage imageSrc={paw2Src} altText="paw" />
            </S.PawWrapper>
            <S.PawWrapper position={5}>
              <PreloadImage imageSrc={paw2Src} altText="paw" />
            </S.PawWrapper>
            <S.PawWrapper position={6}>
              <PreloadImage imageSrc={paw2Src} altText="paw" />
            </S.PawWrapper>
          </S.LightCardWrapper>
        </S.ElementsWrapper>
      </S.Wrapper>
    </>
  );
};
