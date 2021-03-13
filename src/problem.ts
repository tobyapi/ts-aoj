import axios from 'axios'
import { JUDGE_API_URL } from './constants'

export const all = async (page: number, size: number) => {
  const params = `page=${page}&size=${size}`
  const url = `${JUDGE_API_URL}/problems?${params}`
  const response = await axios.get(url)
  return response
}

export const getByUserId = async (
  user_id: string,
  page: number,
  size: number,
) => {
  const params = `page=${page}&size=${size}`
  const url = `${JUDGE_API_URL}/problems/users/${user_id}?${params}`
  const response = await axios.get(url)
  return response
}

export const filters = async () => {
  const url = `${JUDGE_API_URL}/problems/filters`
  const response = await axios.get(url)
  return response
}

export const getByVolume = async (volume: string) => {
  const url = `${JUDGE_API_URL}/problems/volumes/${volume}`
  const response = await axios.get(url)
  return response
}

export const getByLargeCl = async (large_cl: string) => {
  const url = `${JUDGE_API_URL}/problems/cl/${large_cl}`
  const response = await axios.get(url)
  return response
}

export const getByLargeClAndMiddleCl = async (
  large_cl: string,
  middle_cl: string,
) => {
  const url = `${JUDGE_API_URL}/problems/cl/${large_cl}/${middle_cl}`
  const response = await axios.get(url)
  return response
}

export const getByTitle = async (title: string) => {
  const url = `${JUDGE_API_URL}/problems/titles/${title}`
  const response = await axios.get(url)
  return response
}

export const getByTag = async (tag: string) => {
  const url = `${JUDGE_API_URL}/problems/tags/${tag}`
  const response = await axios.get(url)
  return response
}

export const getByCategiry = async (category_id: string) => {
  const url = `${JUDGE_API_URL}/problems/categories/${category_id}`
  const response = await axios.get(url)
  return response
}
