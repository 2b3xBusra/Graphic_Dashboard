import axios from 'axios';

const api = axios.create({
  baseURL: 'https://13.48.132.117/app/wz-home',
  headers: {
    'Content-Type': 'application/json',
    // Gerekirse auth token ekleyin
  }
});

export default api;