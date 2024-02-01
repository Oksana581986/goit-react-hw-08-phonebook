import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setAuthHeader = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
};

export const signupUser = async ({ name, email, password }) => {
  const response = await instance.post('/users/signup', {
    name,
    email,
    password,
  });
  return response;
};

export const loginUser = async ({ email, password }) => {
  const response = await instance.post('/users/login', {
    email,
    password,
  });
  return response;
};

export const logoutUser = async () => {
  const response = await instance.post('/users/logout');
  return response;
};

export const getCurrentUser = async () => {
  const response = await instance.get('/users/current');
  return response;
};

export const fetchAllContacts = async () => {
  const response = await instance.get('/contacts');
  return response;
};

export const addContactData = async ({ name, number }) => {
  const response = await instance.post('/contacts', { name, number });
  return response;
};

export const deleteContactData = async ({ contactId }) => {
  const response = await instance.delete(`/contacts/${contactId}`);
  return response;
};