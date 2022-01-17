import * as yup from 'yup';
import URLSearchParams from '@ungap/url-search-params';

import axios from 'utils/axiosInstance';

export const yupSignInSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().min(8).max(16).required(),
});

export const yupSignUpSchema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(16).required(),
});

interface SignInPOST {
  username: string;
  password: string;
}

interface SignUpPOST {
  username: string;
  email: string;
  password: string;
}

export const signInPOST = ({ username, password }: SignInPOST) => {
  const params = new URLSearchParams();
  params.append('username', username);
  params.append('password', password);
  return axios.post('auth/login', params);
};

export const signUpPOST = ({ username, email, password }: SignUpPOST) => {
  return axios.post('auth/register', {
    email,
    password,
    username,
  });
};

export const getUsers = (token: string) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios.get('users', config);
};

interface DeleteUser {
  token: unknown;
  userId: number;
}

export const deleteUser = ({ token, userId }: DeleteUser) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios.delete(`users/${userId}`, config);
};

interface SaveUserScore {
  token: unknown;
  score: number;
}

export const saveUserScore = ({ token, score }: SaveUserScore) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios.post(`users/me/games`, { score }, config);
};
