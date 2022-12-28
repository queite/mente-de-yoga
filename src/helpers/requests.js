import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const sendData = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

// export const deleteUser = async (endpoint) => {
//   await api.delete(endpoint);
// };

export default api;
