import { useQuery } from 'react-query';
import { getUsers } from 'utils/apiQueries/user';

export const useGetUsers = (token: string) => useQuery(['users'], () => getUsers(token));
