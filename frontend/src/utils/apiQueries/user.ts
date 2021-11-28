import * as yup from 'yup';

import axios from 'utils/axiosInstance';

export const yupLoginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(16).required(),
});

interface SignInPOST {
  email: string;
  password: string;
}

export const SignInPOST = ({ email, password }: SignInPOST) => {
  return axios.post('/users/auth/local', {
    email,
    password,
  });
};
