import axios from 'axios'
import { AOJ_URL } from './constants'

export const login = async (user_id: string, password: string) => {
  const data = {
    id: user_id,
    password: password,
  };
  const response = await axios.post(`${AOJ_URL}/session`, data);
  return response;
}

export const session = async () => {
  const response = await axios.get(`${AOJ_URL}/self`);
  return response;
}

export const logout = async () => {
  const response = await axios.get(`${AOJ_URL}/session`);
  return response;
}