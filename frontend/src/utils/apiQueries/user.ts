import axios from 'utils/axiosInstance';

interface PostLogin {
  email: string;
  password: string;
}

export const postLogin = async (data: PostLogin) => {
  try {
    const response = await axios.post('/users/auth/local', {
      email: data.email,
      password: data.password,
    });
    return response;
  } catch (error) {
    return error;
  }
};
