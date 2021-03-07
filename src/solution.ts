import axios from 'axios'
import { AOJ_URL } from './constants'

interface Solution {
  judgeId: number,
  userId: string,
  problemId: string,
  language: string,
  version: string,
  submissionDate: number,
  judgeDate: number,
  cpuTime: number,
  memory: number,
  codeSize: number,
  server: number,
  policy: string,
  rating: number,
  review: number,
}

type Solutions = Array<Solution>

export const all = async (page: number, size: number) => {
  const params = `page=${page}&size=${size}`;
  const url = `${AOJ_URL}/solutions?${params}`;
  const response = await axios.get<Solutions>(url);
  return response;
}

export const getByUserId = async (user_id: string, page: number, size: number) => {
  const params = `page=${page}&size=${size}`;
  const url = `${AOJ_URL}/solutions/users/${user_id}?${params}`;
  const response = await axios.get<Solutions>(url);
  return response;
}

export const getByProblemId = async (problem_id: string, page: number, size: number) => {
  const params = `page=${page}&size=${size}`;
  const url = `${AOJ_URL}/solutions/problems/${problem_id}?${params}`;
  const response = await axios.get<Solutions>(url);
  return response;
}

export const getByUserIdAndLang = async (
  user_id: string, 
  lang: string, 
  page: number, 
  size: number
) => {
  const params = `page=${page}&size=${size}`;
  const url = `${AOJ_URL}/solutions/users/${user_id}/lang/${lang}?${params}`;
  const response = await axios.get<Solutions>(url);
  return response;
}

export const getByUserIdAndProblemId = async (
  user_id: string, 
  problem_id: string,
) => {
  const url = `${AOJ_URL}/solutions/users/${user_id}/problems/${problem_id}`;
  const response = await axios.get<Solutions>(url);
  return response;
}

export const getByProblemIdAndLang= async (
  problem_id: string,
  lang: string, 
  page: number, 
  size: number
) => {
  const params = `page=${page}&size=${size}`;
  const url = `${AOJ_URL}/solutions/problems/${problem_id}/lang/${lang}?${params}`;
  const response = await axios.get<Solutions>(url);
  return response;
}