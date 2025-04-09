import axios from 'axios'

const api = axios.create({
  baseURL:"https://huellacreativa-database.onrender.com",
});

export default api;