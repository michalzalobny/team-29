import * as yup from 'yup';

import axios from 'utils/axiosInstance';

export const yupSignInSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(16).required(),
});

export const yupSignUpSchema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(16).required(),
});

interface SignInPOST {
  email: string;
  password: string;
}

interface SignUpPOST {
  username: string;
  email: string;
  password: string;
}

export const SignInPOST = ({ email, password }: SignInPOST) => {
  return axios.post('auth/login', {
    email,
    password,
  });
};

export const SignUpPOST = ({ username, email, password }: SignUpPOST) => {
  return axios.post('auth/register', {
    email,
    password,
    username,
  });
};
