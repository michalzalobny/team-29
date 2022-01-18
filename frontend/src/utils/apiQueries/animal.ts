import * as yup from 'yup';

import axios from 'utils/axiosInstance';

export const animalsCategories = {
  LEAST_CONCERN: 'LEAST_CONCERN',
  NEAR_THREATENED: 'NEAR_THREATENED',
  VULNERABLE: 'VULNERABLE',
  ENDANGERED: 'ENDANGERED',
  CRITICALLY_ENDANGERED: 'CRITICALLY_ENDANGERED',
  EXTINCT_IN_WILD: 'EXTINCT_IN_WILD',
  EXTINCT: 'EXTINCT',
};

export const animalsCategoriesNormal = {
  LEAST_CONCERN: 'Least concern',
  NEAR_THREATENED: 'Near threatened',
  VULNERABLE: 'Vulnerable',
  ENDANGERED: 'Endangered',
  CRITICALLY_ENDANGERED: 'Critically endangered',
  EXTINCT_IN_WILD: 'Extinct in wild',
  EXTINCT: 'Extinct',
};

export const yupAddAnimalSchema = yup.object().shape({
  name: yup.string().required(),
  scientific_name: yup.string().required(),
  description: yup.string().required(),
  category: yup
    .string()
    .required()
    .oneOf([
      animalsCategories.LEAST_CONCERN,
      animalsCategories.NEAR_THREATENED,
      animalsCategories.VULNERABLE,
      animalsCategories.ENDANGERED,
      animalsCategories.CRITICALLY_ENDANGERED,
      animalsCategories.EXTINCT_IN_WILD,
      animalsCategories.EXTINCT,
    ]),
  population: yup.number().required(),
});

interface AddAnimalPOST {
  name: string;
  scientific_name: string;
  description: string;
  category: string;
  population: number;
}

export const addAnimalPOST = (data: AddAnimalPOST, token: unknown) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return axios.post('animals', data, config);
};

export const getAnimals = () => {
  return axios.get('animals');
};

interface DeleteAnimal {
  token: unknown;
  animalId: number;
}

export const deleteAnimal = ({ token, animalId }: DeleteAnimal) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios.delete(`animals/${animalId}`, config);
};

export const getUserAnimals = () => {
  return axios.get('users/me/animals');
};

export const addUserAnimal = (animalId: number) => {
  return axios.patch('users/me/animals');
};
