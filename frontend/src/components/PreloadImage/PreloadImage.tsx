import React from 'react';

import { useMediaPreload } from 'hooks/useMediaPreload';

import { Image } from './styled/Image';

interface PreloadImageProps {
  imageSrc: string;
  altText: string;
}

export const PreloadImage = (props: PreloadImageProps) => {
  const { altText = '', imageSrc } = props;

  const { isLoaded } = useMediaPreload({
    isImage: true,
    mediaSrc: imageSrc,
  });

  return (
    <>
      <Image
        alt={altText}
        src={imageSrc}
        animate={isLoaded ? 'animate' : 'initial'}
        initial="initial"
      />
    </>
  );
};
