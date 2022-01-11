import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://fast-api-tanimals.herokuapp.com/',
  headers: {
    'Cache-Control': 'no-cache',
  },
});

export default instance;
