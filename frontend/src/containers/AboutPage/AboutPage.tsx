import React from 'react';

import { Head } from 'seo/Head/Head';
import { Props } from './data';
import * as S from './AboutPage.style';

// Author: Jessie
export default function AboutPage(props: Props) {
  const { head } = props;
  return (
    <>
      <Head {...head} />
      <S.Wrapper>
        <S.Title>About our application:</S.Title>
        <S.Text>
          Welcome to our application. We are Team 29, and we have created this webpage so YOU can
          learn more about endandgered animals.
        </S.Text>
        <S.Text>
          This project was created in order to try and combat one of the UN Sustainable Development
          Goals; Life on Land. We hope that by using our application you can learn more about
          different endagered species!
        </S.Text>
        <S.Text>
          We have a game you can play to guess population levels, and a fun leaderboard to see how
          your scores compare to your friends!
        </S.Text>
      </S.Wrapper>
    </>
  );
}
