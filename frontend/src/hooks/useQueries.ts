import { useQuery } from 'react-query';
import { getUsers, getUsersScores } from 'utils/apiQueries/user';
import { getAnimals } from 'utils/apiQueries/animal';

export const useGetUsers = (token: string) => useQuery(['users'], () => getUsers(token));
export const useGetAnimals = () => useQuery(['animals'], () => getAnimals());
export const useGetUsersScores = () => useQuery(['usersScores'], () => getUsersScores());
