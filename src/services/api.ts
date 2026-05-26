import axios from "axios";

export const api = axios.create({
  baseURL: "https://tcc-backend-bp8z.onrender.com/"
});

// Interceptor para incluir o token em todas as requisições
api.interceptors.request.use((config) => {
  const token =  localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
})