import axios from 'axios';
import { getToken } from './authService';

const API_URL = 'http://localhost:5000/tasks';

export const getTasks = () => {
  return axios.get(API_URL, {
    headers: { Authorization: getToken() },
  });
};

export const createTask = (title) => {
  return axios.post(API_URL, { title }, {
    headers: { Authorization: getToken() },
  });
};

export const updateTaskStatus = (taskId, status) => {
  return axios.put(`${API_URL}/${taskId}`, { status }, {
    headers: { Authorization: getToken() },
  });
};

export const deleteTask = (taskId) => {
  return axios.delete(`${API_URL}/${taskId}`, {
    headers: { Authorization: getToken() },
  });
};
