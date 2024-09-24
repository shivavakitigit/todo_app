import axios from 'axios';
import { getToken } from './authService';

const API_URL = 'http://localhost:5000/profile';

export const getProfile = () => {
  return axios.get(API_URL, {
    headers: { Authorization: getToken() },
  });
};

export const updateProfile = (profileData) => {
  return axios.put(API_URL, profileData, {
    headers: { Authorization: getToken() },
  });
};
