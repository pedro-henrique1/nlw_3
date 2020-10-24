import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.88.20:19000'
});

export default api;
