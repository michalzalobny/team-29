import * as yup from 'yup';

import axios from 'utils/axiosInstance';

export const animalsCategories = {
  LEAST_CONCERN: 'least_concern',
  NEAR_THREATENED: 'near_threatened',
  VULNERABLE: 'vulnerable',
  ENDANGERED: 'endangered',
  CRITICALLY_ENDANGERED: 'critic,ally_endangered',
  EXTINCT_IN_WILD: 'extinct_in_wild',
  EXTINCT: 'extinct',
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

export const addAnimalPOST = (data: AddAnimalPOST) => {
  return axios.post('animals', data);
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
