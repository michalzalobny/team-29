import { useQuery } from 'react-query';
import { getUsers } from 'utils/apiQueries/user';
import { addUserAnimal, getAnimals, getUserAnimals } from 'utils/apiQueries/animal';

export const useGetUsers = (token: string) => useQuery(['users'], () => getUsers(token));
export const useGetAnimals = () => useQuery(['animals'], () => getAnimals());

export const useGetUserAnimals = () => useQuery(['animals'], () => getUserAnimals);

export const useAddUserAnimal = () => useQuery(['animals'], () => addUserAnimal);

export const useGetUsersScores = () => useQuery(['usersScores'], () => getUsersScores());
