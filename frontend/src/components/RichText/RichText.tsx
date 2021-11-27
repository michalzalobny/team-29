import React from 'react';
import { compiler } from 'markdown-to-jsx';

import * as S from './RichText.styles';

export interface Props {
  text: string;
}

export const RichText = (props: Props) => {
  const { text } = props;

  return <S.TextWrapper>{compiler(text, { wrapper: null })}</S.TextWrapper>;
};
