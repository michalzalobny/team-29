import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://fast-api-tanimals.herokuapp.com/',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Cache-Control': 'no-cache',
  },
});

export default instance;
