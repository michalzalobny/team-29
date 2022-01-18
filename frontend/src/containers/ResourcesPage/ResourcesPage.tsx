import React from 'react';

import { Head } from 'seo/Head/Head';
import { Props } from './data';
import * as S from './ResourcesPage.style';

// Author: Jessie
export default function AboutPage(props: Props) {
  const { head } = props;
  return (
    <>
      <Head {...head} />
      <S.Wrapper>
        <S.Title>Helpful donation and Resources links:</S.Title>
        <S.Text>
          <a href="https://sdgs.un.org/goals/goal15" target="_blank" rel="noreferrer">
            Life on Land page
          </a>
        </S.Text>
        <S.Text>
          <a href="https://sdgs.un.org/goals" target="_blank" rel="noreferrer">
            UN Sustainable Goals Page
          </a>
        </S.Text>
        <S.Text>
          <a href="https://www.wwf.org.uk/" target="_blank" rel="noreferrer">
            WWF Home Page
          </a>
        </S.Text>
        <S.Text>
          <a href="https://support.wwf.org.uk/donate-to-wwf" target="_blank" rel="noreferrer">
            WWF Donation Page
          </a>
        </S.Text>
        <S.Text>
          <a href="https://www.worldanimalprotection.org.uk/" target="_blank" rel="noreferrer">
            World Animal Protection Donation Page
          </a>
        </S.Text>
        <S.Text>
          <a href="https://www.nationalgeographic.com/animals" target="_blank" rel="noreferrer">
            National Geographic Animal Page
          </a>
        </S.Text>
        <S.Text>
          <a href="https://www.youtube.com/watch?v=_WLcGRMNj0U" target="_blank" rel="noreferrer">
            National Geographic Youtube video
          </a>
        </S.Text>
      </S.Wrapper>
    </>
  );
}
