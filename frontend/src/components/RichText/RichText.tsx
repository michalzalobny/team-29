import React from 'react';
import { compiler } from 'markdown-to-jsx';

import styles from './richText.module.scss';

export interface RichTextProps {
  text: string;
}

export const RichText = (props: RichTextProps) => {
  const { text } = props;

  return (
    <span className={styles.richText}>{compiler(text, { wrapper: null })}</span>
  );
};
