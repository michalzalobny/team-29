import React from 'react';
import { compiler } from 'markdown-to-jsx';

import * as S from './RichText.styles';

export interface RichTextProps {
  text: string;
}

export const RichText = (props: RichTextProps) => {
  const { text } = props;

  return <S.TextWrapper>{compiler(text, { wrapper: null })}</S.TextWrapper>;
};
