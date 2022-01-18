import { GetStaticProps } from 'next';

import { HeadProps } from 'seo/Head/Head';
import { getAnimals } from 'utils/apiQueries/animal';
import { BackendAnimal } from 'types';

import { ISR_TIMEOUT } from 'utils/functions/getIsrTimeout';

export interface Props {
  head: HeadProps;
  animals: BackendAnimal[];
}

export const getStaticProps: GetStaticProps = async () => {
  const head: HeadProps = {
    description: 'High-low card game',
    ogImageSrc:
      'https://res.cloudinary.com/dpv0ukspz/image/upload/v1637971809/ogimage-100_ha9nmg.jpg',
    ogType: 'website',
    title: 'Save the animals | Game',
  };

  return {
    props: {
      head,
    description: 'Species list',
    ogImageSrc:
      'https://res.cloudinary.com/dpv0ukspz/image/upload/v1637971809/ogimage-100_ha9nmg.jpg',
    ogType: 'website',
    title: 'Save the animals | Species list',
  };

  const animals = await getAnimals();

  return {
    props: {
      head,
      animals: animals.data,
    },
    revalidate: ISR_TIMEOUT,
  };
};
