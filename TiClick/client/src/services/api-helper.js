import axios from 'axios';

const api = axios.create({
  baseURL: 'https://immense-dusk-28762.herokuapp.com'
});

export default api;
