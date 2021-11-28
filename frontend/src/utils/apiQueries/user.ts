import * as yup from 'yup';

import axios from 'utils/axiosInstance';

export const yupSignInSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(16).required(),
});

export const yupSignUpSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(16).required(),
});

interface SignInPOST {
  email: string;
  password: string;
}

interface SignUpPOST {
  name: string;
  email: string;
  password: string;
}

export const SignInPOST = ({ email, password }: SignInPOST) => {
  return axios.post('/users/auth/local', {
    email,
    password,
  });
};

export const SignUpPOST = ({ name, email, password }: SignUpPOST) => {
  return axios.post('/users/auth/local', {
    email,
    password,
    name,
  });
};
