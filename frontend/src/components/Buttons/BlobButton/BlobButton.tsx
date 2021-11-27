import React from 'react';

import * as S from './BlobButton.styles';

interface Props {
  label: string;
  backgroundColor?: string;
  textColor?: string;
  renderAs?: 'span' | 'button';
}

export const BlobButton = React.forwardRef(
  (props: Props, ref: React.Ref<HTMLElement>) => {
    const {
      renderAs = 'span',
      backgroundColor = 'red',
      textColor = 'white',
      label,
    } = props;

    return (
      <>
        <S.Wrapper
          ref={ref}
          as={renderAs}
          backgroundColor={backgroundColor}
          textColor={textColor}
        >
          {label}
        </S.Wrapper>
      </>
    );
  },
);
