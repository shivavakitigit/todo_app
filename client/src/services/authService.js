import axios from 'axios';

const API_URL = 'http://localhost:5000/auth';

export const signup = (name, email, password) => {
  return axios.post(`${API_URL}/signup`, { name, email, password });
};

export const login = (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password });
};

export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const logout = () => {
  localStorage.removeItem('token');
};
