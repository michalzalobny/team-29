import axios from 'axios';

const instance = axios.create({
  baseURL: `https://www.google.com/`,
  headers: {
    'Cache-Control': 'no-cache',
  },
});

export default instance;
