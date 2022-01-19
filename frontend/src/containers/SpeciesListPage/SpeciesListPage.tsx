import React, { useCallback, useEffect, useState } from 'react';

import { Head } from 'seo/Head/Head';
import { AnimalInfoTile } from 'components/AnimalInfoTile/AnimalInfoTile';
import { BackendAnimal } from 'types';

import { Props } from './data';
import * as S from './SpeciesListPage.styles';

const normalizeText = (str: string) => str.replace(/\s+/g, '').toLowerCase();

export default function SpeciesListPage(props: Props) {
  const { animals, head } = props;
  const [filteredAnimals, setFilteredAnimals] = useState<BackendAnimal[]>([]);
  const [value, setValue] = useState('');

  const handleChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  //Filter animals if value changes
  useEffect(() => {
    const x = animals.filter(animal => {
      const animalNameNormalized = normalizeText(animal.name);
      return animalNameNormalized.includes(normalizeText(value));
    });
    setFilteredAnimals(x);
  }, [animals, value]);

  return (
    <>
      <Head {...head} />
      <S.Wrapper>
        <S.Title>List of animals</S.Title>
        <S.InputWrapper>
          <S.FilterInput placeholder="Filter animals" value={value} onChange={handleChange} />
        </S.InputWrapper>

        <S.TilesWrapper>
          {filteredAnimals.map(animal => (
            <AnimalInfoTile animal={animal} key={animal.id} />
          ))}
        </S.TilesWrapper>
      </S.Wrapper>
    </>
  );
}
