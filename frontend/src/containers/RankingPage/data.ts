import { GetStaticProps } from 'next';

import { HeadProps } from 'seo/Head/Head';

import { ISR_TIMEOUT } from 'utils/functions/getIsrTimeout';

export interface Props {
  head: HeadProps;
}

export const getStaticProps: GetStaticProps = async () => {
  const head: HeadProps = {
    description: 'High-low card game ranking',
    ogImageSrc:
      'https://res.cloudinary.com/dpv0ukspz/image/upload/v1637971809/ogimage-100_ha9nmg.jpg',
    ogType: 'website',
    title: 'Save the animals | Ranking',
  };

  return {
    props: {
      head,
    },
    revalidate: ISR_TIMEOUT,
  };
};
