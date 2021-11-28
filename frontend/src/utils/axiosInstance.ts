import axios from 'axios';

const instance = axios.create({
  baseURL: `www.pythonapi.com/api`,
  headers: {
    'Cache-Control': 'no-cache',
  },
});

export default instance;
