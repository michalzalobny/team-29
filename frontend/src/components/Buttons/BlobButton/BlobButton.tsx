import React from 'react';

import { sharedValues } from 'utils/sharedValues';

import * as S from './BlobButton.styles';

interface Props {
  label: string;
  backgroundColor?: string;
  textColor?: string;
  renderAs?: 'span' | 'button';
  extraSidePadding?: boolean;
}

export const BlobButton = React.forwardRef(
  (props: Props, ref: React.Ref<HTMLElement>) => {
    const {
      extraSidePadding = false,
      renderAs = 'span',
      backgroundColor = sharedValues.colors.grey,
      textColor = sharedValues.colors.white,
      label,
    } = props;

    return (
      <>
        <S.Wrapper
          extraSidePadding={extraSidePadding}
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
