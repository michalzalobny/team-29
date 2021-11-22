import { GetStaticProps } from 'next';

import { HeadProps } from 'seo/Head/Head';

import { ISR_TIMEOUT } from 'utils/functions/getIsrTimeout';

export interface Props {
  head: HeadProps;
}

export const getStaticProps: GetStaticProps = async () => {
  const head: HeadProps = {
    description: 'High-low card game',
    ogImageSrc:
      'https://res.cloudinary.com/dpv0ukspz/image/upload/v1637603056/ogimage_htju9m.png',
    ogType: 'website',
    title: 'Save the animals | Game',
  };

  return {
    props: {
      head,
    },
    revalidate: ISR_TIMEOUT,
  };
};
